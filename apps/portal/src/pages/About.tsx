import type { ReactNode } from 'react';
import { ABOUT, SITE } from '../content/site';
import { Doc } from './Doc';

export default function About(): ReactNode {
  return <Doc page={ABOUT} eyebrow={SITE.event.toUpperCase()} />;
}
