import React from 'react';

/**
 * SectionHeader — the case-study section opener: a mono eyebrow
 * ("04 · Research"), a sentence-case headline and an optional lead.
 */
export function SectionHeader({ number, eyebrow, title, lead, as = 'h2', id, style, ...rest }) {
  const H = as;
  const label = [number, eyebrow].filter(Boolean).join(' · ');
  return (
    <header id={id} style={{ ...style }} {...rest}>
      {label && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 20 }}>
          {label}
        </div>
      )}
      <H style={{ fontSize: 40, lineHeight: 1.05, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', margin: 0, textWrap: 'balance' }}>{title}</H>
      {lead && <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '24px 0 0' }}>{lead}</p>}
    </header>
  );
}
