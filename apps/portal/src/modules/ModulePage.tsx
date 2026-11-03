import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from 'react';
import {
  challengeHref,
  getModule,
  lessonHref,
  moduleHref,
  quizHref,
  type ModuleContent,
  type ModuleId,
} from '../content';
import { t } from '../core/assets';
import { BADGE_QUIZ_MIN } from '../core/gamification';
import { Link } from '../router';
import { Eyebrow } from '../ui/Chrome';
import { Badge } from '../ui/Badges';
import { useData } from '../ui/hooks';
import { Challenge } from './shared/Challenge';
import { ErrorBoundary } from './shared/ErrorBoundary';
import { LessonReader, MasteryPill } from './shared/LessonReader';
import { Quiz } from './shared/Quiz';
import { useBadgeProgress } from './shared/badgeRows';

export type ModuleView =
  { kind: 'overview' } | { kind: 'lesson'; n: number } | { kind: 'quiz' } | { kind: 'challenge' };

type Stage = LazyExoticComponent<ComponentType<{ module: ModuleContent }>>;

const STAGES: Record<ModuleId, Stage> = {
  foundations: lazy(() => import('./ModuleA/ModuleA')),
  synthesis: lazy(() => import('./ModuleB/ModuleB')),
  ethics: lazy(() => import('./ModuleC/ModuleC')),
};

