import * as React from 'react';

/**
 * A terse ink bubble on hover/focus, with a small arrow. Wrap the
 * trigger element as its child.
 */
export interface TooltipProps {
  /** Tooltip text. */
  label: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom';
  /** The trigger element. */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
