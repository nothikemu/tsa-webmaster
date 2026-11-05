import type { ReactNode } from 'react';
import { VULNERABILITIES, getModule, type ModuleId } from '../content';
import { NODES_PER_LAYER } from '../modules/ModuleA/topology';
import { PARAM_KEYS, PARAM_META, PRESETS } from '../modules/ModuleB/params';
import { masteryRank } from '../core/schema';
import { t } from '../core/assets';
import { useData } from './hooks';

/**
 * One drawing per module, each built from the module's real data rather than decoration:
 * Foundations draws the swarm's actual layer sizes, Synthesis draws the four presets' actual
 * parameter values, Ethics draws the four vulnerabilities and marks the ones the learner inspected.
 */

function Topology(): ReactNode {
  const layers = NODES_PER_LAYER;
  const W = 560;
  const H = 280;
  const pts = layers.map((n, l) =>
    Array.from({ length: n }, (_, i) => ({
      x: 48 + (l * (W - 96)) / (layers.length - 1),
      y: 28 + ((i + 0.5) * (H - 56)) / n,
    })),
  );
  return (
    <svg
      className="art art-topology"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={t('art.topology', {
        layers: layers.length,
        nodes: layers.reduce((a, b) => a + b, 0),
      })}
      focusable="false"
    >
      {pts.slice(0, -1).flatMap((layer, l) =>
        layer.flatMap((a, i) => {
          const next = pts[l + 1]!;
          const nearest = [...next]
            .sort((p, q) => Math.abs(p.y - a.y) - Math.abs(q.y - a.y))
            .slice(0, 3);
          return nearest.map((b, k) => (
            <line key={`${l}-${i}-${k}`} className="art-edge" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ));
        }),
      )}
      {pts.map((layer, l) => (
        <g key={l}>
          {layer.map((p, i) => (
            <circle
              key={i}
              className="art-node"
              cx={p.x}
              cy={p.y}
              r={l === 0 || l === layers.length - 1 ? 3.4 : 2.6}
            />
          ))}
          <text className="art-axis" x={pts[l]![0]!.x} y={H - 4} textAnchor="middle">
            {layer.length}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Fingerprints(): ReactNode {
  const W = 360;
  const H = 262;
  const letters = PARAM_KEYS.map((k) => PARAM_META[k].label.charAt(0));
  return (
    <svg
      className="art art-presets"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={t('art.presets')}
      focusable="false"
    >
      {PRESETS.map((p, c) => {
        const x0 = 6 + c * 88;
        const words =
          p.name.split(/\s|-/).length > 1
            ? [p.name.split(' ')[0]!, p.name.split(' ').slice(1).join(' ')]
            : [p.name];
        return (
          <g key={p.id}>
            <line className="art-rule" x1={x0} y1={150} x2={x0 + 74} y2={150} />
            {PARAM_KEYS.map((k, r) => {
              const h = (p.values[k] / 100) * 128;
              return (
                <g key={k}>
                  <rect
                    className="art-col"
                    x={x0 + 2 + r * 18}
                    y={150 - h}
                    width={12}
                    height={h}
                    rx={1.5}
                  />
                  <text className="art-axis" x={x0 + 8 + r * 18} y={168} textAnchor="middle">
                    {letters[r]}
                  </text>
                </g>
              );
            })}
            {words.map((w, i) => (
              <text key={i} className="art-axis art-axis-strong" x={x0 + 2} y={192 + i * 16}>
                {w}
              </text>
            ))}
          </g>
        );
      })}
      <text className="art-axis" x={6} y={H - 4}>
        {PARAM_KEYS.map((k, i) => `${letters[i]} ${PARAM_META[k].label}`).join('  ')}
      </text>
    </svg>
  );
}

function Wireframe(): ReactNode {
  const data = useData().modules.ethics;
  const W = 380;
  const H = 262;
  const cx = W / 2;
  const cy = 118;
  const R = 86;
  // Four vulnerabilities at the four compass points of the sphere.
  const spots = [
    { x: cx, y: cy - R },
    { x: cx + R, y: cy },
    { x: cx, y: cy + R },
    { x: cx - R, y: cy },
  ];
  return (
    <svg
      className="art art-wire"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={t('art.wire', {
        n: VULNERABILITIES.filter((v) => data.actions[v.id]).length,
        total: VULNERABILITIES.length,
      })}
      focusable="false"
    >
      <circle className="art-rule" cx={cx} cy={cy} r={R} />
      {[0.35, 0.7].map((k) => (
        <g key={k}>
          <ellipse className="art-rule" cx={cx} cy={cy} rx={R} ry={R * k} />
          <ellipse className="art-rule" cx={cx} cy={cy} rx={R * k} ry={R} />
        </g>
      ))}
      <line className="art-rule" x1={cx - R} y1={cy} x2={cx + R} y2={cy} />
      <line className="art-rule" x1={cx} y1={cy - R} x2={cx} y2={cy + R} />
      {VULNERABILITIES.map((v, i) => {
        const p = spots[i]!;
        const inspected = data.actions[v.id] === true;
        const right = p.x >= cx;
        const horizontal = p.y === cy;
        const tx = horizontal ? p.x + (right ? 14 : -14) : p.x;
        const anchor = horizontal ? (right ? 'start' : 'end') : 'middle';
        const ty = horizontal ? p.y + 4 : p.y + (p.y < cy ? -14 : 24);
        return (
          <g key={v.id} data-inspected={inspected}>
            <circle className="art-marker" cx={p.x} cy={p.y} r={6.5} />
            {inspected && <circle className="art-marker-fill" cx={p.x} cy={p.y} r={3.4} />}
            <text className="art-axis art-axis-strong" x={tx} y={ty} textAnchor={anchor}>
              {v.short}
            </text>
          </g>
        );
      })}
      <text className="art-axis" x={6} y={H - 4}>
        {t('art.wireKey')}
      </text>
    </svg>
  );
}

export function ModuleArt({ id }: { id: ModuleId }): ReactNode {
  return id === 'foundations' ? (
    <Topology />
  ) : id === 'synthesis' ? (
    <Fingerprints />
  ) : (
    <Wireframe />
  );
}

/** Lesson-by-lesson progress for one module: one segment per lesson, filled by how well it is known. */
export function Track({ id }: { id: ModuleId }): ReactNode {
  const m = getModule(id);
  const d = useData().modules[id];
  const known = m.lessons.filter((l) => masteryRank(d.lessons[l.id] ?? 'unseen') >= 2).length;
  return (
    <span
      className="track"
      role="img"
      aria-label={t('track.label', { n: known, total: m.lessons.length })}
    >
      {m.lessons.map((l) => (
        <i key={l.id} data-state={d.lessons[l.id] ?? 'unseen'} />
      ))}
    </span>
  );
}
