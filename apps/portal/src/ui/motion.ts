import type * as Gsap from 'gsap';
import type * as ScrollTriggerModule from 'gsap/ScrollTrigger';
import type * as LenisModule from 'lenis';
import type { MasterLoop } from '../core/loop';

/** Shared scroll progress for canvases that react to the pinned hero (0 at the top, 1 when it ends). */
export const scrollState = { hero: 0 };

/**
 * Scroll choreography for the home page: Lenis smooth scrolling and GSAP ScrollTrigger, both
 * driven by the portal's master frame loop (GSAP's own ticker is put to sleep) so there is still
 * exactly one requestAnimationFrame loop. Transitions themselves are CSS, on the --ease token.
 * Returns a cleanup. If anything fails to load, content simply stays visible.
 */
export async function startHomeMotion(loop: MasterLoop, hero: HTMLElement | null, root: HTMLElement | null): Promise<() => void> {
  // ScrollTrigger runs its own requestAnimationFrame loops. While the motion layer is alive, route
  // every such request through the master loop so the page keeps exactly one native loop. The real
  // functions are restored in the cleanup below.
  const nativeRaf = window.requestAnimationFrame;
  const nativeCaf = window.cancelAnimationFrame;
  window.requestAnimationFrame = (cb) => loop.requestFrame(cb);
  window.cancelAnimationFrame = (id) => loop.cancelFrame(id);
  const restoreRaf = (): void => {
    window.requestAnimationFrame = nativeRaf;
    window.cancelAnimationFrame = nativeCaf;
  };
  const load = (): Promise<[typeof Gsap, typeof ScrollTriggerModule, typeof LenisModule]> =>
    Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('lenis')]);
  let loaded: Awaited<ReturnType<typeof load>>;
  try {
    loaded = await load();
  } catch (err) {
    restoreRaf();
    throw err;
  }
  const [gsapMod, stMod, lenisMod] = loaded;
  const gsap = gsapMod.gsap;
  const ScrollTrigger = stMod.ScrollTrigger;
  const Lenis = lenisMod.default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  // GSAP re-reads requestAnimationFrame every time its ticker wakes, so sleeping once is not
  // enough: disable waking so the master loop (gsap.updateRoot below) is the only driver.
  const ticker = gsap.ticker as unknown as { sleep(): void; wake: () => void };
  ticker.sleep();
  ticker.wake = () => undefined;

  const lenis = new Lenis({ autoRaf: false, lerp: 0.11, smoothWheel: true, anchors: true });
  lenis.on('scroll', () => ScrollTrigger.update());

  const sub = loop.subscribe((f) => {
    lenis.raf(performance.now());
    gsap.updateRoot(f.time);
  });

  const triggers: Array<{ kill(): void }> = [];
  if (hero) {
    triggers.push(
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          scrollState.hero = self.progress;
          hero.style.setProperty('--hero-p', self.progress.toFixed(4));
        },
      }),
    );
  }
  if (root) {
    document.documentElement.classList.add('js-motion');
    root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => el.classList.add('in'),
        }),
      );
    });
  }
  ScrollTrigger.refresh();

  return () => {
    for (const t of triggers) t.kill();
    sub.dispose();
    lenis.destroy();
    scrollState.hero = 0;
    restoreRaf();
    document.documentElement.classList.remove('js-motion');
    hero?.style.removeProperty('--hero-p');
  };
}
