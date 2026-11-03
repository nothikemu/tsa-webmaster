import { useEffect, useRef, type ReactNode } from 'react';
import { FOOTER_GROUPS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
import { Spring } from '../core/spring';
import { useServices } from '../core/services';
import { Link, useRouter } from '../router';

/** "page" on the exact route; "true" on a route inside it, so a module page marks "Modules". */
function locationState(path: string, href: string): 'page' | 'true' | undefined {
  if (path === href) return 'page';
  return path.startsWith(`${href}/`) ? 'true' : undefined;
}

export function Header(): ReactNode {
  const { path } = useRouter();
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link to="/" className="wordmark" aria-label={t('nav.home')}>
          <span className="wordmark-mark" aria-hidden="true" />
          {SITE.name.toLowerCase()}
        </Link>
        <nav aria-label={t('nav.primary')}>
          <ul className="nav-list">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} aria-current={locationState(path, n.href)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer(): ReactNode {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <div>
          <p className="wordmark">{SITE.name.toLowerCase()}</p>
          <p className="muted footer-note">{t('footer.note', { event: SITE.event })}</p>
          <p className="muted footer-note">{t('footer.privacy')}</p>
        </div>
        <nav aria-label={t('nav.footer')} className="footer-nav">
          {FOOTER_GROUPS.map((g) => (
            <div key={g.heading}>
              <p
                className="mono footer-heading"
                id={`footer-${g.heading.toLowerCase().replace(/\W+/g, '-')}`}
              >
                {g.heading}
              </p>
              <ul
                className="footer-links"
                aria-labelledby={`footer-${g.heading.toLowerCase().replace(/\W+/g, '-')}`}
              >
                {g.links.map((n) => (
                  <li key={n.href}>
                    <Link to={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }): ReactNode {
  return <p className="mono eyebrow">{children}</p>;
}

/**
 * Film grain at roughly 3.5 percent. The noise tile is generated once from a seeded PRNG on a small
 * canvas and used as a repeating background, which is far cheaper to composite than an SVG filter.
 */
export function GrainOverlay(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const size = 160;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const img = ctx.createImageData(size, size);
    let a = 0x9e3779b9;
    for (let i = 0; i < img.data.length; i += 4) {
      a = (Math.imul(a, 1664525) + 1013904223) >>> 0;
      const v = a >>> 24;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = v > 140 ? v - 100 : 0;
    }
    ctx.putImageData(img, 0, 0);
    let url: string | null = null;
    let cancelled = false;
    canvas.toBlob((blob) => {
      if (!blob || cancelled) return;
      url = URL.createObjectURL(blob);
      el.style.backgroundImage = `url(${url})`;
    });
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, []);
  return <div className="grain" ref={ref} aria-hidden="true" />;
}

/** A soft ring that trails the pointer on devices with a fine pointer. Hidden for touch and reduced motion. */
export function CursorHalo(): ReactNode {
  const { loop, caps } = useServices();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || caps.coarsePointer || caps.reducedMotion) return undefined;
    const x = new Spring(-100, 14);
    const y = new Spring(-100, 14);
    let seen = false;
    const move = (e: PointerEvent): void => {
      if (e.pointerType === 'touch') return;
      if (!seen) {
        x.set(e.clientX);
        y.set(e.clientY);
        seen = true;
        el.dataset.on = 'true';
      }
      x.target = e.clientX;
      y.target = e.clientY;
      handle.setActive(true);
    };
    const leave = (): void => {
      el.dataset.on = 'false';
      seen = false;
    };
    const handle = loop.subscribe(
      (f) => {
        el.style.transform = `translate3d(${x.step(f.dt).toFixed(1)}px, ${y.step(f.dt).toFixed(1)}px, 0)`;
        if (x.settled(0.2) && y.settled(0.2)) handle.setActive(false);
      },
      { active: false },
    );
    addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave, { passive: true });
    return () => {
      removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      handle.dispose();
    };
  }, [loop, caps]);
  return <div className="halo" ref={ref} aria-hidden="true" data-on="false" />;
}
