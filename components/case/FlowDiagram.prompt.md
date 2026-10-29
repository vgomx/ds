FlowDiagram — the shape of a branching flow in ten seconds, before any screen.

```jsx
<FlowDiagram
  nodes={[
    { id: 'start', type: 'step', label: 'Start', x: 0, y: 60 },
    { id: 'gate', type: 'decision', label: 'In KSA?', x: 176, y: 48 },
    { id: 'id', type: 'step', label: 'ID entry', x: 336, y: 60 },
    { id: 'stop', type: 'exit', label: 'Exit · outside KSA', x: 172, y: 196 },
  ]}
  edges={[{ from: 'start', to: 'gate' }, { from: 'gate', to: 'id' }, { from: 'gate', to: 'stop' }]}
  paths={[
    { id: 'main', label: 'Main path', nodes: ['start', 'gate', 'id'] },
    { id: 'exit', label: 'Exit', nodes: ['start', 'gate', 'stop'], description: 'A hard stop with a way forward.' },
  ]}
/>
```

- Connectors route automatically: straight when aligned, an elbow when the target is further along, down-and-across when it sits below. Use `points` for anything else.
- Keep it to ~10 nodes. Beyond that, show the full board as a figure below it instead.
- One verb or noun per box. Fixed width; scrolls sideways on narrow screens rather than shrinking the text.
