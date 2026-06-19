import * as React from 'react';

/**
 * A pulsing placeholder bar. Compose several at varying widths for a
 * loading text block or media.
 */
export interface SkeletonProps {
  /** CSS width. @default "100%" */
  width?: string | number;
  /** CSS height. @default 12 */
  height?: string | number;
  /** Animation delay in seconds, for staggering rows. @default 0 */
  delay?: number;
  style?: React.CSSProperties;
}

export function Skeleton(props: SkeletonProps): JSX.Element;
