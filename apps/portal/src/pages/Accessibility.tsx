import type { ReactNode } from 'react';
import { ACCESSIBILITY } from '../content/site';
import { t } from '../core/assets';
import { Doc } from './Doc';

export default function Accessibility(): ReactNode {
  return <Doc page={ACCESSIBILITY} eyebrow={t('doc.a11yEyebrow')} />;
}
