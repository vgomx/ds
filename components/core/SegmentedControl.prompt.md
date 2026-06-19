SegmentedControl — a single-select row of segments under one shared outline; the active segment fills with the accent.

```jsx
<SegmentedControl options=['Work', 'About', 'Contact'] value={tab} onChange={setTab} />
<SegmentedControl options={[{label:'Recent',value:'recent'},{label:'A–Z',value:'az'}]} value={sort} onChange={setSort} />
```

Use for 2–4 short, mutually exclusive options (view switchers, small filters). Selected fills with the accent (ink by default); the rest are muted text divided by hairlines. Set `onDark` on ink surfaces.
