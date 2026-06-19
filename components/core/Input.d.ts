import * as React from 'react';

/**
 * A hairline text field. Square 2px radius, transparent fill; the border
 * thickens to ink on focus (a crisp edge, never a glow). Mono uppercase
 * label above, mono hint/error below.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Mono helper text below the field. */
  hint?: string;
  /** Error message — turns the border + message red. */
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  wrapperStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
