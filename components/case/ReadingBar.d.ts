import * as React from 'react';

/**
 * The phone version of SectionNav: a slim sticky bar with the current section, minutes left and a 2px progress line.
 */
export interface ReadingBarProps {
  section?: { number: string; label: string };
  /** 0–100. @default 0 */
  progress?: number;
  minutesLeft?: number;
  /** Stick to the top of the scroll container. @default true */
  sticky?: boolean;
  style?: React.CSSProperties;
}

export function ReadingBar(props: ReadingBarProps): JSX.Element;
