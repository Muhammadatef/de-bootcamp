# 05 — Instructor Section

## Purpose
Build deep trust. Fahmi is the product. His credibility IS the reason to apply.
This section must feel personal, human, and impressive without being arrogant.

---

## Section ID
`#instructor`

## Layout
Two-column on desktop: Photo/visual left (40%), Bio right (60%).
Stacked on mobile, photo above bio.

---

## Section Header

```
EYEBROW: YOUR INSTRUCTOR
HEADLINE: Taught by someone who actually does this.
```

Arabic:
```
EYEBROW: المدرب
HEADLINE: بيعلمك حد بيعمل ده فعلاً.
```

---

## Photo / Visual

Use a professional photo of Fahmi (placeholder: link to portfolio image).
Portfolio URL: https://maf-portfolio-one.vercel.app/

If no photo available, use an illustrated avatar with a terminal/pipeline background.

Photo style:
- Rounded rectangle (border-radius: 20px)
- Subtle cyan glow border on hover
- Background: dark gradient with subtle pipeline motif
- Badge overlay: "Senior Data Engineer · 6+ Years"

---

## Bio — English

```
NAME: Mohamed Atef Fahmy
TITLE: Senior Data Engineer

SHORT BIO (displayed first, bold):
I didn't learn data engineering from tutorials.
I learned it by building systems that couldn't fail.

FULL BIO:
I'm a Senior Data Engineer with 6+ years of experience
building production-grade data systems across the UAE.

Currently at the Statistics Centre of Abu Dhabi (SCAD),
I manage 95+ web scraping pipelines that power national
economic datasets — including the UAE's Consumer Price Index
and retail price indices that inform government policy.

Before that, at e& (Etisalat), the UAE's largest telecom,
I took a Spark/Scala ETL pipeline from 16 hours down to 2 hours
— an 87.5% performance improvement on a mission-critical system.

I hold an Azure Data Engineer Associate certification (DP-203)
and I've worked across Scrapy, Airflow, Spark, Kafka, Docker,
Hadoop, and Hive in real production environments.

I'm not teaching you what I read in a book.
I'm teaching you what I do every day.
```

---

## Bio — Arabic

```
NAME: محمد عاطف فهمي
TITLE: مهندس بيانات سينيور

SHORT BIO:
أنا ما تعلمتش data engineering من tutorials.
تعلمته وأنا ببني أنظمة ماتقدرش تفشل.

FULL BIO:
أنا Senior Data Engineer بخبرة أكتر من ٦ سنين
في بناء أنظمة data حقيقية في الإمارات.

دلوقتي في مركز إحصاء أبوظبي (SCAD)،
بدير أكتر من ٩٥ pipeline بيغذوا datasets اقتصادية وطنية —
منها مؤشر أسعار المستهلكين وأسعار التجزئة
اللي بتبني عليها قرارات حكومية.

قبل كده في e& (اتصالات)، أكبر شركة اتصالات في الإمارات،
قلصت pipeline Spark/Scala من ١٦ ساعة لـ ساعتين —
تحسين ٨٧.٥٪ في نظام مش مسموح له يفشل.

عندي شهادة Azure Data Engineer Associate (DP-203)
وشغلت مع Scrapy، Airflow، Spark، Kafka، Docker،
Hadoop، وHive في بيئات production حقيقية.

مش بعلمك اللي قرأته في كتاب.
بعلمك اللي بعمله كل يوم.
```

---

## Credential Badges

Display as a horizontal scrollable row of chips:

```
🏢 SCAD — Government of Abu Dhabi
🏢 e& (Etisalat) — UAE Telecom
🏢 LigaData
📜 Azure DP-203 Certified
⚙️ 95+ Production Pipelines
📊 National Economic Data Systems
🌍 6+ Years UAE Experience
```

Badge style:
```css
{
  background: #0d0d1a;
  border: 1px solid #1e293b;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 12px;
  color: #94a3b8;
  white-space: nowrap;
}
```

---

## Social Links

```
🔗 Portfolio: https://maf-portfolio-one.vercel.app/
💼 LinkedIn: (add Fahmi's LinkedIn URL)
🐙 GitHub: https://github.com/Muhammadatef
📝 Medium: https://medium.com/@MAF74__
```

Show as icon buttons, open in new tab.

---

## Quote Block

Pull quote displayed prominently:

```
"The best engineers I know didn't learn from courses.
They learned by building things that mattered.
That's what we're going to do."

— Mohamed Atef Fahmy
```

Arabic:
```
"أحسن المهندسين اللي عرفتهم ما اتعلموش من كورسات.
اتعلموا وهما بيبنوا حاجات مهمة.
ده اللي هنعمله."

— محمد عاطف فهمي
```

Style: Large italic text, left border accent (2px solid #00d4ff), padding-left 24px.

---

## Component File
`components/sections/Instructor.tsx`
