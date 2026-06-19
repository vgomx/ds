import React from 'react';

/**
 * Modal — a centered dialog over a scrim. Bordered in ink (edges, not
 * shadows). Header with title + close, a body, and a right-aligned footer.
 * Renders nothing when closed.
 */
export function Modal({ open, onClose, title, children, footer, width = 380, style, ...rest }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'var(--scrim)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          background: 'var(--surface-card)', border: '1px solid var(--ink-900)',
          borderRadius: 'var(--radius)', width: '100%', maxWidth: width,
          animation: 'vg-rise var(--dur-base) var(--ease-out)', ...style,
        }}
        {...rest}
      >
        {title ? (
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '18px 20px', borderBottom: '1px solid var(--border-hairline)',
          }}>
            <span style={{ fontSize: 16, fontWeight: 'var(--fw-semibold)', letterSpacing: '-0.01em' }}>{title}</span>
            <span onClick={onClose} style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--text-faint)', cursor: 'pointer' }}>✕</span>
          </div>
        ) : null}
        <div style={{ padding: 20 }}>{children}</div>
        {footer ? (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', padding: '0 20px 20px' }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
