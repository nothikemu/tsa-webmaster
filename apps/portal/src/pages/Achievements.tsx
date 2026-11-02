import type { ReactNode } from 'react';
import { MODULES, moduleHref } from '../content';
import { t } from '../core/assets';
import { BadgeChecklist } from '../modules/ModulePage';
import { Link } from '../router';
import { Badge } from '../ui/Badges';
import { Eyebrow } from '../ui/Chrome';
import { useData } from '../ui/hooks';
import { edgeClass } from '../ui/edge';

export default function Achievements(): ReactNode {
  const data = useData();
  const earned = MODULES.filter((m) => data.modules[m.id].badge).length;
  return (
    <div className="wrap page">
      <header className="page-head">
        <Eyebrow>{t('ach.eyebrow')}</Eyebrow>
        <h1 className="display">{t('ach.title')}</h1>
        <p className="lead">{t('ach.lead', { n: earned, total: MODULES.length })}</p>
      </header>
      <ul className="ach-list">
        {MODULES.map((m) => {
          const unlocked = data.modules[m.id].badge;
          return (
            <li key={m.id} className={`ach-row ${edgeClass}`} data-unlocked={unlocked}>
              <Badge module={m.id} unlocked={unlocked} size={200} anchor />
              <div>
                <p className="mono">{m.label}</p>
                <h2 className="h2">{m.badge.name}</h2>
                <p className="prose">{m.badge.criteria}</p>
                <BadgeChecklist module={m} />
                <Link to={moduleHref(m.id)} className="link-arrow">
                  {t('ach.open', { title: m.title })}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
