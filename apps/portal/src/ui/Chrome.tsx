import { useEffect, useRef, useState, type ReactNode } from 'react';
import { FOOTER_LINKS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
import { Link, useRouter } from '../router';

/** "page" on the exact route; "true" on a route inside it, so a module page marks "Modules". */
function locationState(path: string, href: string): 'page' | 'true' | undefined {
  if (path === href) return 'page';
  return path.startsWith(`${href}/`) ? 'true' : undefined;
}

/** Three nodes and two links: the smallest possible network, and the portal's mark. */
export function Glyph({ size = 24 }: { size?: number }): ReactNode {
  return (
    <svg
      className="glyph"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 16.5L12 6.5l7.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="4.5" cy="16.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="6.5" r="2.2" fill="var(--accent)" />
      <circle cx="19.5" cy="15" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
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
      <div className="wrap site-header-inner">
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
          <ul className="nav-list">
            {NAV.map((n, i) => (
              <li key={n.href}>
                <Link to={n.href} aria-current={locationState(path, n.href)}>
                  <span className="nav-n" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
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
        <p className="label colophon-event">{SITE.event}</p>
      </div>
    </footer>
  );
}
