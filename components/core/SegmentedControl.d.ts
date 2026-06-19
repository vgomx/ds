import * as React from 'react';

export type SegmentOption = string | { label: string; value: string };

/**
 * A single-select row of segments sharing one outline; the selected
 * segment fills with the accent and dividers are hairlines. For
 * view-switchers (Work / About / Contact) and small filters.
 */
export interface SegmentedControlProps {
  options: SegmentOption[];
  /** Selected value; defaults to the first option. */
  value?: string;
  onChange?: (value: string) => void;
  /** Invert for placement on a dark surface. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
