import type { ReactNode } from 'react';
import { VULNERABILITIES, type ModuleId } from '../content';
import { t } from '../core/assets';
import { NODES_PER_LAYER } from '../modules/ModuleA/topology';
import { PARAM_KEYS, PRESETS } from '../modules/ModuleB/params';
import { useData } from './hooks';

/**
 * One print for each realm, drawn in code and built from the module's own data. Each is flat color in the
 * manner of a two-ink poster: the realm color as the ground, ink for the line work, paper for the highlights,
 * a halftone screen for tone, and one shape printed a few pixels out of register.
 *
 *  - The Lattice (Foundations): the swarm's real layer sizes, five rows of nodes joined by lines. Nodes
 *    fill with ink from the bottom row up as far as the module's percentage.
 *  - The Forge (Synthesis): a mixing desk of four faders, one for each prompt parameter, laid over a record.
 *    The four presets' real values are marked on the faders; a preset you have applied is joined by a line.
 *  - The Gate (Ethics): an eye inside a diamond, with the four vulnerabilities at its corners. One you have
 *    inspected is filled.
 *
 * They are pictures, so each carries a text label.
 */
const W = 400;
const H = 460;
const INK = '#0a0b10';
const PAPER = '#f4f0e6';

function Ground({ id, children }: { id: ModuleId; children: ReactNode }): ReactNode {
  return (
    <>
      <defs>
        <pattern
          id={`ht-${id}`}
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
        >
          <circle cx="4.5" cy="4.5" r="1.7" fill={INK} />
        </pattern>
        <clipPath id={`win-${id}`}>
          <rect width={W} height={H} />
        </clipPath>
      </defs>
      <g clipPath={`url(#win-${id})`}>
        <rect width={W} height={H} fill="var(--m)" />
        {children}
      </g>
    </>
  );
}

