DecisionRow — the workhorse of Solution.

```jsx
<DecisionRow number="01" title="Expectations before effort" media={{ src: '/img/get-ready.png', alt: 'Get ready screen' }}>
  <p style={{ margin: 0 }}>"Get ready" lists the requirements behind the hard stops…</p>
</DecisionRow>
```

- Headline states the decision; the body covers problem, call and why.
- A phone screen sits at ~260–300px; a group of screens up to 560px (`mediaWidth`).
- When the decision needs a comparison or an anatomy, use `CompareSlider` or `AnnotatedScreen` instead; those run full width.
- **Sticky:** the shorter column stays in view while the taller one scrolls past — the text beside a long flow or board, the screen beside long reasoning. Set `--case-sticky-top` on the page to clear a sticky header; `sticky={false}` turns it off.
- **Several screens in one slot?** Use `StickySteps` when each screen needs its own sentence (it replaces a carousel in a case page); keep `ImageCarousel` for tight spaces with no text per screen.
