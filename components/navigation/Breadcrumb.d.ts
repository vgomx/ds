import * as React from 'react';

export interface Crumb { label: string; href?: string; }

/**
 * A mono, uppercase wayfinding trail — the current crumb is ink,
 * ancestors are secondary, separators a faint slash.
 */
export interface BreadcrumbProps {
  items: Crumb[];
  onNavigate?: (item: Crumb, index: number) => void;
  /** @default "/" */
  separator?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
