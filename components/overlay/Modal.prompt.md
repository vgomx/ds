Modal — a centered dialog over a scrim, bordered in ink. Closes on Escape and scrim click.

```jsx
<Modal open={open} onClose={close} title="Start a project"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="accent">Send</Button></>}>
  <p>Tell me a little about what you're building.</p>
  <Input label="Email" placeholder="you@studio.com" />
</Modal>
```

Pass `footer` for right-aligned actions. Renders nothing when `open` is false. For a side panel of filters/details, use `Drawer`.
