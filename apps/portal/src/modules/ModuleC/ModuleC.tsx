import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { VULNERABILITIES, type ModuleContent } from '../../content';
import { announce } from '../../core/announce';
import { t } from '../../core/assets';
import { useServices } from '../../core/services';
import { VisuallyHidden } from '../../ui/a11y';
import { useGame } from '../../ui/hooks';
import { SceneCanvas, type SceneBinding, type SceneContext } from '../shared/SceneCanvas';
import { WireframeScene } from './WireframeScene';

const CX = 100;
const CY = 100;
const R = 78;

const axis = (i: number): { x: number; y: number } => {
  const a = -Math.PI / 2 + (i * Math.PI * 2) / 4;
  return { x: Math.cos(a), y: Math.sin(a) };
};

/** Compact SVG radar of the four vulnerabilities. Polygon points are written straight to the DOM each frame. */
function Radar({ sceneRef, active }: { sceneRef: React.MutableRefObject<WireframeScene | null>; active: number | null }): ReactNode {
  const { loop } = useServices();
  const poly = useRef<SVGPolygonElement>(null);
  const dots = useRef<Array<SVGCircleElement | null>>([]);
  const [values, setValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    let last = 0;
    const sub = loop.subscribe((f) => {
      const sev = sceneRef.current?.severities;
      if (!sev) return;
      const pts = VULNERABILITIES.map((_, i) => {
        const v = 0.06 + sev[i]! * 0.94;
        const a = axis(i);
        dots.current[i]?.setAttribute('cx', (CX + a.x * R * v).toFixed(1));
        dots.current[i]?.setAttribute('cy', (CY + a.y * R * v).toFixed(1));
        return `${(CX + a.x * R * v).toFixed(1)},${(CY + a.y * R * v).toFixed(1)}`;
      });
      poly.current?.setAttribute('points', pts.join(' '));
      if (f.frame - last > 8) {
        last = f.frame;
        setValues(Array.from(sev, (v) => Math.round(v * 100)));
      }
    });
    return () => sub.dispose();
  }, [loop, sceneRef]);

  return (
    <figure className="radar glass">
      <svg viewBox="0 0 200 200" role="img" aria-label={t('c.radarLabel', { a: values[0]!, b: values[1]!, c: values[2]!, d: values[3]! })}>
        {[0.25, 0.5, 0.75, 1].map((k) => (
          <polygon
            key={k}
            points={[0, 1, 2, 3].map((i) => `${CX + axis(i).x * R * k},${CY + axis(i).y * R * k}`).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,.12)"
            strokeWidth=".6"
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={CX} y1={CY} x2={CX + axis(i).x * R} y2={CY + axis(i).y * R} stroke="rgba(255,255,255,.14)" strokeWidth=".6" />
        ))}
        <polygon ref={poly} points="100,94 106,100 100,106 94,100" fill="rgba(255,154,46,.18)" stroke="#ffb14d" strokeWidth="1.2" />
        {VULNERABILITIES.map((v, i) => (
          <g key={v.id}>
            <circle
              ref={(el) => {
                dots.current[i] = el;
              }}
              cx={CX}
              cy={CY}
              r="2.6"
              fill={active === i ? '#ffb14d' : '#cfdcff'}
            />
            <text x={CX + axis(i).x * (R + 14)} y={CY + axis(i).y * (R + 14) + 3} textAnchor="middle" className="radar-label" fontSize="8.5" fill="#a8a8ad">
              {v.short.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mono">{t('c.radarCaption')}</figcaption>
    </figure>
  );
}

export default function ModuleC({ module }: { module: ModuleContent }): ReactNode {
  const services = useServices();
  const game = useGame();
  const [active, setActive] = useState<number | null>(null);
  const [inspected, setInspected] = useState<Record<string, true>>({});
  const sceneRef = useRef<WireframeScene | null>(null);
  const pendingRef = useRef<number | null>(null);
  const [counts, setCounts] = useState({ v: 0, e: 0 });

  const sendModule = useCallback(
    (event: { type: 'MOUNT' } | { type: 'READY'; tier: string } | { type: 'FAIL'; reason: string } | { type: 'INTERACT' } | { type: 'UNMOUNT' }) =>
      services.actor.send({ type: 'MODULE', module: module.id, event }),
    [services.actor, module.id],
  );
  useEffect(() => {
    sendModule({ type: 'MOUNT' });
    return () => sendModule({ type: 'UNMOUNT' });
  }, [sendModule]);

  const create = useCallback(async (ctx: SceneContext): Promise<SceneBinding<WireframeScene>> => {
    const scene = await WireframeScene.create({ handle: ctx.handle, reduced: ctx.reduced, asset: ctx.asset });
    scene.setMarker(pendingRef.current);
    sceneRef.current = scene;
    setCounts({ v: scene.vertexCount, e: scene.edgeCount });
    return { scene, release: () => void (sceneRef.current = null), note: `${ctx.handle.kind} / ${scene.vertexCount.toLocaleString('en-US')}` };
  }, []);

  const choose = (i: number): void => {
    const v = VULNERABILITIES[i]!;
    pendingRef.current = i;
    sceneRef.current?.setMarker(i);
    setActive(i);
    setInspected((s) => ({ ...s, [v.id]: true }));
    game({ type: 'ACTION', module: module.id, action: v.id });
    sendModule({ type: 'INTERACT' });
    announce(t('c.announce', { name: v.name }));
  };

  const remediate = (): void => {
    pendingRef.current = null;
    sceneRef.current?.setMarker(null);
    setActive(null);
    game({ type: 'ACTION', module: module.id, action: 'remediate' });
    sendModule({ type: 'INTERACT' });
    announce(t('c.remediated'));
  };

  const current = active === null ? null : VULNERABILITIES[active]!;

  return (
    <div className="stage-wrap">
      <SceneCanvas<WireframeScene>
        sceneKey="wire"
        create={create}
        label={t('c.canvas')}
        describedBy="wire-desc"
        role="img"
        className="stage-wire"
        onStatus={(s, reason) => {
          if (s === 'ready') sendModule({ type: 'READY', tier: 'wireframe' });
          if (s === 'failed') sendModule({ type: 'FAIL', reason: reason ?? 'unknown' });
        }}
      >
        <p className="stage-corner mono" aria-hidden="true">
          {module.label}
        </p>
        <p className="stage-corner stage-corner-br mono" aria-hidden="true">
          {counts.v ? t('c.counts', { v: counts.v.toLocaleString('en-US'), e: counts.e.toLocaleString('en-US') }) : ''}
        </p>
      </SceneCanvas>
      <VisuallyHidden id="wire-desc">{module.centerpiece.description}</VisuallyHidden>

      <div className="marker-row" role="group" aria-label={t('c.markers')}>
        {VULNERABILITIES.map((v, i) => (
          <button key={v.id} type="button" className="chip marker" aria-pressed={active === i} data-seen={inspected[v.id] === true} onClick={() => choose(i)}>
            <span className="mono marker-n">{i + 1}</span>
            {v.name}
          </button>
        ))}
        <button type="button" className="btn btn-ghost" onClick={remediate} disabled={active === null}>
          {t('c.remediate')}
        </button>
      </div>

      <div className="explain glass" role="region" aria-label={t('c.explain')} aria-live="polite">
        {current ? (
          <>
            <h3 className="mono sub">{current.name}</h3>
            <p className="prose">{current.summary}</p>
            <h4 className="mono sub">{t('c.mitigation')}</h4>
            <p className="prose">{current.mitigation}</p>
          </>
        ) : (
          <p className="prose muted">{t('c.stable')}</p>
        )}
      </div>

      <Radar sceneRef={sceneRef} active={active} />

      <details className="alt glass">
        <summary>{t('alt.summary')}</summary>
        <p className="prose">{module.centerpiece.description}</p>
        <dl className="alt-defs">
          {VULNERABILITIES.map((v) => (
            <div key={v.id}>
              <dt>{v.name}</dt>
              <dd>
                {v.summary} {v.mitigation}
              </dd>
            </div>
          ))}
        </dl>
      </details>
    </div>
  );
}
