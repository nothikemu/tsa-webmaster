# Design system: the Parameter aero lab

Parameter looks like a small, luminous research lab from a future that was imagined in 2002 and built in 2026. The ground is ultraviolet ink. Light comes from inside it: aqua, orchid and acid lime. Surfaces are tinted glass with a pearlescent edge, primary actions are glossy gel capsules, headlines are wide and round, and one word per headline is set in an italic serif. A slow liquid field moves behind the page.

The redesign is **presentation only**. The persisted schema (`core/schema.ts`), the reducer and gamification rules (`core/gamification.ts`), signing, lesson ids (`a1` to `c5`) and action ids are untouched, so saved progress loads byte-identical. No persisted field was added.

## Four influences, and where each one shows

| Influence     | What was taken                                                                                                                             | Where it appears                                                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Y2K futurism  | Gel buttons, chrome type, a glass sphere as the mark, four-point sparks, viewfinder crop marks, a marquee of terms                         | Primary buttons and the selected state of every control (`.btn`, `.segmented`, `.chip`), the wordmark glyph and favicon, the footer wordmark, `.spark`, the corner marks on every 3D frame, the term marquee on Home |
| Acidwave      | Acid lime against aqua and orchid, pearlescent gradients, the signal-lock headline reveal                                                  | `--acid` is the go color and the only fill that is not cool; the pearl gradient on numerals, the XP bars and slider fills; the hero lines rising out of a mask                                                       |
| K-design      | A strict grid with deliberate asymmetry, small mono labels in capitals, numbered sections, an italic serif accent, restraint with ornament | Section numbers match the navigation (01 Modules, 02 Progress, 03 Achievements, 04 Glossary, 05 About), `.label`, `.accent-word`, the stepped module catalog, the offset method cards                                |
| Frutiger Aero | Glass, liquid, soft reflections, atmospheric depth                                                                                         | `.glass` panes, the liquid-level orb on Home, the aurora and the live field, the specular highlights on buttons, orbs and badges                                                                                     |

Avoided on purpose: a perspective grid floor, neon outlines, a dashboard of identical cards, stock imagery, glow used as decoration. Glow means state (a completed node, the current section, the best day).

## Typefaces (`src/styles/fonts.css`)

Bundled, SIL OFL 1.1, Latin subset, served from this origin (the CSP stays `font-src 'self'`). Each has a metric-matched local fallback so the swap does not shift layout.

| Role    | Face                      | Used for                                                                            |
| ------- | ------------------------- | ----------------------------------------------------------------------------------- |
| Display | Unbounded (variable)      | h1, h2, numerals, the wordmark. Set with -0.04em tracking; never below about 1.1rem |
| Reading | Hanken Grotesk (variable) | Body, controls, h3 and h4                                                           |
| Accent  | Instrument Serif, italic  | One word per headline, module taglines, the learning objective                      |
| Labels  | Geist Mono (variable)     | Short labels in capitals, coordinates, numerals in tables                           |

## Tokens (`src/styles/tokens.css`)

| Group      | Values                                                                                                          | Rule                                                                                                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ink layers | `--bg #06051a`, `--bg-elev #0a0928`, `--fill #0d0c2b`, `--fill-2 #15143c`, `--fill-3 #1e1c50`                   | Each layer is one step toward the reader                                                                                                                                                                  |
| Text       | `--text #f6f3ff`, `--text-2 #cfcaf0`, `--text-3 #b4afdb`                                                        | 18:1, 13:1 and 9.3:1 on the ground                                                                                                                                                                        |
| Light      | `--acid #c8ff4a`, `--aqua #5cf1ff`, `--orchid #ff74dc`, `--ultra #b3a5ff`, `--amber #ffc16e`, `--coral #ff8d7c` | Acid is the primary action and mastery; aqua is links, focus and Foundations; orchid is Ethics; ultra is Synthesis; amber is only the simulation tag; coral is only wrong answers and destructive actions |
| Materials  | `--pearl`, `--chrome`, `--gel`, `--glass`, `--glass-strong`, `--glass-edge`, `--shadow-glass`                   | One recipe for each; components never invent their own                                                                                                                                                    |
| Shape      | radii 8, 14, 24, 34; capsule 999px                                                                              | Buttons, tabs, chips and the header are capsules; panels are 24 or 34                                                                                                                                     |
| Type scale | `--t-hero` to `--t-h3`, body 17px, label 12px                                                                   | Fluid with `clamp()`; the page title is `clamp(1.75rem, 8.2vw, 5.75rem)` so the longest word fits at 320px                                                                                                |
| Targets    | `--tap: 44px`                                                                                                   | Every control, including the map nodes at 320px                                                                                                                                                           |

### Contrast

Measured two ways. The token pairs were computed against the ground, each panel layer and a worst-case ambient tint (`#2a2766`): text 12:1, text-2 8.5:1, text-3 6.2:1 at worst; acid 11:1, aqua 9.8:1, orchid 5.6:1, ultra 6.2:1. Then a probe measured the rendered page: it hides all text, screenshots the viewport at every scroll position, and compares the pixels under each text run with that run's real color, so glass, gradients and blur are included. Result at 1440 and 390px across all 14 routes: no text below 4.5:1 (3:1 for large text) except labels on controls that are disabled, which WCAG exempts and which are drawn at 6:1 anyway.

## Layout principles

