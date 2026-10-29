import * as React from 'react';

export interface CompareImage { src?: string; alt?: string; }
/**
 * Before and after in one frame, split by a draggable handle. The whole image is the hit area and it is a native range input, so arrows, Page Up/Down and Home/End work. Each label fades once its side is under 12% of the frame.
 */
export interface CompareSliderProps {
  /** Left layer. Without `src` a striped placeholder shows. */
  before?: CompareImage;
  /** Right layer. */
  after?: CompareImage;
  /** @default { before: "Before", after: "After" } */
  labels?: { before: string; after: string };
  /** Starting split, 0–100 (share of "before" shown). @default 50 */
  start?: number;
  /** CSS aspect-ratio of the frame. @default "16 / 9" */
  ratio?: string;
  /** One line under each side. */
  caption?: { before?: React.ReactNode; after?: React.ReactNode };
  style?: React.CSSProperties;
}

export function CompareSlider(props: CompareSliderProps): JSX.Element;
