# Home page wireframe

Black ground (`#000`), elevated sections `#050507`, one mid-grey `#86868b`, white for primary text. The accent family (blue → violet → cyan) appears only on 3D elements, progress rings and focus states.

## Desktop (1440 wide)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ▣ parameter                                   Modules  Progress  Achievements  Glossary  About │ ← sticky header, 60px, blur, hairline
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
                      (◯ 38%)  ← hub pill, bottom-right, 52px tall
```

## Type and spacing

| Token | Value | Used for |
| --- | --- | --- |
| `--t-hero` | `clamp(3.4rem, 9.2vw + .4rem, 9.75rem)`, 800, -0.045em, line-height .93 | Hero headline |
| `--t-display` | `clamp(2.5rem, 5.4vw + .4rem, 5.25rem)`, 800, -0.04em | Page titles |
| `--t-h2` | `clamp(1.7rem, 2.6vw + .6rem, 3rem)`, 700, -0.035em | Section headings |
| `--t-lead` | `clamp(1.1rem, .9vw + .85rem, 1.4rem)` | Lead paragraphs |
| Micro-label | 11px mono, +0.16em tracking, uppercase, `#86868b` | `MOD 01 / FOUNDATIONS` labels |
| Numerals | `font-variant-numeric: tabular-nums` | Every readout |
| Gutter | `clamp(16px, 4vw, 48px)`; max width 1320 | Page wrapper |
| Radii | 24, 28, 32, 34, 36, 40 px (deliberately unequal) | Tiles and panels |

## Scroll choreography

| Section | Driver | Behaviour |
| --- | --- | --- |
| Hero | GSAP ScrollTrigger scrub → `--hero-p` (0 to 1) | Content pins for 70vh of scroll. Network scales up to 1.32×, layers light in sequence, headline drifts up 9vh and fades, stats and "SCROLL" fade out first |
| Strip, bento, gamification, facts | ScrollTrigger `once` at "top 90%" → class `in` | CSS reveal: 28px rise and fade over 1100 ms on `cubic-bezier(.16,1,.3,1)`, only while the motion layer runs |
| Smooth scroll | Lenis, driven by the master frame loop | Home only; off under reduced motion |
| Tiles | CSS hover | Line art drifts 6px and tints toward blue; machined edge angle rotates |
