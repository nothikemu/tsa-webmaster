import type { ReactNode } from 'react';

/**
 * The rune set: small line drawings in the same hand, each one an instrument or relic of the
 * observatory. They are decoration beside a text label (aria-hidden); nothing relies on them alone.
 */
const PATHS = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15.8 8.2l-2.4 5.2-5.2 2.4 2.4-5.2z" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6 20.5v-5M10.7 20.5V12M15.3 20.5V8.6M20 20.5V5" strokeWidth="2.4" strokeLinecap="butt" />
      <path d="M17.6 2.4l.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5z" fill="currentColor" strokeWidth="0.6" />
    </>
  ),
  crest: (
    <>
      <path d="M12 2.6l8 2.8v6.6c0 4.8-3.5 8-8 9.6-4.5-1.6-8-4.8-8-9.6V5.4z" />
      <path d="M12 7.6l1.3 2.7 2.9.4-2.1 2 .5 2.9-2.6-1.4-2.6 1.4.5-2.9-2.1-2 2.9-.4z" />
    </>
  ),
  quill: (
    <>
      <path d="M20.5 3.5C13.8 3.9 8.7 8.2 7 15.5c6.2.1 12-3.8 13.5-12z" />
      <path d="M7 15.5L3.5 20.5M10.5 12.5c2-.3 4-1.6 5.5-3.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12C5 7.6 8.4 5.5 12 5.5s7 2.1 9.5 6.5c-2.5 4.4-5.9 6.5-9.5 6.5S5 16.4 2.5 12z" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.2c3.4-.8 6.1-.3 8 1.4 1.9-1.7 4.6-2.2 8-1.4v13.3c-3.4-.7-6.1-.2-8 1.5-1.9-1.7-4.6-2.2-8-1.5z" />
      <path d="M12 6.6v13.4" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M7.8 12.3l3 3 5.4-6" />
    </>
  ),
  blades: (
    <>
      <path d="M5 5l14 14M19 5L5 19" />
      <path d="M8.6 5.6l-3 3M15.4 5.6l3 3" />
      <path d="M12 9.6l2.4 2.4-2.4 2.4-2.4-2.4z" fill="currentColor" strokeWidth="0.6" />
    </>
  ),
  gem: (
    <>
      <path d="M7 4.5h10l4.5 5.5-9.5 10.5L2.5 10z" />
      <path d="M2.5 10h19M9.2 4.5L7.6 10 12 20.5 16.4 10l-1.6-5.5" />
    </>
  ),
  flame: <path d="M12 2.5c.9 3.9 6 6 6 11.5 0 3.9-2.7 7-6 7s-6-3.1-6-7c0-2.5 1.5-4 2.5-5.5.7 1.5 1.3 2 2 2-.5-3 .3-6 1.5-8z" />,
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 20 }: { name: IconName; size?: number }): ReactNode {
  return (
    <svg
      className="rune"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
