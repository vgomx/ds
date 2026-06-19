Menu — a trigger button plus a dropdown of selectable rows. The selected row gets an accent check; a divider sets off a destructive item.

```jsx
<Menu label="Sort" value={sort} onSelect={setSort} items={[
  { label: 'Recent', value: 'recent' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'A–Z', value: 'az' },
  { divider: true },
  { label: 'Clear filters', value: 'clear', danger: true },
]} />
```

Closes on outside click. Set `onDark` on ink surfaces; `align="right"` to anchor the panel to the right edge. The panel is one of the few places a `--shadow-pop` is allowed (it floats free of an edge).
