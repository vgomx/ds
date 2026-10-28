import * as React from 'react';

export interface OutcomeItem {
  label: string;
  /** "+38%", "Branch → app", "7 of 7". */
  value: React.ReactNode;
  /** Adds the reserved green dot. Only for a real live status. */
  live?: boolean;
  note?: React.ReactNode;
}
/**
 * Three or four outcomes in one hairline row: real numbers when you can publish them, qualitative shifts (from → to) when you can't.
 */
export interface OutcomeStripProps {
  items: OutcomeItem[];
  /** Accessible name of the list. @default "Outcomes" */
  label?: string;
  style?: React.CSSProperties;
}

export function OutcomeStrip(props: OutcomeStripProps): JSX.Element;
