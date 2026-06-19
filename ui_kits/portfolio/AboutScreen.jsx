/* About — bio, an available-for-work band, FAQ, and a contact dialog. */
const VGa = window.VitorGomesDesignSystem_32625a;

function AboutScreen() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 48px 56px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <Eyebrow style={{ marginBottom: 24 }}>About</Eyebrow>
          <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 700, margin: 0, maxWidth: '16ch' }}>I design brands and the products they become.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '52ch', margin: '24px 0 0' }}>I'm Vitor — a product designer working across identity, interface and design systems. Twelve years in, I still believe the best systems are the ones you barely notice: restraint, one clear signal, edges that do the work.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <VGa.Button variant="accent" onClick={() => setOpen(true)}>Get in touch</VGa.Button>
            <VGa.Button variant="ghost">Download CV</VGa.Button>
          </div>
        </div>
        <VGa.Card tone="ink" style={{ padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <VGa.Avatar name="Vitor Gomes" size="lg" />
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--paper)' }}>Vitor Gomes</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-inverse-faint)', marginTop: 4 }}>Amsterdam · Remote</div>
            </div>
          </div>
          <div style={{ marginBottom: 18 }}><VGa.Badge status="live" onDark>Available · Q3</VGa.Badge></div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-inverse-muted)', margin: 0 }}>Taking on two select projects this quarter — brand systems and product design for teams shaping something new.</p>
        </VGa.Card>
      </section>

      <section style={{ borderTop: '1px solid var(--border-hairline)', maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 48px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, alignItems: 'start' }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>Questions</h2>
        <VGa.Accordion items={[
          { title: 'What do you work on?', content: "Brand and product design for teams shaping new things — identity, interface and the systems that hold them together." },
          { title: 'Where are you based?', content: 'Amsterdam, working remotely across European and US time zones.' },
          { title: 'Do you take freelance?', content: 'Yes — a couple of select engagements a quarter, usually 4–12 weeks.' },
          { title: "What's your process?", content: 'Brief, design, ship. Tight loops, working in the open, no black boxes.' },
        ]} />
      </section>

      <VGa.Modal open={open} onClose={() => setOpen(false)} title="Start a project"
        footer={<><VGa.Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</VGa.Button><VGa.Button variant="accent" size="sm" onClick={() => setOpen(false)}>Send</VGa.Button></>}>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '0 0 16px' }}>Tell me a little about what you're building and I'll get back within two days.</p>
        <VGa.Input label="Email" placeholder="you@studio.com" wrapperStyle={{ marginBottom: 14 }} />
        <VGa.Input label="Project" placeholder="A sentence or two" />
      </VGa.Modal>
    </div>
  );
}

Object.assign(window, { AboutScreen });
