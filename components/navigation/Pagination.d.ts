import * as React from 'react';

/**
 * Square mono page cells; the active page fills with the accent, edges
 * clamp, the middle collapses to an ellipsis.
 */
export interface PaginationProps {
  /** Total number of pages. */
  total: number;
  /** Current page (1-indexed). */
  page: number;
  onChange?: (page: number) => void;
  style?: React.CSSProperties;
}

export function Pagination(props: PaginationProps): JSX.Element;
