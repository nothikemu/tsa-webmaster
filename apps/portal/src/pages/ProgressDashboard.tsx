import { useEffect, useMemo, useRef, useState, type ChangeEvent, type ReactNode } from 'react';
import { MODULES } from '../content';
import { announce } from '../core/announce';
import { t } from '../core/assets';
import { XP_LESSON, levelInfo } from '../core/gamification';
import { exportProgress, parseImport } from '../core/persistence';
import { dayKey, masteryRank } from '../core/schema';
import { useServices } from '../core/services';
import { Link } from '../router';
import { Badge } from '../ui/Badges';
import { Eyebrow } from '../ui/Chrome';
import { Ring } from '../ui/Ring';
import { useData, useOverall, useRecommendation, useSnapshot, useTween } from '../ui/hooks';
import { edgeClass } from '../ui/edge';

const DAY_MS = 24 * 60 * 60 * 1000;
const WEEKS = 12;

function lastDays(n: number): string[] {
  const out: string[] = [];
  const now = Date.now();
  for (let i = n - 1; i >= 0; i--) out.push(dayKey(now - i * DAY_MS));
  return out;
}

/** "2026-11-03" -> "Nov 3". Parsed by hand so the date never shifts with the time zone. */
function shortDate(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y!, (m ?? 1) - 1, d ?? 1).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function XpHistory(): ReactNode {
  const { xpByDay } = useData();
  const days = lastDays(14);
  const values = days.map((d) => xpByDay[d] ?? 0);
  const max = Math.max(50, ...values);
  const total = values.reduce((a, b) => a + b, 0);
  const active = values.filter((v) => v > 0).length;
  const bestIndex = values.indexOf(Math.max(...values));
  const summary =
    total === 0
      ? t('pd.xpSummaryNone', { days: 14 })
      : t('pd.xpSummary', {
          total,
          days: 14,
          active,
          best: values[bestIndex] ?? 0,
          date: shortDate(days[bestIndex] ?? days[0]!),
        });
  return (
    <figure className="chart">
      <svg viewBox="0 0 336 150" role="img" aria-label={t('pd.xpLabel', { total, days: 14 })}>
        {values.map((v, i) => {
          const h = (v / max) * 96;
          const x = 6 + i * 24;
          return (
            <g key={days[i]}>
              <rect
                x={x}
                y={120 - h}
                width="16"
                height={Math.max(2, h)}
                rx="2"
                fill={v > 0 ? '#6f9bff' : 'rgba(255,255,255,.3)'}
              />
              {i % 2 === 1 && (
                <text
                  x={x + 8}
                  y="141"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#a1a1a6"
                  className="num"
                >
                  {days[i]!.slice(8)}
                </text>
              )}
              {v > 0 && (
                <text
                  x={x + 8}
                  y={114 - h}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#f5f5f7"
                  className="num"
                >
                  {v}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="mono">{t('pd.xpCaption')}</figcaption>
      <p className="chart-summary">{summary}</p>
    </figure>
  );
}

function StreakCalendar(): ReactNode {
  const { activeDays, streak } = useData();
  const cells = useMemo(() => {
    const today = new Date();
    const dow = (today.getDay() + 6) % 7; // Monday = 0
    const total = WEEKS * 7;
    const list: Array<{ key: string; count: number; future: boolean }> = [];
    const start = Date.now() - (total - 1 - (6 - dow)) * DAY_MS;
    for (let i = 0; i < total; i++) {
      const ms = start + i * DAY_MS;
      const key = dayKey(ms);
      list.push({ key, count: activeDays[key] ?? 0, future: ms > Date.now() + DAY_MS / 2 });
    }
    return list;
  }, [activeDays]);
  const level = (n: number): number => (n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : 3);
  const past = cells.filter((c) => !c.future);
  const activeCount = past.filter((c) => c.count > 0).length;
  const legend: Array<[number, string]> = [
    [0, t('pd.cal0')],
    [1, t('pd.cal1')],
    [2, t('pd.cal2')],
    [3, t('pd.cal3')],
  ];
  return (
    <figure className="chart">
      <ul className="calendar" aria-label={t('pd.calLabel', { weeks: WEEKS })}>
        {cells.map((c) => (
          <li
            key={c.key}
            data-level={c.future ? 'x' : level(c.count)}
            aria-label={c.future ? undefined : t('pd.calDay', { day: c.key, n: c.count })}
            aria-hidden={c.future || undefined}
          />
        ))}
      </ul>
      <ul className="cal-legend">
        <li>{t('pd.calLegend')}</li>
        {legend.map(([l, label]) => (
          <li key={l}>
            <i data-level={l} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      <p className="chart-summary">
        {t('pd.calSummary', {
          n: activeCount,
          total: past.length,
          current: streak.current,
          best: streak.best,
        })}
      </p>
    </figure>
  );
}

function Heatmap(): ReactNode {
  const data = useData();
  return (
    // A horizontally scrollable region must be reachable by keyboard (WCAG 2.1.1), so it takes a tab stop and a name.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className="table-wrap" role="region" aria-label={t('pd.mastery')} tabIndex={0}>
      <table className="heatmap">
        <caption className="mono">{t('pd.heatCaption')}</caption>
        <thead>
          <tr>
            <th scope="col">{t('pd.module')}</th>
            {Array.from({ length: 5 }, (_, i) => (
              <th key={i} scope="col" className="num">
                {i + 1}
              </th>
            ))}
            <th scope="col">{t('module.check')}</th>
            <th scope="col">{t('module.challenge')}</th>
          </tr>
        </thead>
        <tbody>
          {MODULES.map((m) => {
            const d = data.modules[m.id];
            return (
              <tr key={m.id}>
                <th scope="row">{m.title}</th>
                {m.lessons.map((l) => {
                  const s = d.lessons[l.id] ?? 'unseen';
                  return (
                    <td key={l.id} data-state={s} data-rank={masteryRank(s)}>
                      {t(`mastery.${s}`)}
                    </td>
                  );
                })}
                <td
                  data-state={
                    d.quiz.best >= 4 ? 'mastered' : d.quiz.attempts > 0 ? 'practiced' : 'unseen'
                  }
                >
                  <span className="num">{d.quiz.best}/5</span>
                </td>
                <td
                  data-state={
                    d.challenge.done
                      ? 'mastered'
                      : d.challenge.attempts > 0
                        ? 'practiced'
                        : 'unseen'
                  }
                >
                  <span>
                    {d.challenge.done
                      ? t('check.done')
                      : d.challenge.attempts > 0
                        ? t('pd.tried')
                        : '-'}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="muted legend mono">{t('pd.legend')}</p>
    </div>
  );
}

function DataControls(): ReactNode {
  const { store, signer, actor } = useServices();
  const game = actor.getSnapshot().context.game;
  const resetting = useSnapshot(game).matches('confirmingReset');
  const [message, setMessage] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  // Focus lands on the safe choice, so a stray Enter keeps the progress instead of erasing it.
  const keepRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (resetting) keepRef.current?.focus();
  }, [resetting]);

  const doExport = async (): Promise<void> => {
    const text = await exportProgress(signer, store.getState().data, Date.now());
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `parameter-progress-${dayKey(Date.now())}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage(t('pd.exported'));
    announce(t('pd.exported'));
  };

  const doImport = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (file.size > 512 * 1024) {
      setMessage(t('pd.importTooBig'));
      return;
    }
    const result = await parseImport(await file.text(), signer, Date.now());
    if (!result.ok) {
      setMessage(`${t('pd.importFailed')} ${result.reason}`);
      return;
    }
    store.getState().replace(result.state);
    actor.send({
      type: 'BADGE_SYNC',
      unlocked: {
        foundations: result.state.modules.foundations.badge,
        synthesis: result.state.modules.synthesis.badge,
        ethics: result.state.modules.ethics.badge,
      },
    });
    setMessage(t('pd.imported'));
    announce(t('pd.imported'));
  };

  return (
    <section aria-labelledby="data-h" className={`data-controls ${edgeClass}`}>
      <h2 id="data-h" className="h2">
        {t('pd.dataTitle')}
      </h2>
      <p className="prose">{t('pd.dataBody')}</p>
      <div className="data-groups">
        <div className="data-group">
          <h3>{t('pd.backupTitle')}</h3>
          <p className="muted">{t('pd.backupBody')}</p>
          <div className="check-actions">
            <button type="button" className="btn btn-ghost" onClick={() => void doExport()}>
              {t('pd.export')}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => fileRef.current?.click()}
            >
              {t('pd.import')}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="sr-only"
              tabIndex={-1}
              aria-label={t('pd.importFile')}
              onChange={(e) => void doImport(e)}
            />
          </div>
        </div>
        <div className="data-group">
          <h3>{t('pd.startOverTitle')}</h3>
          <p className="muted">{t('pd.startOverBody')}</p>
          {!resetting && (
            <div className="check-actions">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => actor.send({ type: 'RESET_REQUEST' })}
              >
                {t('pd.reset')}
              </button>
            </div>
          )}
        </div>
      </div>
      {resetting && (
        <div
          className="confirm glass"
          role="alertdialog"
          aria-labelledby="confirm-h"
          aria-describedby="confirm-b"
        >
          <h3 id="confirm-h" className="mono sub">
            {t('pd.confirmTitle')}
          </h3>
          <p id="confirm-b" className="prose">
            {t('pd.confirmBody')}
          </p>
          <div className="check-actions">
            <button
              ref={keepRef}
              type="button"
              className="btn btn-ghost"
              onClick={() => actor.send({ type: 'RESET_CANCEL' })}
              onKeyDown={(e) => e.key === 'Escape' && actor.send({ type: 'RESET_CANCEL' })}
            >
              {t('pd.keep')}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => actor.send({ type: 'RESET_CONFIRM' })}
            >
              {t('pd.confirm')}
            </button>
          </div>
        </div>
      )}
      <p className="muted" role="status" aria-live="polite">
        {message}
      </p>
    </section>
  );
}

export default function ProgressDashboard(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  const xpT = useTween(data.xp);
  const empty = data.xp === 0 && overall === 0;
  return (
    <div className="wrap page dashboard">
      <header className="page-head">
        <Eyebrow>{t('pd.eyebrow')}</Eyebrow>
        <h1 className="display">{t('pd.title')}</h1>
        <p className="lead">{t('pd.lead')}</p>
      </header>

      <section className="dash-summary" aria-label={t('pd.summary')}>
        <div className={`dash-card ${edgeClass}`}>
          <Ring value={overall} size={124} stroke={8} label={t('hub.overall')}>
            <span className="num ring-num">{overall}</span>
          </Ring>
          <div>
            <p className="mono">{t('hub.level', { level: level.level })}</p>
            <p className="dash-big">{level.name}</p>
            <p className="num">
              {Math.round(xpT).toLocaleString('en-US')} <span className="muted">XP</span>
            </p>
          </div>
        </div>
        <div className={`dash-card ${edgeClass}`}>
          <p className="mono">{t('pd.streak')}</p>
          <p className="dash-big num">{data.streak.current}</p>
          <p className="muted">{t('pd.streakBest', { n: data.streak.best })}</p>
        </div>
        <div className={`dash-card dash-next ${edgeClass}`}>
          <p className="mono">{t('hub.next')}</p>
          <p className="dash-big">{rec.label}</p>
          <p className="muted">{rec.reason}</p>
          <Link to={rec.href} className="btn btn-primary">
            {t('pd.go')}
          </Link>
        </div>
      </section>

      {empty && (
        <section className={`empty-state ${edgeClass}`} aria-labelledby="empty-h">
          <h2 id="empty-h" className="dash-big">
            {t('pd.emptyTitle')}
          </h2>
          <p className="prose">{t('pd.emptyBody', { xp: XP_LESSON.seen })}</p>
        </section>
      )}

      <section aria-labelledby="mods-h" className="dash-section">
        <h2 id="mods-h" className="h2">
          {t('pd.byModule')}
        </h2>
        <ul className="mod-bars">
          {MODULES.map((m) => (
            <li key={m.id}>
              <span className="mono">{m.label}</span>
              <span
                className="bar"
                role="img"
                aria-label={`${m.title}: ${data.modules[m.id].progress} percent`}
              >
                <span
                  style={{
                    transform: `scaleX(${Math.max(0.005, data.modules[m.id].progress / 100)})`,
                  }}
                />
              </span>
              <span className="num">{data.modules[m.id].progress}%</span>
              <Badge module={m.id} unlocked={data.modules[m.id].badge} size={44} />
            </li>
          ))}
        </ul>
      </section>

      <div className="dash-two">
        <section aria-labelledby="xp-h" className="dash-section">
          <h2 id="xp-h" className="h2">
            {t('pd.xpHistory')}
          </h2>
          <XpHistory />
        </section>
        <section aria-labelledby="cal-h" className="dash-section">
          <h2 id="cal-h" className="h2">
            {t('pd.streakCal')}
          </h2>
          <StreakCalendar />
        </section>
      </div>

      <section aria-labelledby="heat-h" className="dash-section">
        <h2 id="heat-h" className="h2">
          {t('pd.mastery')}
        </h2>
        <Heatmap />
      </section>

      <DataControls />
    </div>
  );
}
