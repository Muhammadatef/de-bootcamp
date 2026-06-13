# 08 — Animations

## Philosophy
Purposeful, not decorative. Every animation should:
1. Guide the eye to what matters
2. Feel fast and snappy (never sluggish)
3. Respect `prefers-reduced-motion`

---

## Library
**Framer Motion** — `import { motion, useInView, useAnimation } from 'framer-motion'`

---

## Global Animation Defaults

```ts
// lib/animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}
```

---

## Section Entrance

All sections use a `useInView` trigger with `once: true, margin: '-100px'`.

```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={staggerContainer}
>
  {children}
</motion.div>
```

---

## Hero Section Animations

### Headline
```ts
// Each word fades up with stagger
// Split "Become a Data Engineer. For Real." into words
// Each word: delay 0.05s apart
variants: {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
}
```

### CTA Button
```ts
// Pulse animation on the primary CTA
keyframes: [
  { boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.4)' },
  { boxShadow: '0 0 0 12px rgba(0, 212, 255, 0)' },
]
duration: 2s, repeat: Infinity
```

### Pipeline Visual (Right Column)
```ts
// Each node animates in from bottom, staggered by 0.1s
// The connecting line draws from top to bottom using SVG pathLength

// Node entrance:
hidden: { opacity: 0, scale: 0.8 }
visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } }

// Pulsing dot on each active node:
animate: { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
transition: { duration: 2, repeat: Infinity, delay: i * 0.2 }

// Line draw animation:
// Use SVG line with strokeDashoffset animation
// pathLength: 0 → 1 over 1.5s ease
```

### Floating data packets on the pipeline line
```ts
// Small cyan dots travel down the pipeline line
// Use CSS animation or Framer Motion keyframes
animate: {
  y: [0, totalLineHeight],
  opacity: [0, 1, 1, 0]
}
transition: {
  duration: 3,
  repeat: Infinity,
  delay: i * 0.8,
  ease: 'linear'
}
```

---

## About Section Animations

Cards stagger in on scroll:
```ts
// staggerChildren: 0.1s between cards
// Each card: fadeUp variant
```

---

## Requirements Section Animations

Cards animate in with scale + fade:
```ts
hidden: { opacity: 0, scale: 0.96 }
visible: { opacity: 1, scale: 1 }
// stagger: 0.12s
```

---

## Curriculum Section Animations

Pipeline timeline:
```ts
// The connecting line between steps draws progressively
// as user scrolls through the section.
// Use useScroll + useTransform to map scroll progress
// to SVG pathLength 0 → 1

// Each step node:
// - Fades in when the line reaches it
// - Step number counts up (0 → N) with counter animation
// - Tag badge slides in from the right
```

Step entrance:
```ts
// Alternating left/right (even = slideInLeft, odd = slideInRight)
even: slideInLeft
odd: slideInRight
```

---

## Instructor Section Animations

Photo:
```ts
// Subtle floating animation
animate: { y: [0, -8, 0] }
transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
```

Credential badges:
```ts
// Scroll horizontally, auto-animate (marquee-like) on mobile
// Or: stagger in from right to left on desktop
```

---

## Application Form Animations

Form fields:
```ts
// Fade up stagger on mount
// Error shake on validation failure:
animate: { x: [-8, 8, -8, 8, 0] }
transition: { duration: 0.4 }
```

Submit button loading state:
```ts
// Text fades out, spinner fades in
// Spinner: rotating SVG circle
```

Success state:
```ts
// Form fades out (opacity 0, y: -10)
// Success message fades in (opacity 1, y: 0)
// Checkmark draws with SVG pathLength animation
```

---

## Navbar

On scroll down → navbar appears with slide down:
```ts
hidden: { y: -60, opacity: 0 }
visible: { y: 0, opacity: 1 }
```

Active section highlight in nav links: smooth color transition.

---

## Scroll Progress Bar

Thin 2px cyan line at the very top of the page.
Grows from 0% to 100% width as user scrolls.

```tsx
const { scrollYProgress } = useScroll()
<motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
```

---

## Reduced Motion

Always wrap with:
```tsx
const prefersReducedMotion = useReducedMotion()
// If true: disable all animations, show final state immediately
```

---

## Performance Notes

- Use `will-change: transform` only on actively animating elements
- Use `layout` prop carefully — only where needed
- Avoid animating `width`, `height` — use `scale` instead
- All animations triggered by `useInView` with `once: true` to avoid re-triggering
