StickySteps — a sequence of screens told as you scroll. The screen pins on the left; the steps scroll past on the right, and each one swaps the screen in as it reaches the middle of the viewport.

```jsx
<StickySteps
  ratio="9 / 20"
  steps={[
    { eyebrow: 'Benefits', title: 'Why it is worth opening', body: 'The walkthrough opens with what the account offers.', image: { src: '/benefits.jpg', alt: '…' } },
    { eyebrow: 'Get ready', title: 'What can stop you', body: 'The requirements behind the hard stops, up front.', image: { src: '/get-ready.jpg', alt: '…' } },
  ]}
/>
```

- **Use for** two to five screens that belong to one story (a walkthrough, the parts of a flow) when each needs a sentence or two of its own. For a quick look without text per screen, use `ImageCarousel`.
- **Active step:** the one crossing the middle of the viewport. Its text is full strength; the others sit at 35%. The bar under the screen marks the position.
- **Sticky offset:** `--case-sticky-top` (default 24px) so the screen clears a sticky header.
- **Narrow viewports (<900px):** no pinning; each step shows its own screen above its text.
- Screens cross-fade over `--dur-slow`; each keeps its own alt text, and only the visible one is exposed.
