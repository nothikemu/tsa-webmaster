import { useMemo, useState, type ReactNode } from 'react';
import { MODULES, glossary, resources } from '../content';
import { t } from '../core/assets';
import { Eyebrow } from '../ui/Chrome';

export default function Glossary(): ReactNode {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const terms = useMemo(() => glossary.filter((g) => !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)), [q]);
  const moduleName = (id: string): string => MODULES.find((m) => m.id === id)?.title ?? id;
  return (
    <div className="wrap page prose-page">
      <header className="page-head">
        <Eyebrow>{t('gl.eyebrow')}</Eyebrow>
        <h1 className="display">{t('gl.title')}</h1>
        <p className="lead">{t('gl.lead', { n: glossary.length })}</p>
      </header>
      <div className="field">
        <label htmlFor="gl-search" className="mono">
          {t('gl.search')}
        </label>
        <input id="gl-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="off" spellCheck={false} />
        <p className="muted" role="status" aria-live="polite">
          {t('gl.count', { n: terms.length })}
        </p>
      </div>
      <dl className="gl-list">
        {terms.map((g) => (
          <div key={g.term} className="gl-item">
            <dt>{g.term}</dt>
            <dd>
              {g.definition} <span className="mono muted">{moduleName(g.module)}</span>
            </dd>
          </div>
        ))}
      </dl>
      <section aria-labelledby="res-h">
        <h2 id="res-h" className="h2">
          {t('gl.resources')}
        </h2>
        <ul className="res-list">
          {resources.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noopener noreferrer">
                {r.title}
                <span className="sr-only"> {t('gl.external')}</span>
              </a>
              <span className="muted"> {r.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
