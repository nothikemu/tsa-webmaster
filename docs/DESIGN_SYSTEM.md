# Design system: Black Ledger

Parameter looks like a manga page with a tactical HUD laid over it. The ground is off-white paper with a little grain, everything on it is drawn in navy-black ink, and red is used for emphasis only. Light paper cards carry reading; dark navy panels carry instruments, the learner's record and the footer. Depth is hatching, not blur. There are no gradients as decoration, no glow, no rounded corners and no drop-shadow blur. The reasoning, sources and what could not be checked are in [DESIGN_RESEARCH.md](DESIGN_RESEARCH.md).

## The rules, in each medium

| Medium                         | How the look is made                                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS                            | Square corners with one cut corner drawn by `.glass::after`; a 2.5px ink line; a block of 135-degree hatch lines behind each card (`--hatch`), clipped so it only shows past the card's edge; slanted buttons |
| SVG artwork (`ui/Ink.tsx`)     | An ink engine: seeded variable-width tapered brush strokes, blobs, polygons, hatching, and two SVG filters (`ink-rough` displaces edges, `ink-grain` adds paper noise). The artwork is built from these, never from stock shapes |
| 3D (GLSL and TSL)              | Flat discs with one hard shade crescent and a dark ring, paper-coloured links, red for what the learner touched, on a navy stage. The Ethics globe is three flat navy bands and a paper rim under a paper mesh |

## Tokens

All in `src/styles/tokens.css`. Components use tokens, not raw values.

| Group      | Tokens                                                                                           | Rule                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ink        | `--ink #0f1923`, `--ink-2 #3a4756`, `--ink-3 #536171`                                            | Every line and all text on paper. `--ink-3` is only for quiet text (5.2:1 on paper)                                    |
| Ground     | `--paper #ece8e1`, `--paper-2`, `--white #f6f2ea` (cards), `--parch #e6d5a8` (posters, charts)   | The page is paper, cards are lighter, posters and charts are parchment                                                 |
| HUD        | `--navy #0f1923`, `--navy-2`, `--navy-3`, `--hud-text`, `--hud-text-2`, `--hud-text-3`           | `data-surface='ink'` re-points the surface and text tokens for everything inside a dark panel                          |
| Accent     | `--red #ff4655`, `--red-lo #c4172b`, `--red-hi`                                                  | Emphasis only. `--red-lo` is the red that is dark enough to read as text on paper                                      |
| Realm      | `--m`, `--m-lo`, `--m-hi`, `--m-text`, set by `data-module`                                      | Foundations sea-blue, Synthesis gold, Ethics red. `--m-text` is the realm colour dark enough for text on paper (5.6:1 to 5.7:1) |
| Shape      | `--stroke 2.5px`, `--cut 16px`, `--shadow-off 7px`; every radius is 0                            | One cut corner, one hatch offset                                                                                        |
| Type       | `--font-display`, `--font-hud`, `--font-body`, `--font-type`; body 17px                          | See below                                                                                                              |
| Targets    | `--tap 44px`                                                                                      | Every control, including map nodes and radio inputs                                                                    |
| Motion     | `--ease-snap`, `--dur-fast 110ms`, `--dur 240ms`, `--dur-slow 560ms`                              | One fast snap curve, then stop                                                                                         |

### Type

Four typefaces, all open licences, bundled with the site and served from this origin, Latin subset only (`src/styles/fonts.css`), each with a metric-matched fallback.

| Role    | Face                                  | Licence    | Used for                                                                                   |
| ------- | ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| Display | Pirata One (blackletter)              | OFL 1.1    | Large titles only (h1, h2, poster names). Never sentences                                  |
| HUD     | Big Shoulders Display (variable)      | OFL 1.1    | Labels, buttons, numerals, small headings, in capitals, tracked out                        |
| Body    | Barlow                                | OFL 1.1    | Reading text, lesson copy, learning objectives, controls                                    |
| Type    | Special Elite (typewriter)            | Apache 2.0 | Captions, taglines, ledger and poster text                                                 |

Static (no JavaScript) pages keep headings in mixed case; the smoke test asserts the exact heading text.

### Materials (`src/styles/material.css`)

| Name    | What it is                                                                                                                                                              |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card    | `.glass`, `.panel`: a surface with a 2.5px ink line, one cut corner and an offset block of hatching. A card with a stretched link moves its hatch out when reached        |
| Button  | `.btn`: a slanted face (clip-path on a `::before`, so the element itself is unclipped and focus rings are never cut), outlined by a drop-shadow, inverting on hover      |
| Chip    | `.chip`, `.segmented`, `.stepper a`: square labels with a line; the current one is a red tab                                                                            |
| Slab    | `.slab`: a card painted in the realm colour with ink type                                                                                                               |
| Poster  | Parchment with a torn edge (`--torn`): module cards and earned achievements                                                                                             |
| HUD     | `data-surface='ink'`: a navy panel with paper text and red corner brackets: instruments, the record, the notebook, the header and footer                                |
| Marker  | `.accent-word`: one phrase per page title sits on a rough red brush stroke                                                                                              |

### Contrast

Computed token pairs: ink on paper 14.5:1, `--ink-2` 7.8:1, `--ink-3` 5.2:1 (5.7:1 on cards); paper text on navy 14.5:1, `--hud-text-2` 10.3:1, `--hud-text-3` 7.3:1; ink on red 5.3:1; `--red-lo` on paper 4.9:1; `--m-text` colours 5.6:1 to 5.7:1. `--ink-3` on parchment is only 4.4:1, so quiet text on posters uses `--ink-2` (6.5:1). Red and gold are never used as small text on paper; the darker `--red-lo` and `--gold-lo` are. The rendered-pixel contrast probe (which measures the pixels behind every text run) is the check that matters, and its results are recorded in the commit that introduced this identity.

