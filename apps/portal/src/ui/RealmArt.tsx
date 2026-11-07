import type { ReactNode } from 'react';
import { VULNERABILITIES, type ModuleId } from '../content';
import { t } from '../core/assets';
import { NODES_PER_LAYER } from '../modules/ModuleA/topology';
import { PARAM_KEYS, PRESETS } from '../modules/ModuleB/params';
import { blob, brush, hatch, InkDefs, poly, rng, type P } from './Ink';
import { useData } from './hooks';

/**
 * One hand-inked drawing for each module, on a sheet of parchment, built from the module's own data.
 *
 *  - Foundations is a sea chart. The swarm's real layer sizes are five columns of islands joined by dotted
 *    routes. An island is marked with a red X, as on a treasure map, from the bottom row up as far as the
 *    module's percentage.
 *  - Synthesis is a page and a pen. Four handwritten lines are as long as the four prompt parameters of the
 *    presets you have applied (a half line if none), and four ink drops are filled once a preset is applied.
 *  - Ethics is an eye, with a crosshair. A red ring in each corner is a vulnerability; one you have inspected
 *    is crossed out.
 *
 * They are pictures, so each carries a text label.
 */
const W = 400;
const H = 420;
const INK = '#0f1923';
const PARCH = '#e6d5a8';
const BONE = '#f3ecdc';
const RED = '#e8333f';
const SEA = '#2a7f9e';

function Sheet({ id, children }: { id: ModuleId; children: ReactNode }): ReactNode {
  const r = rng(id.length * 77);
  const stains = Array.from({ length: 5 }, (_, i) => {
    const cx = r() * W;
    const cy = r() * H;
    const pts: P[] = Array.from({ length: 9 }, (_, k): P => [
      cx + Math.cos((k / 9) * 6.28) * (26 + r() * 40),
      cy + Math.sin((k / 9) * 6.28) * (20 + r() * 30),
    ]);
    return <path key={i} d={blob(pts, { seed: i + 3, rough: 6 })} fill="#b8975a" opacity="0.16" />;
  });
  return (
    <>
      <defs>
        <InkDefs />
      </defs>
      <rect width={W} height={H} fill={PARCH} />
      {stains}
      <path
        d={hatch({ x: 0, y: 0, w: W, h: H }, 8, 7, { seed: 2, width: 0.8, cover: 0.5 })}
        fill="#9a7b3f"
        opacity="0.14"
      />
      {children}
      <rect
        x="9"
        y="9"
        width={W - 18}
        height={H - 18}
        fill="none"
        stroke={INK}
        strokeWidth="2.4"
        filter="url(#ink-rough)"
      />
    </>
  );
}

function Compass({ x, y, s }: { x: number; y: number; s: number }): ReactNode {
  const pts: P[] = [];
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * Math.PI * 2 - Math.PI / 2;
    const rr = k % 4 === 0 ? 1 : k % 2 === 0 ? 0.62 : 0.34;
    pts.push([Math.cos(a) * rr * s, Math.sin(a) * rr * s]);
  }
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#ink-rough)">
      <circle r={s * 0.78} fill="none" stroke={INK} strokeWidth="2" />
      <path
        d={poly(pts, { seed: 4, rough: 0.6 })}
        fill={BONE}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d={poly(
          [
            [0, -s],
            [s * 0.12, 0],
            [0, 0],
          ],
          { seed: 5, rough: 0.2 },
        )}
        fill={RED}
      />
      <circle r="3" fill={INK} />
    </g>
  );
}

