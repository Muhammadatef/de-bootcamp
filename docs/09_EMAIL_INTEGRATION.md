# 09 — Email Integration

## Service: Resend
Website: https://resend.com
Free tier: 3,000 emails/month — more than enough.

---

## Setup

### 1. Install
```bash
npm install resend
```

### 2. Environment Variables
Create `.env.local`:
```env
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=your-email@gmail.com
FROM_EMAIL=noreply@yourdomain.com
```

### 3. Resend Client
```ts
// lib/resend.ts
import { Resend } from 'resend'
export const resend = new Resend(process.env.RESEND_API_KEY)
```

---

## API Route

```ts
// app/api/apply/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'
import { applicationSchema } from '@/lib/validations/application'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Extract fields
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const city = formData.get('city') as string
    const status = formData.get('status') as string
    const pythonLevel = formData.get('pythonLevel') as string
    const sqlLevel = formData.get('sqlLevel') as string
    const linuxLevel = formData.get('linuxLevel') as string
    const motivation = formData.get('motivation') as string
    const goal = formData.get('goal') as string
    const linkedin = formData.get('linkedin') as string
    const github = formData.get('github') as string
    const cvFile = formData.get('cv') as File | null

    // Validate with Zod (text fields only)
    const validation = applicationSchema.safeParse({
      fullName, email, phone, city, status,
      pythonLevel, sqlLevel, linuxLevel, motivation, goal
    })

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.errors },
        { status: 400 }
      )
    }

    // Prepare CV attachment
    let attachments = []
    if (cvFile) {
      const cvBuffer = Buffer.from(await cvFile.arrayBuffer())
      attachments = [{
        filename: cvFile.name || `cv-${fullName.replace(/\s+/g, '-')}.pdf`,
        content: cvBuffer,
      }]
    }

    // Send notification email to Fahmi
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `🚀 New Application: ${fullName} — DE Bootcamp Cohort 01`,
      html: buildNotificationEmail({
        fullName, email, phone, city, status,
        pythonLevel, sqlLevel, linuxLevel,
        motivation, goal, linkedin, github
      }),
      attachments,
    })

    // Send confirmation email to applicant
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: `✅ Application Received — DE Bootcamp Cohort 01`,
      html: buildConfirmationEmail(fullName),
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## Email Templates

### Notification Email (to Fahmi)

```ts
function buildNotificationEmail(data: ApplicationData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; background: #0a0a0f; color: #e2e8f0; margin: 0; padding: 20px; }
    .card { background: #0d0d1a; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; margin-bottom: 16px; }
    .label { color: #64748b; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
    .value { color: #e2e8f0; font-size: 15px; margin-bottom: 16px; }
    .motivation { background: #0d1117; border-left: 3px solid #00d4ff; padding: 16px; border-radius: 0 8px 8px 0; color: #94a3b8; line-height: 1.7; }
    h1 { color: #00d4ff; font-size: 22px; margin: 0 0 8px; }
    .badge { display: inline-block; background: #00d4ff15; color: #00d4ff; border: 1px solid #00d4ff33; border-radius: 20px; padding: 3px 12px; font-size: 11px; letter-spacing: 1px; }
  </style>
</head>
<body>
  <h1>🚀 New Bootcamp Application</h1>
  <p style="color:#64748b">Cohort 01 · Data Engineering Bootcamp</p>

  <div class="card">
    <div class="label">Full Name</div>
    <div class="value">${data.fullName}</div>

    <div class="label">Email</div>
    <div class="value"><a href="mailto:${data.email}" style="color:#00d4ff">${data.email}</a></div>

    <div class="label">Phone (WhatsApp)</div>
    <div class="value">${data.phone}</div>

    <div class="label">City</div>
    <div class="value">${data.city}</div>

    <div class="label">Current Status</div>
    <div class="value">${data.status}</div>
  </div>

  <div class="card">
    <div class="label">Technical Background</div>
    <div class="value">
      🐍 Python: <strong>${data.pythonLevel}</strong><br/>
      🗃️ SQL: <strong>${data.sqlLevel}</strong><br/>
      🐧 Linux: <strong>${data.linuxLevel}</strong>
    </div>
  </div>

  <div class="card">
    <div class="label">Goal After Bootcamp</div>
    <div class="value">${data.goal}</div>

    <div class="label">Motivation</div>
    <div class="motivation">${data.motivation}</div>
  </div>

  ${data.linkedin || data.github ? `
  <div class="card">
    <div class="label">Links</div>
    ${data.linkedin ? `<div class="value">LinkedIn: <a href="${data.linkedin}" style="color:#00d4ff">${data.linkedin}</a></div>` : ''}
    ${data.github ? `<div class="value">GitHub: <a href="${data.github}" style="color:#00d4ff">${data.github}</a></div>` : ''}
  </div>
  ` : ''}

  <p style="color:#334155; font-size:12px; margin-top:32px;">
    CV is attached to this email if uploaded.
    Submitted at: ${new Date().toISOString()}
  </p>
</body>
</html>
  `
}
```

### Confirmation Email (to Applicant)

```ts
function buildConfirmationEmail(name: string): string {
  const firstName = name.split(' ')[0]
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; background: #0a0a0f; color: #e2e8f0; margin: 0; padding: 40px 20px; }
    .container { max-width: 560px; margin: 0 auto; }
    h1 { color: #00d4ff; font-size: 28px; margin-bottom: 8px; }
    p { color: #94a3b8; line-height: 1.7; }
    .highlight { color: #e2e8f0; font-weight: 600; }
    .footer { color: #334155; font-size: 12px; margin-top: 40px; border-top: 1px solid #1e293b; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Got it, ${firstName}!</h1>
    <p>Your application for <span class="highlight">DE Bootcamp Cohort 01</span> has been received.</p>
    <p>
      We review all applications personally and get back to serious candidates
      within <span class="highlight">3–5 business days</span> via email or WhatsApp.
    </p>
    <p>
      In the meantime, you can explore the learning resources at the GitHub roadmap
      to get a head start. The more prepared you come in, the more you'll get out.
    </p>
    <p>
      If you have any questions, reply to this email directly.
    </p>
    <p style="margin-top:32px;">
      Good luck,<br/>
      <span class="highlight">Mohamed Atef Fahmy</span><br/>
      Senior Data Engineer · DE Bootcamp Abu Dhabi
    </p>
    <div class="footer">
      This is an automated confirmation. Do not reply unless you have a question.
    </div>
  </div>
</body>
</html>
  `
}
```

---

## Zod Validation Schema

```ts
// lib/validations/application.ts
import { z } from 'zod'

export const applicationSchema = z.object({
  fullName: z.string().min(3, 'Name must be at least 3 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(9, 'Please enter a valid phone number'),
  city: z.enum(['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Other UAE', 'Outside UAE']),
  status: z.enum([
    'Fresh Graduate',
    'Junior Developer',
    'Software Engineer',
    'Data Analyst',
    'Student',
    'Career Switcher',
    'Other'
  ]),
  pythonLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  sqlLevel: z.enum(['Basic', 'Intermediate', 'Advanced']),
  linuxLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  motivation: z.string()
    .min(150, 'Please write at least 150 characters — we want to know your story')
    .max(1000, 'Please keep it under 1000 characters'),
  goal: z.string().min(1, 'Please select your goal'),
  linkedin: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  commitment: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the commitment to apply' })
  }),
})

export type ApplicationFormData = z.infer<typeof applicationSchema>
```
