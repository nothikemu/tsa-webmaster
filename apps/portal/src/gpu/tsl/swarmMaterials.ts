/* eslint-disable @typescript-eslint/no-explicit-any -- TSL builds shader graphs with a chained,
   dynamically typed node API; the graph is created once at startup, never per frame. */
import { AdditiveBlending, InstancedBufferAttribute, LineBasicNodeMaterial, SpriteNodeMaterial, Vector3, type BufferAttribute } from 'three/webgpu';
import { attribute, distance, float, instancedBufferAttribute, length, mix, positionLocal, smoothstep, uniform, uv, vec3 } from 'three/tsl';

/**
 * TSL (node) twins of particle.*.glsl and link.*.glsl, used when the renderer is WebGPU.
 * Positions come from a CPU array, because the WebGPU compute backend reads back to the CPU.
 */
export interface SwarmTsl {
  pointMaterial: SpriteNodeMaterial;
  linkMaterial: LineBasicNodeMaterial;
  positions: InstancedBufferAttribute;
  uniforms: { pointer: Vector3; radius: { value: number }; presence: { value: number }; size: { value: number }; maxLen: { value: number }; opacity: { value: number } };
}

export function createSwarmTsl(seed: Float32Array, rest: Float32Array, initial: Float32Array, radius: number, maxLen: number): SwarmTsl {
  const positions = new InstancedBufferAttribute(initial.slice(), 3);
  positions.setUsage(35048); // DynamicDrawUsage
  const restAttr = new InstancedBufferAttribute(rest, 3);
  const seedAttr = new InstancedBufferAttribute(seed, 1);

  const uPointer = uniform(new Vector3());
  const uRadius = uniform(radius);
  const uPresence = uniform(0);
  const uSize = uniform(0.034);
  const uMaxLen = uniform(maxLen);
  const uOpacity = uniform(0.55);

  const blue = vec3(0.17, 0.84, 0.96);
  const violet = vec3(0.96, 0.94, 0.9);
  const cyan = vec3(1.0, 0.42, 0.12);

  // Points ------------------------------------------------------------------------------------
  const pos: any = instancedBufferAttribute(positions as unknown as BufferAttribute);
  const rst: any = instancedBufferAttribute(restAttr as unknown as BufferAttribute);
  const sd: any = instancedBufferAttribute(seedAttr as unknown as BufferAttribute);
  const disp: any = length(pos.sub(rst));
  const infl: any = uPresence.mul(float(1).sub(smoothstep(0, uRadius, length(pos.sub(uPointer)))));
  const t: any = rst.x.add(2.4).div(4.8).clamp(0, 1);
  const tint: any = mix(mix(blue, violet, t), cyan, infl.add(disp.mul(1.4)).clamp(0, 1));
  const sprite = new SpriteNodeMaterial();
  sprite.positionNode = pos;
  sprite.scaleNode = uSize.mul(float(0.7).add(sd.mul(0.6)).add(infl.mul(1.1)).add(disp.mul(1.6)));
  sprite.colorNode = tint;
  const soft: any = smoothstep(0.5, 0.0, length(uv().sub(0.5)));
  sprite.opacityNode = soft
    .mul(soft)
    .mul(float(0.3).add(sd.mul(0.35)).add(infl.mul(0.45)).add(disp.clamp(0, 0.5).mul(0.4)));
  sprite.transparent = true;
  sprite.depthWrite = false;
  sprite.blending = AdditiveBlending;

  // Links -------------------------------------------------------------------------------------
  const other: any = attribute('aOther', 'vec3');
  const base: any = attribute('aBase', 'float');
  const at: any = attribute('aT', 'float');
  const own: any = positionLocal;
  const len: any = distance(own, other);
  const fall: any = float(1).sub(smoothstep(uMaxLen.mul(0.4), uMaxLen, len));
  const linkInfl: any = uPresence.mul(float(1).sub(smoothstep(0, uRadius, length(own.sub(uPointer)))));
  const line = new LineBasicNodeMaterial();
  line.colorNode = mix(mix(blue, violet, at), cyan, linkInfl.clamp(0, 1));
  line.opacityNode = base.mul(fall).mul(uOpacity).mul(float(1).add(linkInfl.mul(1.6)));
  line.transparent = true;
  line.depthWrite = false;
  line.blending = AdditiveBlending;

  return {
    pointMaterial: sprite,
    linkMaterial: line,
    positions,
    uniforms: { pointer: uPointer.value as Vector3, radius: uRadius as any, presence: uPresence as any, size: uSize as any, maxLen: uMaxLen as any, opacity: uOpacity as any },
  };
}
