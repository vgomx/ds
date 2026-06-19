Input — a hairline text field with an optional mono label, hint and error. Square 2px radius; border thickens to ink on focus.

```jsx
<Input label="Email" placeholder="you@studio.com" />
<Input label="Email" error="Enter a valid address" />
<Input placeholder="Search work" prefix={<SearchIcon />} />
```

Transparent fill, hairline border that goes ink on focus and red on `error`. Use `prefix`/`suffix` for inline icons. Labels and hints are JetBrains Mono, uppercase.
