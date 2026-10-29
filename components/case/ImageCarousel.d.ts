import * as React from 'react';

export interface CarouselImage { src?: string; alt?: string; label?: string; }
/**
 * A short sequence of screens in one slot, such as a walkthrough or a multi-step state. One frame, previous and next buttons, bar indicators and a mono "02 / 03 · Label" caption. Never autoplays.
 */
export interface ImageCarouselProps {
  /** The screens, in order. Without src a striped placeholder shows the label. */
  images: CarouselImage[];
  /** Index shown first. @default 0 */
  startIndex?: number;
  /** CSS aspect-ratio of the frame; match the exports. @default "9 / 20" */
  ratio?: string;
  /** Accessible name of the carousel. @default "Screens" */
  label?: string;
  style?: React.CSSProperties;
}

export function ImageCarousel(props: ImageCarouselProps): JSX.Element;
