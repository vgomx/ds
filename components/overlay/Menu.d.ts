import * as React from 'react';

export interface MenuItem {
  label?: React.ReactNode;
  value?: string;
  /** Render in the destructive red. */
  danger?: boolean;
  /** Render a hairline divider instead of a row. */
  divider?: boolean;
}

/**
 * A trigger button plus a dropdown of rows. The selected row gets the
 * subtle tint and an accent check; a divider sets off a destructive item.
 * Closes on outside click.
 */
export interface MenuProps {
  /** Trigger prefix, e.g. "Sort". @default "Sort" */
  label?: string;
  items: MenuItem[];
  /** Selected value. */
  value?: string;
  onSelect?: (value: string, item: MenuItem) => void;
  /** Invert for dark surfaces. @default false */
  onDark?: boolean;
  /** Side the panel aligns to. @default "left" */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}

export function Menu(props: MenuProps): JSX.Element;
