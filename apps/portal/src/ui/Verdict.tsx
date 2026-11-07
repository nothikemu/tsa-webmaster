import type { ReactNode, Ref } from 'react';
import { t } from '../core/assets';

/**
 * The result screen of a check or a challenge. The whole slab is one flat color: the realm's when the
 * learner cleared it, red when not yet. The state is written as a giant word (never color alone), echoed
 * as an outlined word cropped by the edge, and followed by the score and the next steps.
 * It is a status region, so a screen reader announces it, and it takes focus when it appears.
 */
export function Verdict({
  passed,
  score,
  total,
  note,
  detail,
  actions,
  innerRef,
}: {
  passed: boolean;
  score: number;
  total: number;
  note: string;
  detail?: string | undefined;
  actions: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}): ReactNode {
  const word = passed ? t('verdict.cleared') : t('verdict.notYet');
  return (
    <div
      className="verdict slab"
      data-state={passed ? 'cleared' : 'notyet'}
      ref={innerRef}
      tabIndex={-1}
      role="status"
    >
      <span className="verdict-echo giant" aria-hidden="true">
        {score}
      </span>
      <p className="verdict-state">{word}</p>
      <p className="num quiz-score">
        {score}
        <span className="muted"> / {total}</span>
      </p>
      <p>{note}</p>
      {detail && <p>{detail}</p>}
      <div className="check-actions">{actions}</div>
    </div>
  );
}
