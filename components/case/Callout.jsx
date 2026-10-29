import React from 'react';

/**
 * Callout — an aside with a mono label column on a sunken tint and the
 * story beside it. For key findings, systems notes and other context
 * that sits next to the main narrative. When the two columns wrap, the
 * label spans the full width instead of leaving a gap beside it.
 */
export function Callout({ label, children, style, ...rest }) {
  return (
    <aside style={{ display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden', ...style }} {...rest}>
      <div style={{ flex: '1 1 280px', minWidth: 0, boxSizing: 'border-box', padding: '32px 28px', background: 'var(--surface-subtle)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{label}</span>
      </div>
      <div style={{ flex: '999 1 480px', minWidth: 0, boxSizing: 'border-box', padding: '32px 28px', background: 'var(--surface-page)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary)' }}>
        {children}
      </div>
    </aside>
  );
}
