/* Work — the index of work: filter, sort, the hairline table, paging. */
const VGw = window.VitorGomesDesignSystem_32625a;

function WorkScreen({ projects, onOpenCase }) {
  const [discipline, setDiscipline] = React.useState('All');
  const [sort, setSort] = React.useState('recent');
  const [page, setPage] = React.useState(1);

  const disciplines = ['All', 'Branding', 'UX / UI', 'Visual Design'];
  let rows = projects.filter((p) => discipline === 'All' || p.discipline === discipline);
  rows = [...rows].sort((a, b) =>
    sort === 'az' ? a.title.localeCompare(b.title)
    : sort === 'oldest' ? a.year - b.year
    : b.year - a.year
  );

  return (
    <div>
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '72px 48px 40px' }}>
        <Eyebrow style={{ marginBottom: 18 }}>Index / {rows.length} projects</Eyebrow>
        <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 700, margin: 0 }}>All work</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
          <VGw.SegmentedControl options={disciplines} value={discipline} onChange={(v) => { setDiscipline(v); setPage(1); }} />
          <VGw.Menu label="Sort" value={sort} onSelect={setSort} align="right" items={[
            { label: 'Recent', value: 'recent' },
            { label: 'Oldest', value: 'oldest' },
            { label: 'A–Z', value: 'az' },
          ]} />
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 48px 40px' }}>
        <VGw.Table
          columns={[
            { key: 'title', header: 'Project', width: '2.4fr', strong: true },
            { key: 'discipline', header: 'Discipline', width: '1.4fr', muted: true },
            { key: 'year', header: 'Year', width: '1fr', mono: true, muted: true },
            { key: 'status', header: 'Status', width: '0.9fr', align: 'right',
              render: (r) => <VGw.Badge status={r.status}>{r.statusLabel}</VGw.Badge> },
          ]}
          rows={rows}
          rowKey={(r) => r.id}
          onRowClick={onOpenCase}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <VGw.Pagination total={4} page={page} onChange={setPage} />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WorkScreen });
