import React from 'react';

/**
 * Menu — a trigger button plus a dropdown of rows under a hairline-or-ink
 * edge. The selected row gets the subtle tint and an accent check; a
 * divider separates a destructive item.
 *
 * items: [{ label, value, danger?, divider? }]
 */
export function Menu({ label = 'Sort', items = [], value, onSelect, onDark = false, align = 'left', style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const panelBg = onDark ? 'var(--surface-ink-2)' : 'var(--surface-card)';
  const panelBorder = onDark ? 'var(--border-on-ink-2)' : 'var(--border-strong)';
  const rowFg = onDark ? 'var(--text-inverse-primary)' : 'var(--text-primary)';
  const selBg = onDark ? 'var(--surface-ink-3)' : 'var(--surface-subtle)';
  const dividerC = onDark ? 'var(--border-on-ink)' : 'var(--border-hairline)';
  const dangerC = onDark ? 'var(--danger-on-dark)' : 'var(--danger)';
  const accent = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  const selectedItem = items.find((it) => it.value === value);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', ...style }} {...rest}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 'var(--fw-medium)',
          background: onDark ? 'var(--surface-ink)' : 'var(--surface-card)',
          color: rowFg,
          border: `1px solid ${onDark ? 'var(--border-on-ink-2)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius)', padding: '11px 16px', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, minWidth: 200,
        }}
      >
        {label}: {selectedItem ? selectedItem.label : '—'}
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 11 }}>▾</span>
      </button>
      {open ? (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', [align]: 0, minWidth: 220, zIndex: 20,
          background: panelBg, border: `1px solid ${panelBorder}`, borderRadius: 'var(--radius)',
          padding: 6, boxShadow: 'var(--shadow-pop)',
        }}>
          {items.map((it, i) => {
            if (it.divider) return <div key={`d${i}`} style={{ height: 1, background: dividerC, margin: '6px 0' }} />;
            const selected = it.value === value;
            return (
              <div
                key={it.value}
                onClick={() => { onSelect && onSelect(it.value, it); setOpen(false); }}
                style={{
                  fontSize: 14, padding: '9px 12px', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  color: it.danger ? dangerC : rowFg,
                  background: selected ? selBg : 'transparent',
                  borderRadius: 'var(--radius)',
                }}
              >
                {it.label}
                {selected ? <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: 12 }}>✓</span> : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
