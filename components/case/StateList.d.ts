import * as React from 'react';

/**
 * The states a step was designed for, as static mono chips. Shows coverage without a screen per state.
 */
export interface StateListProps {
  states: React.ReactNode[];
  /** Heading above the chips; defaults to "<n> states". Pass null to hide it. */
  countLabel?: React.ReactNode | null;
  style?: React.CSSProperties;
}

export function StateList(props: StateListProps): JSX.Element;
