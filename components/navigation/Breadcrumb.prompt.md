Breadcrumb — a mono, uppercase wayfinding trail. The current crumb is ink; ancestors are secondary and clickable.

```jsx
<Breadcrumb items={[{label:'Work'},{label:'Branding'},{label:'Video platform'}]} onNavigate={go} />
```

Last item is treated as the current page (ink, not clickable). Separator defaults to a faint `/`.
