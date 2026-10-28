CompareSlider — for one decision that changed a screen you can compare like for like: same frame, same content.

```jsx
<CompareSlider
  before={{ src: '/img/progress-before.png', alt: 'Header with a vague progress bar' }}
  after={{ src: '/img/progress-after.png', alt: 'Header with a "1 of 11" step count' }}
  ratio="1928 / 652"
  caption={{ before: 'A bar with no count', after: 'A numbered count on every step' }}
/>
```

- Export both images at the same size and crop; set `ratio` to match.
- Labels use `Badge` (archived for before, live for after) and fade over `dur-base` near the edges.
- The handle stays 44px for touch. Screen readers hear "62% before".
