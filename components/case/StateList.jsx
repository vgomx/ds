import React from 'react';

/**
 * StateList — the states a step was designed for, as static mono chips
 * (Empty field, Code expired, Timeout…). Shows coverage without a
 * screen per state. Not interactive.
 */
export function StateList({ states = [], countLabel, style, ...rest }) {
  const heading = countLabel === undefined ? `${states.length} states` : countLabel;
  return (
    <div style={{ ...style }} {...rest}>
      {heading && <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>{heading}</span>}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {states.map((s, i) => (
          <li key={i} style={{ padding: '6px 10px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', color: 'var(--text-primary)' }}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
