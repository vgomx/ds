Button — the primary action control; square 2px radius, hairline border, Archivo medium. Use for any click action; pick emphasis by variant.

```jsx
<Button onClick={save}>Start a project</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="accent">Get in touch</Button>
```

Variants: `primary` (ink fill — the default emphasis), `secondary` (outline), `ghost` (text-only, tints on hover), `accent` (the reserved accent — monochrome ink unless a `[data-accent="green"]` scope is active), `danger` (outline that fills red on hover). Sizes `sm | md | lg`. `disabled` greys to a flat fill. Never stack two primaries side by side — pair primary with secondary or ghost.
