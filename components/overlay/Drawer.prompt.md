Drawer — a panel that slides in from an edge over a scrim. Ink by default (the filters surface).

```jsx
<Drawer open={open} onClose={close} title="Filters"
  footer={<Button fullWidth style={{ background:'var(--paper)', color:'var(--ink-900)', borderColor:'var(--paper)' }}>Apply</Button>}>
  {/* filter rows */}
</Drawer>
```

`side` is `left | right`. `tone="ink"` is the default dark surface; `tone="default"` for a light drawer. Title is a mono uppercase eyebrow. For a centered confirm/dialog, use `Modal`.
