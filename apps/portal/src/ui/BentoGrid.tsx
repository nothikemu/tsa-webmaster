import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, moduleHref, type ModuleContent } from '../content';
import { t } from '../core/assets';
import { Link } from '../router';
import { Ring } from './Ring';
import { useData, useOverall, useRecommendation } from './hooks';
import { edgeClass } from './edge';

const SPAN: Record<ModuleContent['id'], string> = {
  foundations: 'bento-a',
  synthesis: 'bento-b',
  ethics: 'bento-c',
};

function ModuleTile({ module }: { module: ModuleContent }): ReactNode {
  const progress = useData().modules[module.id].progress;
  return (
    <article className={`bento-tile ${edgeClass} ${SPAN[module.id]}`} data-reveal>
      <p className="mono">{module.label}</p>
      <h3 className="bento-title">
        <Link to={moduleHref(module.id)} className="stretched">
          {module.title}
        </Link>
      </h3>
      <p className="bento-tag">{module.tagline}</p>
      <p className="mono bento-detail">{HOME.bento.tiles[module.id]}</p>
      <div className="bento-foot">
        <span className="mono">{module.themeSection}</span>
        <span className="num bento-progress">{progress}%</span>
      </div>
      <TileArt id={module.id} />
    </article>
  );
}

/** Decorative linework unique to each module. Hidden from assistive technology. */
function TileArt({ id }: { id: ModuleContent['id'] }): ReactNode {
  if (id === 'foundations') {
    return (
      <svg className="tile-art" viewBox="0 0 400 240" aria-hidden="true" focusable="false">
        {[60, 140, 220, 300, 380].flatMap((x, l) => {
          const n = [4, 6, 7, 6, 3][l]!;
          return Array.from({ length: n }, (_, i) => <circle key={`${l}-${i}`} cx={x} cy={30 + ((i + 0.5) * 190) / n} r="2.4" />);
        })}
        {[0, 1, 2, 3].flatMap((l) =>
          Array.from({ length: 5 }, (_, k) => (
            <line key={`${l}-${k}`} x1={60 + l * 80} y1={40 + k * 38} x2={140 + l * 80} y2={30 + ((k * 7) % 6) * 30 + 14} />
          )),
        )}
      </svg>
    );
  }
  if (id === 'synthesis') {
    return (
      <svg className="tile-art" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
        <path d="M20 40H110V200H20ZM130 40H220V200H130Z" />
        <path d="M120 24V216" />
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1="34" x2={34 + ((i * 37) % 60)} y1={62 + i * 14} y2={62 + i * 14} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={140 + i * 10} y={190 - ((i * 53) % 110) - 20} width="6" height={((i * 53) % 110) + 20} />
        ))}
      </svg>
    );
  }
  return (
    <svg className="tile-art" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
      <circle cx="120" cy="120" r="88" />
      <ellipse cx="120" cy="120" rx="88" ry="32" />
      <ellipse cx="120" cy="120" rx="32" ry="88" />
      <path d="M32 120H208M120 32V208" />
      <path d="M170 56l18-18M190 100l30-8M70 196l-14 22" />
    </svg>
  );
}

function ProgressTile(): ReactNode {
  const overall = useOverall();
  const rec = useRecommendation();
  return (
    <article className={`bento-tile bento-p ${edgeClass}`} data-reveal>
      <p className="mono">{t('home.yours')}</p>
      <div className="bento-p-body">
        <Ring value={overall} size={112} stroke={7} label={t('hub.overall')}>
          <span className="num ring-num">{overall}</span>
        </Ring>
        <div>
          <p className="bento-tag">{rec.kind === 'start' ? t('home.nothing') : rec.label}</p>
          <Link to={rec.href} className="link-arrow">
            {rec.kind === 'start' ? t('home.begin') : t('home.continue')}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BentoGrid(): ReactNode {
  return (
    <section className="wrap bento-section" aria-labelledby="bento-h">
      <h2 id="bento-h" className="h2" data-reveal>
        {HOME.bento.heading}
      </h2>
      <div className="bento">
        {MODULES.map((m) => (
          <ModuleTile key={m.id} module={m} />
        ))}
        <ProgressTile />
      </div>
    </section>
  );
}
