AnnotatedScreen — for the one screen in a case with the most hidden logic, where the reasoning only makes sense pointed at the UI. Use it once per case.

```jsx
<AnnotatedScreen
  image={{ src: '/img/tax.png', alt: 'Tax residency step' }}
  callouts={[
    { x: 50, y: 14, title: 'One question first', body: 'Most people answer no and move on.' },
    { x: 90, y: 34, title: 'A block per country', body: 'Each country asks for different details.' },
  ]}
/>
```

- Markers sit on the element they describe, not in empty space.
- `auto` placement measures the stage: markers past the middle open their card on the left when it fits; on phones the card drops under the screen.
- The row list mirrors the markers. It is the way in on touch and for screen readers; the open card is a live region.
- The active marker and row use the reserved green, because this is an active state.
