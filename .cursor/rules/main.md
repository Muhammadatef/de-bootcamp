# DE Bootcamp Website — Cursor Agent Rules

## Project Identity
You are building a premium landing + application website for Mohamed Atef Fahmy's
Data Engineering Bootcamp — a free, physical, on-site cohort for 10 Arab professionals
in Abu Dhabi, UAE.

This is a personal brand website. It must feel iconic, premium, and Arabic-first.

---

## Core Rules

### 1. Always Read the Docs First
Before building any section, read the corresponding doc in `/docs/`:
- `00_PROJECT_OVERVIEW.md` — start here
- `01_HERO_SECTION.md` through `10_SEO_AND_META.md` — one per feature

### 2. Tech Stack (Strict)
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS for utilities
- Framer Motion for animations
- React Hook Form + Zod for forms
- Resend for email
- react-dropzone for CV upload
- Vercel Blob for file storage

Do NOT use: jQuery, Bootstrap, Material UI, Chakra UI, or any CSS framework
other than Tailwind.

### 3. Design System (Non-Negotiable)
All colors, fonts, and spacing from `07_DESIGN_SYSTEM.md` must be used exactly.
Primary bg: #0a0a0f
Primary accent: #00d4ff
Headings font: Space Grotesk
Code/mono font: IBM Plex Mono
Arabic font: Noto Kufi Arabic

### 4. Bilingual Support
Every user-facing string must exist in both English and Arabic.
Store strings in `/lib/i18n.ts` as a simple object:
```ts
export const copy = {
  en: { heroHeadline: "Become a Data Engineer. For Real.", ... },
  ar: { heroHeadline: "كن مهندس بيانات. بجد.", ... }
}
```
Use a `useLanguage()` hook and a toggle button in the navbar.

### 5. Mobile First
Build every component mobile-first.
Test at 390px (iPhone 15) viewport.
Desktop layout is the enhancement, not the default.

### 6. Animations
All from `08_ANIMATIONS.md`. No other animation libraries.
Always include `useReducedMotion()` check.
All scroll-triggered animations use `useInView` with `once: true`.

### 7. Form Handling
Form in `06_APPLICATION_FORM.md` is complete.
API route in `app/api/apply/route.ts`.
Email via Resend as documented in `09_EMAIL_INTEGRATION.md`.
CV stored in Vercel Blob.

### 8. No External Images
Do not use stock photos or external image URLs.
Use SVG icons (Lucide React) and emoji for all visual elements.
Fahmi's photo: use a placeholder div with initials "MAF" in cyan until real photo provided.

### 9. Performance
- All images: next/image with lazy loading
- No layout shift (specify width/height on all media)
- Lighthouse score target: 90+ on all metrics
- Fonts: preconnect to Google Fonts

### 10. File Naming
```
PascalCase for components: Hero.tsx, About.tsx
camelCase for utilities: useLanguage.ts, buildEmail.ts
kebab-case for routes: /apply, /success
SCREAMING_SNAKE for env vars: RESEND_API_KEY
```

---

## Build Order

Build in this exact sequence:

1. `app/layout.tsx` — fonts, metadata, global CSS variables
2. `styles/globals.css` — color variables, base styles, scrollbar
3. `components/layout/Navbar.tsx` — with language toggle
4. `lib/i18n.ts` — all copy in EN + AR
5. `components/sections/Hero.tsx` — with pipeline animation
6. `components/sections/About.tsx`
7. `components/sections/Requirements.tsx`
8. `components/sections/Curriculum.tsx` — pipeline timeline
9. `components/sections/Instructor.tsx`
10. `lib/validations/application.ts` — Zod schema
11. `components/ui/FileUpload.tsx`
12. `components/sections/ApplicationForm.tsx`
13. `app/api/apply/route.ts`
14. `lib/resend.ts`
15. `app/success/page.tsx`
16. `components/layout/Footer.tsx`
17. `app/page.tsx` — assemble all sections

---

## Package.json Setup

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "framer-motion": "11.x",
    "react-hook-form": "7.x",
    "zod": "3.x",
    "@hookform/resolvers": "3.x",
    "resend": "3.x",
    "react-dropzone": "14.x",
    "@vercel/blob": "0.x",
    "lucide-react": "0.x",
    "clsx": "2.x"
  }
}
```

---

## Environment Variables Needed

```env
# .env.local
RESEND_API_KEY=re_...
NOTIFICATION_EMAIL=fahmi@example.com
FROM_EMAIL=noreply@yourdomain.com
BLOB_READ_WRITE_TOKEN=vercel_blob_...
```

---

## Deployment

Target: Vercel
- Auto-deploy from main branch
- Add environment variables in Vercel dashboard
- Custom domain: add in Vercel after deploy

---

## Final Checklist Before Launch

- [ ] All sections render on mobile (390px)
- [ ] Language toggle works (EN ↔ AR)
- [ ] Form submits successfully
- [ ] Fahmi receives email with CV attached
- [ ] Applicant receives confirmation email
- [ ] All animations respect prefers-reduced-motion
- [ ] Lighthouse: Performance 90+, Accessibility 95+, SEO 95+
- [ ] OG image renders correctly on LinkedIn/Twitter preview
- [ ] All links work (portfolio, GitHub, Medium)
- [ ] Success page loads after form submission
