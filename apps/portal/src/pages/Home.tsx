import { useEffect, useRef, type ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES } from '../content';
import { t } from '../core/assets';
import {
  BADGE_QUIZ_MIN,
  DAILY_SOFT_CAP,
  XP_ACTION,
  XP_BADGE,
  XP_CHALLENGE_FIRST,
  XP_CHALLENGE_TIME_BONUS,
  XP_LESSON,
  XP_PERFECT_QUIZ,
  XP_PER_QUIZ_POINT,
  levelInfo,
} from '../core/gamification';
import { useServices } from '../core/services';
import { Link } from '../router';
import { Badge } from '../ui/Badges';
import { BentoGrid } from '../ui/BentoGrid';
import { HeroSection } from '../ui/Hero';
import { useReducedMotion } from '../ui/a11y';
import { useData, useOverall, useRecommendation } from '../ui/hooks';
import { startHomeMotion } from '../ui/motion';
import { edgeClass } from '../ui/edge';

function ProgressStrip(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  return (
    <section className="wrap strip" aria-labelledby="strip-h" data-reveal>
      <h2 id="strip-h" className="mono sub">
        {t('home.stripTitle')}
      </h2>
      <dl className="strip-stats">
        <div>
          <dt className="mono">{t('home.level')}</dt>
          <dd className="num">
            {level.level} <span className="muted">{level.name}</span>
          </dd>
        </div>
        <div>
          <dt className="mono">XP</dt>
          <dd className="num">{data.xp.toLocaleString('en-US')}</dd>
        </div>
        <div>
          <dt className="mono">{t('home.streak')}</dt>
          <dd className="num">{data.streak.current}</dd>
        </div>
        <div>
          <dt className="mono">{t('home.overall')}</dt>
          <dd className="num">{overall}%</dd>
        </div>
      </dl>
      <div className="strip-next">
        <p className="mono">{t('hub.next')}</p>
        <Link to={rec.href} className="strip-next-link">
          <span>{rec.label}</span>
          <span className="muted">{rec.reason}</span>
        </Link>
      </div>
    </section>
  );
}

function Gamification(): ReactNode {
  const data = useData();
  const rows: Array<[string, string]> = [
    [t('xp.seen'), `${XP_LESSON.seen}`],
    [t('xp.practiced'), `${XP_LESSON.practiced}`],
    [t('xp.mastered'), `${XP_LESSON.mastered}`],
    [t('xp.action'), `${XP_ACTION}`],
    [t('xp.quizPoint'), `${XP_PER_QUIZ_POINT}`],
    [t('xp.perfect'), `${XP_PERFECT_QUIZ}`],
    [t('xp.challenge'), `${XP_CHALLENGE_FIRST} + up to ${XP_CHALLENGE_TIME_BONUS}`],
    [t('xp.badge'), `${XP_BADGE}`],
    [t('xp.cap'), `${DAILY_SOFT_CAP} / day`],
  ];
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
        <table className="xp-table">
          <caption className="mono">{t('xp.caption')}</caption>
          <tbody>
            {rows.map(([k, v]) => (
              <tr key={k}>
                <th scope="row">{k}</th>
                <td className="num">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`gamify-badges ${edgeClass}`} data-reveal>
        <p className="mono">{t('home.badges', { min: BADGE_QUIZ_MIN })}</p>
        <ul className="badge-row">
          {MODULES.map((m) => (
            <li key={m.id}>
              <Badge module={m.id} unlocked={data.modules[m.id].badge} size={132} />
              <p className="badge-name">{m.badge.name}</p>
              <p className="mono">{data.modules[m.id].badge ? t('badge.unlocked') : t('badge.locked')}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Facts(): ReactNode {
  return (
    <section className="wrap facts" aria-labelledby="facts-h">
      <h2 id="facts-h" className="h2" data-reveal>
        {HOME.facts.heading}
      </h2>
      <ul className="facts-list">
        {HOME.facts.items.map((f) => (
          <li key={f.label} data-reveal>
            <p className="num fact-n">{f.value}</p>
            <p className="mono">{f.label}</p>
            <p className="prose">{f.body}</p>
          </li>
        ))}
      </ul>
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
      <ProgressStrip />
      <BentoGrid />
      <Gamification />
      <Facts />
    </div>
  );
}
