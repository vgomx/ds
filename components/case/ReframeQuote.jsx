import React from 'react';

/**
 * ReframeQuote — the one insight that changed how the problem was
 * framed, set large and centred between hairlines, with its source and
 * the "so what". Once per case.
 */
export function ReframeQuote({ source, quote, soWhat, themes = [], style, ...rest }) {
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' };
  return (
    <figure style={{ margin: '0 auto', padding: '56px 24px', maxWidth: 880, borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center', ...style }} {...rest}>
      <span aria-hidden="true" style={{ fontSize: 96, lineHeight: 0.6, fontWeight: 800, color: 'var(--gray-200)', height: 40 }}>“</span>
      {source && <span style={mono}>{source}</span>}
      <blockquote style={{ margin: 0, fontSize: 40, lineHeight: 1.15, fontWeight: 500, letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' }}>{quote}</blockquote>
      {themes.length > 0 && (
        <ul aria-label="Themes" style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px', ...mono, fontWeight: 400 }}>
          {themes.map((t, i) => (
            <React.Fragment key={i}>
              {i > 0 && <li aria-hidden="true" style={{ color: 'var(--gray-300)' }}>·</li>}
              <li>{t}</li>
            </React.Fragment>
          ))}
        </ul>
      )}
      {soWhat && <figcaption style={{ marginTop: themes.length ? -12 : 0, fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', textWrap: 'balance' }}>{soWhat}</figcaption>}
    </figure>
  );
}
