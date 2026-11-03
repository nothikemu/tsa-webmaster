# Home page wireframe

Black ground (`#000`), elevated sections `#050507`, one mid-grey `#86868b`, white for primary text. The accent family (blue → violet → cyan) appears only on 3D elements, progress rings and focus states.

## Desktop (1440 wide)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ▣ parameter                                   Modules  Progress  Achievements  Glossary  About │ ← sticky header, 64px, hairline (static on phones)
├────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMETER / INTERACTIVE AI LEARNING PORTAL / 2026-27        ·  ·  ·  ·  ·  ·  ·          │
│                                                           ·  ╲╱  ╲╱  ╲╱  ╲╱  ·           │
│ Learn how                                              ·──╳──╳──╳──╳──╳──·    →  network  │
│      machines learn.                                    ·  ╱╲  ╱╲  ╱╲  ╱╲  ·    bleeds off │
│                                                           ·  ·  ·  ·  ·  ·       the right  │
│ Push around a 6,000-particle neural network. Tune …                                      │
│ [ Start with Foundations ]  See all modules →                                           │
│ 3 MODULES   15 LESSONS   15 CHECK QUESTIONS   0 ACCOUNTS                       SCROLL    │ ← HERO: 170vh, content pinned
├────────────────────────────────────────────────────────────────────────────────────────┤
│ YOUR PROGRESS                                                                           │
│ LEVEL 3 Gradient   XP 340   DAY STREAK 4   OVERALL 38%        NEXT  Lesson 3: Neural …  │ ← PROGRESS STRIP
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Three modules. Three different ways                                                     │
│ to touch an idea.                                                                       │
│ ┌──────────────────────────────────────────┐ ┌───────────────────┐                      │
│ │ MOD 01 / FOUNDATIONS          ·  ·  ·    │ │ MOD 02 / SYNTHESIS│                      │ ← BENTO (6 cols)
│ │                          ·──·──·──·      │ │ Synthesis         │                      │   A: cols 1-4, 2 rows, r=40
│ │ Foundations              ·──·──·──·      │ └───────────────────┘                      │   B: cols 5-6, r=28
│ │ Rules write the program…                 │ ┌───────────────────┐                      │   C: cols 5-6, r=34/28
│ └──────────────────────────────────────────┘ │ MOD 03 / ETHICS   │                      │
│        ┌─────────────────────────────────────┴───────────────────┘                      │
│        │ YOUR PROGRESS  (◯ 38%)  Lesson 3 …  Continue →               │                  │   P: cols 2-6 (off-grid start)
│        └──────────────────────────────────────────────────────────────┘                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Points for finishing,                       ┌──────────────────────────────┐            │
│ not for refreshing.                         │ THREE BADGES                 │            │ ← GAMIFICATION PREVIEW
│ XP is paid once per step …                  │  ⬡ Neural   ⬢ Prompt  ⛉ Safe │            │   copy left, badges right (locked
│ ─ Lesson seen            10                 │  Topology   Architect guard  │            │   dim; live state)
│ ─ Lesson practiced       15                 └──────────────────────────────┘            │
│ ─ …                                                                                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Built like a product, shipped as static files.                                          │
│ 1 WEBASSEMBLY MODULE │ 5 COMPUTE PATHS │ 60 FPS TARGET                                  │ ← FACTS (hairline columns)
├────────────────────────────────────────────────────────────────────────────────────────┤
│ parameter   Built for TSA Webmaster 2026-2027.   Accessibility · Credits · Glossary · About │ ← FOOTER
└────────────────────────────────────────────────────────────────────────────────────────┘
                                                                              ┌──────────┐
                                                                              │◯ LVL 3 38%│ ← floating telemetry hub
                                                                              └──────────┘
