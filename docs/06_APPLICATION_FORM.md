# 06 — Application Form

## Purpose
Collect serious applicants only. The form should feel like applying to something prestigious, not signing up for a newsletter.
It must be clean, frictionless, and mobile-first.

---

## Section ID
`#apply`

## Layout
Centered single column, max-width 680px.
Dark card with subtle border.

---

## Section Header

```
EYEBROW: JOIN THE COHORT
HEADLINE: Apply for Cohort 01
SUBHEADLINE: 10 seats. Free. On-site in Abu Dhabi.
             We review applications on a rolling basis.
             Strong applicants are contacted within 3–5 business days.
```

Arabic:
```
EYEBROW: انضم للكوهورت
HEADLINE: قدم لكوهورت ٠١
SUBHEADLINE: ١٠ مقاعد. مجاني. حضوري في أبوظبي.
             بنراجع الطلبات بشكل مستمر.
             المتقدمين المتميزين بيتواصل معاهم خلال ٣-٥ أيام عمل.
```

---

## Form Fields

### Personal Information

**Field 1: Full Name**
```
Label EN: Full Name
Label AR: الاسم الكامل
Type: text
Placeholder EN: Mohamed Ali
Placeholder AR: محمد علي
Required: true
Validation: min 3 chars, max 100 chars
```

**Field 2: Email Address**
```
Label EN: Email Address
Label AR: البريد الإلكتروني
Type: email
Placeholder: you@example.com
Required: true
Validation: valid email format
```

**Field 3: Phone Number**
```
Label EN: Phone Number (WhatsApp preferred)
Label AR: رقم الجوال (واتساب أفضل)
Type: tel
Placeholder: +971 50 123 4567
Required: true
Validation: UAE format preferred, min 9 digits
```

**Field 4: Current Location**
```
Label EN: Current City
Label AR: مدينة الإقامة الحالية
Type: select
Options: Abu Dhabi, Dubai, Sharjah, Ajman, Other UAE, Outside UAE
Required: true
```

**Field 5: Current Status**
```
Label EN: Current Status
Label AR: وضعك الحالي
Type: select
Options:
  - Fresh Graduate / حديث التخرج
  - Junior Developer / مطور مبتدئ
  - Software Engineer / مهندس برمجيات
  - Data Analyst / محلل بيانات
  - Student / طالب
  - Career Switcher / تحويل مسار مهني
  - Other / غير ذلك
Required: true
```

---

### Technical Background

**Field 6: Python Experience**
```
Label EN: Python Experience Level
Label AR: مستواك في Python
Type: radio group
Options:
  - Beginner — I know the basics (variables, loops, functions)
  - Intermediate — I've built scripts and understand OOP
  - Advanced — I use Python professionally
Required: true
```

**Field 7: SQL Experience**
```
Label EN: SQL Experience Level
Label AR: مستواك في SQL
Type: radio group
Options:
  - Basic — I can write SELECT, WHERE, GROUP BY
  - Intermediate — I'm comfortable with JOINs and subqueries
  - Advanced — I design database schemas
Required: true
```

**Field 8: Linux Experience**
```
Label EN: Linux Experience Level
Label AR: مستواك في Linux
Type: radio group
Options:
  - Beginner — I know basic terminal commands
  - Intermediate — I'm comfortable with permissions and scripting
  - Advanced — I manage Linux servers
Required: true
```

---

### Motivation

**Field 9: Why This Bootcamp (THE KEY FIELD)**
```
Label EN: Why do you want to join this bootcamp?
          How will it benefit you? Be specific.
Label AR: ليه عايز تنضم للبوتكامب ده؟
          هيفيدك إزاي؟ كن محدداً.
Type: textarea
Placeholder EN: Tell us about your goals, where you are now,
                and where you want to be. What will you build
                with these skills? Why Abu Dhabi? Why Data Engineering?
Placeholder AR: حدثنا عن أهدافك، فين انت دلوقتي،
                وفين عايز توصل. هتبني إيه بالمهارات دي؟
                ليه أبوظبي؟ ليه Data Engineering؟
Required: true
Min length: 150 characters
Max length: 1000 characters
Show character counter
```

