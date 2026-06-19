import React from 'react';

/**
 * Accordion — disclosure rows ruled by hairlines, the set topped by an
 * ink rule. One open at a time (single) or many (allowMultiple). The
 * open row shows an accent "–"; closed rows a faint "+".
 *
 * items: [{ title, content }]
 */
export function Accordion({ items = [], defaultOpen = 0, allowMultiple = false, style, ...rest }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen == null ? [] : [defaultOpen]));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div style={{ borderTop: '1px solid var(--border-strong)', maxWidth: 'var(--container-sm)', ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
            <div
              onClick={() => toggle(i)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 4px', cursor: 'pointer', gap: 16 }}
            >
              <span style={{ fontSize: 17, fontWeight: 'var(--fw-semibold)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{it.title}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, lineHeight: 1, color: isOpen ? 'var(--accent)' : 'var(--text-faint)' }}>{isOpen ? '–' : '+'}</span>
            </div>
            {isOpen && it.content ? (
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0, padding: '0 4px 22px', maxWidth: '60ch' }}>{it.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
