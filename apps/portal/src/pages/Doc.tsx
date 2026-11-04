import type { ReactNode } from 'react';
import type { DocPageContent } from '../content/site';

export function Doc({ page, children }: { page: DocPageContent; children?: ReactNode }): ReactNode {
  return (
    <div className="wrap page prose-page">
      <header className="page-head">
        <h1 className="display">{page.title}</h1>
        <p className="lead">{page.lead}</p>
      </header>
      {page.sections.map((s, i) => (
        <section key={s.heading} aria-labelledby={`doc-${i}`} className="doc-section">
          <h2 id={`doc-${i}`} className="h2">
            {s.heading}
          </h2>
          {s.paragraphs?.map((p) => (
            <p key={p.slice(0, 28)} className="prose">
              {p}
            </p>
          ))}
          {s.items && (
            <ul className="doc-list">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      {children}
    </div>
  );
}
