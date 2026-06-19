import React from 'react';

/**
 * Table — an index of work. Hairline rows, a mono header ruled in ink,
 * a hovered/selected row picked out in the subtle tint. Columns are
 * declared; cells may render any node (e.g. a Badge for status).
 *
 * columns: [{ key, header, width?, align?, mono?, render?(row) }]
 */
export function Table({ columns = [], rows = [], rowKey, selectedKey, onRowClick, style, ...rest }) {
  const template = columns.map((c) => c.width || '1fr').join(' ');
  const [hoverKey, setHoverKey] = React.useState(null);
  const keyOf = (row, i) => (rowKey ? rowKey(row) : i);

  return (
    <div style={{ border: '1px solid var(--border-hairline)', background: 'var(--surface-card)', borderRadius: 'var(--radius)', overflow: 'hidden', ...style }} {...rest}>
      {/* header */}
      <div style={{
        display: 'grid', gridTemplateColumns: template, gap: 16,
        padding: '14px 20px', borderBottom: '1px solid var(--border-strong)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>
        {columns.map((c) => (
          <span key={c.key} style={{ textAlign: c.align || 'left' }}>{c.header}</span>
        ))}
      </div>
      {/* rows */}
      {rows.map((row, i) => {
        const k = keyOf(row, i);
        const isOn = k === selectedKey || k === hoverKey;
        return (
          <div
            key={k}
            onMouseEnter={() => setHoverKey(k)}
            onMouseLeave={() => setHoverKey(null)}
            onClick={() => onRowClick && onRowClick(row)}
            style={{
              display: 'grid', gridTemplateColumns: template, gap: 16, alignItems: 'center',
              padding: '18px 20px',
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)',
              background: isOn ? 'var(--surface-subtle)' : 'transparent',
              cursor: onRowClick ? 'pointer' : 'default',
              transition: 'background var(--dur-fast) var(--ease-out)',
            }}
          >
            {columns.map((c) => (
              <span key={c.key} style={{
                textAlign: c.align || 'left',
                fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
                fontSize: c.mono ? 12 : 15,
                fontWeight: c.strong ? 'var(--fw-medium)' : 'var(--fw-regular)',
                color: c.muted ? 'var(--text-secondary)' : 'var(--text-primary)',
              }}>
                {c.render ? c.render(row) : row[c.key]}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
