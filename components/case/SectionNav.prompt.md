SectionNav — where the reader is, how much is left, and a way to jump. Place it yourself (fixed or sticky in the left margin); the component only draws the nav.

```jsx
<SectionNav
  sections={[{ id: 'overview', label: 'Overview' }, { id: 'context', label: 'Context' }, { id: 'research', label: 'Research' }]}
  activeId="context" sectionProgress={40} progress={34} minutesLeft={12}
  style={{ position: 'fixed', left: 24, top: 120 }}
/>
```

- **Rails:** done sections fill ink, the current one fills with `sectionProgress`, upcoming stay hairline.
- **Modes:** `auto` follows the viewport. Collapsed keeps the label as the accessible name and opens with labels while hovered or focused (`openOnHover`, default on), drawn over the page with a shadow. Below 900px it renders nothing: show `ReadingBar` instead.
- **Footer:** the % read, plus minutes left when open. No ring: the rails already show progress.
- **Progress:** the consumer computes `progress`, `sectionProgress` and `minutesLeft` (words ÷ ~200 per minute, never below 1) from scroll.
- Hover tints `surface-subtle`; focus is a 2px `ring`, inset.
