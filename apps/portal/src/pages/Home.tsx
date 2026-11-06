import type { CSSProperties, ReactNode } from 'react';
import { HOME } from '../content/site';
import { MODULES, glossary, type ModuleContent } from '../content';
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

/** The learner's record, read from saved state: the numbers the progress hub shows, with each module's own percentage. */
function Record(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  return (
    <aside className="record glass edge" aria-label={t('home.record')} data-reveal="up">
      <dl className="record-stats">
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
      <ul className="record-mods">
        {MODULES.map((m) => (
          <li key={m.id} data-module={m.id}>
            <span className="record-dot" aria-hidden="true" />
            <span>{m.title}</span>
            <span className="num">{data.modules[m.id].progress}%</span>
          </li>
        ))}
      </ul>
      <p className="record-next">
        <span className="label">{t('hub.next')}</span>
        <Link to={rec.href}>{rec.label}</Link>
      </p>
    </aside>
  );
}

/**
 * The vessel: the learner's progress drawn as an object. Three rings, one per module, each filled to
 * that module's percentage and capped with a bead; inside them a glass sphere whose liquid stands at
 * the overall percentage. Every figure is read from saved state, and the same numbers are written out
 * in the record beside it, so the drawing is never the only place they appear.
 */
const RING_R = [236, 208, 180];
const CENTER = 260;

function Vessel(): ReactNode {
  const data = useData();
  const overall = useOverall();
  return (
    <div
      className="vessel"
      aria-hidden="true"
      data-empty={overall === 0}
      style={{ '--lvl': overall } as CSSProperties}
    >
      <svg className="vessel-rings" viewBox="0 0 520 520" focusable="false">
        {MODULES.map((m, i) => {
          const r = RING_R[i]!;
          const p = data.modules[m.id].progress;
          const a = (-90 + (360 * p) / 100) * (Math.PI / 180);
          return (
            <g key={m.id} data-module={m.id}>
              <circle className="ring-track" cx={CENTER} cy={CENTER} r={r} pathLength={100} />
              {p > 0 && (
                <circle
                  className="ring-arc"
                  cx={CENTER}
                  cy={CENTER}
                  r={r}
                  pathLength={100}
                  style={{ '--p': p } as CSSProperties}
                />
              )}
              <g
                transform={`translate(${CENTER + r * Math.cos(a)} ${CENTER + r * Math.sin(a)})`}
                data-zero={p === 0}
              >
                <circle className="ring-bead" r="9" />
                <circle className="ring-bead-shine" cx="-2.5" cy="-3" r="3" />
              </g>
            </g>
          );
        })}
      </svg>
      <div className="orb-bezel" />
      <div className="orb">
        <div className="orb-liquid">
          <svg
            className="orb-wave orb-wave-b"
            viewBox="0 0 400 28"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path d="M0 14 C 33 2, 67 2, 100 14 S 167 26, 200 14 S 267 2, 300 14 S 367 26, 400 14 V28 H0 Z" />
          </svg>
          <svg
            className="orb-wave orb-wave-a"
            viewBox="0 0 400 28"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path d="M0 14 C 33 26, 67 26, 100 14 S 167 2, 200 14 S 267 26, 300 14 S 367 2, 400 14 V28 H0 Z" />
          </svg>
        </div>
      </div>
      <span className="spark vessel-spark vessel-spark-a" />
      <span className="spark vessel-spark vessel-spark-b" />
      <span className="spark vessel-spark vessel-spark-c" />
    </div>
  );
}

function Hero(): ReactNode {
  const rec = useRecommendation();
  const started = rec.kind !== 'start';
  // The headline is set in lines; the last word of the last line is the one set in the italic serif.
  const [first, ...rest] = HOME.headline;
  const tail = (rest.join(' ') || '').split(' ');
  const accent = tail.pop() ?? '';
  const lines = [first, tail.join(' ')].filter((l): l is string => !!l);
  return (
    <section className="home-hero" aria-labelledby="hero-h">
      <div className="wrap home-hero-grid">
        <div className="home-hero-copy">
          <p className="label hero-kicker" data-reveal="fade">
            <span className="spark" aria-hidden="true" /> {HOME.kicker}
          </p>
          <h1 id="hero-h" className="hero-title">
            {lines.map((line, i) => (
              <span key={line} className="hero-line" style={{ '--i': i } as CSSProperties}>
                <span>{line}</span>
              </span>
            ))}
            <span className="hero-line" style={{ '--i': lines.length } as CSSProperties}>
              <span className="accent-word">{accent}</span>
            </span>
          </h1>
          <p className="lead" data-reveal="up">
            {HOME.lead}
          </p>
          <div className="hero-actions" data-reveal="up">
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
        <div className="home-hero-art">
          <Vessel />
          <Record />
        </div>
      </div>
    </section>
  );
}

/** The terms the course teaches, drifting past. Decorative: the full list is on the Glossary page. */
function Marquee(): ReactNode {
  const terms = glossary.map((g) => g.term.replace(/\s*\(.*\)$/, '')).slice(0, 18);
  const run = (key: string): ReactNode => (
    <ul key={key} className="marquee-run">
      {terms.map((term) => (
        <li key={term}>
          {term}
          <span className="spark" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {run('a')}
        {run('b')}
      </div>
    </div>
  );
}

function MapSection(): ReactNode {
  return (
    <section className="wrap home-map" aria-labelledby="map-h">
      <div className="section-head" data-reveal="up">
        <p className="label section-n">
          <span className="spark" aria-hidden="true" /> 01
        </p>
        <h2 id="map-h" className="h2">
          {HOME.map.heading}
        </h2>
        <p className="prose">{HOME.map.body}</p>
      </div>
      <div data-reveal="scale">
        <CurriculumMap />
      </div>
    </section>
  );
}

function Method(): ReactNode {
  return (
    <section className="wrap home-method" aria-labelledby="method-h">
      <div className="home-method-head" data-reveal="up">
        <p className="label section-n">
          <span className="spark" aria-hidden="true" /> 02 · {t('home.sectionMethod')}
        </p>
        <h2 id="method-h" className="h2">
          {HOME.method.heading}
        </h2>
      </div>
      <ol className="steps">
        {HOME.method.steps.map((s, i) => (
          <li key={s.name} className="glass" data-reveal="up">
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
    <article className={`home-mod home-mod-${slot} glass edge`} data-module={m.id} data-reveal="up">
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
      <div className="section-head" data-reveal="up">
        <p className="label section-n">
          <span className="spark" aria-hidden="true" /> 03
        </p>
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
      <div className="ledger-copy" data-reveal="up">
        <p className="label section-n">
          <span className="spark" aria-hidden="true" /> 04
        </p>
        <h2 id="ledger-h" className="h2">
          {HOME.gamification.heading}
        </h2>
        {HOME.gamification.body.map((p) => (
          <p key={p.slice(0, 24)} className="prose">
            {p}
          </p>
        ))}
      </div>
      <table className="ledger glass" data-reveal="up">
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
      <Marquee />
      <MapSection />
      <Method />
      <Modules />
      <Ledger />
    </div>
  );
}
