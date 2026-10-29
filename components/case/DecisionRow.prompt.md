DecisionRow — the workhorse of Solution.

```jsx
<DecisionRow number="01" title="Expectations before effort" media={{ src: '/img/get-ready.png', alt: 'Get ready screen' }}>
  <p style={{ margin: 0 }}>"Get ready" lists the requirements behind the hard stops…</p>
</DecisionRow>
```

- Headline states the decision; the body covers problem, call and why.
- A phone screen sits at ~260–300px; a group of screens up to 560px (`mediaWidth`).
- When the decision needs a comparison or an anatomy, use `CompareSlider` or `AnnotatedScreen` instead; those run full width.
- **Sticky text:** when the screen is taller than the text (a long flow, a full board), the text column sticks while the screen scrolls past. Set `--case-sticky-top` on the page to clear a sticky header; `stickyText={false}` turns it off.
