ReadingBar — the reading progress on phones, where the side nav would cover the text.

```jsx
<ReadingBar section={{ number: '05', label: 'Strategy' }} progress={52} minutesLeft={8} />
```

Render it only below 900px (where `SectionNav` hides itself). It exposes `role="progressbar"` with the rounded value.
