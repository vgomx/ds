import * as React from 'react';

/**
 * The system's surface primitive — a hairline edge on paper, never a
 * shadow. Composes the case-study, content and stat cards of the
 * portfolio.
 *
 * @startingPoint section="Data" subtitle="Card — hairline surface, light + ink" viewport="700x300"
 */
export interface CardProps {
  children: React.ReactNode;
  /** @default "default" */
  tone?: 'default' | 'ink';
  /** Lift the border to ink on hover (for clickable cards). @default false */
  interactive?: boolean;
  /** Remove padding (for cards that lead with a full-bleed image). @default false */
  flush?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
