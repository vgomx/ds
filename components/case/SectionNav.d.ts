import * as React from 'react';

export interface NavSection {
  id: string;
  label: string;
  /** Defaults to the 1-based index, zero-padded ("04"). */
  number?: string;
  /** Defaults to `#${id}`. */
  href?: string;
}
/**
 * The case-study side nav: numbered sections with a reading rail each, and a footer with a ProgressRing, the % read and the minutes left. Open with labels on wide screens, collapsed to numbers in between, hidden on phones.
 */
export interface SectionNavProps {
  sections: NavSection[];
  /** id of the section being read. */
  activeId: string;
  /** How far through the active section, 0–100; fills its rail. @default 0 */
  sectionProgress?: number;
  /** Overall reading progress, 0–100, shown in the footer. @default 0 */
  progress?: number;
  /** Shown beside the % when open. */
  minutesLeft?: number;
  /** "auto": open ≥1500px, collapsed 900–1499px, hidden <900px. @default "auto" */
  mode?: 'auto' | 'open' | 'collapsed' | 'hidden';
  /** Called on click; default behaviour follows the href (#id). */
  onNavigate?: (id: string, event: React.MouseEvent) => void;
  /** Accessible name of the nav. @default "Case sections" */
  label?: string;
  style?: React.CSSProperties;
}

export function SectionNav(props: SectionNavProps): JSX.Element;
