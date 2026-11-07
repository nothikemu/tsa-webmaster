import type { ReactNode } from 'react';
import { MODULES } from '../content';
import { t } from '../core/assets';
import { masteryRank } from '../core/schema';
import { blob, brush, hatch, InkDefs, poly, rng, type P } from './Ink';
import { useData, useOverall } from './hooks';

/**
 * The flag: the portal's emblem, drawn as ink on a manga splash page. A black flag on a mast, a skull and
 * crossed bones on it, a red ink splash and speed lines behind it.
 *
 * Along the foot of the flag is a tally, three groups of five marks, one group for each module and one
 * mark for each lesson, the way a prisoner counts days: a lesson you have opened is cut in white, one you
 * have mastered is cut in red, one you have not opened is a faint dotted mark. The numbers are written
 * in the label as well.
 */
const INK = '#0f1923';
const BONE = '#efe9dc';
const RED = '#ff4655';

const top = (x: number): number => 96 + 15 * Math.sin(x / 62 + 0.4) - (x - 110) * 0.06;
const bot = (x: number): number => 428 + 19 * Math.sin(x / 58 + 1.1) - (x - 110) * 0.05;

function cloth(): string {
  const xs: number[] = [];
  for (let x = 112; x <= 566; x += 14) xs.push(x);
  const upper = xs.map((x): P => [x, top(x)]);
  const lower = xs.map((x): P => [x, bot(x)]).reverse();
  const tail: P[] = [
    [582, (top(582) + bot(582)) / 2 - 150],
    [526, (top(566) + bot(566)) / 2],
    [582, (top(582) + bot(582)) / 2 + 150],
  ];
  const pts: P[] = [...upper, [586, top(586)], tail[1]!, [586, bot(586)], ...lower];
  return `M${pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join('L')}Z`;
}

const HALF: P[] = [
  [0, -96],
  [34, -93],
  [64, -80],
  [84, -52],
  [92, -18],
  [88, 14],
  [76, 38],
  [70, 52],
  [60, 58],
  [56, 74],
  [48, 88],
  [38, 98],
];
const OUTLINE: P[] = [
  ...HALF,
  [0, 102],
  ...HALF.slice(1)
    .reverse()
    .map(([x, y]): P => [-x, y]),
];
const EYE_R: P[] = [
  [12, 2],
  [30, -6],
  [68, -30],
  [72, 2],
  [52, 36],
  [26, 30],
];
const EYE_L: P[] = EYE_R.map(([x, y]): P => [-x, y]);
const NOSE: P[] = [
  [0, 40],
  [-11, 60],
  [-5, 68],
  [0, 62],
  [5, 68],
  [11, 60],
];

