import * as React from 'react';

/**
 * A panel that slides in from an edge over a scrim — ink by default (the
 * filters surface). Closes on Escape and scrim click. Mono uppercase
 * eyebrow title.
 */
export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** @default "right" */
  side?: 'left' | 'right';
  /** CSS width. @default "380px" */
  width?: string;
  /** @default "ink" */
  tone?: 'ink' | 'default';
  style?: React.CSSProperties;
}

export function Drawer(props: DrawerProps): JSX.Element | null;
