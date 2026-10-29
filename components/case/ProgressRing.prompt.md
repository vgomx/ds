ProgressRing — a 14px ink arc on a hairline track, read clockwise from 12 o'clock. Pair it with the % it shows; on its own it carries no value for screen readers (it's `aria-hidden`).

```jsx
<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><ProgressRing value={34} /> 34%</span>
```

- Stays ink at 100%. Green is reserved for live and active states, not completion.
- Used inside `SectionNav`'s footer; reusable anywhere a small progress read helps.
