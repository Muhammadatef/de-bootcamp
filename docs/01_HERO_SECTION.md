# 01 — Hero Section

## Purpose
First impression. Must communicate in 3 seconds:
- Who this is for (Arab DE learners in Abu Dhabi)
- What it is (free, physical, elite bootcamp)
- Why trust it (real engineer, real pipelines)

---

## Layout

Full viewport height (`100vh`). Two-column on desktop, stacked on mobile.

**Left column (60%)**: Text content + CTA
**Right column (40%)**: Animated pipeline visual (see Animations doc)

---

## Copy — English

```
EYEBROW (small caps, cyan, letter-spaced):
FREE COHORT · ABU DHABI · 10 SEATS ONLY

HEADLINE (large, bold, white):
Become a
Data Engineer.
For Real.

SUBHEADLINE (medium, muted):
Not tutorials. Not theory.
A structured 4-month hands-on bootcamp taught by a
Senior Data Engineer who built 95+ production pipelines
for the UAE government.

CTA BUTTON (primary, cyan):
Apply Now — It's Free →

SECONDARY CTA (ghost):
See the curriculum ↓

SOCIAL PROOF (below CTAs, small):
🎯 10 seats only  ·  📍 Abu Dhabi, on-site  ·  🆓 Completely free
```

---

## Copy — Arabic (shown below English or toggled)

```
EYEBROW:
كوهورت مجاني · أبوظبي · ١٠ مقاعد فقط

HEADLINE:
كن مهندس بيانات.
بجد.

SUBHEADLINE:
مش كورسات يوتيوب. مش نظريات.
بوتكامب عملي ٤ شهور، بيدرسك مهندس بيانات اول
```

---

## Animated Background

Subtle animated grid of dots (like a circuit board) in the background.
Opacity: 0.04. Do not distract from content.

Use CSS `background-image` with radial gradient dots:
```css
background-image: radial-gradient(circle, #00d4ff 1px, transparent 1px);
background-size: 40px 40px;
opacity: 0.04;
```

---

## Animated Pipeline Visual (Right Column)

A vertical flowing pipeline visualization showing the 11 tools in sequence.
Each tool appears as a node that pulses and connects to the next via a line.

Tools in order:
1. Linux 🐧
2. Hadoop 🐘
3. Docker 🐳
4. Airflow 🌬️
5. Database 🗄️
6. DWH 🏭
7. Hive 🐝
8. Spark Batch ⚡
9. Spark Streaming 🌊
10. Kafka 📨
11. Project 🚀

Each node: small rounded box with tool name + emoji + a pulsing cyan dot.
Connector: dashed vertical line with animated flow (top to bottom).

On mobile: hide this visual, show a simple horizontal scrolling chip list of tools.

---

## Scroll Indicator

At the bottom of the hero:
```
↓ scroll to explore
```
Small, muted, with subtle bounce animation.

---

## Responsive Behavior

- Desktop (>1024px): Two columns, full height
- Tablet (768–1024px): Single column, pipeline visual below text
- Mobile (<768px): Single column, pipeline visual hidden, chips shown instead

---

## Component File

`components/sections/Hero.tsx`
