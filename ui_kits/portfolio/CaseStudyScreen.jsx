/* Case study — breadcrumb, hero, full-bleed image, sidebar + prose,
   a process stepper and an outcome stat band. */
const VGc = window.VitorGomesDesignSystem_32625a;

function SectionHead({ n, title }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16, alignItems: 'baseline', marginBottom: 16 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--text-faint)' }}>{n}</span>
      <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
    </div>
  );
}

function CaseStudyScreen({ project, onNavigate }) {
  const p = project || {};
  return (
    <div>
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '40px 48px 0' }}>
        <VGc.Breadcrumb items={[{ label: 'Work' }, { label: p.discipline || 'Branding' }, { label: p.title || 'Case study' }]} onNavigate={(it, i) => { if (i < 2) onNavigate('work'); }} />
      </section>

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '40px 48px 48px' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          {(p.tags || []).map((t) => <VGc.Tag key={t}>{t}</VGc.Tag>)}
          <VGc.Badge status={p.status || 'live'}>{p.statusLabel || 'Live'}</VGc.Badge>
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5.5vw,64px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 700, margin: 0, maxWidth: '18ch' }}>{p.title || 'A visual identity for a video platform'}</h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '56ch', margin: '24px 0 0' }}>{p.summary}</p>
      </section>

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 48px 56px' }}>
        <ImagePlaceholder ratio="16/8" label="[ Hero — case study cover ]" style={{ border: '1px solid var(--border-hairline)' }} />
      </section>

      {/* body: sidebar + prose */}
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 48px 80px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <div style={{ border: '1px solid var(--border-hairline)', padding: 8 }}>
            {['Overview', 'Challenge', 'Process', 'Outcome'].map((s, i) => (
              <div key={s} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 12px', borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid transparent',
                background: i === 0 ? 'var(--surface-subtle)' : 'transparent', cursor: 'pointer',
              }}>{s}</div>
            ))}
          </div>
          <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 2, color: 'var(--text-muted)' }}>
            <div>Role · Lead Designer</div>
            <div>Year · {p.year || '2026'}</div>
            <div>Team · 4</div>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 56 }}>
            <SectionHead n="01" title="Overview" />
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '64ch', marginLeft: 76 }}>A hosting product had outgrown its first identity. We rebuilt the brand around a single confident mark, a monochrome system and a reserved accent — restraint that let the work, not the chrome, carry the page.</p>
          </div>
          <div style={{ marginBottom: 56 }}>
            <SectionHead n="02" title="Challenge" />
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '64ch', marginLeft: 76 }}>Three product lines, one voice. The system had to flex from a dense dashboard to a marketing hero without losing its center of gravity — edges over shadows, mono labels everywhere, one accent held in reserve for the live state.</p>
          </div>
          <div style={{ marginBottom: 56 }}>
            <SectionHead n="03" title="Process" />
            <div style={{ marginLeft: 76 }}><VGc.Stepper steps={['Brief', 'Design', 'Ship']} current={2} /></div>
          </div>
          <div>
            <SectionHead n="04" title="Outcome" />
            <div style={{ marginLeft: 76, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <VGc.Card tone="ink"><VGc.StatCard value="+38%" label="Activation, first 90 days" onDark /></VGc.Card>
              <VGc.Card tone="ink"><VGc.StatCard value="1" label="System, three products" onDark /></VGc.Card>
            </div>
            <div style={{ marginLeft: 76, marginTop: 32 }}>
              <VGc.Button variant="accent" onClick={() => onNavigate('about')}>Start a project like this</VGc.Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CaseStudyScreen });
