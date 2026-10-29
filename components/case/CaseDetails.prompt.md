CaseDetails — the 20-second read for a recruiter, straight under the cover.

```jsx
<CaseDetails
  facts={[{ label: 'Role', value: 'Senior Product Designer' }, { label: 'Team', value: '…' }, { label: 'Timeline', value: '2024' }, { label: 'Tools', value: 'Figma' }]}
  details={[{ label: 'What I did', value: '…' }, { label: 'Impact', value: '…' }, { label: 'Constraints', value: '…' }]}
/>
```

- Keep the same seven labels in every case, so cases compare at a glance.
- The hairline grid is intentional: it reads as a spec sheet. No cards, no shadows.
- Cells wrap to two columns, then one; the order never changes.
