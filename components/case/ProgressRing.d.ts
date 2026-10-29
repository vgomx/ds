import * as React from 'react';

/**
 * A small ink arc on a hairline track that pairs with a percentage, so reading progress never reads as another section number. Ink at every value, including 100.
 */
export interface ProgressRingProps {
  /** 0–100. Clamped. */
  value: number;
  /** Rendered size in px. @default 14 */
  size?: number;
  /** Stroke in viewBox units (the ring is drawn on 14). @default 2 */
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export function ProgressRing(props: ProgressRingProps): JSX.Element;
