import * as React from 'react';

/**
 * One design decision with the screen that shows it: screen on the left, number, headline and reasoning on the right. Stacks screen-first on narrow viewports.
 */
export interface DecisionRowProps {
  number?: string;
  title: React.ReactNode;
  /** Optional small tag beside the number. */
  tag?: React.ReactNode;
  /** The reasoning: one or two paragraphs. */
  children?: React.ReactNode;
  /** An image ({ src, alt }), any node (a screen group, a live UI snippet), or nothing for a placeholder. */
  media?: { src: string; alt?: string } | React.ReactNode;
  /** Media column basis in px. @default 280 */
  mediaWidth?: number;
  /** Hairline above the row. @default true */
  divider?: boolean;
  /** The shorter column sticks while the taller one scrolls past: text beside a long board, or the screen beside long reasoning. Offset from the CSS variable --case-sticky-top (default 24px). @default true */
  sticky?: boolean;
  /** @deprecated Use `sticky`. */
  stickyMedia?: boolean;
  style?: React.CSSProperties;
}

export function DecisionRow(props: DecisionRowProps): JSX.Element;
