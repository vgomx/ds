import * as React from 'react';

/**
 * An aside with a mono label column on a sunken tint and the story beside it: key findings, systems notes, context next to the narrative.
 */
export interface CalloutProps {
  label: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Callout(props: CalloutProps): JSX.Element;
