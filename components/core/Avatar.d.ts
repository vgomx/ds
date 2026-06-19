import * as React from 'react';

/**
 * A square (2px radius) ink tile with mono initials, or a cropped image.
 * Squares by default — the system's geometry is sharp, not round.
 */
export interface AvatarProps {
  /** Full name — initials are derived from it. */
  name?: string;
  /** Image URL; falls back to initials when absent. */
  src?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "square" */
  shape?: 'square' | 'circle';
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
