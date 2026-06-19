# Vitor Gomes — Design System

A working design system for **Vitor Gomes**, a product designer's portfolio and the surfaces around it. Monochrome by default, built on **Archivo** + **JetBrains Mono**, with one reserved accent (green) held back for live states. Restraint is the brand: ink on paper, one clear signal, **edges instead of shadows**.

> Draft / v0.1 — derived from the **VG Component Library** (`uploads/VG Component Library.html`, decoded to `scraps/vg-template-decoded.html`) and the public references below. It is the source of truth for every color, type and component decision here.

## Sources
- **VG Component Library** — the authoritative component sheet (provided, decoded in `scraps/`). All tokens and components match it.
- **Visual guidelines** — https://claude.ai/design/p/ee8853f9-47dd-4fcd-bf81-bf21038cdf8d (VG Component Library.dc.html)
- **Portfolio** — https://vitorgomes.design
- **Behance** — https://www.behance.net/gallery/73840685/Vitor-Gomes
- **Brand mark** — `uploads/VG - Symbol.svg` → `assets/vg-symbol.svg`

---

## CONTENT FUNDAMENTALS — how the brand writes

- **Voice: first person, quiet, declarative.** "I design brands and the products they become." "I still believe the best systems are the ones you barely notice." The designer speaks as *I*; the visitor is *you* ("Tell me a little about what you're building").
- **Sentence case everywhere** in prose and headings — "Buttons & groups", "A visual identity for a video platform". The only uppercase is **JetBrains Mono labels** (eyebrows, tags, section markers, metadata), which are tracked `.08–.14em`.
- **Short, confident, concrete.** Statements over adjectives. "Edges, not shadows." "2px radius is the only softness." "Three weights — primary, secondary, ghost — across every state." Em dashes and the occasional fragment set the rhythm.
- **Restraint as a stated value.** Copy names the principle out loud: "Monochrome by default; switch the accent on to bring the reserved green into play." The writing mirrors the design — nothing decorative.
- **No emoji. No exclamation. No hype.** Numbers are used sparingly and only when real ("12+ years", "+38% activation"). Mono is the labelling voice; sans is the speaking voice.
- **Examples to reuse:** eyebrow → `Product Designer · Lisbon · Available Q3`; CTA → `Start a project` / `See all work` / `Get in touch`; status → `Live` / `Draft` / `Archived`; meta → `Role · Lead Designer` `Year · 2026`.

---

## VISUAL FOUNDATIONS

- **Palette — cool monochrome.** Ink `#141416` on paper `#FAFAFA`, with a 12-step cool-neutral gray ramp between them (`tokens/colors.css`). No warm tints. Surfaces are paper or ink; grays do borders and secondary text.
- **Accent — opt-in, not default.** The accent is *ink* in the default (monochrome) mode. A single reserved **green** (`#2F6F4F` light / `#54B084` dark) turns on via `[data-accent="green"]` and is allowed to surface only on live states, CTAs and active markers. Destructive is one warm red (`#A33A2E` / `#E0816F`). That is the entire chromatic vocabulary.
- **Type.** One sans (**Archivo**, 300–800) carries display *and* body; one mono (**JetBrains Mono**, 400–600) labels everything. Display is tight (`-0.03em`, line-height `.98`); body is `15–18px` at `1.55–1.6`. Mono is uppercase and tracked. No serif.
- **Edges, not shadows.** Surfaces separate with **1px borders** (hairline `#E9E9EB`, mute `#BBBBC0`, strong `#141416`) and scrims (`rgba(20,20,22,.55)`). Cards have no drop shadow. The *only* shadow in the system — `--shadow-pop` — is reserved for free-floating overlays (menus, popovers) that have no adjacent edge.
- **Radius — 2px is the only softness.** Every rectangle (buttons, inputs, cards, chips, menus) uses `--radius: 2px`. Circles (`50%`) are reserved for status dots, stepper nodes and avatars. The diamond mark is sharp; the system follows it.
- **Layout.** A `1180px` max-width container, `48px` page gutters, generous section rhythm (`64–80px` vertical). Section bodies often run a `150px / 220px` label-or-sidebar column beside a `1fr` content column. Prose caps at a `~60ch` measure.
- **Backgrounds.** Flat paper or flat ink — **no gradients, no texture, no imagery behind text**. Project imagery sits in bordered frames; absent real images, the system uses its own **diagonal hairline-stripe placeholder** (`repeating-linear-gradient(135deg,#F4F4F5,#E9E9EB)`).
- **Motion — quiet and quick.** `120–300ms`, `ease`/`linear`, never a bounce. Hover *tints* a surface; active *deepens* it (inset overlay); focus is a crisp **2px accent outline, offset 2px** — never a glow. The only continuous motions are the spinner, the indeterminate bar and the skeleton pulse. Overlays enter with a small `vg-rise` (8px, fade).
- **States.** Hover: surface tint or `inset rgba(255,255,255,.14)` on ink. Active/press: `inset rgba(0,0,0,.3)` — color, not scale (nothing shrinks). Disabled: flat `#D6D6D9` fill / `#97979C` text, or muted outline. Selected rows/items: subtle tint `#F4F4F5` + accent marker.
- **Imagery vibe.** When real images are used they read as work-forward and neutral; the chrome stays monochrome so the work carries the color. The system never colorizes its own UI to match an image.