```

## Mobile (390 wide)

```
┌──────────────────────────┐
│ ▣ parameter              │
│ Modules Progress Achiev… │ ← nav wraps; no hamburger, no JS needed
├──────────────────────────┤
│ PARAMETER / INTERACTIVE… │
│ Learn how                │ 3.4rem, -0.045em
│   machines learn.        │
│ (network at 55% opacity, │
│  scaled 140vw, off-right)│
│ Push around a 6,000-…    │
│ [ Start with Foundations]│
│ See all modules →        │
│ 3 MODULES · 15 LESSONS … │
├──────────────────────────┤
│ YOUR PROGRESS (stacked)  │
├──────────────────────────┤
│ ┌──────────────────────┐ │ bento: single column, min-height 280
│ │ MOD 01 …             │ │
│ └──────────────────────┘ │
│ … B, C, progress tile …  │
├──────────────────────────┤
│ gamification (stacked),  │
│ badges stacked 1 column  │
├──────────────────────────┤
│ facts (stacked, rules    │
│ become horizontal)       │
├──────────────────────────┤
│ footer                   │
└──────────────────────────┘
                      [ LVL 1  38%  ⌃ ]  ← progress bar, full width at the bottom edge on phones; a 52px ring at the bottom right on desktop
```

## Type and spacing

Everything below lives in `apps/portal/src/styles/tokens.css`. Components read these tokens and do not invent values. Text uses the reader's system font (`ui-sans-serif, system-ui, ...`); nothing is downloaded.

| Token | Value | Used for |
| --- | --- | --- |
| `--t-hero` | `clamp(2.4rem, 10.2vw, 6.5rem)`, 700, -0.03em, line-height .98 | Hero headline (two lines at 320px with typical system fonts) |
| `--t-display` | `clamp(2.25rem, 4.4vw + .9rem, 4.5rem)`, 700, -0.03em | Page titles |
| `--t-h2` / `--t-h3` | `clamp(1.75rem, 2.2vw + 1.1rem, 2.75rem)` / `clamp(1.375rem, 1.2vw + 1.05rem, 1.75rem)` | Section and card headings |
| `--t-lead` | `clamp(1.125rem, .4vw + 1.02rem, 1.375rem)`, `--text-2` | Lead paragraphs |
| Label (`.mono`) | 12px mono, +0.1em tracking, uppercase, `--text-3` (#a1a1a6, 8:1 on black) | `MOD 01 / FOUNDATIONS` labels and short readouts only |
| Numerals | `font-variant-numeric: tabular-nums` | Every readout |
| Text colors | `--text` #f5f5f7 (19:1), `--text-2` #c7c7cc (12:1), `--text-3` #a1a1a6 (8:1) | Body, secondary, labels |
| Accent | `--accent` #6f9bff (links, focus, chart marks, 7.8:1), `--accent-solid` #2f66ee (button fill, 4.9:1 with white text) | Actions, current location, progress. Nothing else is colored |
| Warning | `--warn` #ffb14d | Destructive actions and wrong answers |
| Lines | `--line` 14% white (decoration), `--line-strong` 40% (3.7:1, tab and chip borders), `--line-control` 55% (inputs, ghost buttons) | Borders |
| Space | `--s-1` to `--s-9`: 4, 8, 12, 16, 24, 32, 48, 64, 96 px; `--section` clamp(48px, 7vw, 96px) | Gaps and padding |
| Radii | `--r-sm` 10, `--r-md` 18, `--r-lg` 28, `--r-pill` 999 px | Inputs, rows, panels, controls |
| Width | `--max` 1200px, `--measure` 64ch, `--gutter` clamp(16px, 4vw, 40px) | Page wrapper and reading column |
| Controls | `--tap` 44px minimum; focus ring `3px solid var(--accent)`, offset 3px | Every button, link target, tab, chip and slider |

## Scroll choreography

| Section | Driver | Behaviour |
| --- | --- | --- |
| Hero | GSAP ScrollTrigger scrub → `--hero-p` (0 to 1) | Only on screens at least 821px wide and 700px tall: content pins for 50svh of scroll. Network scales up to 1.32×, layers light in sequence, headline drifts up 6svh and fades, stats and "SCROLL" fade out first. On phones and short windows the hero is an ordinary section |
| Strip, bento, gamification, facts | ScrollTrigger `once` at "top 90%" → class `in` | CSS reveal: 28px rise and fade over 1100 ms on `cubic-bezier(.16,1,.3,1)`, only while the motion layer runs |
| Smooth scroll | Lenis, driven by the master frame loop | Home only; off under reduced motion |
| Tiles | CSS hover | Line art drifts 6px and tints toward blue; machined edge angle rotates |
