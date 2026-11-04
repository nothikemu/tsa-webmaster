import type { ReactNode } from 'react';
import { FOOTER_LINKS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
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
          <p className="muted footer-note">{t('footer.privacy')}</p>
        </div>
        <nav aria-label={t('nav.footer')}>
          <ul className="footer-links">
            {FOOTER_LINKS.map((n) => (
              <li key={n.href}>
                <Link to={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
