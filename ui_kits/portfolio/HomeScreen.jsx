/* Home — masthead hero, selected work grid, an ink stat strip. */
const VGh = window.VitorGomesDesignSystem_32625a;

function ProjectCard({ project, onOpen }) {
  return (
    <VGh.Card interactive flush onClick={onOpen} style={{ overflow: 'hidden', cursor: 'pointer' }}>
      <ImagePlaceholder label={project.imageLabel} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          {project.tags.map((t) => <VGh.Tag key={t} size="sm">{t}</VGh.Tag>)}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.18, margin: '0 0 10px' }}>{project.title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '0 0 18px' }}>{project.summary}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--accent)', paddingBottom: 3 }}>Read case →</span>
      </div>
    </VGh.Card>
  );
}

function HomeScreen({ projects, onOpenCase, onNavigate }) {
  const featured = projects.slice(0, 4);
  return (
    <div>
      {/* hero */}
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 48px 56px' }}>
        <Eyebrow style={{ marginBottom: 24 }}>Product Designer · Amsterdam · Available Q3</Eyebrow>
        <h1 style={{ fontSize: 'clamp(38px,6vw,72px)', lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 700, margin: 0, maxWidth: '15ch' }}>Design for teams shaping new things.</h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '54ch', margin: '24px 0 0', fontWeight: 400 }}>Twelve years of brand, product and the systems that hold them together — identity through interface, shipped end to end.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <VGh.Button variant="accent" onClick={() => onNavigate('about')}>Start a project</VGh.Button>
          <VGh.Button variant="secondary" onClick={() => onNavigate('work')}>See all work</VGh.Button>
        </div>
      </section>

      {/* selected work */}
      <section style={{ borderTop: '1px solid var(--border-hairline)', maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>Selected work</h2>
          <span onClick={() => onNavigate('work')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', cursor: 'pointer' }}>Index →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {featured.map((p) => <ProjectCard key={p.id} project={p} onOpen={() => onOpenCase(p)} />)}
        </div>
      </section>

      {/* stat strip */}
      <section style={{ background: 'var(--surface-ink)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {[['12+','Years shipping product'],['40','Projects delivered'],['9','Brands built from zero'],['3','Continents, remote']].map(([v,l]) => (
            <VGh.StatCard key={l} value={v} label={l} onDark />
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
