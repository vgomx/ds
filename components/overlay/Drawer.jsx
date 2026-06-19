import React from 'react';

/**
 * Drawer — a panel that slides in from an edge over a scrim. Ink by
 * default (the filters surface). Closes on Escape and scrim click.
 */
export function Drawer({ open, onClose, title, children, footer, side = 'right', width = '380px', tone = 'ink', style, ...rest }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const ink = tone === 'ink';
  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'var(--scrim)',
        display: 'flex', justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          width, maxWidth: '90%', height: '100%',
          background: ink ? 'var(--surface-ink)' : 'var(--surface-card)',
          color: ink ? 'var(--text-inverse-primary)' : 'var(--text-primary)',
          borderLeft: side === 'right' ? `1px solid ${ink ? 'var(--border-on-ink)' : 'var(--border-hairline)'}` : 'none',
          borderRight: side === 'left' ? `1px solid ${ink ? 'var(--border-on-ink)' : 'var(--border-hairline)'}` : 'none',
          padding: 22, display: 'flex', flexDirection: 'column',
          animation: `vg-rise var(--dur-base) var(--ease-out)`,
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: ink ? 'var(--text-inverse-faint)' : 'var(--text-muted)' }}>{title}</span>
          <span onClick={onClose} style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: ink ? 'var(--text-inverse-faint)' : 'var(--text-faint)', cursor: 'pointer' }}>✕</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {footer ? <div style={{ marginTop: 'auto', paddingTop: 16 }}>{footer}</div> : null}
      </div>
    </div>
  );
}
