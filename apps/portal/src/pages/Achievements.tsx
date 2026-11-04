import type { ReactNode } from 'react';
import { MODULES, moduleHref, type ModuleContent } from '../content';
import { t } from '../core/assets';
import { BadgeChecklist } from '../modules/ModulePage';
import { useBadgeProgress } from '../modules/shared/badgeRows';
import { Link } from '../router';
import { Badge } from '../ui/Badges';
import { useData } from '../ui/hooks';
import { edgeClass } from '../ui/edge';

/** Earned, in progress or not started, in words, with a meter. The badge artwork alone never carries the state. */
function BadgeStatus({ module }: { module: ModuleContent }): ReactNode {
  const { done, total, earned } = useBadgeProgress(module);
  const status = earned ? 'earned' : done > 0 ? 'progress' : 'none';
  const label = earned
    ? t('ach.earned')
    : done > 0
      ? t('ach.inProgress', { done, total })
      : t('ach.notStarted', { done, total });
  return (
    <div className="ach-status">
      <span className="status-tag" data-status={status}>
        {label}
      </span>
      <span
        className="bar ach-meter"
        role="img"
        aria-label={t('ach.meter', { name: module.badge.name, done, total })}
      >
        <span style={{ transform: `scaleX(${Math.max(0.005, done / total)})` }} />
      </span>
    </div>
  );
}

export default function Achievements(): ReactNode {
  const data = useData();
  const earned = MODULES.filter((m) => data.modules[m.id].badge).length;
  return (
    <div className="wrap page">
      <header className="page-head">
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
                <h2 className="h2">{m.badge.name}</h2>
                <BadgeStatus module={m} />
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
