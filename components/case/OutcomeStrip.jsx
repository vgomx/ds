import React from 'react';

/**
 * OutcomeStrip — three or four outcomes in one hairline row. Works with
 * real numbers ("+38%") or qualitative shifts ("Branch → app") when the
 * numbers are under NDA. A `live` item gets the reserved green dot.
 */
export function OutcomeStrip({ items = [], label = 'Outcomes', style, ...rest }) {
  return (
    <ul aria-label={label} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden', ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{ flex: '1 1 200px', minWidth: 0, padding: '28px 24px', background: 'var(--surface-page)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 26, lineHeight: 1.15, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>
            {it.live && <span aria-hidden="true" style={{ width: 10, height: 10, flexShrink: 0, borderRadius: 'var(--radius-pill)', background: 'var(--green-600)' }} />}
            {it.value}
          </span>
          {it.note && <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{it.note}</span>}
        </li>
      ))}
    </ul>
  );
}