function Bone({ a, b }: { a: P; b: P }): ReactNode {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;
  const knobs = [a, b].flatMap(([x, y], i) =>
    [-1, 1].map((s) => (
      <circle
        key={`${i}${s}`}
        cx={x + nx * 12 * s}
        cy={y + ny * 12 * s}
        r="14"
        fill={BONE}
        stroke={INK}
        strokeWidth="3"
      />
    )),
  );
  return (
    <g>
      <line
        x1={a[0]}
        y1={a[1]}
        x2={b[0]}
        y2={b[1]}
        stroke={INK}
        strokeWidth="30"
        strokeLinecap="round"
      />
      <line
        x1={a[0]}
        y1={a[1]}
        x2={b[0]}
        y2={b[1]}
        stroke={BONE}
        strokeWidth="24"
        strokeLinecap="round"
      />
      {knobs}
      <line
        x1={a[0] + nx * 4}
        y1={a[1] + ny * 4}
        x2={b[0] + nx * 4}
        y2={b[1] + ny * 4}
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export function Flag(): ReactNode {
  const data = useData();
  const overall = useOverall();
  const lessons = MODULES.map((m) =>
    m.lessons.map((l) => masteryRank(data.modules[m.id].lessons[l.id] ?? 'unseen')),
  );
  const opened = lessons.flat().filter((r) => r >= 1).length;
  const mastered = lessons.flat().filter((r) => r >= 3).length;
  const total = lessons.flat().length;

  const r = rng(21);
  const speed = Array.from({ length: 64 }, (_, i) => {
    const ang = (i / 64) * Math.PI * 2 + (r() - 0.5) * 0.08;
    const r0 = 215 + r() * 70;
    const r1 = r0 + 70 + r() * 150;
    const c: P = [330, 262];
    return brush(
      [
        [c[0] + Math.cos(ang) * r0, c[1] + Math.sin(ang) * r0],
        [c[0] + Math.cos(ang) * r1, c[1] + Math.sin(ang) * r1],
      ],
      { w: 1 + r() * 1.8, seed: i + 5, wobble: 0.4, taper: 0.5 },
    );
  });
  const splash: P[] = Array.from({ length: 22 }, (_, i) => {
    const ang = (i / 22) * Math.PI * 2;
    const rr = (i % 2 ? 190 : 232) * (0.88 + r() * 0.2);
    return [330 + Math.cos(ang) * rr * 1.05, 262 + Math.sin(ang) * rr * 0.92];
  });
  const drops = Array.from({ length: 16 }, (_, i) => ({
    x: 330 + (r() - 0.5) * 560,
    y: 262 + (r() - 0.5) * 500,
    r: 2 + r() * 5,
    k: i,
  }));

  const folds = [0, 1, 2, 3].map((k) => {
    const x0 = 160 + k * 112;
    const pts: P[] = [0, 1, 2, 3, 4].map((j): P => [
      x0 + 26 * Math.sin(j * 1.3 + k),
      top(x0) + 6 + j * 80,
    ]);
    return pts;
  });

  return (
    <svg
      className="flag-art"
      viewBox="0 0 640 560"
      role="img"
      aria-label={t('art.flag', { opened, total, mastered, p: overall })}
      focusable="false"
    >
      <defs>
        <InkDefs />
        <clipPath id="flag-cloth">
          <path d={cloth()} />
        </clipPath>
        <clipPath id="flag-skull">
          <path d={blob(OUTLINE, { seed: 3, rough: 0.8 })} />
        </clipPath>
      </defs>

      <rect width="640" height="560" fill="#e6d5a8" />
      {/* Behind everything: a red ink splash and speed lines. */}
      <path d={blob(splash, { seed: 11, rough: 5 })} fill={RED} filter="url(#ink-rough)" />
      {drops.map((d) => (
        <circle key={d.k} cx={d.x} cy={d.y} r={d.r} fill={RED} />
      ))}
      <g fill={INK} opacity="0.85">
        {speed.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* The mast and its finial. */}
      <path
        d={brush(
          [
            [96, 30],
            [100, 200],
            [104, 548],
          ],
          { w: 12, seed: 8, wobble: 1, taper: 0.06 },
        )}
        fill={INK}
      />
      <circle cx="96" cy="26" r="10" fill={INK} />

      {/* The flag. */}
      <g filter="url(#ink-rough)">
        <path d={cloth()} fill={INK} />
      </g>
      <g clipPath="url(#flag-cloth)">
        {folds.map((f, k) => {
          const next = folds[k + 1];
          if (!next || k % 2) return null;
          const d = `M${f.map((p) => `${p[0]} ${p[1]}`).join('L')}L${[...next]
            .reverse()
            .map((p) => `${p[0]} ${p[1]}`)
            .join('L')}Z`;
          return <path key={k} d={d} fill="#1b2a3a" />;
        })}
        <path
          d={hatch({ x: 112, y: 90, w: 470, h: 360 }, 62, 11, { seed: 4, width: 1, cover: 0.5 })}
          fill="#2a3b4d"
          opacity="0.7"
        />
        {folds.map((f, k) => (
          <path
            key={`f${k}`}
            d={brush(f, { w: 2, seed: 30 + k, wobble: 1.2, taper: 0.4 })}
            fill={BONE}
            opacity="0.22"
          />
        ))}
      </g>

      {/* Crossed bones, then the skull. */}
      <g transform="translate(338 226) scale(1.12)" filter="url(#ink-rough)">
        <Bone a={[-150, -76]} b={[150, 108]} />
        <Bone a={[-150, 108]} b={[150, -76]} />
        <path d={blob(OUTLINE, { seed: 3, rough: 0.8 })} fill={BONE} />
        <g clipPath="url(#flag-skull)">
          <path
            d={hatch({ x: 14, y: -100, w: 100, h: 210 }, 58, 5.5, {
              seed: 6,
              width: 1.5,
              cover: 0.9,
            })}
            fill={INK}
            opacity="0.8"
          />
          <path
            d={hatch({ x: -60, y: 54, w: 120, h: 50 }, 30, 4.5, {
              seed: 7,
              width: 1.2,
              cover: 0.9,
            })}
            fill={INK}
            opacity="0.55"
          />
        </g>
        <path
          d={brush([...OUTLINE, OUTLINE[0]!], { w: 4.6, seed: 12, wobble: 0.6, taper: 0.04 })}
          fill={INK}
        />
        {/* The sockets are the heaviest blacks on the page, and slant down toward the nose. */}
        <path d={poly(EYE_R, { seed: 5, rough: 1.2 })} fill={INK} />
        <path d={poly(EYE_L, { seed: 9, rough: 1.2 })} fill={INK} />
        <path d={poly(NOSE, { seed: 14, rough: 0.8 })} fill={INK} />
        {/* A crack from the crown, and the teeth. */}
        <path
          d={brush(
            [
              [30, -94],
              [22, -72],
              [32, -58],
              [20, -40],
            ],
            { w: 2.6, seed: 17, wobble: 0.5 },
          )}
          fill={INK}
        />
        <path
          d={brush(
            [
              [-40, 74],
              [-20, 71],
              [20, 71],
              [40, 74],
            ],
            { w: 3.4, seed: 18, wobble: 0.5 },
          )}
          fill={INK}
        />
        {[-22, -11, 0, 11, 22].map((x, i) => (
          <path
            key={x}
            d={brush(
              [
                [x, 72],
                [x + (i - 2) * 0.4, 96],
              ],
              { w: 3, seed: 40 + i, wobble: 0.4, taper: 0.5 },
            )}
            fill={INK}
          />
        ))}
      </g>

      {/* The tally: a group of five for each module, a mark for each lesson. */}
      <g>
        {lessons.map((row, g) =>
          row.map((rank, i) => {
            const gx = 168 + g * 128 + i * 15;
            const y0 = 366;
            const y1 = 404;
            const on = rank >= 1;
            const d = brush(
              [
                [gx, y0 + (i % 2)],
                [gx + 1, y1],
              ],
              { w: on ? 3.6 : 1.4, seed: g * 10 + i + 60, wobble: 0.6, taper: 0.3 },
            );
            return (
              <path key={`${g}-${i}`} d={d} fill={rank >= 3 ? RED : BONE} opacity={on ? 1 : 0.3} />
            );
          }),
        )}
      </g>
    </svg>
  );
}
