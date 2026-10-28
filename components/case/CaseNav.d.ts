import * as React from 'react';

export interface CaseLink { title: React.ReactNode; href?: string; }
/**
 * Previous and next case at the end of a case study, so the reader moves on instead of bouncing.
 */
export interface CaseNavProps {
  /** Omit on the first case. */
  prev?: CaseLink;
  next?: CaseLink;
  onNavigate?: (item: CaseLink, dir: 'prev' | 'next', event: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function CaseNav(props: CaseNavProps): JSX.Element;
