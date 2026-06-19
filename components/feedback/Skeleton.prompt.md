Skeleton — a pulsing placeholder bar for loading states.

```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
  <Skeleton width="70%" />
  <Skeleton />
  <Skeleton width="88%" delay={0.2} />
</div>
```

Stagger rows with `delay` (seconds) for a wave. Use varying `width`s so it reads as text, not a block.