---

## ICONOGRAPHY

- **The brand is nearly icon-free by design.** The source component library uses **almost no icons** — wayfinding and signalling are carried by **JetBrains Mono labels**, hairline rules, and a few **Unicode glyphs** used as functional marks: `▾` (menu caret), `✕` (close), `‹ › …` (pagination), `+ / –` (accordion), `→` (link/CTA affordance), `/` (breadcrumb separator), `✓` (selected row). Status uses a small **filled dot**, not an icon.
- **The one custom mark is the VG symbol** (`assets/vg-symbol.svg`) — a folded-diamond V/G monogram, `viewBox 0 0 562 369`. It renders in `currentColor`, so set the parent's color (ink on paper, paper on ink). Used at ~34–64px in mastheads and footers. Do not recolor it with the accent.
- **No icon font, no SVG icon set, no emoji.** If a future surface genuinely needs a small icon set, match the system's weight: a **thin, geometric, single-stroke** line set (e.g. Lucide at `1.5px`) is the closest fit — **flag any such addition**, since the source ships none.
- **Don't hand-draw icons.** Reuse the Unicode glyph vocabulary above, or the VG mark, before reaching for anything custom.

---

## VISUAL INDEX — what's in this folder

**Foundations**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/colors.css` — ramp, accent (+ green scope), semantic aliases.
- `tokens/typography.css` — families, scale, weights, helper classes.
- `tokens/spacing.css` — spacing, radius, borders, the lone overlay shadow, motion.
- `tokens/fonts.css` — Archivo + JetBrains Mono (Google Fonts; the system's real typefaces).
- `tokens/keyframes.css` — `vg-spin`, `vg-indet`, `vg-pulse`, `vg-rise`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`window.VitorGomesDesignSystem_32625a`)
- `components/core/` — **Button, Tag, Badge, Avatar, Input, SegmentedControl**
- `components/data/` — **Card, StatCard, Table**
- `components/navigation/` — **Breadcrumb, Pagination, Stepper**
- `components/feedback/` — **ProgressBar, Spinner, Skeleton, Accordion, Tooltip**
- `components/overlay/` — **Menu, Modal, Drawer**

Each directory has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, and one `*.card.html` thumbnail.

**UI kit**
- `ui_kits/portfolio/` — interactive recreation of vitorgomes.design (home, work index, case study, about). See its `README.md`.

**Assets**
- `assets/vg-symbol.svg` — the brand mark.

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## Using it
Link `styles.css`, load `_ds_bundle.js`, then `const { Button, Card, Table, … } = window.VitorGomesDesignSystem_32625a`. Stay monochrome; reach for the green accent only on a live/active signal, and never add a drop shadow where a border will do.
<!-- cascade test -->
