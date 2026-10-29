import * as React from 'react';

/**
 * Numbered title-and-body cards on a hairline grid: challenge constraints, research methods, reflection takeaways.
 */
export interface NumberedCardsProps {
  items: { title: React.ReactNode; body?: React.ReactNode; number?: string }[];
  /** Card basis in px before wrapping. @default 260 */
  minWidth?: number;
  /** Accessible name of the list. */
  label?: string;
  style?: React.CSSProperties;
}

export function NumberedCards(props: NumberedCardsProps): JSX.Element;