/** The Lattice: five rows of nodes, lit from the bottom row up as far as the module's progress. */
function Lattice(): ReactNode {
  const d = useData().modules.foundations;
  const rows = NODES_PER_LAYER;
  const total = rows.reduce((a, b) => a + b, 0);
  const lit = Math.round((d.progress / 100) * total);
  const rowY = (l: number): number => 146 + l * 68;
  const pts = rows.map((n, l) =>
    Array.from({ length: n }, (_, i) => ({
      x: 200 + (i - (n - 1) / 2) * Math.min(48, 300 / n),
      y: rowY(l),
    })),
  );
  const order: Array<[number, number]> = [];
  for (let l = rows.length - 1; l >= 0; l--) for (let i = 0; i < rows[l]!; i++) order.push([l, i]);
  const rank = (l: number, i: number): number => order.findIndex(([a, b]) => a === l && b === i);
  return (
    <>
      {/* The sun, printed out of register: a paper disc with an ink outline set 8px off. */}
      <circle cx="330" cy="84" r="46" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="323" cy="77" r="46" fill={PAPER} />
      {/* A band of halftone across the lower half, and a solid ink wedge under it. */}
      <polygon points={`0,350 ${W},258 ${W},${H} 0,${H}`} fill={INK} opacity="0.92" />
      <polygon points={`0,350 ${W},258 ${W},308 0,400`} fill="url(#ht-foundations)" opacity="0.5" />
      <g stroke={INK} strokeWidth="2" opacity="0.7">
        {pts.slice(0, -1).flatMap((row, l) =>
          row.flatMap((a, i) => {
            const next = pts[l + 1]!;
            const near = next
              .map((b, j) => ({ b, j, dist: Math.abs(b.x - a.x) }))
              .sort((p, q) => p.dist - q.dist)
              .slice(0, 2);
            return near.map(({ b, j }) => (
              <line key={`${l}-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
            ));
          }),
        )}
      </g>
      {pts.map((row, l) =>
        row.map((p, i) => {
          const on = rank(l, i) < lit;
          const r = on ? 13 : 10;
          return (
            <g key={`${l}-${i}`}>
              <polygon
                points={`${p.x},${p.y - r} ${p.x + r},${p.y} ${p.x},${p.y + r} ${p.x - r},${p.y}`}
                fill={on ? PAPER : 'var(--m)'}
                stroke={INK}
                strokeWidth="3"
              />
              {on && <rect x={p.x - 4} y={p.y - 4} width="8" height="8" fill={INK} />}
            </g>
          );
        }),
      )}
    </>
  );
}

/** The Forge: a record under a four-channel mixing desk, with the presets set on the faders. */
function Forge(): ReactNode {
  const d = useData().modules.synthesis;
  const xs = [64, 152, 248, 336];
  const top = 70;
  const bottom = 392;
  const y = (v: number): number => bottom - (v / 100) * (bottom - top);
  return (
    <>
      <rect width={W} height="168" fill="url(#ht-synthesis)" opacity="0.18" />
      {/* The record: a paper disc with grooves, its label in the realm color, an ink copy 8px off. */}
      <circle cx="208" cy="238" r="176" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="200" cy="230" r="176" fill={PAPER} />
      {[150, 128, 106, 84].map((r) => (
        <circle
          key={r}
          cx="200"
          cy="230"
          r={r}
          fill="none"
          stroke={INK}
          strokeWidth="1.2"
          opacity="0.28"
        />
      ))}
      <circle cx="200" cy="230" r="40" fill="var(--m)" stroke={INK} strokeWidth="3" />
      <circle cx="200" cy="230" r="7" fill={INK} />
      {/* The channels. */}
      {xs.map((x, i) => (
        <g key={PARAM_KEYS[i]}>
          <rect x={x - 6} y={top} width="12" height={bottom - top} fill={INK} />
          {Array.from({ length: 11 }, (_, k) => (
            <line
              key={k}
              x1={x + 12}
              y1={bottom - (k / 10) * (bottom - top)}
              x2={x + (k % 5 === 0 ? 28 : 21)}
              y2={bottom - (k / 10) * (bottom - top)}
              stroke={INK}
              strokeWidth="2.4"
            />
          ))}
        </g>
      ))}
      {/* The presets, set on the faders. An applied preset is joined across all four. */}
      {PRESETS.map((p) => {
        const on = d.actions[p.action] === true;
        const marks = PARAM_KEYS.map((k, i) => ({ x: xs[i]!, y: y(p.values[k]) }));
        return (
          <g key={p.id}>
            {on && (
              <polyline
                points={marks.map((m) => `${m.x},${m.y}`).join(' ')}
                fill="none"
                stroke={INK}
                strokeWidth="4"
                strokeLinejoin="miter"
              />
            )}
            {marks.map((m, i) => (
              <g key={PARAM_KEYS[i]}>
                <rect
                  x={m.x - (on ? 13 : 9)}
                  y={m.y - (on ? 13 : 9)}
                  width={on ? 26 : 18}
                  height={on ? 26 : 18}
                  fill={on ? INK : PAPER}
                  stroke={INK}
                  strokeWidth="3"
                />
                {on && <rect x={m.x - 5} y={m.y - 5} width="10" height="10" fill={PAPER} />}
              </g>
            ))}
          </g>
        );
      })}
    </>
  );
}

/** The Gate: an eye inside a diamond, the four vulnerabilities at its corners. */
function Gate(): ReactNode {
  const d = useData().modules.ethics;
  const cx = 200;
  const cy = 226;
  const R = 156;
  const corners = [
    [cx, cy - R],
    [cx + R, cy],
    [cx, cy + R],
    [cx - R, cy],
  ] as const;
  return (
    <>
      <rect width={W} height="150" fill="url(#ht-ethics)" opacity="0.18" />
      {/* Rays out of the eye. */}
      <g stroke={INK} strokeWidth="2.4">
        {Array.from({ length: 36 }, (_, i) => {
          const a = (i / 36) * Math.PI * 2;
          const r1 = R + 6;
          const r2 = R + (i % 3 === 0 ? 66 : 38);
          return (
            <line
              key={i}
              x1={cx + r1 * Math.cos(a)}
              y1={cy + r1 * Math.sin(a)}
              x2={cx + r2 * Math.cos(a)}
              y2={cy + r2 * Math.sin(a)}
            />
          );
        })}
      </g>
      {/* The diamond: ink copy 8px off, paper face. */}
      <polygon
        points={corners.map(([x, y]) => `${x + 8},${y + 8}`).join(' ')}
        fill="none"
        stroke={INK}
        strokeWidth="3"
      />
      <polygon
        points={corners.map(([x, y]) => `${x},${y}`).join(' ')}
        fill={PAPER}
        stroke={INK}
        strokeWidth="4"
      />
      <polygon
        points={`${cx},${cy - 112} ${cx + 112},${cy} ${cx},${cy + 112} ${cx - 112},${cy}`}
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* The eye. */}
      <path
        d={`M${cx - 84} ${cy} Q${cx} ${cy - 76} ${cx + 84} ${cy} Q${cx} ${cy + 76} ${cx - 84} ${cy}Z`}
        fill={INK}
      />
      <circle cx={cx} cy={cy} r="38" fill="var(--m)" stroke={PAPER} strokeWidth="4" />
      <ellipse cx={cx} cy={cy} rx="12" ry="26" fill={INK} />
      <circle cx={cx - 12} cy={cy - 14} r="6" fill={PAPER} />
      {/* The four vulnerabilities. */}
      {VULNERABILITIES.map((v, i) => {
        const [x, y] = corners[i]!;
        const on = d.actions[v.id] === true;
        const r = on ? 17 : 12;
        return (
          <g key={v.id}>
            <rect
              x={x - r}
              y={y - r}
              width={r * 2}
              height={r * 2}
              transform={`rotate(45 ${x} ${y})`}
              fill={on ? INK : PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            {on && (
              <rect
                x={x - 6}
                y={y - 6}
                width="12"
                height="12"
                transform={`rotate(45 ${x} ${y})`}
                fill={PAPER}
              />
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
      <Ground id={id}>
        {id === 'foundations' ? <Lattice /> : id === 'synthesis' ? <Forge /> : <Gate />}
      </Ground>
    </svg>
  );
}
