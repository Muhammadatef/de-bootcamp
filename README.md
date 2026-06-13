# DE Bootcamp — Abu Dhabi

A premium, bilingual (English / Arabic) landing + application website for
**Mohamed Atef Fahmy's free Data Engineering Bootcamp** — a physical, on-site
cohort for 10 Arab professionals in Abu Dhabi.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion,
React Hook Form + Zod, Resend (email), and Vercel Blob (CV storage).

---

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in values when ready (optional for local dev)
npm run dev                          # http://localhost:3000
```

The site runs fully without any environment variables. Until you add email/blob
keys, form submissions are validated, the CV is saved to your OS temp folder,
and the application is logged to the terminal — the success page still shows.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (type-checks + lints) |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |

---

## Project structure

```
app/
  layout.tsx            fonts, metadata, JSON-LD, scroll progress bar
  page.tsx              landing page (assembles all sections)
  success/page.tsx      post-submission confirmation
  api/apply/route.ts    form handler: validate → store CV → send emails
  globals.css           design tokens + base styles

components/
  layout/   Navbar, Footer
  sections/ Hero, About, Requirements, Curriculum, Instructor, ApplicationForm
  ui/       Button, Card, Badge, Input, Textarea, Select, RadioGroup, Checkbox,
            FileUpload, PipelineNode, LanguageToggle, ScrollProgress, ...

lib/
  i18n.ts                  all EN + AR copy
  animations.ts            Framer Motion variants
  hooks/useLanguage.tsx    language context + localStorage
  mailer.ts                Resend client + email templates
  blob.ts                  Vercel Blob upload (with local fallback)
  validations/application.ts  Zod schema
```

---

## Email setup (Resend + mafbootcamp.com)

Applications are emailed to your inbox (with the CV attached), and applicants
receive an automatic confirmation. This uses [Resend](https://resend.com).

### 1. Verify your domain

1. Sign up at [resend.com](https://resend.com) with your Gmail (free, no card).
2. **Domains → Add Domain →** enter `mafbootcamp.com`.
3. Resend shows ~3 DNS records (an SPF/`MX` + DKIM `TXT`, and optionally DMARC).
4. In **Cloudflare → your domain → DNS → Records**, add each record exactly as
   shown. Tips for Cloudflare:
   - Set the proxy status to **DNS only** (grey cloud) for these records.
   - Cloudflare auto-appends the domain, so if Resend says the name is
     `send.mafbootcamp.com`, enter `send` as the name.
5. Back in Resend, click **Verify**. Cloudflare propagates in under a minute.

### 2. Create an API key

**API Keys → Create API Key** → copy the value starting with `re_...`.

### 3. Fill in `.env.local`

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=applications@mafbootcamp.com
NOTIFICATION_EMAIL=your-gmail@gmail.com    # ← applications land here
```

Restart `npm run dev`. Submissions now send real email.

---

## CV storage (Vercel Blob)

Uploaded CVs are stored in [Vercel Blob](https://vercel.com/docs/storage/vercel-blob).

1. In the Vercel dashboard: **Storage → Create → Blob**.
2. Copy the `BLOB_READ_WRITE_TOKEN` it generates.
3. Add it to `.env.local` (and to the Vercel project's env vars for production):

```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxx
```

Without this token in local dev, the CV is written to `/tmp` and its path is
logged. The CV is still attached to the notification email regardless.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project →** import the repo (framework auto-detected).
3. **Settings → Environment Variables** — add all four:
   `RESEND_API_KEY`, `FROM_EMAIL`, `NOTIFICATION_EMAIL`, `BLOB_READ_WRITE_TOKEN`
   (and optionally `NEXT_PUBLIC_SITE_URL=https://mafbootcamp.com`).
4. Deploy.
5. **Settings → Domains →** add `mafbootcamp.com`. Vercel gives you DNS records;
   add them in Cloudflare (an `A`/`CNAME` for the apex + `www`). Use **DNS only**
   (grey cloud) so Vercel manages TLS.

---

## Customization checklist

- [ ] Add the real OG image at `public/og-image.png` (1200×630). See `public/README.md`.
- [ ] Add Fahmi's LinkedIn URL in `lib/i18n.ts` (`socialLinks.linkedin`, marked `TODO`).
- [ ] Replace the "MAF" placeholder with a real photo in `components/sections/Instructor.tsx` if desired.
- [ ] Set `NOTIFICATION_EMAIL` to the Gmail that should receive applications.

---

## Notes

- **Bilingual**: a single page with an EN ↔ AR toggle in the navbar. The choice
  persists in `localStorage` and updates `<html lang>` / `dir` for RTL.
- **Animations** respect `prefers-reduced-motion` everywhere.
- **No external images** — Lucide icons + emoji only, per the project brief.
