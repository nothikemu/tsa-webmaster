import { useId, type ReactNode } from 'react';

interface RingProps {
  /** 0-100. */
  value: number;
  size?: number;
  stroke?: number;
  label: string;
  children?: ReactNode;
  className?: string;
}

/**
 * A progress ring drawn as a gradient revealed through a mask. The mask's stroke-dashoffset
 * transitions on the portal easing curve (a CSS transition on the --ease token), so the fill
 * glides to each new value. The numeric value is also exposed to assistive technology.
 */
export function Ring({ value, size = 96, stroke = 7, label, children, className }: RingProps): ReactNode {
  const uid = useId().replace(/:/g, '');
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={`progress-ring ${className ?? ''}`} style={{ width: size, height: size }} role="img" aria-label={`${label}: ${Math.round(clamped)} percent`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`g${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={size} y2={size}>
            <stop offset="0" stopColor="#4d84ff" />
            <stop offset=".55" stopColor="#8f6bff" />
            <stop offset="1" stopColor="#4de6ff" />
          </linearGradient>
          <mask id={`m${uid}`}>
            <circle
              className="ring-mask"
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="#fff"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - clamped / 100)}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </mask>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`url(#g${uid})`} strokeWidth={stroke} mask={`url(#m${uid})`} />
      </svg>
      <div className="ring-center">{children}</div>
    </div>
  );
}
