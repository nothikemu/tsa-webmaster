import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { FOOTER_LINKS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
import { Link, useRouter } from '../router';

/** "page" on the exact route; "true" on a route inside it, so a module page marks "Modules". */
function locationState(path: string, href: string): 'page' | 'true' | undefined {
  if (path === href) return 'page';
  return path.startsWith(`${href}/`) ? 'true' : undefined;
}

/**
 * The mark: a small glass sphere with a three-node network inside it, the smallest possible model.
 * The sphere is drawn in CSS (a lit gradient, a specular highlight), the network in SVG.
 */
export function Glyph({ size = 30 }: { size?: number }): ReactNode {
  return (
    <span className="glyph" style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 30 30" focusable="false">
        <path
          d="M8 20.5L15 10l7.5 9"
          fill="none"
          stroke="#06051a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <circle cx="8" cy="20.5" r="2.4" fill="#06051a" />
        <circle cx="15" cy="10" r="2.4" fill="#06051a" />
        <circle cx="22.5" cy="19" r="2.4" fill="#06051a" />
      </svg>
    </span>
  );
}

function NavList({ path }: { path: string }): ReactNode {
  const list = useRef<HTMLUListElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const current = NAV.findIndex((n) => locationState(path, n.href) !== undefined);
  const target = hover ?? current;

  // The glide: one pearl pane that slides to the item under the pointer or focus, and rests on the current section.
  useLayoutEffect(() => {
    const ul = list.current;
    if (!ul) return undefined;
    const place = (): void => {
      const li =
        target >= 0 ? ul.querySelectorAll<HTMLElement>('li:not(.nav-glide)')[target] : undefined;
      if (!li) {
        ul.dataset.glide = 'off';
        return;
      }
      ul.dataset.glide = 'on';
      ul.style.setProperty('--gx', `${li.offsetLeft}px`);
      ul.style.setProperty('--gw', `${li.offsetWidth}px`);
    };
    place();
    // The first placement is instant; every move after it glides.
    const settle = requestAnimationFrame(() =>
      requestAnimationFrame(() => (ul.dataset.ready = 'true')),
    );
    const ro = new ResizeObserver(place);
    ro.observe(ul);
    void document.fonts?.ready.then(place);
    return () => {
      cancelAnimationFrame(settle);
      ro.disconnect();
    };
  }, [target]);

  return (
    <ul
      className="nav-list"
      ref={list}
      data-hover={hover !== null && hover !== current}
      onPointerLeave={() => setHover(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHover(null);
      }}
    >
      <li className="nav-glide" aria-hidden="true" />
      {NAV.map((n, i) => (
        <li
          key={n.href}
          onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(i)}
          onFocus={() => setHover(i)}
        >
          <Link to={n.href} aria-current={locationState(path, n.href)}>
            <span className="nav-n" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Header(): ReactNode {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  // A new page closes the menu. Escape closes it and hands focus back to its button.
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header" data-open={open}>
      <div className="wrap site-header-inner glass edge">
        <Link to="/" className="wordmark" aria-label={t('nav.home')}>
          <Glyph />
          <span>{SITE.name}</span>
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bars" aria-hidden="true" />
          {t('nav.menu')}
        </button>
        <nav id="site-nav" className="site-nav" aria-label={t('nav.primary')}>
          <NavList path={path} />
        </nav>
        <span className="read-line" aria-hidden="true" />
      </div>
    </header>
  );
}

export function Footer(): ReactNode {
  return (
    <footer className="site-footer">
      <div className="wrap colophon">
        <div className="colophon-id">
          <p className="wordmark">
            <Glyph />
            <span>{SITE.name}</span>
          </p>
          <p className="colophon-note">{t('footer.privacy')}</p>
        </div>
        <nav aria-label={t('nav.footer')}>
          <ul className="colophon-links">
            {FOOTER_LINKS.map((n) => (
              <li key={n.href}>
                <Link to={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="label colophon-event">
          <span className="spark" aria-hidden="true" /> {SITE.event}
        </p>
      </div>
      <p className="foot-mark" aria-hidden="true">
        {SITE.name}
      </p>
    </footer>
  );
}
