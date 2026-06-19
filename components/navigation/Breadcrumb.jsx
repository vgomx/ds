import React from 'react';

/**
 * Breadcrumb — a mono, uppercase trail. The current (last) crumb is ink,
 * ancestors are secondary, separators are a faint slash. Click ancestors
 * via onNavigate.
 *
 * items: [{ label, href? }]
 */
export function Breadcrumb({ items = [], onNavigate, separator = '/', style, ...rest }) {
  return (
    <nav
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
        textTransform: 'uppercase',
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <span
              onClick={() => !last && onNavigate && onNavigate(it, i)}
              style={{
                color: last ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: !last && onNavigate ? 'pointer' : 'default',
              }}
            >{it.label}</span>
            {last ? null : <span style={{ color: 'var(--text-disabled)' }}>{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
