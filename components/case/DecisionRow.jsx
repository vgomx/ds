import React from 'react';
import { Tag } from '../core/Tag.jsx';

const placeholder = {
  aspectRatio: '9 / 16', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)',
  background: 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

/**
 * DecisionRow — one design decision with the screen that shows it:
 * screen on the left, number + headline + reasoning on the right.
 * Stacks screen-first on narrow viewports. When the text is longer
 * than the screen, the screen sticks while the text scrolls past
 * (top offset from --case-sticky-top).
 */
export function DecisionRow({ number, title, tag, children, media, mediaWidth = 280, divider = true, stickyMedia = true, style, ...rest }) {
  let visual = media;
  if (media && media.src) {
    visual = <img src={media.src} alt={media.alt || ''} style={{ display: 'block', width: '100%', height: 'auto', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)' }} />;
  } else if (!media) {
    visual = <div style={placeholder}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>[ Screen ]</span></div>;
  }
  return (
    <article style={{ paddingTop: divider ? 40 : 0, borderTop: divider ? '1px solid var(--border-hairline)' : 0, display: 'flex', flexWrap: 'wrap', gap: '32px 48px', alignItems: 'flex-start', ...style }} {...rest}>
      <div style={{ flex: `0 1 ${mediaWidth}px`, minWidth: Math.min(220, mediaWidth), maxWidth: '100%', ...(stickyMedia ? { position: 'sticky', top: 'var(--case-sticky-top, 24px)' } : null) }}>{visual}</div>
      <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {number && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{number}</span>}
          {tag && <Tag tone="subtle" size="sm">{tag}</Tag>}
        </div>
        <h3 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', margin: 0 }}>{title}</h3>
        <div style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
      </div>
    </article>
  );
}