function Tabs({ module, view }: { module: ModuleContent; view: ModuleView }): ReactNode {
  const data = useData().modules[module.id];
  const current = (k: string): 'page' | undefined =>
    (k === 'overview' && view.kind === 'overview') ||
    (k === 'quiz' && view.kind === 'quiz') ||
    (k === 'challenge' && view.kind === 'challenge')
      ? 'page'
      : undefined;
  return (
    <nav aria-label={t('module.sections')} className="module-tabs">
      <ul>
        <li>
          <Link to={moduleHref(module.id)} aria-current={current('overview')}>
            {t('module.overview')}
          </Link>
        </li>
        {module.lessons.map((l, i) => (
          <li key={l.id}>
            <Link
              to={lessonHref(module.id, i + 1)}
              aria-current={view.kind === 'lesson' && view.n === i + 1 ? 'page' : undefined}
              data-state={data.lessons[l.id] ?? 'unseen'}
              aria-label={t('module.lessonTab', {
                n: i + 1,
                title: l.title,
                state: t(`mastery.${data.lessons[l.id] ?? 'unseen'}`),
              })}
            >
              <span className="num">{i + 1}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={quizHref(module.id)}
            aria-current={current('quiz')}
            data-state={data.quiz.best >= BADGE_QUIZ_MIN ? 'mastered' : 'unseen'}
          >
            {t('module.check')}
          </Link>
        </li>
        <li>
          <Link
            to={challengeHref(module.id)}
            aria-current={current('challenge')}
            data-state={data.challenge.done ? 'mastered' : 'unseen'}
          >
            {t('module.challenge')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/** A filled circle with a tick for a met requirement, an empty circle for an open one. Shape, not color, carries the state. */
function RequirementMark({ done }: { done: boolean }): ReactNode {
  return (
    <svg className="req-mark" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {done ? (
        <>
          <circle cx="10" cy="10" r="9" fill="currentColor" />
          <path
            d="M5.8 10.4l2.9 2.9 5.5-5.9"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}

export function BadgeChecklist({ module }: { module: ModuleContent }): ReactNode {
  const { rows } = useBadgeProgress(module);
  return (
    <ul className="requirements">
      {rows.map((r) => (
        <li key={r.label} data-done={r.done}>
          <RequirementMark done={r.done} />
          <span>{r.label}</span>
          <span className="sr-only">{r.done ? t('check.done') : t('check.todo')}</span>
        </li>
      ))}
    </ul>
  );
}

/** One line under the tabs: how close the badge is, with a way to the full list when it is not already on screen. */
function BadgeProgressLine({
  module,
  view,
}: {
  module: ModuleContent;
  view: ModuleView;
}): ReactNode {
  const { done, total, earned } = useBadgeProgress(module);
  return (
    <div className="badge-progress">
      <p>
        {earned
          ? t('module.badge', { name: module.badge.name }) + ': ' + t('ach.earned')
          : t('module.badgeProgress', { name: module.badge.name, done, total })}
      </p>
      {view.kind !== 'overview' && (
        <Link to={moduleHref(module.id)} className="link-arrow">
          {t('module.seeRequirements')}
        </Link>
      )}
      <a href="#interactive" className="link-arrow jump-link">
        {t('module.jump')}
      </a>
    </div>
  );
}

function Overview({ module }: { module: ModuleContent }): ReactNode {
  const data = useData().modules[module.id];
  return (
    <div className="overview">
      <section aria-labelledby="obj-h">
        <h2 id="obj-h" className="mono sub">
          {t('module.objective')}
        </h2>
        <p className="prose lead-sm">{module.objective}</p>
      </section>
      <section aria-labelledby="lessons-h">
        <h2 id="lessons-h" className="mono sub">
          {t('module.lessons')}
        </h2>
        <ol className="lesson-cards">
          {module.lessons.map((l, i) => (
            <li key={l.id}>
              <Link to={lessonHref(module.id, i + 1)} className="lesson-card">
                <span className="num lesson-card-n">{i + 1}</span>
                <span className="lesson-card-body">
                  <span className="mono">{l.kicker}</span>
                  <span className="lesson-card-title">{l.title}</span>
                </span>
                <MasteryPill state={data.lessons[l.id] ?? 'unseen'} />
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="badge-h" className="badge-section">
        <div>
          <h2 id="badge-h" className="mono sub">
            {t('module.badge', { name: module.badge.name })}
          </h2>
          <BadgeChecklist module={module} />
        </div>
        <Badge module={module.id} unlocked={data.badge} size={140} />
      </section>
    </div>
  );
}

export function ModulePage({ id, view }: { id: ModuleId; view: ModuleView }): ReactNode {
  const module = getModule(id);
  const Stage = STAGES[id];
  const lesson = view.kind === 'lesson' ? module.lessons[view.n - 1] : undefined;
  const heading =
    view.kind === 'quiz'
      ? t('quiz.pageTitle', { title: module.title })
      : view.kind === 'challenge'
        ? module.challenge.title
        : view.kind === 'lesson' && lesson
          ? lesson.title
          : module.title;

  return (
    <div className="wrap module-page" data-module={id}>
      <header className="module-head">
        <Eyebrow>
          {module.label} / {module.themeSection.toUpperCase()}
        </Eyebrow>
        <h1 className="display">{heading}</h1>
        <p className="lead">
          {view.kind === 'overview' ? module.tagline : module.title + ' / ' + module.tagline}
        </p>
        <Tabs module={module} view={view} />
        <BadgeProgressLine module={module} view={view} />
      </header>
      <div className="module-grid">
        <div className="module-panel-col">
          {view.kind === 'overview' && <Overview module={module} />}
          {view.kind === 'lesson' && <LessonReader key={view.n} module={module} n={view.n} />}
          {view.kind === 'quiz' && <Quiz module={module} />}
          {view.kind === 'challenge' && <Challenge module={module} />}
        </div>
        <section
          className="module-stage-col"
          id="interactive"
          tabIndex={-1}
          aria-labelledby="interactive-h"
        >
          <div className="stage-caption">
            <p className="mono">{t('module.interactive')}</p>
            <h2 id="interactive-h" className="stage-caption-name">
              {module.centerpiece.name}
            </h2>
          </div>
          <ErrorBoundary
            resetKey={id}
            fallback={(reset) => (
              <div className="stage stage-failed glass" role="alert">
                <span className="mono">{t('stage.crashed')}</span>
                <span>{t('stage.crashed.body')}</span>
                <button type="button" className="btn btn-ghost" onClick={reset}>
                  {t('stage.retry')}
                </button>
              </div>
            )}
          >
            <Suspense
              fallback={
                <div className="stage" aria-busy="true">
                  <div className="stage-status">
                    <span className="stage-hairline" />
                    <span className="mono">{t('stage.loading')}</span>
                  </div>
                </div>
              }
            >
              <Stage module={module} />
            </Suspense>
          </ErrorBoundary>
        </section>
      </div>
    </div>
  );
}
