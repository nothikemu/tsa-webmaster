import type { CSSProperties, ReactNode } from 'react';
import { HOME, REALM } from '../content/site';
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
import { Flag } from '../ui/Flag';
import { Track } from '../ui/ModuleArt';
import { RealmArt } from '../ui/RealmArt';
import { useData, useOverall, useRecommendation } from '../ui/hooks';

/** The record: level, XP toward the next level, streak, overall progress, each module's own percentage, and the next step. */
function Record(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const rec = useRecommendation();
  const level = levelInfo(data.xp);
  const toNext = Math.max(0, level.span - level.into);
  const cells = 20;
  const filled = Math.round(level.fraction * cells);
  return (
    <aside
      className="wrap record"
      data-surface="ink"
      aria-label={t('home.record')}
      data-reveal="up"
    >
      <div className="record-rank">
        <span className="rank-n num" aria-hidden="true">
          {String(level.level).padStart(2, '0')}
        </span>
        <div>
          <p className="label">{t('home.level')}</p>
          <p className="rank-name">{level.name}</p>
        </div>
      </div>
      <div className="record-xp">
        <p className="record-line">
          <span className="num">{data.xp.toLocaleString('en-US')}</span> XP
          <span className="dot" aria-hidden="true" />
          <span className="num">{data.streak.current}</span> {t('home.streak').toLowerCase()}
          <span className="dot" aria-hidden="true" />
          <span className="num">{overall}%</span> {t('home.overall').toLowerCase()}
        </p>
        <div
          className="xp-meter"
          role="img"
          aria-label={t('hub.toNext', { xp: toNext, level: level.level + 1 })}
        >
          {Array.from({ length: cells }, (_, i) => (
            <i key={i} data-on={i < filled} />
          ))}
        </div>
      </div>
      <ul className="record-mods">
        {MODULES.map((m) => (
          <li key={m.id} data-module={m.id}>
            <span className="swatch" aria-hidden="true" />
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

function Hero(): ReactNode {
  const rec = useRecommendation();
  const started = rec.kind !== 'start';
  // The headline is set in lines; the last word of the last line sits on the yellow marker.
  const [first, ...rest] = HOME.headline;
  const tail = (rest.join(' ') || '').split(' ');
  const accent = tail.pop() ?? '';
  const lines = [first, tail.join(' ')].filter((l): l is string => !!l);
  return (
    <section className="wrap home-hero" aria-labelledby="hero-h">
      <div className="hero-copy">
        <p className="tag" data-reveal="fade">
          {HOME.kicker}
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
      <figure className="hero-art glass" data-reveal="scale">
        <Flag />
      </figure>
    </section>
  );
}

function SectionHead({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: ReactNode;
}): ReactNode {
  return (
    <div className="section-head" data-reveal="up">
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
      <SectionHead id="map-h" title={HOME.map.heading}>
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
      <div className="notebook" data-surface="ink" data-reveal="up">
        <h2 id="method-h" className="h2">
          {HOME.method.heading}
        </h2>
        <ol className="steps">
          {HOME.method.steps.map((s, i) => (
            <li key={s.name} className="step">
              <span className="step-n num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const minutes = (m: ModuleContent): number => m.lessons.reduce((a, l) => a + l.minutes, 0);

function Realm({ m, slot }: { m: ModuleContent; slot: 'a' | 'b' | 'c' }): ReactNode {
  const d = useData().modules[m.id];
  return (
    <article className={`realm realm-${slot}`} data-module={m.id} data-reveal="up">
      <div className="realm-sheet">
        <p className="poster-head label">{t('home.module', { n: m.index })}</p>
        <div className="realm-window">
          <RealmArt id={m.id} />
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
      </div>
    </article>
  );
}

function Realms(): ReactNode {
  return (
    <section className="wrap home-mods" aria-labelledby="mods-h">
      <SectionHead id="mods-h" title={HOME.bento.heading} />
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
      <Record />
      <Realms />
      <Method />
      <MapSection />
      <Ledger />
    </div>
  );
}
