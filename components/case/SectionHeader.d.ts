import * as React from 'react';

/**
 * The case-study section opener: a mono eyebrow ("04 · Research"), a sentence-case headline and an optional lead.
 */
export interface SectionHeaderProps {
  /** "04" */
  number?: string;
  /** "Research" */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Heading level. @default "h2" */
  as?: 'h1' | 'h2' | 'h3';
  /** Anchor id for SectionNav. */
  id?: string;
  style?: React.CSSProperties;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
