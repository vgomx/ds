Stepper — numbered nodes joined by hairline connectors. Completed steps are ink, the active one is the accent, upcoming are outlined.

```jsx
<Stepper steps={['Brief', 'Design', 'Ship']} current={1} />
```

`current` is 0-indexed. Connectors fill with the accent up to the active step. For linear processes — a project flow, a multi-step form.