## Which visual is built from which state

| Visual                                        | Where                      | Reads                                                                                                                                                                                       |
| --------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The flag (`ui/Flag.tsx`)                      | Home                       | A skull-and-crossbones on a ragged flag. Tally marks count lessons opened (first group) and mastered (second), out of the course total. The label gives the same numbers as text            |
| The record (`pages/Home.tsx`)                 | Home                       | Level, XP toward the next level, streak, overall percentage, each module's percentage and the next step, as text and meters                                                                 |
| Realm posters (`ui/RealmArt.tsx`)             | Home, catalog, overview    | Foundations: a sea chart whose islands are the swarm's real layer sizes, X marks as modules progress. Synthesis: a pen on a ruled page, lines from the mean of applied presets, ink drops for presets. Ethics: an eye with four corner rings crossed out as vulnerabilities are inspected |
| Curriculum map (`ui/CurriculumMap.tsx`)       | Home, Progress             | A sea chart: per-lesson mastery, check and challenge done, badge earned. State is shape and fill, never colour alone; every node is a link with a full label; a text summary and legend sit beside it |
| Verdict (`ui/Verdict.tsx`)                    | Knowledge check, challenge | A ledger page with a rubber stamp: CLEARED in red or NOT YET in ink, and a tally of the score                                                                                                |
| Badges (`src/assets/badges/*.svg`)            | Overview, Achievements     | Torn parchment wanted posters, one per module. Locked is grey; an earned dossier on Achievements is a parchment poster                                                                      |
| Bars, XP history, calendar, heatmap           | Progress                   | `modules[id].progress`, `xpByDay`, `activeDays`, `streak`, per-lesson mastery. Calendar cells are an empty box, a third, two thirds and a full block: the fill, not the hue, says which   |

## 3D scenes

The swarm is flat discs on point sprites (opaque, depth-tested, alpha to coverage on an MSAA canvas) with thin paper-coloured links; touched or displaced discs turn red. The Ethics sphere is three flat navy bands with a paper rim under a paper wireframe; the marker deformations and the warning colour (red) still come from the vertex shader. The stage is flat navy `#0b131b`. There is no bloom, aberration or grain, and the post-processing library is not a dependency.

## Motion

Everything below is an enhancement, started by `ui/fx.ts` only when motion is welcome (`html[data-fx='on']`). With reduced motion the page is complete and still.

| Effect          | How                                                                                                         | Limits                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Reveals         | `data-reveal` elements slide up 28px on the snap curve                                                      | CSS hides them only while `data-fx='on'`; print shows everything |
| Page changes    | A quick wipe from the left (clip-path on the new page); header and hub keep their own transition names       | Used when the browser has `startViewTransition`                |
| Headline        | Each line rises out of a mask                                                                               | On load only                                                   |
| Navigation tab  | One red slanted block slides to the item under the pointer or focus and rests on the current section        | First placement is instant                                     |
| Stamp           | The verdict stamp lands once                                                                                | Static under reduced motion                                    |
| Loading         | An ink square turning a quarter at a time, like a cel flipping                                               | The pre-rendered page replaces it after 1.4 seconds at the latest |

## Layout principles

- One 1280px measure with a fluid gutter. The DOM is in reading order, so the visual order and the tab order agree.
- Below 1040px every page collapses to a single column; nothing scrolls sideways at 320px or at 400% zoom.
- Each module has its own composition, set by `data-module` on the overview: Foundations (objective and sequence beside the swarm stage), Synthesis (objective, the wide console, then sequence and badge) and Ethics (the sphere first, reading on the right). The title banner is a navy HUD panel with a slanted stripe in the realm colour and the realm's poster, turned a little, on the right.
- Lessons are read on a paper card beside the instrument. Reference pages are one ruled sheet (with a double red margin line, as in a ledger) beside a contents rail.

## Failure states

- If WebGL or WebGPU cannot start, or a scene neither starts nor fails within 15 seconds, `SceneCanvas` shows an explanation, the reason, and the text alternative of the centerpiece. It never sits on a permanent loading state.
- If a lazy module chunk stalls for 15 seconds, `StageLoading` shows a message with a reload action.
- A render error is caught by the error boundary and shows a recovery page.
- Empty states state the fact plainly and the next-step recommendation always links to a concrete place.

## Accessibility notes

- Landmarks: skip link, `header`, `nav` (with `aria-current` on the active section), `main`, `footer`. One `h1` per page; focus moves to it on every route change, and the new title is announced.
- Compact menu: below 880px the navigation is a disclosure button with `aria-expanded`; Escape closes it and returns focus to the button.
- Focus ring is a 3px dark red (`#c4172b`) outline with a 3px offset on paper; pale red on the navy HUD; ink on painted panels. No element is clipped, so the ring is never cut off.
- State is never carried by colour alone: shape, word, tally, stamp or position as well. A wrong answer is marked in words and a pattern as well as colour; a right answer has a filled marker and the written word.
- Every visualization has a text alternative nearby: the flag's label, the record, the map summary, the chart summaries, the centerpiece description and the "Text alternative" disclosure on each stage. Decorative layers are `aria-hidden`.

## Checks

The existing suites (`pnpm test`, `pnpm lint`, `pnpm typecheck`, `scripts/smoke.mjs` including axe on seven routes) and scripted browser probes: the rendered-pixel contrast probe, an overflow and target-size audit at 1440, 390 and 320px, an axe sweep across 17 routes in three saved states, focus-not-obscured, reflow at six widths, quiz and challenge flows, persistence, and the WebGL-failure fallback. Real screen-reader and physical-device testing have not been done and remain on the team's checklist.
