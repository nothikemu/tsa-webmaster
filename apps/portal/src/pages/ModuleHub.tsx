import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, moduleHref } from '../content';
import { t } from '../core/assets';
import { Link } from '../router';
import { Eyebrow } from '../ui/Chrome';
import { Ring } from '../ui/Ring';
import { useData } from '../ui/hooks';
import { edgeClass } from '../ui/edge';

export default function ModuleHub(): ReactNode {
  const data = useData();
  return (
    <div className="wrap page">
      <header className="page-head">
        <Eyebrow>{t('hub.eyebrow')}</Eyebrow>
        <h1 className="display">{t('hub.title')}</h1>
        <p className="lead">{HOME.bento.heading}</p>
      </header>
      <ol className="hub-list">
        {MODULES.map((m) => {
          const d = data.modules[m.id];
          const practiced = m.lessons.filter((l) => (d.lessons[l.id] ?? 'unseen') !== 'unseen').length;
          return (
            <li key={m.id} className={`hub-row ${edgeClass}`}>
              <Ring value={d.progress} size={92} stroke={6} label={m.title}>
                <span className="num ring-num">{d.progress}</span>
              </Ring>
              <div className="hub-row-body">
                <p className="mono">
                  {m.label} / {m.themeSection.toUpperCase()}
                </p>
                <h2 className="h2">
                  <Link to={moduleHref(m.id)} className="stretched">
                    {m.title}
                  </Link>
                </h2>
                <p className="prose">{m.objective}</p>
                <p className="mono hub-row-meta">
                  {m.centerpiece.name} / {t('hub.lessons', { n: m.lessons.length })} / {t('hub.opened', { n: practiced, total: m.lessons.length })}
                </p>
              </div>
              <span className="link-arrow" aria-hidden="true">
                {d.progress > 0 ? t('home.continue') : t('home.begin')}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
