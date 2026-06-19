import * as React from 'react';

/**
 * A mono, uppercase category chip — "Case Study", "Branding", "2026".
 * Outline by default; edges over fills.
 */
export interface TagProps {
  children: React.ReactNode;
  /** @default "outline" */
  tone?: 'outline' | 'solid' | 'subtle';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Invert for placement on a dark surface. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
