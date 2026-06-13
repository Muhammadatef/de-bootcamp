# 10 — SEO & Metadata

## Page Title
```
Mohamed Atef Fahmy — Data Engineering Bootcamp | أبوظبي | مجاني
```

## Meta Description
```
EN: Free, on-site Data Engineering bootcamp in Abu Dhabi. 10 seats only.
    Taught by a Senior Data Engineer with 95+ production pipelines at UAE government.
    Linux, Hadoop, Spark, Kafka, Airflow and more.

AR: بوتكامب Data Engineering مجاني وحضوري في أبوظبي. ١٠ مقاعد فقط.
    بيدرسك Senior Data Engineer 
```

## Keywords
```
data engineering bootcamp abu dhabi, free data engineering course uae,
data engineering arabic, بوتكامب هندسة البيانات أبوظبي, تعلم data engineering,
spark hadoop airflow kafka course abu dhabi, junior data engineer uae,
Mohamed Atef Fahmy bootcamp
```

## Open Graph (Social Preview)
```ts
// app/layout.tsx
export const metadata = {
  title: 'DE Bootcamp Abu Dhabi | Mohamed Atef Fahmy',
  description: 'Free, on-site Data Engineering bootcamp in Abu Dhabi. 10 seats. Taught by a Senior Data Engineer from the UAE government.',
  openGraph: {
    title: 'Free Data Engineering Bootcamp — Abu Dhabi 🇦🇪',
    description: '10 seats. On-site. Free. Linux → Hadoop → Spark → Kafka. Apply now.',
    url: 'https://yourdomainhere.com',
    siteName: 'DE Bootcamp Abu Dhabi',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Data Engineering Bootcamp — Abu Dhabi',
    description: '10 seats. On-site. Free. Taught by a Senior DE from UAE government.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}
```

## OG Image
Design a 1200×630px OG image:
- Dark background (#0a0a0f)
- Large text: "Data Engineering Bootcamp"
- Subtext: "Abu Dhabi · Free · 10 Seats"
- Arabic: "أبوظبي · مجاني · ١٠ مقاعد"
- Cyan accent line
- Tool icons row at bottom
- Fahmi's name + title bottom right

---

## Structured Data (JSON-LD)

```ts
// In page.tsx <head>
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Engineering Bootcamp — Cohort 01",
  "description": "Free, on-site Data Engineering bootcamp in Abu Dhabi covering Linux, Hadoop, Docker, Airflow, Spark, Kafka and more.",
  "provider": {
    "@type": "Person",
    "name": "Mohamed Atef Fahmy",
    "url": "https://maf-portfolio-one.vercel.app/"
  },
  "courseMode": "onsite",
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": ["ar", "en"],
  "locationCreated": {
    "@type": "Place",
    "name": "Abu Dhabi, UAE"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AED",
    "availability": "https://schema.org/LimitedAvailability"
  }
}
```

---

## Language & Hreflang
Since site is bilingual (EN + AR) on the same page with a toggle (not separate URLs),
no hreflang needed. Just set:
```html
<html lang="en" dir="ltr"> <!-- default -->
<!-- JS toggles to lang="ar" dir="rtl" when Arabic mode active -->
```
