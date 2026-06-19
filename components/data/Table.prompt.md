Table — an index of work. Hairline rows, a mono header ruled in ink, hovered/selected rows in the subtle tint.

```jsx
<Table
  columns={[
    { key: 'name', header: 'Project', width: '2.4fr', strong: true },
    { key: 'discipline', header: 'Discipline', width: '1.4fr', muted: true },
    { key: 'year', header: 'Year', width: '1fr', mono: true, muted: true },
    { key: 'status', header: 'Status', width: '0.8fr', align: 'right',
      render: (r) => <Badge status={r.status}>{r.statusLabel}</Badge> },
  ]}
  rows={projects}
  rowKey={(r) => r.id}
/>
```

Declare `columns` with grid `width`s; use `render` to drop a `Badge`, link or any node into a cell. `mono` for data columns (years, ids), `strong` for the primary column. Rows highlight on hover and via `selectedKey`.
