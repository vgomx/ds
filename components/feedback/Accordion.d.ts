import * as React from 'react';

export interface AccordionItem { title: React.ReactNode; content?: React.ReactNode; }

/**
 * Disclosure rows ruled by hairlines and topped by an ink rule. The open
 * row shows an accent "–", closed rows a faint "+". For FAQs and process
 * steps.
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; null for all closed. @default 0 */
  defaultOpen?: number | null;
  /** Allow several rows open at once. @default false */
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
