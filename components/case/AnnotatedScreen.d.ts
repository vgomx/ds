import * as React from 'react';

export interface AnnotatedCallout {
  /** Marker position as % of the screen's width. */
  x: number;
  /** Marker position as % of the screen's height. */
  y: number;
  /** Under 5 words. */
  title: string;
  /** One or two sentences. */
  body: React.ReactNode;
}
/**
 * One screen with up to four numbered markers. Hover, focus or tap a marker, or its row underneath, to open its callout. Exactly one is open; the first opens on load.
 */
export interface AnnotatedScreenProps {
  /** The screen. Without `src` a striped placeholder shows at `ratio`. */
  image?: { src?: string; alt?: string };
  /** Up to 4; extra items are ignored. */
  callouts: AnnotatedCallout[];
  /** Placeholder aspect ratio. @default "9 / 16" */
  ratio?: string;
  /** Screen width in px. @default 340 */
  width?: number;
  /** "auto" opens on the side with room, and under the screen when neither fits. @default "auto" */
  placement?: 'auto' | 'right' | 'left';
  /** @default 0 */
  defaultIndex?: number;
  style?: React.CSSProperties;
}

export function AnnotatedScreen(props: AnnotatedScreenProps): JSX.Element;
