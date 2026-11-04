import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, moduleHref, type ModuleContent } from '../content';
import { t } from '../core/assets';
import { Link } from '../router';
import { useData } from './hooks';
import { edgeClass } from './edge';

function ModuleTile({ module }: { module: ModuleContent }): ReactNode {
  const progress = useData().modules[module.id].progress;
  return (
    <article className={`bento-tile ${edgeClass}`} data-reveal>
      <h3 className="bento-title">
        <Link to={moduleHref(module.id)} className="stretched">
          {module.title}
        </Link>
      </h3>
      <p className="bento-tag">{module.tagline}</p>
      {progress > 0 && <p className="muted num">{t('home.percent', { n: progress })}</p>}
      <span className="tile-cta" aria-hidden="true">
        {progress > 0 ? t('home.continue') : t('home.begin')}
      </span>
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
      </div>
    </section>
  );
}