/** Foundations: a sea chart of islands joined by dotted routes. */
function Chart(): ReactNode {
  const d = useData().modules.foundations;
  const rows = NODES_PER_LAYER;
  const total = rows.reduce((a, b) => a + b, 0);
  const lit = Math.round((d.progress / 100) * total);
  const r = rng(5);
  const colX = (l: number): number => 62 + l * 69;
  const pts = rows.map((n, l) =>
    Array.from({ length: n }, (_, i) => ({
      x: colX(l) + (r() - 0.5) * 12,
      y: 215 + (i - (n - 1) / 2) * Math.min(34, 250 / n) + (r() - 0.5) * 8,
    })),
  );
  const order: Array<[number, number]> = [];
  for (let l = rows.length - 1; l >= 0; l--) for (let i = 0; i < rows[l]!; i++) order.push([l, i]);
  const rank = (l: number, i: number): number => order.findIndex(([a, b]) => a === l && b === i);
  const waves = Array.from({ length: 22 }, (_, i) => {
    const x = 28 + r() * 340;
    const y = 36 + r() * 360;
    return (
      <path
        key={i}
        d={brush(
          [
            [x, y],
            [x + 8, y - 5],
            [x + 16, y],
            [x + 24, y - 5],
          ],
          { w: 1.8, seed: i + 100, wobble: 0.3 },
        )}
        fill={SEA}
        opacity="0.7"
      />
    );
  });
  return (
    <>
      {waves}
      <g
        filter="url(#ink-rough)"
        stroke={INK}
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      >
        {pts.slice(0, -1).flatMap((row, l) =>
          row.flatMap((a, i) => {
            const next = pts[l + 1]!;
            return next
              .map((b, j) => ({ b, j, dist: Math.abs(b.y - a.y) }))
              .sort((p, q) => p.dist - q.dist)
              .slice(0, 2)
              .map(({ b, j }) => (
                <line key={`${l}-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
              ));
          }),
        )}
      </g>
      {pts.map((row, l) =>
        row.map((p, i) => {
          const on = rank(l, i) < lit;
          const rr = 8 + ((l * 7 + i * 3) % 4);
          const isle: P[] = Array.from({ length: 8 }, (_, k): P => [
            p.x + Math.cos((k / 8) * 6.28) * rr * (0.8 + ((k * 5 + i) % 3) * 0.14),
            p.y + Math.sin((k / 8) * 6.28) * rr * 0.8 * (0.8 + ((k * 3 + l) % 3) * 0.14),
          ]);
          const shape = blob(isle, { seed: l * 9 + i, rough: 1 });
          return (
            <g key={`${l}-${i}`}>
              <clipPath id={`isle-${l}-${i}`}>
                <path d={shape} />
              </clipPath>
              <path d={shape} fill={BONE} />
              <path
                d={hatch({ x: p.x - rr, y: p.y - rr, w: rr * 2, h: rr * 2 }, 50, 3.2, {
                  seed: l * 9 + i + 1,
                  width: 1.1,
                  cover: 0.9,
                })}
                fill={INK}
                opacity="0.6"
                clipPath={`url(#isle-${l}-${i})`}
              />
              <path d={shape} fill="none" stroke={INK} strokeWidth="2.2" filter="url(#ink-rough)" />
              {on && (
                <g filter="url(#ink-rough)">
                  <path
                    d={brush(
                      [
                        [p.x - 9, p.y - 9],
                        [p.x + 9, p.y + 9],
                      ],
                      { w: 4.2, seed: l * 9 + i + 40, wobble: 0.4, taper: 0.2 },
                    )}
                    fill={RED}
                  />
                  <path
                    d={brush(
                      [
                        [p.x + 9, p.y - 9],
                        [p.x - 9, p.y + 9],
                      ],
                      { w: 4.2, seed: l * 9 + i + 80, wobble: 0.4, taper: 0.2 },
                    )}
                    fill={RED}
                  />
                </g>
              )}
            </g>
          );
        }),
      )}
      <Compass x={338} y={348} s={42} />
      <path
        d={brush(
          [
            [40, 380],
            [120, 376],
            [200, 382],
          ],
          { w: 3, seed: 7, wobble: 0.8 },
        )}
        fill={INK}
        opacity="0.7"
      />
    </>
  );
}

/** Synthesis: a page, handwriting whose lines are the prompt parameters, and a pen. */
function Pen(): ReactNode {
  const d = useData().modules.synthesis;
  const applied = PRESETS.filter((p) => d.actions[p.action] === true);
  const mean = (k: (typeof PARAM_KEYS)[number]): number =>
    applied.length ? applied.reduce((a, p) => a + p.values[k], 0) / applied.length : 50;
  const r = rng(12);
  const lines = PARAM_KEYS.map((k, i) => {
    const len = 90 + (mean(k) / 100) * 200;
    const y = 250 + i * 34;
    const pts: P[] = [];
    for (let x = 48; x < 48 + len; x += 9) pts.push([x, y + Math.sin(x / 6) * 3 + (r() - 0.5) * 3]);
    return (
      <path key={k} d={brush(pts, { w: 2.6, seed: 20 + i, wobble: 0.5, taper: 0.08 })} fill={INK} />
    );
  });
  const drops = PRESETS.map((p, i) => {
    const on = d.actions[p.action] === true;
    const x = 46 + i * 30;
    const dp: P[] = [
      [x, 40],
      [x + 9, 58],
      [x + 9, 68],
      [x, 76],
      [x - 9, 68],
      [x - 9, 58],
    ];
    return (
      <path
        key={p.id}
        d={blob(dp, { seed: i + 3, rough: 0.8 })}
        fill={on ? INK : 'none'}
        stroke={INK}
        strokeWidth="2.4"
        filter="url(#ink-rough)"
      />
    );
  });
  return (
    <>
      <g transform="rotate(-3 200 280)">
        <rect
          x="26"
          y="206"
          width="348"
          height="190"
          fill={BONE}
          stroke={INK}
          strokeWidth="2.6"
          filter="url(#ink-rough)"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="34"
            y1={228 + i * 34}
            x2="366"
            y2={228 + i * 34}
            stroke={SEA}
            strokeOpacity="0.5"
            strokeWidth="1.4"
          />
        ))}
        <line
          x1="40"
          y1="206"
          x2="40"
          y2="396"
          stroke={RED}
          strokeOpacity="0.7"
          strokeWidth="1.6"
        />
        {lines}
      </g>
      {drops}
      {/* The pen: a barrel, a grip, a gold nib with its slit, and a blot where it touches the page. */}
      <g transform="rotate(34 290 130)" filter="url(#ink-rough)">
        <path
          d={poly(
            [
              [258, -40],
              [322, -40],
              [318, 120],
              [262, 120],
            ],
            { seed: 2, rough: 1 },
          )}
          fill={INK}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d={poly(
            [
              [266, -40],
              [278, -40],
              [276, 120],
              [268, 120],
            ],
            { seed: 3, rough: 0.5 },
          )}
          fill="#34485c"
        />
        <path
          d={poly(
            [
              [262, 120],
              [318, 120],
              [308, 168],
              [272, 168],
            ],
            { seed: 4, rough: 1 },
          )}
          fill={BONE}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <clipPath id="nib-clip">
          <path
            d={poly(
              [
                [272, 168],
                [308, 168],
                [296, 262],
                [290, 278],
                [284, 262],
              ],
              { seed: 5, rough: 1 },
            )}
          />
        </clipPath>
        <path
          d={poly(
            [
              [272, 168],
              [308, 168],
              [296, 262],
              [290, 278],
              [284, 262],
            ],
            { seed: 5, rough: 1 },
          )}
          fill="#e0a423"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d={brush(
            [
              [290, 196],
              [290, 270],
            ],
            { w: 2.4, seed: 6, wobble: 0.3 },
          )}
          fill={INK}
        />
        <circle cx="290" cy="192" r="6" fill={INK} />
        <path
          d={hatch({ x: 270, y: 168, w: 40, h: 112 }, 70, 4, { seed: 7, width: 1, cover: 0.9 })}
          fill={INK}
          opacity="0.5"
          clipPath="url(#nib-clip)"
        />
      </g>
      <path
        d={blob(
          [
            [170, 296],
            [186, 290],
            [198, 300],
            [192, 314],
            [176, 316],
          ],
          { seed: 6, rough: 1.2 },
        )}
        fill={INK}
        filter="url(#ink-rough)"
      />
      {[
        [210, 282, 3],
        [160, 322, 2.4],
        [214, 312, 2],
        [150, 292, 1.8],
      ].map(([x, y, rr], i) => (
        <circle key={i} cx={x} cy={y} r={rr} fill={INK} />
      ))}
    </>
  );
}

