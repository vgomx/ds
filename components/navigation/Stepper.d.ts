import * as React from 'react';

/**
 * Numbered nodes joined by hairline connectors. Completed steps are ink,
 * the active one is the accent, upcoming steps are outlined. For a
 * project process — Brief / Design / Ship.
 */
export interface StepperProps {
  /** Step labels in order. */
  steps: string[];
  /** 0-indexed active step. @default 0 */
  current?: number;
  style?: React.CSSProperties;
}

export function Stepper(props: StepperProps): JSX.Element;
