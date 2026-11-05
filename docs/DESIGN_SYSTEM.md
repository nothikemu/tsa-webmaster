# Design system: the Parameter lab

The portal reads as a scientific learning lab with editorial polish: a midnight-ink ground, layered surfaces, one cool action color, one warm color held back for selection and milestones, a serif for display, a sans for reading, and short monospaced labels for numbers. Nothing is downloaded; every face is the visitor's own system font.

The redesign is **presentation only**. The persisted schema (`core/schema.ts`), the reducer and gamification rules (`core/gamification.ts`), signing, lesson ids (`a1` to `c5`) and action ids are untouched, so saved progress loads byte-identical. No persisted field was added.

## Tokens (`src/styles/tokens.css`)

| Group       | Values                                                                                        | Rule                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Ink layers  | `--bg #060a12`, `--bg-elev #0b111c`, `--fill #0e1624`, `--fill-2 #152033`, `--fill-3 #1c2a41` | Each layer is one step toward the reader: ground, band, panel, raised, pressed            |
| Text        | `--text #e9eff8`, `--text-2 #b4c0d3`, `--text-3 #8d9db4`                                      | 17:1, 11:1 and 7:1 on the ground                                                          |
| Rules       | `--line`, `--line-2`, `--line-strong #55698a`, `--line-control #7f93b3`                       | Drawn rules are quiet; control outlines meet 3:1                                          |
| Action      | `--accent #5cc8ff` with `--on-accent #04101c`                                                 | Buttons, links, focus, progress; 10:1                                                     |
| Warm        | `--amber #f2b35e`                                                                             | Selected state, milestones, the simulation tag, the current-section tab. Never decoration |
| Danger      | `--danger #ff8f6b`                                                                            | Wrong answers and destructive actions                                                     |
| Module keys | Foundations `#5cc8ff`, Synthesis `#a9b8ff`, Ethics `#f2b35e`                                  | Set once per page through `[data-module]` as `--m`; every module surface reads `--m`      |
| Type        | `--font-display` (system serif), `--font-sans`, `--font-mono`                                 | Display scale `--t-hero`, `--t-display`, `--t-h2`; body 17px; labels 13px with tracking   |
| Shape       | radii 4, 8, 12; buttons and tabs are 8px rounded rectangles                                   | Capsules appear only on dots and rings                                                    |
| Targets     | `--tap: 44px`                                                                                 | Every control is at least 44 by 44 CSS px, including the map nodes at 320px               |

Stylesheets, in import order: `tokens`, `base`, `components`, `shell`, `home`, `catalog`, `module`, `pages`.

## Layout principles

- One 1240px measure with a fluid gutter. Pages use named grid areas, with the DOM in reading order so the visual order and the tab order agree.
- Every page below 1040px collapses to a single column; split panes stack; nothing scrolls sideways at 320px or at 400% zoom.
- Each module has its own composition, set by `data-module` on the overview:
  - **Foundations:** objective, lesson sequence and badge requirements in a left column; the swarm stage dominant on the right.
  - **Synthesis:** objective, then the console stage, then the sequence and the badge; the simulation is labeled inside the instrument frame.
  - **Ethics:** the wireframe stage first, with the sequence and requirements beneath.
- Decoration is limited to rules, node maps and numbering that carry information. No gradient blobs, glow, stock imagery or filler copy.

## Which visual is built from which state

| Visual                                                     | Where                             | Reads                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Curriculum map (`ui/CurriculumMap.tsx`)                    | Home, Progress                    | Per lesson mastery (`unseen`, `seen`, `practiced`, `mastered`), whether the knowledge check and the challenge are done, and whether each badge is earned. State is shown by shape and fill (hollow, dot, half, filled with a tick), never by color alone. Every node is a link with a full label. A text summary (`MapSummary`) and legend (`MapLegend`) sit beside it |
| Module drawings (`ui/ModuleArt.tsx`)                       | Home panels, catalog              | Foundations draws the real swarm layer counts (`NODES_PER_LAYER`); Synthesis draws the four preset fingerprints from `PRESETS` and `PARAM_META`; Ethics draws the four `VULNERABILITIES` and marks the ones the learner has inspected (`modules.ethics.actions`)                                                                                                       |
| Path list (`ui/PathList.tsx`)                              | Catalog, module overview, lessons | Mastery per lesson, the current lesson, check and challenge state                                                                                                                                                                                                                                                                                                      |
| Completion bars, level ladder, XP history, streak calendar | Progress                          | `modules[id].progress`, `xp`, `xpByDay`, `activeDays` and `streak`. Charts are HTML with a text summary; none is decorative                                                                                                                                                                                                                                            |
| Mastery heatmap                                            | Progress                          | Mastery per lesson per module, with a text label in every cell                                                                                                                                                                                                                                                                                                         |
| Badge requirement lists                                    | Module overview, Achievements     | One hook, `useBadgeProgress`, feeds the module page, the Achievements page and the summary line. It uses the engine's own thresholds (`BADGE_LESSON_RATIO`, `BADGE_QUIZ_MIN`) and the same inputs as `isBadgeEarned`, so the three places cannot disagree                                                                                                              |
| Progress hub                                               | Every page                        | Level, XP, next step and each module's percentage                                                                                                                                                                                                                                                                                                                      |

## Motion

Restrained and optional. The home page is static and the master animation loop idles when nothing animates. Transitions are short, use one easing curve (`--ease`) and animate opacity or transform only. `prefers-reduced-motion` removes them; the 3D scenes still load, and under reduced motion the scenes are built in their reduced-motion configuration.

## Failure states

- If WebGL or WebGPU cannot start, or a scene neither starts nor fails within 15 seconds, `SceneCanvas` shows an explanation, the reason, and the text alternative of the centerpiece. It never sits on a permanent loading state.
- If a lazy module chunk stalls for 15 seconds, `StageLoading` shows a message with a reload action.
- A render error is caught by the error boundary and shows a recovery page.
- Empty states state the fact plainly (for example "No XP earned in the last 14 days") and the next-step recommendation on Progress and in the hub always links to a concrete place: the first lesson for a new learner, the next lesson, check or challenge otherwise, a spaced review after three quiet days, and Achievements once all three badges are earned.

## Accessibility notes

- Landmarks: skip link, `header`, `nav` (with `aria-current` on the active section), `main`, `footer`. One `h1` per page; focus moves to it on every route change, and the new title is announced.
- Compact menu: below 880px the navigation is a disclosure button with `aria-expanded`; Escape closes it and returns focus to the button.
- Focus ring is a 3px accent outline with 3px offset on every interactive element; sticky chrome never covers the focused element (checked at desktop and mobile).
- Forms and quizzes use real fieldsets, legends and labels; feedback is announced through a polite live region.
- Every visualization has a text alternative nearby: the map summary, the chart summaries, the centerpiece description and the "Text alternative" disclosure on each stage.

## Checks

The design is covered by the existing suites (`pnpm test`, `pnpm lint`, `pnpm typecheck`, `scripts/smoke.mjs` including axe on seven routes) and by scripted browser probes run during the redesign: overflow and target-size audit at 1440, 390 and 320px, focus-not-obscured, 200% and 400% reflow, keyboard use of the menu and the progress hub, quiz and challenge flows, persistence across reload, and the WebGL-failure fallback. Real screen-reader and physical-device testing have not been done and remain on the team's checklist.
