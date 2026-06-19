import * as React from 'react';

export interface TableColumn<Row = any> {
  key: string;
  header: React.ReactNode;
  /** CSS grid track, e.g. "2.4fr" or "120px". @default "1fr" */
  width?: string;
  /** @default "left" */
  align?: 'left' | 'right' | 'center';
  /** Render the cell in JetBrains Mono (years, ids). */
  mono?: boolean;
  /** Medium weight for the primary column. */
  strong?: boolean;
  /** Use secondary text color. */
  muted?: boolean;
  /** Custom cell renderer — return any node (e.g. a Badge). */
  render?: (row: Row) => React.ReactNode;
}

/**
 * An index table — hairline rows, a mono header ruled in ink, hovered
 * and selected rows picked out in the subtle tint. The portfolio's
 * "index of work".
 */
export interface TableProps<Row = any> {
  columns: TableColumn<Row>[];
  rows: Row[];
  /** Derive a stable key per row. */
  rowKey?: (row: Row) => string | number;
  /** Key of the currently selected row. */
  selectedKey?: string | number;
  onRowClick?: (row: Row) => void;
  style?: React.CSSProperties;
}

export function Table(props: TableProps): JSX.Element;
