import * as React from 'react';

export interface FlowNode {
  id: string;
  /** step = box, decision = diamond, exit = dashed box. */
  type: 'step' | 'decision' | 'exit';
  label: React.ReactNode;
  /** Top-left position in px. */
  x: number;
  y: number;
  /** Defaults: step 136×56, decision 120×80, exit 128×48. */
  w?: number;
  h?: number;
}
export interface FlowEdge {
  from: string;
  to: string;
  /** Override the automatic route with your own points ([x, y] in px). */
  points?: [number, number][];
}
export interface FlowPath {
  id: string;
  label: string;
  /** Node ids on this path; an edge is on the path when both its ends are. */
  nodes: string[];
  /** One line shown under the diagram while the path is traced. */
  description?: string;
}
/**
 * A journey drawn from data: steps, decisions (rounded green diamonds) and exits (dashed), joined by orthogonal connectors with arrowheads. Name paths and the reader can trace each one while the rest fades back.
 */
export interface FlowDiagramProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  /** Named routes. With two or more, a SegmentedControl switches between them. */
  paths?: FlowPath[];
  /** id of the path shown first. Defaults to the first. */
  defaultPath?: string;
  /** Canvas size in px; defaults to the nodes' extent. */
  width?: number;
  height?: number;
  /** Label beside the path switcher. @default "Trace a path" */
  title?: string;
  style?: React.CSSProperties;
}

export function FlowDiagram(props: FlowDiagramProps): JSX.Element;
