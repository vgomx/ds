Card — the surface primitive. A hairline edge on paper, no shadow ("edges, not shadows"). Compose case-study, content and stat cards from it.

```jsx
<Card>
  <Tag>Content</Tag>
  <h3>Design strategy</h3>
  <p>Aligning stakeholders before a pixel is drawn.</p>
</Card>

<Card tone="ink"><StatCard value="12+" label="Years shipping product" /></Card>
<Card interactive flush>{/* image then padded body */}</Card>
```

`tone="ink"` for the dark variant; `interactive` lifts the border to ink on hover; `flush` removes padding for image-led cards. Never add a drop shadow — separation is by border.
