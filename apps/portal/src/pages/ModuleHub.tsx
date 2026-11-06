import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, moduleHref, type ModuleContent } from '../content';
import { t } from '../core/assets';
import { Link } from '../router';
import { ModuleArt, Track } from '../ui/ModuleArt';
import { PathList } from '../ui/PathList';
import { useData } from '../ui/hooks';

function Path({ m, slot }: { m: ModuleContent; slot: 'a' | 'b' | 'c' }): ReactNode {
  const d = useData().modules[m.id];
  return (
    <article
      className={`cat-path cat-path-${slot} glass edge`}
      data-module={m.id}
      data-reveal="up"
      aria-labelledby={`cat-${m.id}`}
    >
      <header className="cat-head">
        <span className="mod-numeral" aria-hidden="true">
          {String(m.index).padStart(2, '0')}
        </span>
        <p className="label">{m.themeSection}</p>
        <h2 id={`cat-${m.id}`} className="cat-title">
          <Link to={moduleHref(m.id)} className="cat-link">
            {m.title}
          </Link>
        </h2>
        <p className="mod-tagline">{m.tagline}</p>
      </header>
      <div className="mod-art cat-art">
        <ModuleArt id={m.id} />
      </div>
      <p className="cat-objective">{m.objective}</p>
      <PathList module={m} />
      <footer className="cat-foot">
        <Track id={m.id} />
        <span className="num mod-percent">{t('home.percent', { n: d.progress })}</span>
        <Link to={moduleHref(m.id)} className="link-arrow">
          {d.progress > 0 ? t('home.continue') : t('home.begin')}
        </Link>
      </footer>
    </article>
  );
}

export default function ModuleHub() {
  return (
    <div className="wrap page catalog">
      <header className="page-head cat-page-head">
        <p className="label section-n" data-reveal="fade">
          <span className="spark" aria-hidden="true" /> 01
        </p>
        <h1 className="display">{t('hub.title')}</h1>
        <p className="lead">{HOME.bento.heading}</p>
      </header>
      <div className="cat-grid">
        <Path m={MODULES[0]!} slot="a" />
        <Path m={MODULES[1]!} slot="b" />
        <Path m={MODULES[2]!} slot="c" />
      </div>
    </div>
  );
}
