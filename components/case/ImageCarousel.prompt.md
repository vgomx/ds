ImageCarousel — for two to five screens that belong together but would crowd a row: a walkthrough, an onboarding sequence, a state over time.

```jsx
<ImageCarousel startIndex={1} label="Pre-onboarding walkthrough" images={[
  { src: '/img/benefits.png', label: 'Benefits', alt: 'Walkthrough 1 of 3: Benefits' },
  { src: '/img/get-ready.png', label: 'Get ready', alt: 'Walkthrough 2 of 3: Get ready' },
  { src: '/img/start.png', label: "Let's get started", alt: 'Walkthrough 3 of 3: Let's get started' },
]} />
```

- Sits in a DecisionRow's screen slot (pass it as `media`) or anywhere a single screen would. It fills its container's width.
- Start on the screen the text talks about (`startIndex`), not necessarily the first.
- Buttons are 44px; arrow keys work while focus is inside. Only the visible image is exposed to screen readers; the caption is a live region.
- No autoplay and no looping: the reader controls the pace, and the ends are clear.
- If every screen needs to be seen at once to make the point, use a row of screens instead.