- One 1280px measure with a fluid gutter. Pages use named grid areas, with the DOM in reading order so the visual order and the tab order agree.
- Every page below 1040px collapses to a single column; split panes stack; nothing scrolls sideways at 320px or at 400% zoom.
- Each module has its own composition, set by `data-module` on the overview: Foundations (reading column, swarm stage dominant), Synthesis (objective, then the wide console, then sequence and badge) and Ethics (the wireframe stage first, reading on the right).

## Which visual is built from which state

| Visual                                                        | Where                   | Reads                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The vessel (`pages/Home.tsx`)                                 | Home                    | Three rings, one per module, each filled to `modules[id].progress` with a bead at the end; inside, a glass sphere whose liquid stands at the overall percentage. The same numbers are written in the record beside it           |
| Curriculum map (`ui/CurriculumMap.tsx`)                       | Home, Progress          | Per lesson mastery, check and challenge done, badge earned. State is shape and fill (hollow, dot, half, filled with a tick), never color alone; every node is a link with a full label; a text summary and legend sit beside it |
| Module drawings (`ui/ModuleArt.tsx`)                          | Home, catalog, overview | Foundations draws the real swarm layer counts; Synthesis draws the four preset fingerprints; Ethics draws the four vulnerabilities and marks the ones inspected                                                                 |
| Path list (`ui/PathList.tsx`)                                 | Catalog, overview       | Mastery per lesson, the current lesson, check and challenge state                                                                                                                                                               |
| Completion bars, XP history, streak calendar, mastery heatmap | Progress                | `modules[id].progress`, `xpByDay`, `activeDays`, `streak`, per-lesson mastery. Charts are HTML with a text summary                                                                                                              |
| Badge requirement lists                                       | Overview, Achievements  | `useBadgeProgress`, one hook for both pages, using the engine's thresholds                                                                                                                                                      |
| Progress hub                                                  | Every page              | Level, XP, next step and each module's percentage                                                                                                                                                                               |

## Motion

Everything below is an enhancement, started by `ui/fx.ts` only when motion is welcome (`html[data-fx='on']`). With reduced motion the page is complete and still.

| Effect              | How                                                                                                                                                             | Limits                                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page changes        | A view transition: the old page lifts and blurs out while the new one rises in. The header, hub and background keep their own transition names so they stay put | Used when the browser has `startViewTransition`; the next page's code is fetched first for at most half a second; the last of several quick clicks wins; Back is immediate |
| Scroll reveals      | `data-reveal` elements rise in as they enter, staggered when several arrive together                                                                            | CSS hides them only while `data-fx='on'`; printing reveals everything                                                                                                      |
| Headline            | Each line rises out of a mask                                                                                                                                   | On load only                                                                                                                                                               |
| Pointer light       | `--mx`/`--my` per pane drive a soft spotlight; `--px`/`--py` on the root move the aurora and the vessel a few pixels                                            | Fine pointers only                                                                                                                                                         |
| Magnetic buttons    | A button leans up to 7px toward a pointer within 64px                                                                                                           | Fine pointers only                                                                                                                                                         |
| Navigation glide    | One glass pane slides to the item under the pointer or focus and rests on the current section                                                                   | First placement is instant                                                                                                                                                 |
| Live background     | One fragment shader on a low-resolution canvas, scroll and pointer aware                                                                                        | Frozen on pages with a 3D scene, under reduced motion and on quality tier 0; marked heavy so the quality governor sees it; without WebGL the CSS aurora is the background  |
| Vessel, orb and map | Arcs draw in, liquid rises, waves drift, sparks float                                                                                                           | Static under reduced motion                                                                                                                                                |

## Failure states

- If WebGL or WebGPU cannot start, or a scene neither starts nor fails within 15 seconds, `SceneCanvas` shows an explanation, the reason, and the text alternative of the centerpiece. It never sits on a permanent loading state.
- If a lazy module chunk stalls for 15 seconds, `StageLoading` shows a message with a reload action.
- A render error is caught by the error boundary and shows a recovery page.
- The first paint is a pearl ring around a breathing glass orb, and the pre-rendered page replaces it after 1.4 seconds at the latest.
- Empty states state the fact plainly and the next-step recommendation always links to a concrete place.

## Accessibility notes

- Landmarks: skip link, `header`, `nav` (with `aria-current` on the active section), `main`, `footer`. One `h1` per page; focus moves to it on every route change, and the new title is announced.
- Compact menu: below 880px the navigation is a disclosure button with `aria-expanded`; Escape closes it and returns focus to the button.
- Focus ring is a 3px aqua outline with 3px offset on every interactive element; sticky chrome never covers the focused element.
- Disabled controls keep a readable label; state is never carried by color alone (shape, word or position as well).
- Every visualization has a text alternative nearby: the vessel's numbers in the record, the map summary, the chart summaries, the centerpiece description and the "Text alternative" disclosure on each stage. Decorative layers (the field, the sparks, the footer wordmark, the marquee) are `aria-hidden`.

## Checks

Covered by the existing suites (`pnpm test`, `pnpm lint`, `pnpm typecheck`, `scripts/smoke.mjs` including axe on seven routes) and by scripted browser probes run during the redesign: the rendered-pixel contrast probe above, an overflow and target-size audit at 1440, 390 and 320px, focus-not-obscured, 200% and 400% reflow, keyboard use of the menu and the hub, quiz and challenge flows, persistence across reload, view-transition navigation (forward, back, rapid clicks, the 3D stage staying mounted between lessons), the pointer effects, and the WebGL-failure fallback. Real screen-reader and physical-device testing have not been done and remain on the team's checklist.
