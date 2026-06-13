# 07 — Design System

## Philosophy
Dark, terminal-inspired, premium. Think Linear.app × a Senior Engineer's personal brand.
No gradients except subtle background ones. No stock photos. No clip art.
Typography does the heavy lifting.

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #0a0a0f;
  --color-bg-surface: #0d0d1a;
  --color-bg-elevated: #0d1117;

  /* Borders */
  --color-border-subtle: #1e293b;
  --color-border-default: #2d3748;
  --color-border-accent: #00d4ff22;

  /* Accent Colors */
  --color-cyan: #00d4ff;
  --color-cyan-dim: #00d4ff22;
  --color-cyan-glow: 0 0 20px #00d4ff44;

  --color-violet: #a78bfa;
  --color-violet-dim: #a78bfa22;

  --color-amber: #f59e0b;
  --color-amber-dim: #f59e0b22;

  --color-red: #f43f5e;
  --color-red-dim: #f43f5e22;

  --color-green: #34d399;
  --color-green-dim: #34d39922;

  /* Text */
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
  --color-text-faint: #334155;

  /* Tags by category */
  --tag-foundation: #00d4ff;
  --tag-core: #a78bfa;
  --tag-advanced: #f59e0b;
  --tag-capstone: #f43f5e;
}
```

---

## Typography

```css
/* Fonts — import in layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;700&family=Noto+Kufi+Arabic:wght@400;500;700&display=swap');

/* Usage */
--font-heading: 'Space Grotesk', sans-serif;    /* All headings */
--font-mono: 'IBM Plex Mono', monospace;        /* Code, eyebrows, numbers */
--font-arabic: 'Noto Kufi Arabic', sans-serif;  /* Arabic text */
--font-body: 'Space Grotesk', sans-serif;       /* Body text */
```

### Type Scale

```css
/* Headings */
.text-hero    { font-size: clamp(40px, 7vw, 80px); font-weight: 700; line-height: 1.1; }
.text-h1      { font-size: clamp(32px, 5vw, 56px); font-weight: 700; line-height: 1.15; }
.text-h2      { font-size: clamp(24px, 3.5vw, 40px); font-weight: 700; line-height: 1.2; }
.text-h3      { font-size: clamp(18px, 2.5vw, 28px); font-weight: 600; line-height: 1.3; }

/* Body */
.text-lg      { font-size: 18px; line-height: 1.7; }
.text-base    { font-size: 16px; line-height: 1.7; }
.text-sm      { font-size: 14px; line-height: 1.6; }
.text-xs      { font-size: 12px; line-height: 1.5; }

/* Eyebrow */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-cyan);
}
```

---

## Spacing

Use 8px base unit throughout:
```
4px  → xs spacing (tight gaps)
8px  → sm
16px → md
24px → lg
32px → xl
48px → 2xl
64px → 3xl
96px → 4xl (section padding)
```

Section padding: `py-24` (96px top/bottom) on desktop, `py-16` on mobile.
Container max-width: `1200px`, centered, `px-6` on mobile.

---

## Components

### Card
```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  padding: 28px;
  transition: border-color 200ms ease, transform 200ms ease;
}
.card:hover {
  border-color: var(--color-cyan-dim);
  transform: translateY(-2px);
}
```

### Badge / Tag
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 12px;
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid;
}
.badge-cyan   { background: #00d4ff15; color: #00d4ff; border-color: #00d4ff33; }
.badge-violet { background: #a78bfa15; color: #a78bfa; border-color: #a78bfa33; }
.badge-amber  { background: #f59e0b15; color: #f59e0b; border-color: #f59e0b33; }
.badge-red    { background: #f43f5e15; color: #f43f5e; border-color: #f43f5e33; }
.badge-green  { background: #34d39915; color: #34d399; border-color: #34d39933; }
```

### Button — Primary
```css
.btn-primary {
  background: var(--color-cyan);
  color: #0a0a0f;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: opacity 150ms, transform 150ms;
}
.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

### Button — Ghost
```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid var(--color-border-subtle);
  cursor: pointer;
  transition: border-color 150ms, color 150ms;
}
.btn-ghost:hover {
  border-color: var(--color-cyan);
  color: var(--color-cyan);
}
```

### Input Field
```css
.input {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--color-text-primary);
  font-size: 15px;
  width: 100%;
  transition: border-color 150ms;
}
.input:focus {
  outline: none;
  border-color: var(--color-cyan);
  box-shadow: 0 0 0 3px var(--color-cyan-dim);
}
.input::placeholder {
  color: var(--color-text-muted);
}
```

### Form Label
```css
.label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
  display: block;
}
```

---

## Navigation

Fixed top navbar, height 60px.
Background: `rgba(10, 10, 15, 0.85)` + `backdrop-filter: blur(12px)`.
Border bottom: `1px solid #1e293b`.

Left: Logo / Name "MAF · بوتكامب"
Right: Nav links (About, Curriculum, Instructor, Apply Now button)

On mobile: hamburger menu → full-screen overlay menu.

---

## Scrollbar
```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #0a0a0f; }
::-webkit-scrollbar-thumb { background: #00d4ff44; border-radius: 2px; }
```

---

## RTL Support

For Arabic text sections, use `dir="rtl"` on the containing element.
Bilingual sections: show English first, Arabic below in muted color, smaller size.
Toggle button in navbar: 🌐 EN | عر — switches between language modes.

---

## Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

Mobile-first approach. Design for 390px (iPhone 15) first.

---

## File Structure

```
app/
  layout.tsx          ← fonts, global styles, metadata
  page.tsx            ← main landing page assembly
  success/page.tsx    ← post-application success page
  api/apply/route.ts  ← form submission API handler

components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Requirements.tsx
    Curriculum.tsx
    Instructor.tsx
    ApplicationForm.tsx
  ui/
    Badge.tsx
    Card.tsx
    Button.tsx
    Input.tsx
    FileUpload.tsx
    PipelineNode.tsx
    LanguageToggle.tsx

lib/
  validations/
    application.ts    ← Zod schema
  utils.ts
  resend.ts           ← email client

styles/
  globals.css         ← CSS variables + base styles
```
