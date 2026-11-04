import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, moduleHref } from '../content';
import { t } from '../core/assets';
import { Link } from '../router';
import { useData } from '../ui/hooks';
import { edgeClass } from '../ui/edge';

export default function ModuleHub(): ReactNode {
  const data = useData();
  return (
    <div className="wrap page">
      <header className="page-head">
        <h1 className="display">{t('hub.title')}</h1>
        <p className="lead">{HOME.bento.heading}</p>
      </header>
      <ol className="hub-list">
        {MODULES.map((m) => (
          <li key={m.id} className={`hub-row ${edgeClass}`}>
            <div className="hub-row-body">
              <h2 className="h2">
                <Link to={moduleHref(m.id)} className="stretched">
                  {m.title}
                </Link>
              </h2>
              <p className="prose">{m.objective}</p>
            </div>
            <span className="link-arrow" aria-hidden="true">
              {data.modules[m.id].progress > 0 ? t('home.continue') : t('home.begin')}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
