import React from 'react';

const label = { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', margin: 0 };

function Cell({ item, basis }) {
  return (
    <div style={{ flex: `1 1 ${basis}px`, minWidth: 0, boxSizing: 'border-box', padding: 24, background: 'var(--surface-page)', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h3 style={{ ...label, color: 'var(--text-primary)' }}>{item.label}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{item.value}</p>
    </div>
  );
}

/**
 * CaseDetails — the spec-sheet table under the cover image: a header
 * row, four short facts (Role, Team, Timeline, Tools) and three longer
 * ones (What I did, Impact, Constraints) on a hairline grid.
 */
export function CaseDetails({ title = 'Case details', facts = [], details = [], attached = true, style, ...rest }) {
  return (
    <section aria-label={title} style={{ ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderTop: attached ? 0 : undefined }}>
        <div style={{ padding: '16px 24px', background: 'var(--surface-page)' }}>
          <h2 style={{ ...label, color: 'var(--text-muted)' }}>{title}</h2>
        </div>
        {facts.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>{facts.map((f, i) => <Cell key={i} item={f} basis={200} />)}</div>}
        {details.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>{details.map((f, i) => <Cell key={i} item={f} basis={280} />)}</div>}
      </div>
    </section>
  );
}
