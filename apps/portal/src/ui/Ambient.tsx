import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useServices } from '../core/services';
import { useRouter } from '../router';
import { useReducedMotion } from './a11y';

/**
 * The live atmosphere: a slow, pearlescent liquid field drawn by one small fragment shader on a
 * low-resolution canvas behind the whole page. It is decoration only (aria-hidden), and it is the
 * first thing to give way:
 *
 *  - on module, lesson, check and challenge pages the GPU belongs to the scene, so the field freezes;
 *  - under reduced motion, or on the lowest quality tier, it draws one still frame and stops;
 *  - without WebGL the canvas is removed and the CSS aurora in base.css is the background.
 *
 * It never decides what is readable: the shader's light is held low (see the ceiling in the source)
 * and every block of text sits on its own panel or on the dark ground.
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
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.02 + vec2(17.3, 9.1); a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  float t = uTime * 0.045;
  vec2 w = p * 1.55;
  w.y += uScroll * 0.00045;
  vec2 q = vec2(fbm(w + vec2(0.0, t)), fbm(w + vec2(5.2, 1.3) - t));
  float f = fbm(w + 2.4 * q + vec2(1.7, 9.2) + t * 0.6);
  // The pointer lifts the field a little where it is.
  vec2 m = (uMouse - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  float md = length(p - m);
  f += 0.1 * exp(-md * md * 7.0);
  float ridge = pow(1.0 - abs(2.0 * f - 1.0), 5.0);
  float body = smoothstep(0.25, 0.85, f);
  vec3 aqua = vec3(0.36, 0.95, 1.0);
  vec3 violet = vec3(0.70, 0.65, 1.0);
  vec3 orchid = vec3(1.0, 0.45, 0.86);
  vec3 acid = vec3(0.78, 1.0, 0.29);
  vec3 pal = mix(mix(aqua, violet, smoothstep(0.2, 0.5, f)), mix(orchid, acid, smoothstep(0.62, 0.95, f)), smoothstep(0.45, 0.7, f));
  vec3 hue = 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.33, 0.67) * 0.55 + f * 1.15 + q.x * 0.6 + vec3(0.52, 0.14, 0.8)));
  // The ground is the page's own ink. The light added to it has a ceiling of about 0.2 per channel.
  vec3 col = vec3(0.024, 0.020, 0.102);
  col += pal * body * 0.075;
  col += mix(pal, hue, 0.35) * ridge * 0.13;
  col *= mix(0.55, 1.0, smoothstep(1.25, 0.25, length(uv - 0.5) * 1.4));
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

const SCALE = 0.42; // drawing pixels per CSS pixel: the field is soft, so it is drawn small and scaled up
const STILL_TIME = 14; // the frame drawn when the field does not move

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
        // Thirty frames a second is plenty for a field this slow.
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
