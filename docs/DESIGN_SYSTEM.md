# Design system: Signal Print

Parameter is printed and broadcast at once. From the print shop it takes flat ink colors, a hard offset shadow under every raised thing, paper grain, and a second color printed a few pixels out of register. From a broadcast interface it takes notched plates, headlines at the scale of the layout, blueprint hairlines and one flat color that carries the state of a screen. Nothing is blurred, glowing, beveled or gradient-filled.

How this identity was reached, what was studied, what could not be verified and what was abandoned is in [DESIGN_RESEARCH.md](DESIGN_RESEARCH.md). The short version: the studied sources shared a habit of flat, high-contrast shapes with one color per state, and one of them (Riot's own interface write-up) said outright that decoration with no purpose had been removed. This system keeps only decoration that carries meaning.

## Tokens

All in `src/styles/tokens.css`. Components never use a raw color or a raw size.

| Group       | Tokens                                                                                                                             | Rule                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Ground      | `--bg #0a0b10`, `--bg-elev`, `--fill`, `--fill-2`, `--fill-3`                                                                      | Five flat steps of ink. A plate is one step above the ground                                                  |
| Text        | `--text #f4f0e6`, `--text-2`, `--text-3`                                                                                           | Warm white on ink                                                                                             |
| Paper       | `--paper #efe6d2`, `--paper-2`, `--paper-3`, `--paper-ink`, `--paper-text-2`, `--paper-text-3`                                     | `[data-surface='paper']` redefines the text and fill tokens, so anything inside reads as ink on paper         |
| Signal      | `--signal #ff6a1f`                                                                                                                 | The brand: primary actions, the hero slab, the current section. Text on any signal color is `--ink-on #0a0b10` |
| Realms      | `--m-foundations #2cd5f4` (cyan), `--m-synthesis #ffd02e` (yellow), `--m-ethics #ff4f80` (pink); `--m-*-deep` for text on paper     | `data-module` sets `--m` and `--m-deep` for everything inside it. A realm color is a fill or a stroke; as text on dark only, or its `-deep` on paper |
| Danger, sim | `--crimson #ff5a64`, `--sim #c8b8ff`                                                                                               | Crimson is only wrong answers, destructive actions and the not-yet result. The simulation tag is the only lilac  |
| Shape       | `--n` (corner cut, 14px), `--n-lg` (28px), `--banner-tip`, `--offset` (hard shadow, 5px); every radius token is 0                  | Corners are square or cut. The only round things are dots and the progress ring                               |
| Type        | `--font-display`, `--font-sans`, `--font-num`; `--t-hero`, `--t-giant`, `--t-h2`, `--t-display`; body 17px, labels 13px             | Display sizes are fluid with `clamp()`; the largest words are cropped by their container on purpose           |
| Targets     | `--tap: 44px`                                                                                                                      | Every control, including the map nodes at 320px                                                               |

### Type

Three typefaces, all SIL Open Font License 1.1, bundled as `@fontsource` packages and served from this site, Latin subset only (`src/styles/fonts.css`). Each has a metric-matched local fallback so the swap does not shift the layout.

| Role    | Face                              | Used for                                                                                                |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Display | Big Shoulders Display (variable)  | Headlines, buttons, tabs, numerals, the wordmark. Capitals, tight leading, never below 1.25rem          |
| Text    | Barlow (400, 500, 600, 700, 400 italic) | Body, lessons, controls, small caps labels with 0.14em tracking                                   |
| Numbers | Barlow Condensed (600, 700)       | XP, percentages, ledger figures, chart scales                                                           |

### Shapes and materials (`src/styles/material.css`)

| Name     | What it is                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Plate    | `.glass`, `.panel`: a flat slab with one cut corner. The fill is a clipped pseudo-element, so focus rings and drop shadows are never clipped away           |
| Edge     | `.edge`: four blueprint brackets inside a plate, in the realm color                                                                                          |
| Banner   | `.banner`: a tall card with a pointed foot. The learner card on Home and the three realm cards                                                               |
| Button   | `.btn`: a flat cut-corner block that casts a hard offset shadow in the realm color. Hover lifts it 2px and lengthens the shadow; press closes the shadow to 0 |
| Slab     | `.slab`: a full-bleed field of one saturated color. Every token inside it is redefined for ink type. The hero, each module header, the next-step band, the result screen |
| Giant    | `.giant`: oversized outlined condensed type, `aria-hidden`, cropped by its edge. Hero word, footer wordmark, dossier numbers, the score behind a result      |
| Stamp    | `.stamp`: a boxed label turned a few degrees                                                                                                                 |
| Tape     | `.marquee`: a slanted yellow strip running the course's own terms                                                                                            |

### Contrast

Token pairs, computed: warm white on the ground 17:1, `--text-2` 12:1, `--text-3` 7.4:1; on the lightest plate `--text-3` is 5.9:1. Ink on signal orange 7.3:1, on cyan 11:1, on yellow 14:1, on pink 6.6:1, on crimson 6.9:1. On paper: ink 15:1, `--paper-text-2` 11:1, `--paper-text-3` 6.4:1; the `-deep` realm colors 5.5:1 to 6.6:1.

Then measured on the rendered page. A probe (`pixcontrast`) hides all text, screenshots the viewport at each scroll position and compares the pixels under every text run with that run's real color, so slabs, paper, banners and the film grain are included. Result at 1440 and 390px: across 14 routes with partial progress saved, and on Home, Modules, Progress, Achievements and Ethics with all progress complete, no text run falls below 4.5:1 (3:1 for large text). The first runs found real faults, all fixed: dark card labels inheriting slab ink, a danger button with crimson text on a crimson fill, ghost numerals showing through the text on Achievements, and a table header on paper at 4.0:1. A rotated text box was the only false alarm and was removed by rotating only the box behind the words.

## Layout principles

- One 1320px measure with a fluid gutter. The DOM is in reading order, so the visual order and the tab order agree.
- Below 1040px every page collapses to a single column; split panes stack; nothing scrolls sideways at 320px or at 400% zoom.
- Each module has its own composition, set by `data-module` on the overview: Foundations (reading column, swarm stage dominant), Synthesis (objective, the wide console, then sequence and badge) and Ethics (the wireframe stage first, reading on the right). Each module's header is a slab in its realm color.
- Lessons are read on paper (`data-surface='paper'`): ink on a warm sheet, with a bar of the realm color on its top edge. The instrument beside it stays dark.
- Reference pages (About, Accessibility, Credits) are one paper sheet beside a contents rail.

## Which visual is built from which state

| Visual                                                        | Where                   | Reads                                                                                                                                                                                                                                  |
| ------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The learner card (`pages/Home.tsx`)                           | Home                    | Level, XP, streak, overall percentage, one vertical gauge per module filled to `modules[id].progress`, and the next step. The same numbers are written as text in the card                                                          |
| Realm prints (`ui/RealmArt.tsx`)                              | Home, catalog, overview | Foundations draws the real swarm layer counts (`NODES_PER_LAYER`) and fills nodes from the bottom up to the module percentage. Synthesis draws a mixing desk with the four presets' real values marked on four faders; an applied preset is joined by a line. Ethics draws an eye in a diamond with the four vulnerabilities at its corners; an inspected one is filled |
| Curriculum map (`ui/CurriculumMap.tsx`)                       | Home, Progress          | Per lesson mastery, check and challenge done, badge earned. State is shape and fill (hollow, dot, half, filled with a tick), never color alone; every node is a link with a full label; a text summary and legend sit beside it        |
| Path list (`ui/PathList.tsx`)                                 | Catalog, overview       | Mastery per lesson, the current lesson, check and challenge state                                                                                                                                                                      |
| Result screen (`ui/Verdict.tsx`)                              | Knowledge check, challenge | The slab is the realm color with the word CLEARED, or red with NOT YET; the score is also echoed as an outlined numeral. The word, not the color, carries the state                                                               |
| Completion bars, XP history, streak calendar, mastery heatmap | Progress                | `modules[id].progress`, `xpByDay`, `activeDays`, `streak`, per-lesson mastery. Charts are HTML with a text summary; calendar cells are an empty square, a third, two thirds and a full block                                          |
| Badges (`src/assets/badges/*.svg`)                            | Overview, Achievements  | Flat emblems, one per realm. Locked is drawn in grey; earned is full color. An earned dossier on Achievements is printed in the realm color                                                                                           |
| Progress hub                                                  | Every page              | Level, XP, next step and each module's percentage                                                                                                                                                                                      |

## Motion

Everything below is an enhancement, started by `ui/fx.ts` only when motion is welcome (`html[data-fx='on']`). With reduced motion the page is complete and still. There is one easing curve and no looping ornament except the ticker.

| Effect            | How                                                                                                                                             | Limits                                                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Page changes      | A view transition: the old page steps back and dims while the new one is revealed by a slanted edge travelling left to right. Header and hub keep their own transition names | Used when the browser has `startViewTransition`; the next page's code is fetched first for at most half a second; the last of several quick clicks wins; Back is immediate |
| Scroll reveals    | `data-reveal` elements slide up 40px as they enter, staggered when several arrive together                                                      | CSS hides them only while `data-fx='on'`; printing reveals everything                                                                        |
| Headline          | Each line rises out of a mask                                                                                                                   | On load only                                                                                                                                 |
| Result screen     | The slab wipes in from the left and the state word slams in                                                                                     | Once, when the result appears                                                                                                                |
| Buttons           | Lift on hover, close their shadow on press; lean up to 7px toward a pointer within 64px                                                         | Magnetic lean on fine pointers only                                                                                                          |
| Navigation tab    | One orange trapezoid slides to the item under the pointer or focus and rests on the current section                                             | First placement is instant                                                                                                                   |
| Gauges, ticker    | Gauges rise once on load; the term tape scrolls                                                                                                 | Static under reduced motion                                                                                                                  |

There is no live background. The ground is two static layers: a blueprint of hairlines every 120px and a few percent of paper grain.

## Failure states

- If WebGL or WebGPU cannot start, or a scene neither starts nor fails within 15 seconds, `SceneCanvas` shows an explanation, the reason, and the text alternative of the centerpiece. It never sits on a permanent loading state.
- If a lazy module chunk stalls for 15 seconds, `StageLoading` shows a message with a reload action.
- A render error is caught by the error boundary and shows a recovery page.
- The first paint is an orange diamond turning beside a filling bar, and the pre-rendered page replaces it after 1.4 seconds at the latest.
- Empty states state the fact plainly and the next-step recommendation always links to a concrete place.

## Accessibility notes

- Landmarks: skip link, `header`, `nav` (with `aria-current` on the active section), `main`, `footer`. One `h1` per page; focus moves to it on every route change, and the new title is announced.
- Compact menu: below 880px the navigation is a disclosure button with `aria-expanded`; Escape closes it and returns focus to the button.
- Focus ring is a 3px white outline with a 3px offset and a dark halo (ink on paper) on every interactive element; sticky chrome never covers the focused element. Plates are never clipped on the element itself, only on a pseudo-element, so the ring is never cut off.
- Disabled controls keep a readable label; state is never carried by color alone (shape, word, hatch or position as well). A wrong answer is hatched as well as red; a right answer is a solid field with ink type and the written word.
- Every visualization has a text alternative nearby: the learner card's numbers, the map summary, the chart summaries, the centerpiece description and the "Text alternative" disclosure on each stage. Decorative layers (giant words, the ticker, halftone, the hero word) are `aria-hidden`.

## Checks

Covered by the existing suites (`pnpm test`, `pnpm lint`, `pnpm typecheck`, `scripts/smoke.mjs` including axe on seven routes) and by scripted browser probes run during the redesign: the rendered-pixel contrast probe above, an overflow and target-size audit at 1440, 390 and 320px, an axe sweep across 17 routes in three saved states, focus-not-obscured, 200% and 400% reflow, keyboard use of the menu and the hub, quiz and challenge flows, persistence across reload, view-transition navigation, and the WebGL-failure fallback. Real screen-reader and physical-device testing have not been done and remain on the team's checklist.