**Field 10: What Do You Want to Build or Achieve?**
```
Label EN: What is your goal after the bootcamp?
Label AR: هدفك بعد البوتكامب إيه؟
Type: select
Options:
  - Get a Junior Data Engineer job in Abu Dhabi
  - Switch from another tech role to Data Engineering
  - Build my own data projects / startup
  - Upskill and get promoted at my current job
  - Other (please specify in motivation above)
Required: true
```

---

### Documents

**Field 11: CV / Resume Upload**
```
Label EN: Upload Your CV
Label AR: ارفع الـ CV بتاعك
Type: file upload (drag & drop)
Accepted formats: PDF, DOC, DOCX
Max size: 5MB
Required: true
UI: Drag & drop zone with dashed border
    "Drag your CV here, or click to browse"
    "PDF, DOC, DOCX — max 5MB"
Arabic: "اسحب الـ CV هنا، أو اضغط للاختيار"
```

**Field 12: LinkedIn Profile (Optional)**
```
Label EN: LinkedIn Profile URL (optional)
Label AR: رابط LinkedIn (اختياري)
Type: url
Placeholder: https://linkedin.com/in/yourname
Required: false
```

**Field 13: GitHub Profile (Optional)**
```
Label EN: GitHub Profile URL (optional)
Label AR: رابط GitHub (اختياري)
Type: url
Placeholder: https://github.com/yourusername
Required: false
```

---

### Agreement

**Field 14: Commitment Checkbox**
```
Label EN: I understand this is a serious commitment.
          I will attend all sessions, complete the project,
          and contribute to the community.
Label AR: أفهم إن ده التزام جدي. هحضر كل الـ sessions،
          هخلص البروجيكت، وهساهم في المجتمع.
Type: checkbox
Required: true
```

---

## Submit Button

```
Text EN: Submit Application →
Text AR: أرسل الطلب →
Style: Full width, large (py-4), cyan background (#00d4ff),
       dark text (#0a0a0f), bold, rounded-xl
Loading state: "Submitting..." with spinner
```

---

## Form Validation

Use **React Hook Form** + **Zod** for validation.

Show inline error messages below each field in red (#f43f5e).

Validate on submit (not on blur, to avoid annoying the user).

---

## After Submission

On success:
1. Show a success state (inline, replace form with confirmation message)
2. Redirect to `/success` page after 2 seconds

Success message:
```
EN: ✅ Application received!
    We'll review your application and get back to you
    within 3–5 business days via email or WhatsApp.
    Thank you, and good luck!

AR: ✅ وصلنا طلبك!
    هنراجع طلبك ونتواصل معاك خلال ٣-٥ أيام عمل
    على الإيميل أو واتساب.
    شكراً، وبالتوفيق!
```

On error:
```
EN: ❌ Something went wrong. Please try again or
    email us directly at [fahmi's email].

AR: ❌ في مشكلة حصلت. حاول تاني أو راسلنا على الإيميل.
```

---

## Email Notification

On form submission, send an email to Fahmi containing:
- All form fields
- CV as attachment
- Timestamp
- Applicant's name in subject line

Subject: `New Application: [Full Name] — DE Bootcamp Cohort 01`

See `09_EMAIL_INTEGRATION.md` for Resend API setup.

---

## CV Storage

Upload CV to a storage solution:
- Option A: Vercel Blob Storage (simplest, built into Vercel)
- Option B: Supabase Storage (free tier)
- Option C: Attach directly to email via Resend

Recommended: Vercel Blob for storage + Resend for email notification.

---

## Component File
`components/sections/ApplicationForm.tsx`
`components/ui/FileUpload.tsx`
`lib/validations/application.ts` (Zod schema)
`app/api/apply/route.ts` (API route handler)
