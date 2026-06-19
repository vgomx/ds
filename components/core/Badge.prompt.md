Badge — a mono status pill with a leading dot for live / draft / archived states. Outline-only.

```jsx
<Badge status="live">Live</Badge>
<Badge status="draft">Draft</Badge>
<Badge status="archived">Archived</Badge>
<Badge status="live" onDark>Live</Badge>
```

`status` sets the dot + border + text color: `live` is the one place the accent surfaces, `draft`/`archived` step down the gray ramp, `danger` is the reserved red. Set `onDark` on ink surfaces. For a plain category label with no status, use `Tag`.
