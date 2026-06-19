import * as React from 'react';

/**
 * A mono status pill with a leading dot — Live / Draft / Archived.
 * Outline-only; the dot carries the signal, and "live" is the one
 * state allowed to surface the accent.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  status?: 'live' | 'draft' | 'archived' | 'danger' | 'neutral';
  /** Invert for placement on a dark surface. @default false */
  onDark?: boolean;
  /** Show the leading status dot. @default true */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
