import * as React from 'react';

export interface DetailItem { label: string; value: React.ReactNode; }
/**
 * The spec-sheet table under the cover image: a header row, four short facts and three longer ones on a hairline grid.
 */
export interface CaseDetailsProps {
  /** @default "Case details" */
  title?: string;
  /** The short row: Role, Team, Timeline, Tools. */
  facts: DetailItem[];
  /** The long row: What I did, Impact, Constraints. */
  details?: DetailItem[];
  /** Drops the top border so it sits flush under a cover image. @default true */
  attached?: boolean;
  style?: React.CSSProperties;
}

export function CaseDetails(props: CaseDetailsProps): JSX.Element;
