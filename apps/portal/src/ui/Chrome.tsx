import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { FOOTER_LINKS, NAV, SITE } from '../content/site';
import { t } from '../core/assets';
import { Link, useRouter } from '../router';
import { Icon, type IconName } from './Icons';

/** "page" on the exact route; "true" on a route inside it, so a module page marks "Modules". */
function locationState(path: string, href: string): 'page' | 'true' | undefined {
  if (path === href) return 'page';
  return path.startsWith(`${href}/`) ? 'true' : undefined;
}

/**
 * The mark: a four-point star held in an armillary, the instrument that models the sky. Two tilted
 * rings and an outer ring in gold, a blue star at the center. Drawn here so it needs no asset.
 */
export function Glyph({ size = 32 }: { size?: number }): ReactNode {
  return (
    <svg className="glyph" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="14.2" fill="none" stroke="#e9c46a" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="14.2" ry="5.4" fill="none" stroke="#c9983a" strokeWidth="1.2" transform="rotate(-32 16 16)" />
      <ellipse cx="16" cy="16" rx="14.2" ry="5.4" fill="none" stroke="#c9983a" strokeWidth="1.2" transform="rotate(32 16 16)" />
      <path d="M16 6.2l2.3 7.5 7.5 2.3-7.5 2.3L16 25.8l-2.3-7.5L6.2 16l7.5-2.3z" fill="#5fd4ff" />
      <path d="M16 6.2l2.3 7.5 7.5 2.3-7.5 2.3L16 25.8" fill="#bff0ff" fillOpacity="0.45" />
      <circle cx="16" cy="16" r="1.9" fill="#fff" />
    </svg>
  );
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const NAV_ICON: Record<string, IconName> = {
  '/modules': 'compass',
  '/progress': 'chart',
  '/achievements': 'crest',
  '/glossary': 'quill',
  '/about': 'eye',
};

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
              {ROMAN[i]}
            </span>
            <Icon name={NAV_ICON[n.href] ?? 'compass'} size={18} />
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
      <div className="rule foot-rule" aria-hidden="true">
        <i />
      </div>
      <p className="foot-mark" aria-hidden="true">
        {SITE.name}
      </p>
    </footer>
  );
}
