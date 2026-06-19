import * as React from 'react';

/**
 * A centered dialog over a scrim, bordered in ink (edges, not shadows).
 * Closes on Escape and scrim click. Renders nothing when closed.
 */
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer node (typically the action buttons). */
  footer?: React.ReactNode;
  /** Max width in px. @default 380 */
  width?: number;
  style?: React.CSSProperties;
}

export function Modal(props: ModalProps): JSX.Element | null;
