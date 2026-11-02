import type { ReactNode } from 'react';
import { CREDITS, CREDIT_LIBRARIES } from '../content/site';
import { t } from '../core/assets';
import { Doc } from './Doc';

export default function Credits(): ReactNode {
  return (
    <Doc page={CREDITS} eyebrow={t('doc.creditsEyebrow')}>
      <section aria-labelledby="libs-h" className="doc-section">
        <h2 id="libs-h" className="h2">
          {t('doc.libraries')}
        </h2>
        <div className="table-wrap">
          <table className="credits-table">
            <thead>
              <tr>
                <th scope="col">{t('doc.name')}</th>
                <th scope="col">{t('doc.version')}</th>
                <th scope="col">{t('doc.license')}</th>
                <th scope="col">{t('doc.use')}</th>
              </tr>
            </thead>
            <tbody>
              {CREDIT_LIBRARIES.map((c) => (
                <tr key={c.name}>
                  <th scope="row">{c.name}</th>
                  <td className="num">{c.version}</td>
                  <td>{c.license}</td>
                  <td>{c.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Doc>
  );
}
