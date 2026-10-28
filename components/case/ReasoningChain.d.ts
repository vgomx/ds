import * as React from 'react';

/**
 * A short chain of reasoning in one hairline row: Hypothesis → Finding → Decision, or Considered → Chose → Why.
 */
export interface ReasoningChainProps {
  steps: { label: string; text: React.ReactNode }[];
  /** Accessible name of the list. @default "Reasoning" */
  label?: string;
  style?: React.CSSProperties;
}

export function ReasoningChain(props: ReasoningChainProps): JSX.Element;
