# 03 — Requirements Section

## Purpose
Filter out unqualified applicants early. Be clear but not intimidating.
Frame requirements as "you're already closer than you think."

---

## Section ID
`#requirements`

## Layout
Clean centered section. Requirements shown as horizontal cards on desktop, stacked on mobile.

---

## Section Header

```
EYEBROW: WHO THIS IS FOR
HEADLINE: You already have a head start.
SUBHEADLINE: We don't start from zero. You need three foundations —
             and if you have them, you're ready for everything we'll build together.
```

Arabic:
```
EYEBROW: مين ده ليه
HEADLINE: عندك بداية بالفعل.
SUBHEADLINE: مش بنبدأ من الصفر. محتاج ٣ أساسيات —
             ولو عندك دول، انت جاهز لكل اللي هنبنيه مع بعض.
```

---

## Three Requirement Cards

Each card has:
- Icon (code-style, monospace)
- Title
- Description
- A small "test yourself" hint

### Requirement 1 — Python

```
Icon: 🐍 or Python logo SVG
Badge: REQUIRED
Title: Python Basics
Description: You're comfortable with variables, loops,
             functions, and basic OOP. You've written
             scripts before — even small ones count.

Test yourself:
→ Can you write a class with methods?
→ Can you loop through a list and filter it?
→ Can you read a CSV file with Python?

If yes to all 3 → you're good. ✅
```

Arabic:
```
Title: أساسيات Python
Description: مرتاح مع المتغيرات، الـ loops، الـ functions،
             والـ OOP الأساسي. كتبت scripts قبل كده.

اختبر نفسك:
→ تقدر تكتب class فيها methods؟
→ تقدر تعمل loop على list وتفلترها؟
→ تقدر تقرأ CSV file بـ Python؟

لو جاوبت آه على الـ ٣ → انت تمام ✅
```

### Requirement 2 — SQL

```
Icon: 🗃️ or database icon
Badge: REQUIRED
Title: Basic SQL
Description: You know how to write SELECT queries,
             use WHERE, GROUP BY, and JOIN tables.
             You don't need to be a DBA — just fluent
             in the basics.

Test yourself:
→ Can you JOIN two tables on a foreign key?
→ Can you GROUP BY and use aggregate functions?
→ Can you write a subquery?

If yes to all 3 → you're good. ✅
```

Arabic:
```
Title: SQL الأساسي
Description: عارف تكتب SELECT، WHERE، GROUP BY، وتعمل JOIN.
             مش محتاج تكون DBA — بس تبقى fluent في الأساسيات.

اختبر نفسك:
→ تقدر تعمل JOIN بين جدولين؟
→ تقدر تستخدم GROUP BY مع aggregate functions؟
→ تقدر تكتب subquery؟

لو آه على الـ ٣ → تمام ✅
```

### Requirement 3 — Linux

```
Icon: 🐧 or terminal icon
Badge: REQUIRED
Title: Linux Foundations
Description: You're not afraid of the terminal. You know
             basic commands — navigating directories,
             creating files, permissions. We'll go deeper
             but you need this base.

Test yourself:
→ Can you navigate the filesystem with cd, ls, pwd?
→ Can you create, move, and delete files?
→ Do you understand file permissions (chmod)?

If yes to all 3 → you're good. ✅
```

Arabic:
```
Title: أساسيات Linux
Description: مش بتخاف من الـ terminal. عارف الأوامر الأساسية —
             التنقل في الـ directories، إنشاء ملفات، الـ permissions.
             هنتعمق أكتر بس محتاج الأساس ده.

اختبر نفسك:
→ تقدر تتنقل بـ cd، ls، pwd؟
→ تقدر تنشئ وتحرك وتحذف ملفات؟
→ فاهم الـ file permissions (chmod)؟

لو آه على الـ ٣ → تمام ✅
```

---

## Bottom CTA

```
Not there yet? No problem.
Here are free resources to get you ready: →
[Python basics] [SQL basics] [Linux basics]
(These link to curated free resources — can link to GitHub roadmap resources)
```

Arabic:
```
لسه ما وصلتش؟ مش مشكلة.
في مصادر مجانية تجهزك: →
[Python] [SQL] [Linux]
```

These 3 links can point to:
- Python: https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/python/python-resources.md
- SQL: https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/sql/sql-resources.md
- Linux: https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/linux/linux-resources.md

---

## Visual Style for Cards

```css
card {
  background: #0d0d1a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.2s;
}

card:hover {
  border-color: #00d4ff44;
}

badge {
  background: #00d4ff15;
  color: #00d4ff;
  border: 1px solid #00d4ff33;
  border-radius: 20px;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 3px 10px;
  text-transform: uppercase;
}
```

---

## Component File
`components/sections/Requirements.tsx`
