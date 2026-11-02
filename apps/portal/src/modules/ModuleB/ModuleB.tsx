import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import type { ModuleContent } from '../../content';
import { t } from '../../core/assets';
import { Spring, SpringGroup, clamp } from '../../core/spring';
import { useServices } from '../../core/services';
import { VisuallyHidden, useReducedMotion } from '../../ui/a11y';
import { useGame } from '../../ui/hooks';
import { PARAM_KEYS, PARAM_META, PRESETS, buildPrompt, paramsStore, temperatureValue, useParams, type ParamKey } from './params';
import { TOKENS, simulateOutput } from './simulate';

const GRID_W = 48;
const GRID_H = 28;
const POS_MIN = 22;
const POS_MAX = 78;

/** Sliders that glide to preset values. The displayed number follows a spring; dragging snaps. */
function Sliders({ displayed }: { displayed: SpringGroup }): ReactNode {
  const params = useParams((s) => s.params);
  const set = useParams((s) => s.set);
  return (
    <div className="sliders">
      {PARAM_KEYS.map((key, i) => {
        const shown = Math.round(displayed.values[i] ?? params[key]);
        const label = PARAM_META[key].label;
        return (
          <div key={key} className="slider">
            <div className="slider-head">
              <label htmlFor={`slider-${key}`}>{label}</label>
              <output htmlFor={`slider-${key}`} className="num">
                {key === 'temperature' ? temperatureValue({ ...params, temperature: shown }).toFixed(2) : shown}
              </output>
            </div>
            <input
              id={`slider-${key}`}
              type="range"
              min={0}
              max={100}
              step={1}
              value={shown}
              aria-describedby={`slider-${key}-hint`}
              aria-valuetext={key === 'temperature' ? `${temperatureValue({ ...params, temperature: shown }).toFixed(2)}` : `${shown} percent`}
              style={{ '--fill': `${shown}%` } as React.CSSProperties}
              onChange={(e) => {
                const v = Number(e.target.value);
                displayed.snap(i, v);
                set(key as ParamKey, v);
              }}
            />
            <p id={`slider-${key}-hint`} className="muted slider-hint">
              {PARAM_META[key].hint}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function ModuleB({ module }: { module: ModuleContent }): ReactNode {
  const { loop, kernels, actor } = useServices();
  const game = useGame();
  const reduced = useReducedMotion();
  const params = useParams((s) => s.params);
  const preset = useParams((s) => s.preset);
  const presetSeq = useParams((s) => s.presetSeq);
  const applyPreset = useParams((s) => s.applyPreset);

  const stageRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<SVGGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const crossH = useRef<SVGLineElement>(null);
  const crossV = useRef<SVGLineElement>(null);
  const readout = useRef<SVGTextElement>(null);
  const displayed = useRef<SpringGroup>(null as unknown as SpringGroup);
  if (!displayed.current) {
    displayed.current = new SpringGroup(4, reduced ? 60 : 9);
    PARAM_KEYS.forEach((k, i) => displayed.current.snap(i, paramsStore.getState().params[k]));
  }
  const divider = useRef(new Spring(50, reduced ? 60 : 13));
  const bars = useRef(new SpringGroup(TOKENS.length, reduced ? 60 : 11));
  const cursor = useRef({ x: 50, y: 50 });
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);
  const [, setRender] = useState(0);

  const sim = simulateOutput(params);
  const simRef = useRef(sim);
  simRef.current = sim;
  const prompt = buildPrompt(params, preset);

  // Mount lifecycle for the module machine.
  useEffect(() => {
    actor.send({ type: 'MODULE', module: module.id, event: { type: 'MOUNT' } });
    actor.send({ type: 'MODULE', module: module.id, event: { type: 'READY', tier: 'canvas2d' } });
    return () => void actor.send({ type: 'MODULE', module: module.id, event: { type: 'UNMOUNT' } });
  }, [actor, module.id]);

  // Presets: set targets; the displayed values glide there on the spring.
  useEffect(() => {
    const d = displayed.current;
    PARAM_KEYS.forEach((k, i) => (d.targets[i] = paramsStore.getState().params[k]));
    if (reduced) PARAM_KEYS.forEach((k, i) => d.snap(i, paramsStore.getState().params[k]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetSeq, reduced]);

  const applyWarp = useCallback((): void => {
    const d = divider.current;
    const p = clamp(d.value, POS_MIN, POS_MAX);
    const stage = stageRef.current;
    if (stage) stage.style.setProperty('--pos', `${p.toFixed(2)}%`);
    const v = reduced ? 0 : clamp(d.velocity, -140, 140);
    const lean = (p - 50) / 28;
    const warpL = reduced ? 0 : -lean * 5 - v * 0.035;
    const warpR = reduced ? 0 : lean * 5 + v * 0.035;
    if (leftRef.current) leftRef.current.style.transform = `perspective(1500px) rotateY(${warpL.toFixed(2)}deg) scaleX(${(1 + lean * 0.02).toFixed(4)}) skewY(${(v * 0.004).toFixed(3)}deg)`;
    if (rightRef.current) rightRef.current.style.transform = `perspective(1500px) rotateY(${warpR.toFixed(2)}deg) scaleX(${(1 - lean * 0.02).toFixed(4)}) skewY(${(-v * 0.004).toFixed(3)}deg)`;
  }, [reduced]);

  // One loop subscription drives sliders, divider, bars and the noise field.
  useEffect(() => {
    const field = new Float32Array(GRID_W * GRID_H);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d') ?? null;
    let phase = 0;
    const sub = loop.subscribe(
      (f) => {
        displayed.current.step(f.dt);
        divider.current.step(f.dt);
        applyWarp();
        const s = simRef.current;
        for (let i = 0; i < TOKENS.length; i++) bars.current.targets[i] = s.probs[i]!;
        bars.current.step(f.dt);
        const g = barsRef.current;
        if (g) {
          for (let i = 0; i < TOKENS.length; i++) {
            const rect = g.children[i] as SVGRectElement | undefined;
            const h = Math.max(1, bars.current.values[i]! * 150);
            rect?.setAttribute('height', h.toFixed(1));
            rect?.setAttribute('y', (170 - h).toFixed(1));
          }
        }
        if (ctx && canvas) {
          phase += f.dt * s.field.speed;
          kernels.fbmField(field, GRID_W, GRID_H, reduced ? 0 : phase, s.field.scale, s.field.octaves, 7);
          const cw = canvas.width / GRID_W;
          const ch = canvas.height / GRID_H;
          for (let y = 0; y < GRID_H; y++) {
            for (let x = 0; x < GRID_W; x++) {
              const v = Math.pow(field[y * GRID_W + x]!, 1 + (1 - s.field.contrast) * 2.2);
              const hue = 205 + v * 62;
              ctx.fillStyle = `hsl(${hue.toFixed(0)} 88% ${(8 + v * 58).toFixed(1)}%)`;
              ctx.fillRect(x * cw, y * ch, Math.ceil(cw), Math.ceil(ch));
            }
          }
        }
        setRender((n) => (f.frame % 4 === 0 ? n + 1 : n));
      },
      { element: stageRef.current, heavy: false },
    );
    return () => sub.dispose();
  }, [loop, kernels, applyWarp, reduced]);

  // Pointer: divider drag and crosshair tracking. Listeners are passive.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const rectOf = (): DOMRect => stage.getBoundingClientRect();
    const move = (e: PointerEvent): void => {
      const r = rectOf();
      const px = clamp(((e.clientX - r.left) / r.width) * 100, 0, 100);
      const py = clamp(((e.clientY - r.top) / r.height) * 100, 0, 100);
      cursor.current = { x: px, y: py };
      paintCrosshair();
      if (dragging.current) {
        divider.current.target = clamp(px, POS_MIN, POS_MAX);
        setPos(divider.current.target);
      }
    };
    const up = (): void => {
      dragging.current = false;
    };
    stage.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    return () => {
      stage.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
  }, []);

  function paintCrosshair(): void {
    const { x, y } = cursor.current;
    crossV.current?.setAttribute('x1', `${x}`);
    crossV.current?.setAttribute('x2', `${x}`);
    crossH.current?.setAttribute('y1', `${y}`);
    crossH.current?.setAttribute('y2', `${y}`);
    if (readout.current) {
      readout.current.textContent = `X ${x.toFixed(1).padStart(5, '0')}  Y ${y.toFixed(1).padStart(5, '0')}`;
      readout.current.setAttribute('x', `${clamp(x + 1.5, 2, 70)}`);
      readout.current.setAttribute('y', `${clamp(y - 1.5, 6, 98)}`);
    }
  }

  const onDividerKey = (e: KeyboardEvent<HTMLDivElement>): void => {
    const step = e.shiftKey ? 10 : 2;
    let next = divider.current.target;
    if (e.key === 'ArrowLeft') next -= step;
    else if (e.key === 'ArrowRight') next += step;
    else if (e.key === 'Home') next = POS_MIN;
    else if (e.key === 'End') next = POS_MAX;
    else return;
    e.preventDefault();
    divider.current.target = clamp(next, POS_MIN, POS_MAX);
    setPos(divider.current.target);
  };

  const onGridKey = (e: KeyboardEvent<HTMLDivElement>): void => {
    const step = e.shiftKey ? 10 : 1;
    const c = cursor.current;
    if (e.key === 'ArrowLeft') c.x = clamp(c.x - step, 0, 100);
    else if (e.key === 'ArrowRight') c.x = clamp(c.x + step, 0, 100);
    else if (e.key === 'ArrowUp') c.y = clamp(c.y - step, 0, 100);
    else if (e.key === 'ArrowDown') c.y = clamp(c.y + step, 0, 100);
    else return;
    e.preventDefault();
    paintCrosshair();
  };

  return (
    <div className="stage-wrap">
      <div className="splitpane glass" ref={stageRef} style={{ '--pos': '50%' } as React.CSSProperties} data-testid="splitpane">
        <svg className="grid-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="grid-minor" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M5 0H0V5" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth=".15" vectorEffect="non-scaling-stroke" />
            </pattern>
            <pattern id="grid-major" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M25 0H0V25" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth=".2" vectorEffect="non-scaling-stroke" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-minor)" />
          <rect width="100" height="100" fill="url(#grid-major)" />
          <line ref={crossV} x1="50" x2="50" y1="0" y2="100" stroke="rgba(143,184,255,.7)" strokeWidth=".25" vectorEffect="non-scaling-stroke" />
          <line ref={crossH} y1="50" y2="50" x1="0" x2="100" stroke="rgba(143,184,255,.7)" strokeWidth=".25" vectorEffect="non-scaling-stroke" />
          <text ref={readout} x="52" y="48" className="grid-readout" fontSize="2.6" fill="#cfdcff">
            X 050.0  Y 050.0
          </text>
        </svg>

        <div className="pane pane-left" ref={leftRef}>
          <h3 className="mono pane-title">{t('b.console')}</h3>
          <Sliders displayed={displayed.current} />
          <div className="preset-row" role="group" aria-label={t('b.presets')}>
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className="chip"
                aria-pressed={preset === p.id}
                title={p.summary}
                onClick={() => {
                  applyPreset(p.id);
                  game({ type: 'ACTION', module: module.id, action: p.action });
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="prompt-template" aria-live="off">
            <h4 className="mono pane-title">{t('b.template')}</h4>
            <p className="mono param-line">
              temperature={temperatureValue(params).toFixed(2)} specificity={params.specificity} context={params.context} strictness={params.strictness}
            </p>
            {prompt.map((part) => (
              <div key={part.id} className="prompt-part" data-active={part.active}>
                <span className="mono">{part.label}</span>
                <span>
                  {part.lines.map((l) => (
                    <span key={l} className="prompt-line">
                      {l}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* A focusable separator with aria-valuenow is the WAI-ARIA Authoring Practices "window splitter" pattern. */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
        <div
          className="divider"
          role="separator"
          aria-orientation="vertical"
          aria-label={t('b.divider')}
          aria-valuemin={POS_MIN}
          aria-valuemax={POS_MAX}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={onDividerKey}
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as Element).setPointerCapture?.(e.pointerId);
          }}
        >
          <span aria-hidden="true" />
        </div>
        {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}

        <div className="pane pane-right" ref={rightRef}>
          <h3 className="mono pane-title">{t('b.output')}</h3>
          <p className="sim-flag mono">{t('b.simulated')}</p>
          <svg className="bars" viewBox="0 0 400 200" role="img" aria-label={t('b.barsLabel', { top: TOKENS[sim.probs.indexOf(Math.max(...sim.probs))]!, p: Math.round(Math.max(...sim.probs) * 100) })}>
            <g ref={barsRef}>
              {TOKENS.map((tok, i) => (
                <rect key={tok} x={12 + i * 48} width="30" y="170" height="1" rx="2" fill="url(#bar-grad)" />
              ))}
            </g>
            <defs>
              <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8fb0ff" />
                <stop offset="1" stopColor="#4d84ff" stopOpacity=".35" />
              </linearGradient>
            </defs>
            {TOKENS.map((tok, i) => (
              <text key={tok} x={27 + i * 48} y="190" textAnchor="middle" className="bar-label" fontSize="8.5">
                {tok}
              </text>
            ))}
          </svg>
          <canvas ref={canvasRef} className="noise-field" width={GRID_W * 8} height={GRID_H * 8} role="img" aria-label={t('b.fieldLabel')} />
          <dl className="readouts">
            <div>
              <dt className="mono">{t('b.adherence')}</dt>
              <dd className="num">{Math.round(sim.adherence * 100)}%</dd>
            </div>
            <div>
              <dt className="mono">{t('b.diversity')}</dt>
              <dd className="num">{Math.round(sim.diversity * 100)}%</dd>
            </div>
            <div>
              <dt className="mono">{t('b.risk')}</dt>
              <dd className="num">{Math.round(sim.risk * 100)}%</dd>
            </div>
          </dl>
        </div>

        {/* role="application" hands arrow keys to the crosshair; the label explains it. */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
        <div className="grid-key mono" tabIndex={0} role="application" aria-label={t('b.gridKey')} onKeyDown={onGridKey}>
          {t('b.gridKeyShort')}
        </div>
      </div>

      <VisuallyHidden id="split-desc">{module.centerpiece.description}</VisuallyHidden>
      <p className="muted stage-hint" id="split-hint">
        {t('b.hint')}
      </p>

      <details className="alt glass">
        <summary>{t('alt.summary')}</summary>
        <p className="prose">{module.centerpiece.description}</p>
        <p className="prose" role="status" aria-live="polite">
          {t('b.altSummary', {
            top: TOKENS[sim.probs.indexOf(Math.max(...sim.probs))]!,
            p: Math.round(Math.max(...sim.probs) * 100),
            adherence: Math.round(sim.adherence * 100),
            diversity: Math.round(sim.diversity * 100),
            risk: Math.round(sim.risk * 100),
          })}
        </p>
        <ol className="prose alt-list">
          {prompt.filter((p) => p.active).map((p) => (
            <li key={p.id}>
              <strong>{p.label}:</strong> {p.lines.join(' ')}
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
