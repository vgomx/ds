DecisionRow — the workhorse of Solution.

```jsx
<DecisionRow number="01" title="Expectations before effort" media={{ src: '/img/get-ready.png', alt: 'Get ready screen' }}>
  <p style={{ margin: 0 }}>"Get ready" lists the requirements behind the hard stops…</p>
</DecisionRow>
```

- Headline states the decision; the body covers problem, call and why.
- A phone screen sits at ~260–300px; a group of screens up to 560px (`mediaWidth`).
- When the decision needs a comparison or an anatomy, use `CompareSlider` or `AnnotatedScreen` instead; those run full width.
- **Sticky screen:** when the reasoning runs longer than the screen, the screen sticks beside it while the text scrolls past. Set `--case-sticky-top` on the page to clear a sticky header; `stickyMedia={false}` turns it off.
