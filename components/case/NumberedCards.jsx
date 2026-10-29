import React from 'react';

/**
 * NumberedCards — numbered title + body cards on a hairline grid. Used
 * for challenge constraints, research methods and reflection takeaways.
 */
export function NumberedCards({ items = [], minWidth = 260, label, style, ...rest }) {
  return (
    <ol aria-label={label} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden', ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{ flex: `1 1 ${minWidth}px`, minWidth: 0, boxSizing: 'border-box', padding: 32, background: 'var(--surface-page)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{it.number || String(i + 1).padStart(2, '0')}</span>
          <h3 style={{ fontSize: 20, lineHeight: 1.25, fontWeight: 600, letterSpacing: 'var(--tracking-snug)', margin: 0 }}>{it.title}</h3>
          {it.body && <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{it.body}</p>}
        </li>
      ))}
    </ol>
  );
}
