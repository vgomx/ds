import * as React from 'react';

/**
 * A thin track with an ink/accent fill. Determinate by default; an
 * indeterminate sweep for unknown durations.
 */
export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  /** Mono label above the track. */
  label?: string;
  /** Show the percentage. @default true */
  showValue?: boolean;
  /** Unknown-duration sweep instead of a value fill. @default false */
  indeterminate?: boolean;
  /** Fill with the accent vs flat ink. @default true */
  accent?: boolean;
  style?: React.CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
