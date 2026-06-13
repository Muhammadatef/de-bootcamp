# DE Bootcamp — Project Overview for Cursor

## What We're Building

A premium, modern landing + application website for **Mohamed Atef Fahmy's Data Engineering Bootcamp** — a free, physical, on-site cohort for 10 Arab professionals in Abu Dhabi.

This is NOT a generic course website. It is a personal brand + community initiative website with a strong Arabic cultural identity, modern dark aesthetic, and seamless application experience.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **File Upload**: react-dropzone (for CV upload)
- **Email**: Resend API (send application to Fahmi's email)
- **Fonts**: IBM Plex Mono (code feel) + Space Grotesk (headings) + Noto Kufi Arabic (Arabic text)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Design Philosophy

- **Dark, premium, modern** — think Linear.app meets a DE engineer's terminal
- **Arabic-first identity** — bilingual (Arabic + English), RTL-aware
- **Pipeline aesthetic** — visual flow of tools as a data pipeline
- **NO generic bootcamp clichés** — no stock photos, no graduation caps, no cheesy gradients
- **Color palette**:
  - Background: `#0a0a0f`
  - Surface: `#0d0d1a`
  - Border: `#1e293b`
  - Primary accent: `#00d4ff` (electric cyan)
  - Secondary accent: `#a78bfa` (violet)
  - Success: `#34d399`
  - Text primary: `#e2e8f0`
  - Text muted: `#64748b`

---

## Site Structure

```
/                          → Landing page (Hero + About + Curriculum + Instructor + Apply)
/apply                     → Full application form page (or modal)
/success                   → Post-submission confirmation page
```

All in a single scroll is preferred — anchor links to sections.

---

## Key Sections (in order)

1. **Hero** — Bold headline, subheadline, CTA button, animated pipeline visual
2. **About the Cohort** — What it is, why free, who it's for
3. **Requirements** — 3 prerequisites (Python, SQL, Linux)
4. **Curriculum** — 11-step visual pipeline (tools in sequence)
5. **Instructor** — Mohamed Atef Fahmy bio, photo, credentials
6. **Apply** — Application form with file upload
7. **Footer** — Links, social, copyright

---

## Files in This Docs Folder

| File | Purpose |
|---|---|
| `00_PROJECT_OVERVIEW.md` | This file — full project context |
| `01_HERO_SECTION.md` | Hero section spec + copy |
| `02_ABOUT_SECTION.md` | About cohort section spec |
| `03_REQUIREMENTS_SECTION.md` | Prerequisites section spec |
| `04_CURRICULUM_SECTION.md` | 11-step pipeline curriculum section |
| `05_INSTRUCTOR_SECTION.md` | Fahmi's bio section |
| `06_APPLICATION_FORM.md` | Full form spec + fields + validation |
| `07_DESIGN_SYSTEM.md` | Colors, typography, spacing, components |
| `08_ANIMATIONS.md` | Framer Motion animation specs |
| `09_EMAIL_INTEGRATION.md` | Resend API integration for form submissions |
| `10_SEO_AND_META.md` | SEO, OG tags, Arabic meta |
