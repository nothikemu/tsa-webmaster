import type { ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, type ModuleContent } from '../content';
import { t } from '../core/assets';
import {
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
import { Link } from '../router';
import { CurriculumMap } from '../ui/CurriculumMap';
import { ModuleArt, Track } from '../ui/ModuleArt';
import { useData, useOverall, useRecommendation } from '../ui/hooks';

/** The learner's record, read from saved state: the same four numbers the progress hub shows. */
function Record(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  return (
    <aside className="record" aria-label={t('home.record')}>
      <dl>
        <div>
          <dt>{t('home.level')}</dt>
          <dd className="num">
            {level.level}
            <span>{level.name}</span>
          </dd>
        </div>
        <div>
          <dt>XP</dt>
          <dd className="num">{data.xp.toLocaleString('en-US')}</dd>
        </div>
        <div>
          <dt>{t('home.streak')}</dt>
          <dd className="num">{data.streak.current}</dd>
        </div>
        <div>
          <dt>{t('home.overall')}</dt>
          <dd className="num">{overall}%</dd>
        </div>
      </dl>
      <p className="record-next">
        <span className="label">{t('hub.next')}</span>
        <Link to={rec.href}>{rec.label}</Link>
      </p>
    </aside>
  );
}

function Hero(): ReactNode {
  const rec = useRecommendation();
  const started = rec.kind !== 'start';
  return (
    <section className="home-hero" aria-labelledby="hero-h">
      <div className="wrap home-hero-grid">
        <div className="home-hero-copy">
          <p className="label">{HOME.kicker}</p>
          <h1 id="hero-h" className="hero-title">
            {HOME.headline.map((line) => (
              <span key={line} className="hero-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="lead">{HOME.lead}</p>
          <div className="hero-actions">
            {started ? (
              <Link to={rec.href} className="btn btn-primary">
                {rec.kind === 'complete' ? t('hero.badges') : t('hero.continue')}
              </Link>
            ) : (
              <Link to="/modules/foundations" className="btn btn-primary">
                {t('hero.start')}
              </Link>
            )}
            <Link to="/modules" className="link-arrow">
              {t('hero.all')}
            </Link>
          </div>
        </div>
        <Record />
      </div>
    </section>
  );
}

function MapSection(): ReactNode {
  return (
    <section className="wrap home-map" aria-labelledby="map-h">
      <div className="section-head">
        <h2 id="map-h" className="h2">
          {HOME.map.heading}
        </h2>
        <p className="prose">{HOME.map.body}</p>
      </div>
      <CurriculumMap />
    </section>
  );
}

function Method(): ReactNode {
  return (
    <section className="wrap home-method" aria-labelledby="method-h">
      <div className="home-method-head">
        <p className="label">{t('home.sectionMethod')}</p>
        <h2 id="method-h" className="h2">
          {HOME.method.heading}
        </h2>
      </div>
      <ol className="steps">
        {HOME.method.steps.map((s, i) => (
          <li key={s.name}>
            <span className="step-n" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{s.name}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const minutes = (m: ModuleContent): number => m.lessons.reduce((a, l) => a + l.minutes, 0);

function ModulePanel({ m, slot }: { m: ModuleContent; slot: 'a' | 'b' | 'c' }): ReactNode {
  const d = useData().modules[m.id];
  return (
    <article className={`home-mod home-mod-${slot}`} data-module={m.id}>
      <header className="mod-head">
        <span className="mod-numeral" aria-hidden="true">
          {String(m.index).padStart(2, '0')}
        </span>
        <div>
          <h3 className="mod-title">
            <Link to={`/modules/${m.id}`} className="stretched">
              {m.title}
            </Link>
          </h3>
          <p className="mod-tagline">{m.tagline}</p>
        </div>
      </header>
      <div className="mod-art">
        <ModuleArt id={m.id} />
      </div>
      <div className="mod-body">
        <p className="mod-objective">{m.objective}</p>
        <dl className="mod-facts">
          <div>
            <dt>{t('module.lessons')}</dt>
            <dd className="num">{m.lessons.length}</dd>
          </div>
          <div>
            <dt>{t('home.reading')}</dt>
            <dd className="num">{t('lesson.minutes', { n: minutes(m) })}</dd>
          </div>
          <div>
            <dt>{t('home.centerpiece')}</dt>
            <dd>{m.centerpiece.name}</dd>
          </div>
          <div>
            <dt>{t('home.badge')}</dt>
            <dd>{m.badge.name}</dd>
          </div>
        </dl>
        <div className="mod-foot">
          <Track id={m.id} />
          <span className="num mod-percent">{t('home.percent', { n: d.progress })}</span>
          <span className="mod-cta" aria-hidden="true">
            {d.progress > 0 ? t('home.continue') : t('home.begin')}
          </span>
        </div>
      </div>
    </article>
  );
}

function Modules(): ReactNode {
  return (
    <section className="wrap home-mods" aria-labelledby="mods-h">
      <div className="section-head">
        <h2 id="mods-h" className="h2">
          {HOME.bento.heading}
        </h2>
      </div>
      <div className="home-mods-grid">
        <ModulePanel m={MODULES[0]!} slot="a" />
        <ModulePanel m={MODULES[1]!} slot="b" />
        <ModulePanel m={MODULES[2]!} slot="c" />
      </div>
    </section>
  );
}

/** The XP rules as a ledger. Every number is the constant the scoring code uses. */
function Ledger(): ReactNode {
  const rows: Array<[string, string]> = [
    [t('xp.seen'), `${XP_LESSON.seen}`],
    [t('xp.practiced'), `${XP_LESSON.practiced}`],
    [t('xp.mastered'), `${XP_LESSON.mastered}`],
    [t('xp.action'), `${XP_ACTION}`],
    [t('xp.quizPoint'), `${XP_PER_QUIZ_POINT}`],
    [t('xp.perfect'), `${XP_PERFECT_QUIZ}`],
    [t('xp.challenge'), `${XP_CHALLENGE_FIRST} + ${t('xp.upTo', { n: XP_CHALLENGE_TIME_BONUS })}`],
    [t('xp.badge'), `${XP_BADGE}`],
    [t('xp.cap'), `${DAILY_SOFT_CAP}`],
  ];
  return (
    <section className="wrap home-ledger" aria-labelledby="ledger-h">
      <div className="ledger-copy">
        <h2 id="ledger-h" className="h2">
          {HOME.gamification.heading}
        </h2>
        {HOME.gamification.body.map((p) => (
          <p key={p.slice(0, 24)} className="prose">
            {p}
          </p>
        ))}
      </div>
      <table className="ledger">
        <caption className="label">{t('xp.caption')}</caption>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th scope="row">{k}</th>
              <td className="num">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <div className="home">
      <Hero />
      <MapSection />
      <Method />
      <Modules />
      <Ledger />
    </div>
  );
}
