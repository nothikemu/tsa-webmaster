import type * as PostProcessing from 'postprocessing';
import type { BlendFunction as BlendFn, EffectComposer as Composer } from 'postprocessing';
import type { Camera, Scene, WebGLRenderer } from 'three';
import type { WebGPURenderer } from 'three/webgpu';
import type { Caps, RendererPreference } from '../core/caps';
import type { PostLevel } from '../core/quality';

export type RendererKind = 'webgpu' | 'webgl2';

/**
 * The one module that decides which renderer a scene gets. Scenes ask for a handle and branch on
 * `kind`: GLSL ShaderMaterials for 'webgl2', TSL node materials for 'webgpu'.
 */
export interface RenderHandle {
  readonly kind: RendererKind;
  readonly canvas: HTMLCanvasElement;
  readonly webgl: WebGLRenderer | null;
  readonly webgpu: WebGPURenderer | null;
  setSize(width: number, height: number, dpr: number): void;
  /** Post-processing is available on the WebGL2 renderer only. */
  setPost(level: PostLevel): void;
  render(scene: Scene, camera: Camera, dt: number): void;
  onLost(callback: (reason: string) => void): void;
  dispose(): void;
}

export class NoRendererError extends Error {
  constructor() {
    super('Neither WebGPU nor WebGL2 is available');
    this.name = 'NoRendererError';
  }
}

export async function createRenderHandle(
  canvas: HTMLCanvasElement,
  caps: Caps,
  preference: RendererPreference,
  post: PostLevel,
): Promise<RenderHandle> {
  if (preference === 'none') throw new NoRendererError();
  const wantGpu = preference === 'webgpu' || (preference === 'auto' && caps.webgpu);
  if (wantGpu) {
    try {
      return await createWebGpuHandle(canvas);
    } catch (err) {
      // A failed WebGPU attempt can leave the canvas bound to the wrong context type, so the
      // caller must retry with a fresh canvas and preference "webgl2".
      if (preference === 'webgpu') throw err;
      throw new WebGpuUnavailableError(err);
    }
  }
  if (!caps.webgl2) throw new NoRendererError();
  return createWebGl2Handle(canvas, post);
}

/** Thrown when auto-selection tried WebGPU and failed; the caller retries on a new canvas. */
export class WebGpuUnavailableError extends Error {
  constructor(cause: unknown) {
    super('WebGPU renderer failed to start', { cause });
    this.name = 'WebGpuUnavailableError';
  }
}

async function createWebGpuHandle(canvas: HTMLCanvasElement): Promise<RenderHandle> {
  const mod = await import('three/webgpu');
  const renderer = new mod.WebGPURenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  await renderer.init();
  const backend = renderer.backend as { isWebGPUBackend?: boolean; device?: GPUDevice };
  if (backend.isWebGPUBackend !== true) {
    renderer.dispose();
    throw new Error('WebGPURenderer fell back to a non-WebGPU backend');
  }
  renderer.setClearColor(0x05040f, 1);
  let lostCb: ((reason: string) => void) | null = null;
  void backend.device?.lost.then((info) => lostCb?.(info.message || info.reason));
  return {
    kind: 'webgpu',
    canvas,
    webgl: null,
    webgpu: renderer,
    setSize(width, height, dpr) {
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
    },
    setPost() {
      /* Post-processing runs on the WebGL2 renderer only. */
    },
    render(scene, camera) {
      renderer.render(scene, camera);
    },
    onLost(cb) {
      lostCb = cb;
    },
    dispose() {
      renderer.dispose();
    },
  };
}

interface PostState {
  composer: Composer;
  level: PostLevel;
  camera: Camera;
  scene: Scene;
  renderPass: { mainScene: Scene; mainCamera: Camera };
}

async function createWebGl2Handle(canvas: HTMLCanvasElement, initialPost: PostLevel): Promise<RenderHandle> {
  const three = await import('three');
  const renderer = new three.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false,
  });
  renderer.setClearColor(0x05040f, 1);
  let post: PostLevel = initialPost;
  let size = { w: 1, h: 1 };
  let state: PostState | null = null;
  let building: Promise<void> | null = null;
  let pp: typeof PostProcessing | null = null;
  let lostCb: ((reason: string) => void) | null = null;

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    lostCb?.('WebGL context lost');
  });

  async function buildPost(scene: Scene, camera: Camera): Promise<void> {
    pp ??= await import('postprocessing');
    state?.composer.dispose();
    const composer = new pp.EffectComposer(renderer, { frameBufferType: three.HalfFloatType });
    const renderPass = new pp.RenderPass(scene, camera);
    composer.addPass(renderPass);
    const bloom = new pp.BloomEffect({ intensity: 0.5, luminanceThreshold: 0.22, luminanceSmoothing: 0.35, mipmapBlur: true });
    if (post === 'full') {
      const aberration = new pp.ChromaticAberrationEffect({
        offset: new three.Vector2(0.0007, 0.0009),
        radialModulation: true,
        modulationOffset: 0.35,
      });
      const grain = new pp.NoiseEffect({ premultiply: true, blendFunction: pp.BlendFunction.SCREEN as BlendFn });
      grain.blendMode.opacity.value = 0.03;
      composer.addPass(new pp.EffectPass(camera, bloom, aberration, grain));
    } else {
      composer.addPass(new pp.EffectPass(camera, bloom));
    }
    composer.setSize(size.w, size.h, false);
    state = { composer, level: post, camera, scene, renderPass: renderPass as unknown as PostState['renderPass'] };
  }

  return {
    kind: 'webgl2',
    canvas,
    webgl: renderer,
    webgpu: null,
    setSize(width, height, dpr) {
      size = { w: width, h: height };
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      state?.composer.setSize(width, height, false);
    },
    setPost(level) {
      post = level;
    },
    render(scene, camera, dt) {
      if (post === 'none') {
        renderer.render(scene, camera);
        return;
      }
      if (!state || state.level !== post || state.camera !== camera) {
        // Build the composer in the background; keep drawing directly until it is ready.
        building ??= buildPost(scene, camera)
          .catch(() => {
            post = 'none';
          })
          .finally(() => {
            building = null;
          });
        renderer.render(scene, camera);
        return;
      }
      state.renderPass.mainScene = scene;
      state.renderPass.mainCamera = camera;
      state.composer.render(dt);
    },
    onLost(cb) {
      lostCb = cb;
    },
    dispose() {
      state?.composer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
