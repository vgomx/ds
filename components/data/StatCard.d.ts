import * as React from 'react';

/**
 * A big figure over a mono caption — the one place a number is allowed
 * to shout. Inside an ink Card the figure takes the accent.
 */
export interface StatCardProps {
  /** The figure, e.g. "12+". */
  value: React.ReactNode;
  /** Mono uppercase caption beneath it. */
  label: React.ReactNode;
  /** Set when placed on a dark surface. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
