import React from 'react';

/**
 * ReasoningChain — a short chain of reasoning in one hairline row:
 * Hypothesis → Finding → Decision in Research, or Considered → Chose →
 * Why under a Solution decision.
 */
export function ReasoningChain({ steps = [], label = 'Reasoning', style, ...rest }) {
  return (
    <ol aria-label={label} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden', ...style }} {...rest}>
      {steps.map((s, i) => (
        <li key={i} style={{ flex: '1 1 260px', minWidth: 0, boxSizing: 'border-box', padding: '28px 24px', background: 'var(--surface-page)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
            {i > 0 ? '→ ' : ''}{s.label}
          </span>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
