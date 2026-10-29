import * as React from 'react';

export interface StickyStep {
  /** Short label after the step number: "Benefits" renders "01 · Benefits". */
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  /** The screen shown while this step is active. Without src a striped placeholder shows. */
  image?: { src?: string; alt?: string };
}
/**
 * A short sequence of screens told as scrolling steps: the screen stays pinned on the left while the steps scroll past on the right. The step crossing the middle of the viewport is active; its screen cross-fades in and the other steps fade back. Stacks below 900px, one screen per step.
 */
export interface StickyStepsProps {
  steps: StickyStep[];
  /** Width of the pinned screen in px. @default 300 */
  mediaWidth?: number;
  /** CSS aspect-ratio of the screen frame; match the exports. @default "9 / 20" */
  ratio?: string;
  /** Accessible name of the list of steps. @default "Screens" */
  label?: string;
  /** Space between steps, so each one gets its moment beside the screen. @default "28vh" */
  stepSpace?: string;
  style?: React.CSSProperties;
}

export function StickySteps(props: StickyStepsProps): JSX.Element;
