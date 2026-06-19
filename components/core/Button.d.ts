import * as React from 'react';

/**
 * The primary action control. Square (2px radius), hairline border,
 * Archivo medium. Monochrome by default — primary is ink, accent is
 * opt-in. Edges and surface tints carry the states, never shadows.
 *
 * @startingPoint section="Core" subtitle="Button — primary, secondary, ghost, accent" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual emphasis. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label */
  iconRight?: React.ReactNode;
  /** @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
