import type { CSSProperties, ReactNode } from 'react';
import { HOME, REALM } from '../content/site';
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
import { Track } from '../ui/ModuleArt';
import { RealmArt } from '../ui/RealmArt';
import { useData, useOverall, useRecommendation } from '../ui/hooks';

const NUM = ['01', '02', '03', '04', '05'];

/**
 * The learner card: a tall banner with a pointed foot, in the manner of an agent card in a lobby.
 * Everything on it is read from saved state: level, XP, streak, overall percentage, one vertical gauge
 * per module and the next recommended step. The gauges are drawn; the same numbers are written beside them.
 */
function LearnerCard(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  return (
    <aside className="learner banner" aria-label={t('home.record')} data-reveal="up">
      <p className="label learner-label">{t('home.record')}</p>
      <p className="learner-level" aria-hidden="true">
        {String(level.level).padStart(2, '0')}
      </p>
      <p className="learner-rank">
        <span className="label">{t('home.level')}</span> {level.name}
      </p>
      <dl className="learner-stats">
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
      <ul className="learner-gauges">
        {MODULES.map((m) => (
          <li
            key={m.id}
            data-module={m.id}
            style={{ '--p': data.modules[m.id].progress / 100 } as CSSProperties}
          >
            <span className="gauge" aria-hidden="true">
              <i />
            </span>
            <span className="num gauge-n">{data.modules[m.id].progress}%</span>
            <span className="gauge-name">{m.title}</span>
          </li>
        ))}
      </ul>
      <p className="learner-next">
        <span className="label">{t('hub.next')}</span>
        <Link to={rec.href}>{rec.label}</Link>
      </p>
    </aside>
  );
}

function Hero(): ReactNode {
  const rec = useRecommendation();
  const started = rec.kind !== 'start';
  // The headline is set in lines; the last word of the last line is printed a second time in cyan, out of register.
  const [first, ...rest] = HOME.headline;
  const tail = (rest.join(' ') || '').split(' ');
  const accent = tail.pop() ?? '';
  const lines = [first, tail.join(' ')].filter((l): l is string => !!l);
  return (
    <section className="home-hero slab" aria-labelledby="hero-h">
      <span className="hero-giant giant" aria-hidden="true">
        Parameter
      </span>
      <div className="wrap home-hero-grid">
        <div className="home-hero-copy">
          <p className="label hero-kicker" data-reveal="fade">
            <span className="stamp">{HOME.kicker}</span>
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
        <LearnerCard />
      </div>
    </section>
  );
}

/** The terms the course teaches, running past like a ticker. Decorative: the full list is on the Glossary page. */
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

function SectionHead({
  n,
  id,
  title,
  children,
}: {
  n: string;
  id: string;
  title: string;
  children?: ReactNode;
}): ReactNode {
  return (
    <div className="section-head" data-reveal="up">
      <span className="section-n" aria-hidden="true">
        {n}
      </span>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {children}
    </div>
  );
}

function MapSection(): ReactNode {
  return (
    <section className="wrap home-map" aria-labelledby="map-h">
      <SectionHead n="02" id="map-h" title={HOME.map.heading}>
        <p className="prose">{HOME.map.body}</p>
      </SectionHead>
      <div data-reveal="scale">
        <CurriculumMap />
      </div>
    </section>
  );
}

function Method(): ReactNode {
  return (
    <section className="wrap home-method" aria-labelledby="method-h">
      <SectionHead n="03" id="method-h" title={HOME.method.heading} />
      <ol className="steps">
        {HOME.method.steps.map((s, i) => (
          <li key={s.name} className="step" data-reveal="up">
            <span className="step-n" aria-hidden="true">
              {NUM[i]}
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

function Realm({ m, slot }: { m: ModuleContent; slot: 'a' | 'b' | 'c' }): ReactNode {
  const d = useData().modules[m.id];
  return (
    <article className={`realm realm-${slot} banner`} data-module={m.id} data-reveal="up">
      <div className="realm-window">
        <RealmArt id={m.id} />
        <span className="realm-numeral" aria-hidden="true">
          {NUM[m.index - 1]}
        </span>
      </div>
      <div className="realm-body">
        <p className="label realm-name">{REALM[m.id]}</p>
        <h3 className="mod-title">
          <Link to={`/modules/${m.id}`} className="stretched">
            {m.title}
          </Link>
        </h3>
        <p className="mod-tagline">{m.tagline}</p>
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

function Realms(): ReactNode {
  return (
    <section className="wrap home-mods" aria-labelledby="mods-h">
      <SectionHead n="01" id="mods-h" title={HOME.bento.heading} />
      <div className="home-mods-grid">
        <Realm m={MODULES[0]!} slot="a" />
        <Realm m={MODULES[1]!} slot="b" />
        <Realm m={MODULES[2]!} slot="c" />
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
        <span className="section-n" aria-hidden="true">
          04
        </span>
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
      <Realms />
      <MapSection />
      <Method />
      <Ledger />
    </div>
  );
}
