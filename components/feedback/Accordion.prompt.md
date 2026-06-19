Accordion — disclosure rows ruled by hairlines. One open at a time by default; the open row shows an accent "–".

```jsx
<Accordion items={[
  { title: 'What do you work on?', content: 'Brand and product design for teams shaping new things.' },
  { title: 'Where are you based?', content: 'Remote, working across time zones.' },
]} />
```

`defaultOpen` sets the initially open index (or `null` for all closed). Set `allowMultiple` to let several open. For FAQs and process steps; capped to a `--container-sm` measure.
