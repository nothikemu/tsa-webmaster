import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useServices } from '../core/services';
import { useRouter } from '../router';
import { useReducedMotion } from './a11y';

/**
 * The live atmosphere: the observatory's sky, drawn by one small fragment shader on a low-resolution
 * canvas behind the whole page: stars in three depths, a warm horizon, a slow nebula, shafts of light
 * and gold motes rising through the dark. It is decoration only (aria-hidden), and it is the
 * first thing to give way:
 *
 *  - on module, lesson, check and challenge pages the GPU belongs to the scene, so the field freezes;
 *  - under reduced motion, or on the lowest quality tier, it draws one still frame and stops;
 *  - without WebGL the canvas is removed and the CSS aurora in base.css is the background.
 *
 * It never decides what is readable: the sky is held dark, the stars are single points, and every
 * block of text sits on its own plate or on the dark ground.
 */

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;

float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(13.7, 7.9); a *= 0.5; }
  return v;
}
// One layer of stars: a sparse grid, each cell holding at most one point that twinkles.
vec3 stars(vec2 uv, float scale, float t, float seed){
  vec2 g = uv * scale; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
  float h = hash(id + seed);
  vec2 pos = (vec2(hash(id + seed + 1.7), hash(id + seed + 3.1)) - 0.5) * 0.62;
  float d = length(f - pos);
  float tw = 0.62 + 0.38 * sin(t * (0.8 + h * 2.6) + h * 40.0);
  float s = smoothstep(0.05 + 0.04 * h, 0.0, d) * step(0.78, h) * tw;
  vec3 tint = mix(vec3(0.72, 0.86, 1.0), vec3(1.0, 0.88, 0.66), hash(id + 9.0));
  return tint * s;
}
// Rising motes: warm sparks that drift up through the dark and fade.
float motes(vec2 uv, float scale, float speed, float t, float seed){
  vec2 g = vec2(uv.x * scale, uv.y * scale * 0.55 - t * speed);
  vec2 id = floor(g); vec2 f = fract(g);
  float h = hash(id + seed);
  vec2 pos = vec2(0.5 + 0.32 * sin(t * 0.4 + h * 30.0), 0.5 + 0.3 * sin(t * 0.3 + h * 17.0));
  float d = length((f - pos) * vec2(1.0, 1.4));
  return smoothstep(0.075, 0.0, d) * step(0.82, h) * (0.55 + 0.45 * sin(t * 1.6 + h * 50.0)) * smoothstep(0.0, 0.25, uv.y);
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 p = vec2((uv.x - 0.5) * asp, uv.y - 0.5);
  float t = uTime;
  vec2 par = vec2((uMouse.x - 0.5) * 0.02, uScroll * 0.00006);

  // The sky: deep at the zenith, a cold blue through the middle, a warm glow at the horizon.
  vec3 col = mix(vec3(0.030, 0.052, 0.125), vec3(0.010, 0.014, 0.040), smoothstep(0.1, 1.0, uv.y));
  col += vec3(0.20, 0.085, 0.03) * pow(1.0 - uv.y, 5.0) * 0.55;
  col += vec3(0.05, 0.075, 0.2) * exp(-pow((uv.x - 0.5) * 1.6, 2.0) - pow((uv.y - 1.05) * 2.2, 2.0)) * 1.0;

  // Nebula: slow clouds of indigo and teal, strongest toward the top.
  vec2 q = p * 1.25 + vec2(t * 0.004, -t * 0.002) + par * 40.0;
  float n1 = fbm(q + fbm(q * 1.6 + 3.0) * 0.9);
  float n2 = fbm(q * 1.4 + vec2(9.0, 4.0));
  col += vec3(0.075, 0.07, 0.24) * smoothstep(0.38, 0.9, n1) * 0.55 * (0.35 + 0.65 * uv.y);
  col += vec3(0.02, 0.17, 0.16) * smoothstep(0.52, 0.95, n2) * 0.4 * (0.2 + 0.8 * uv.y);

  // Stars, in three depths that drift at different rates as the page scrolls.
  vec2 su = vec2(uv.x * asp, uv.y);
  col += stars(su + par * 6.0, 14.0, t, 1.0) * 0.55;
  col += stars(su + par * 12.0 + 3.7, 26.0, t, 7.0) * 0.5;
  col += stars(su + par * 22.0 + 8.1, 46.0, t, 13.0) * 0.4;

  // Light shafts falling from above the page, a warm gold at a low intensity.
  vec2 o = vec2(0.5, 1.22);
  float ang = atan((uv.x - o.x) * asp, o.y - uv.y);
  float rays = pow(noise(vec2(ang * 11.0 + t * 0.03, 2.0)), 2.6) * pow(noise(vec2(ang * 27.0 - t * 0.02, 7.0)), 1.4);
  col += vec3(1.0, 0.8, 0.5) * rays * 0.085 * smoothstep(0.1, 0.9, uv.y) * smoothstep(1.4, 0.2, length((uv - o) * vec2(asp, 1.0)));

  // Motes: warm sparks rising through the dark.
  vec3 gold = vec3(1.0, 0.78, 0.4);
  col += gold * motes(su, 9.0, 0.045, t, 21.0) * 0.55;
  col += gold * motes(su + 0.31, 17.0, 0.07, t, 31.0) * 0.38;

  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

const SCALE = 0.55; // drawing pixels per CSS pixel: the field is soft, so it is drawn small and scaled up
const STILL_TIME = 21; // the frame drawn when the field does not move

interface Field {
  draw(time: number): void;
  resize(): void;
  setMouse(x: number, y: number): void;
  dispose(): void;
}

function createField(canvas: HTMLCanvasElement, onLost: () => void): Field | null {
  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
    preserveDrawingBuffer: false,
  });
  if (!gl) return null;
  const compile = (type: number, src: string): WebGLShader | null => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  const prog = gl.createProgram();
  if (!vs || !fs || !prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uRes = gl.getUniformLocation(prog, 'uRes');
  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uMouse = gl.getUniformLocation(prog, 'uMouse');
  const uScroll = gl.getUniformLocation(prog, 'uScroll');

  let mx = 0.5;
  let my = 0.5;
  let tx = 0.5;
  let ty = 0.5;
  const lost = (e: Event): void => {
    e.preventDefault();
    onLost();
  };
  canvas.addEventListener('webglcontextlost', lost);

  const field: Field = {
    resize() {
      const w = Math.max(2, Math.round(innerWidth * SCALE));
      const h = Math.max(2, Math.round(innerHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
    },
    setMouse(x, y) {
      tx = x;
      ty = 1 - y;
    },
    draw(time) {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uScroll, scrollY);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {
      canvas.removeEventListener('webglcontextlost', lost);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    },
  };
  field.resize();
  return field;
}

export function Ambient(): ReactNode {
  const { loop, quality } = useServices();
  const { route } = useRouter();
  const reduced = useReducedMotion();
  const tier = useSyncExternalStore(quality.subscribe, quality.getSnapshot);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fieldRef = useRef<Field | null>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  // The GPU belongs to the scene on pages that have one.
  const sceneRoute =
    route.name === 'module' ||
    route.name === 'lesson' ||
    route.name === 'quiz' ||
    route.name === 'challenge';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const field = createField(canvas, () => setFailed(true));
    if (!field) {
      setFailed(true);
      return undefined;
    }
    fieldRef.current = field;
    field.draw(STILL_TIME);
    setReady(true);
    const onResize = (): void => {
      field.resize();
      field.draw(STILL_TIME);
    };
    addEventListener('resize', onResize);
    return () => {
      removeEventListener('resize', onResize);
      field.dispose();
      fieldRef.current = null;
    };
  }, []);

  // Moving or still: decided by the page, the motion preference and the quality tier.
  useEffect(() => {
    const field = fieldRef.current;
    if (!field || !ready) return undefined;
    const still = (): void => {
      field.resize();
      field.draw(STILL_TIME);
    };
    if (reduced || sceneRoute || tier.id === 0) {
      still();
      return undefined;
    }
    const onPointer = (e: PointerEvent): void => {
      if (e.pointerType === 'mouse')
        field.setMouse(e.clientX / innerWidth, e.clientY / innerHeight);
    };
    addEventListener('pointermove', onPointer, { passive: true });
    // Marked heavy so the quality governor sees its frame cost: on a device that cannot keep up it
    // steps down to tier 0, where the field holds still.
    const sub = loop.subscribe(
      (f) => {
        // Thirty frames a second is plenty for a sky this slow.
        if (f.frame % 2 === 0) field.draw(STILL_TIME + f.time);
      },
      { heavy: true },
    );
    return () => {
      removeEventListener('pointermove', onPointer);
      sub.dispose();
    };
  }, [ready, reduced, sceneRoute, loop, tier.id]);

  if (failed) return null;
  return (
    <canvas
      ref={canvasRef}
      className="ambient"
      data-ready={ready}
      data-live={ready && !reduced && !sceneRoute}
      aria-hidden="true"
    />
  );
}
