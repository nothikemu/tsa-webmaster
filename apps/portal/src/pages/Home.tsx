import { useEffect, useRef, type ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES } from '../content';
import { t } from '../core/assets';
import { useServices } from '../core/services';
import { Badge } from '../ui/Badges';
import { BentoGrid } from '../ui/BentoGrid';
import { HeroSection } from '../ui/Hero';
import { useReducedMotion } from '../ui/a11y';
import { useData } from '../ui/hooks';
import { startHomeMotion } from '../ui/motion';
import { edgeClass } from '../ui/edge';

function Gamification(): ReactNode {
  const data = useData();
  return (
    <section className="wrap gamify" aria-labelledby="gamify-h">
      <div className="gamify-copy" data-reveal>
        <h2 id="gamify-h" className="h2">
          {HOME.gamification.heading}
        </h2>
        {HOME.gamification.body.map((p) => (
          <p key={p.slice(0, 24)} className="prose">
            {p}
          </p>
        ))}
      </div>
      <div className={`gamify-badges ${edgeClass}`} data-reveal>
        <ul className="badge-row">
          {MODULES.map((m) => (
            <li key={m.id}>
              <Badge module={m.id} unlocked={data.modules[m.id].badge} size={132} />
              <p className="badge-name">{m.badge.name}</p>
              <p className="muted">
                {data.modules[m.id].badge ? t('badge.unlocked') : t('badge.locked')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { loop } = useServices();
  const reduced = useReducedMotion();
  const hero = useRef<HTMLElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return undefined;
    let stop: (() => void) | null = null;
    let cancelled = false;
    startHomeMotion(loop, hero.current, root.current).then(
      (cleanup) => {
        if (cancelled) cleanup();
        else stop = cleanup;
      },
      () => undefined,
    );
    return () => {
      cancelled = true;
      stop?.();
    };
  }, [loop, reduced]);

  return (
    <div ref={root} className="home">
      <HeroSection sectionRef={hero} />
      <BentoGrid />
      <Gamification />
    </div>
  );
}
