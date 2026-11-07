import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { FOOTER_LINKS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
import { Link, useRouter } from '../router';

/** "page" on the exact route; "true" on a route inside it, so a module page marks "Modules". */
function locationState(path: string, href: string): 'page' | 'true' | undefined {
  if (path === href) return 'page';
  return path.startsWith(`${href}/`) ? 'true' : undefined;
}

/** The mark: a small inked skull. */
export function Glyph({ size = 34 }: { size?: number }): ReactNode {
  return (
    <svg className="glyph" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M16 2.6c-6.6 0-10.8 4.2-10.8 9.8 0 3.3 1.5 5.6 3.5 7V25c0 1.2.9 2.2 2.1 2.2h10.4c1.2 0 2.1-1 2.1-2.2v-5.6c2-1.4 3.5-3.7 3.5-7 0-5.6-4.2-9.8-10.8-9.8z"
        fill="#ece8e1"
        stroke="#0f1923"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M8.6 13.2l6-1.4-1 5.6-4.4.3zM23.4 13.2l-6-1.4 1 5.6 4.4.3z" fill="#0f1923" />
      <path d="M16 18.4l-1.7 3.2h3.4z" fill="#0f1923" />
      <path d="M12.6 23.4v3M16 23.4v3M19.4 23.4v3" stroke="#0f1923" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function NavList({ path }: { path: string }): ReactNode {
  const list = useRef<HTMLUListElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const current = NAV.findIndex((n) => locationState(path, n.href) !== undefined);
  const target = hover ?? current;

  // The glide: one orange tab that slides to the item under the pointer or focus, and rests on the current section.
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
    <header className="site-header" data-surface="ink" data-open={open}>
      <div className="wrap site-header-inner">
        <Link to="/" className="wordmark" aria-label={t('nav.home')}>
          <Glyph />
          <span>{SITE.name}</span>
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle btn btn-ghost"
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
    <footer className="site-footer" data-surface="ink">
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
        <p className="colophon-event">{SITE.event}</p>
      </div>
    </footer>
  );
}
