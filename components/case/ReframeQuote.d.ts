import * as React from 'react';

/**
 * The one insight that changed how the problem was framed, set large and centred between hairlines, with its source and the "so what".
 */
export interface ReframeQuoteProps {
  /** "The reframe · Field visits" */
  source?: React.ReactNode;
  quote: React.ReactNode;
  /** The goal the insight points to, in one line. */
  soWhat?: React.ReactNode;
  themes?: React.ReactNode[];
  style?: React.CSSProperties;
}

export function ReframeQuote(props: ReframeQuoteProps): JSX.Element;
