import { useEffect, useRef, type ReactNode } from 'react';
import { HOME } from '../content/site';
import { t } from '../core/assets';
import { Spring } from '../core/spring';
import { useServices } from '../core/services';
import { Link } from '../router';
import { Eyebrow } from './Chrome';
import { useReducedMotion } from './a11y';
import { scrollState } from './motion';

const LAYERS = [6, 9, 10, 9, 5] as const;

/**
 * A 2D hairline network that bleeds off the right edge of the hero. Layers light up in sequence as
 * the hero is scrolled, and a slow pulse travels through the links. Drawn from the master loop
 * and paused when off-screen.
 */
function HeroNetwork(): ReactNode {
  const { loop } = useServices();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return undefined;
    const px = new Spring(0, 6);
    const py = new Spring(0, 6);
    let w = 1;
    let h = 1;
    let dpr = 1;
    const size = (): void => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);
    const move = (e: PointerEvent): void => {
      px.target = (e.clientX / window.innerWidth - 0.5) * 24;
      py.target = (e.clientY / window.innerHeight - 0.5) * 16;
    };
    window.addEventListener('pointermove', move, { passive: true });

    const node = (l: number, i: number): [number, number] => {
      const n = LAYERS[l]!;
      const x = 0.1 + (l / (LAYERS.length - 1)) * 0.8;
      const y = 0.12 + ((i + 0.5) / n) * 0.76 + (l % 2 === 0 ? 0 : 0.01 * Math.sin(i * 2.1));
      return [x * w, y * h];
    };

    const sub = loop.subscribe(
      (f) => {
        px.step(f.dt);
        py.step(f.dt);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const p = reduced ? 1 : scrollState.hero;
        const t = reduced ? 0 : f.time;
        ctx.save();
        ctx.translate(px.value, py.value);
        for (let l = 0; l < LAYERS.length - 1; l++) {
          const act = Math.max(0, Math.min(1, p * 6 - l * 0.8 + 0.35));
          for (let i = 0; i < LAYERS[l]!; i++) {
            const [x1, y1] = node(l, i);
            for (let j = 0; j < LAYERS[l + 1]!; j++) {
              const [x2, y2] = node(l + 1, j);
              const pulse = 0.5 + 0.5 * Math.sin(t * 0.9 - l * 1.3 + i * 0.7 + j * 0.45);
              ctx.strokeStyle = `rgba(160,190,255,${(0.035 + 0.11 * pulse * act + 0.03 * act).toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
        for (let l = 0; l < LAYERS.length; l++) {
          const act = Math.max(0, Math.min(1, p * 6 - l * 0.8 + 0.5));
          for (let i = 0; i < LAYERS[l]!; i++) {
            const [x, y] = node(l, i);
            const glow = 0.5 + 0.5 * Math.sin(t * 1.1 + l + i * 0.9);
            ctx.fillStyle = `rgba(255,255,255,${(0.18 + 0.7 * act * (0.55 + 0.45 * glow)).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(x, y, 2.2 + act * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      },
      { element: canvas },
    );
    return () => {
      sub.dispose();
      ro.disconnect();
      window.removeEventListener('pointermove', move);
    };
  }, [loop, reduced]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

export const HeroSection = ({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }): ReactNode => (
  <section className="hero" ref={sectionRef} aria-labelledby="hero-h">
    <div className="hero-sticky">
      <HeroNetwork />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Eyebrow>{HOME.eyebrow}</Eyebrow>
          <h1 id="hero-h" className="hero-title">
            {HOME.headline.map((line) => (
              <span key={line} className="hero-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="lead hero-lead">{HOME.lead}</p>
          <div className="hero-actions">
            <Link to="/modules/foundations" className="btn btn-primary">
              {t('hero.start')}
            </Link>
            <Link to="/modules" className="link-arrow">
              {t('hero.all')}
            </Link>
          </div>
        </div>
        <dl className="hero-stats mono">
          {HOME.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd className="num">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="hero-scroll mono" aria-hidden="true">
        {t('hero.scroll')}
      </p>
    </div>
  </section>
);
