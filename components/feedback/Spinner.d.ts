import * as React from 'react';

/**
 * A hairline ring with an accent leading edge. Optional mono label.
 */
export interface SpinnerProps {
  /** Preset name or explicit pixel diameter. @default "md" */
  size?: 'sm' | 'md' | 'lg' | number;
  /** Mono label to the right. */
  label?: string;
  style?: React.CSSProperties;
}

export function Spinner(props: SpinnerProps): JSX.Element;