/** Ethics: an eye, and a crosshair with a ring in each corner. */
function Eye(): ReactNode {
  const d = useData().modules.ethics;
  const rays = Array.from({ length: 34 }, (_, i) => {
    const a = (i / 34) * Math.PI * 2;
    const r0 = 54;
    const r1 = 58 - 0 + 0;
    return brush(
      [
        [200 + Math.cos(a) * 12, 206 + Math.sin(a) * 12],
        [200 + Math.cos(a) * (r0 - 4 + (i % 3) * 2), 206 + Math.sin(a) * (r1 - 4 + (i % 3) * 2)],
      ],
      { w: 2, seed: i + 200, wobble: 0.3, taper: 0.5 },
    );
  });
  const corners = [
    [44, 62],
    [356, 62],
    [44, 358],
    [356, 358],
  ] as const;
  const lashes = Array.from({ length: 12 }, (_, i) => {
    const x = 84 + i * 21;
    const y = 190 - Math.sin(((x - 36) / 328) * Math.PI) * 58;
    return brush(
      [
        [x, y],
        [x + (i - 6) * 1.6, y - 16 - (i % 3) * 4],
      ],
      { w: 3, seed: i + 300, wobble: 0.5, taper: 0.7 },
    );
  });
  const eye = 'M36 214 Q200 66 364 214 Q200 306 36 214Z';
  return (
    <>
      <defs>
        <clipPath id="eye-clip">
          <path d={eye} />
        </clipPath>
      </defs>
      {/* The crosshair. */}
      <g stroke={INK} strokeWidth="1.6" opacity="0.8" filter="url(#ink-rough)">
        <line x1="18" y1="214" x2="382" y2="214" strokeDasharray="14 6" />
        <line x1="200" y1="22" x2="200" y2="398" strokeDasharray="14 6" />
      </g>
      <path
        d={hatch({ x: 60, y: 60, w: 280, h: 90 }, -28, 6, { seed: 3, width: 1.3, cover: 0.8 })}
        fill={INK}
        opacity="0.7"
      />
      <path d={eye} fill={BONE} />
      <g clipPath="url(#eye-clip)">
        <path
          d={hatch({ x: 36, y: 200, w: 328, h: 110 }, 62, 5, { seed: 8, width: 1.2, cover: 0.9 })}
          fill={INK}
          opacity="0.4"
        />
        <circle cx="200" cy="208" r="62" fill={RED} />
        <path
          d={hatch({ x: 138, y: 146, w: 124, h: 124 }, 62, 7, { seed: 9, width: 1, cover: 0.9 })}
          fill={INK}
          opacity="0.35"
        />
        <g fill={INK}>
          {rays.map((p, i) => (
            <path key={i} d={p} transform="translate(0 0)" />
          ))}
        </g>
        <circle cx="200" cy="208" r="62" fill="none" stroke={INK} strokeWidth="4" />
        <ellipse cx="200" cy="208" rx="14" ry="28" fill={INK} />
        <path
          d={poly(
            [
              [176, 178],
              [192, 172],
              [186, 190],
              [174, 192],
            ],
            { seed: 1, rough: 0.6 },
          )}
          fill={BONE}
        />
        <circle cx="222" cy="236" r="4" fill={BONE} />
        <path
          d={blob(
            [
              [36, 214],
              [60, 200],
              [74, 218],
              [58, 232],
            ],
            { seed: 2, rough: 1 },
          )}
          fill={RED}
          opacity="0.9"
        />
      </g>
      <g filter="url(#ink-rough)">
        <path
          d={brush(
            [
              [30, 216],
              [90, 160],
              [200, 130],
              [310, 160],
              [370, 216],
            ],
            { w: 12, seed: 31, wobble: 0.8, taper: 0.15 },
          )}
          fill={INK}
        />
        <path
          d={brush(
            [
              [40, 218],
              [110, 262],
              [200, 276],
              [290, 262],
              [360, 218],
            ],
            { w: 4.4, seed: 32, wobble: 0.8, taper: 0.25 },
          )}
          fill={INK}
        />
        <path
          d={brush(
            [
              [80, 150],
              [200, 106],
              [320, 150],
            ],
            { w: 3.2, seed: 33, wobble: 0.8, taper: 0.3 },
          )}
          fill={INK}
        />
        {lashes.map((p, i) => (
          <path key={i} d={p} fill={INK} />
        ))}
      </g>
      {VULNERABILITIES.map((v, i) => {
        const [x, y] = corners[i]!;
        const on = d.actions[v.id] === true;
        return (
          <g key={v.id} filter="url(#ink-rough)">
            <circle cx={x} cy={y} r="17" fill={on ? RED : BONE} stroke={INK} strokeWidth="3" />
            {on && (
              <>
                <path
                  d={brush(
                    [
                      [x - 10, y - 10],
                      [x + 10, y + 10],
                    ],
                    { w: 3.6, seed: i + 400, wobble: 0.3, taper: 0.2 },
                  )}
                  fill={INK}
                />
                <path
                  d={brush(
                    [
                      [x + 10, y - 10],
                      [x - 10, y + 10],
                    ],
                    { w: 3.6, seed: i + 410, wobble: 0.3, taper: 0.2 },
                  )}
                  fill={INK}
                />
              </>
            )}
          </g>
        );
      })}
    </>
  );
}

export function RealmArt({ id }: { id: ModuleId }): ReactNode {
  const data = useData().modules;
  const label =
    id === 'foundations'
      ? t('art.topology', {
          layers: NODES_PER_LAYER.length,
          nodes: NODES_PER_LAYER.reduce((x, y) => x + y, 0),
        })
      : id === 'synthesis'
        ? t('art.presets')
        : t('art.wire', {
            n: VULNERABILITIES.filter((v) => data.ethics.actions[v.id]).length,
            total: VULNERABILITIES.length,
          });
  return (
    <svg
      className="realm-art"
      data-module={id}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
      focusable="false"
    >
      <Sheet id={id}>
        {id === 'foundations' ? <Chart /> : id === 'synthesis' ? <Pen /> : <Eye />}
      </Sheet>
    </svg>
  );
}
