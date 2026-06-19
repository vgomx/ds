import React from 'react';

/* Builds a compact page list with ellipses around the current page. */
function pageList(total, current, edge = 1, around = 1) {
  const pages = new Set([1, total]);
  for (let p = current - around; p <= current + around; p++) if (p >= 1 && p <= total) pages.add(p);
  for (let p = 1; p <= edge; p++) { pages.add(p); pages.add(total - p + 1); }
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push('…');
    out.push(p);
    prev = p;
  }
  return out;
}

function cell(active, disabled) {
  return {
    fontFamily: 'var(--font-mono)', fontSize: 13,
    width: 38, height: 38, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-ink)' : disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
    border: `1px solid ${active ? 'var(--accent)' : disabled ? 'var(--border-hairline)' : 'var(--border-mute)'}`,
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
}

/**
 * Pagination — square mono page cells; the active page fills with the
 * accent, edges clamp, the middle collapses to an ellipsis.
 */
export function Pagination({ total = 1, page = 1, onChange, style, ...rest }) {
  const go = (p) => { if (p >= 1 && p <= total && p !== page && onChange) onChange(p); };
  const items = pageList(total, page);
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', ...style }} {...rest}>
      <button type="button" disabled={page <= 1} onClick={() => go(page - 1)} style={cell(false, page <= 1)}>‹</button>
      {items.map((it, i) => it === '…'
        ? <span key={`e${i}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)', padding: '0 4px' }}>…</span>
        : <button key={it} type="button" onClick={() => go(it)} style={cell(it === page, false)}>{it}</button>
      )}
      <button type="button" disabled={page >= total} onClick={() => go(page + 1)} style={cell(false, page >= total)}>›</button>
    </div>
  );
}
