# 04 — Curriculum Section

## Purpose
Show the 11-step journey as a visual data pipeline.
Make students feel the progression — from zero to job-ready.
Do NOT show the GitHub roadmap link. Keep it proprietary-feeling.

---

## Section ID
`#curriculum`

## Layout
Vertical timeline / pipeline on desktop.
Each step is a node connected by a flowing line.
Alternating left/right layout on desktop (like a zigzag pipeline).
Linear stacked on mobile.

---

## Section Header

```
EYEBROW: THE CURRICULUM
HEADLINE: From Linux to Kafka.
          In 4 months.
SUBHEADLINE: Every skill builds on the last. Every session is hands-on.
             By the end, you'll have a real project that proves you can do this.
```

Arabic:
```
EYEBROW: المنهج
HEADLINE: من Linux لـ Kafka.
          في ٤ شهور.
SUBHEADLINE: كل مهارة بتبني على اللي قبلها. كل session عملي.
             في النهاية هيكون معاك بروجيكت حقيقي يثبت إنك تقدر.
```

---

## The 11 Pipeline Steps

Each step has:
- Step number (styled as `01`, `02`, etc.)
- Tool name (English + Arabic)
- Icon/emoji
- 2-line description
- Duration estimate
- Tag: FOUNDATION / CORE / ADVANCED / CAPSTONE

### Step 01 — Linux
```
Tag: FOUNDATION
Icon: 🐧
Name EN: Linux
Name AR: لينكس
Description: Master the command line. The foundation every
             data engineer needs before touching any tool.
Duration: ~2 weeks
```

### Step 02 — Hadoop
```
Tag: FOUNDATION
Icon: 🐘
Name EN: Hadoop
Name AR: هادوب
Description: Understand distributed storage and processing.
             HDFS, MapReduce, YARN — the backbone of big data.
Duration: ~2 weeks
```

### Step 03 — Docker
```
Tag: CORE
Icon: 🐳
Name EN: Docker
Name AR: دوكر
Description: Containerize everything. Learn to build, run,
             and orchestrate reproducible data environments.
Duration: ~1.5 weeks
```

### Step 04 — Airflow
```
Tag: CORE
Icon: 🌬️
Name EN: Apache Airflow
Name AR: أباتشي إيرفلو
Description: Orchestrate your pipelines. Build DAGs, schedule
             jobs, and monitor workflow dependencies like a pro.
Duration: ~2 weeks
```

### Step 05 — Database
```
Tag: CORE
Icon: 🗄️
Name EN: Databases
Name AR: قواعد البيانات
Description: Go beyond SQL. Understand ACID, indexing,
             partitioning, sharding, and database internals.
Duration: ~1.5 weeks
```

### Step 06 — Data Warehouse
```
Tag: CORE
Icon: 🏭
Name EN: Data Warehouse
Name AR: مستودع البيانات
Description: Design analytical systems. Star schemas, dimensional
             modeling, slowly changing dimensions, ETL patterns.
Duration: ~2 weeks
```

### Step 07 — Hive
```
Tag: CORE
Icon: 🐝
Name EN: Apache Hive
Name AR: أباتشي هايف
Description: Query big data with SQL-like syntax. Build on top
             of HDFS and integrate with your DWH architecture.
Duration: ~1.5 weeks
```

### Step 08 — Spark Batch
```
Tag: ADVANCED
Icon: ⚡
Name EN: Apache Spark — Batch
Name AR: أباتشي سبارك — باتش
Description: Process massive datasets at scale. DataFrames,
             transformations, optimizations, and real ETL jobs.
Duration: ~2.5 weeks
```

### Step 09 — Spark Streaming
```
Tag: ADVANCED
Icon: 🌊
Name EN: Apache Spark — Streaming
Name AR: أباتشي سبارك — ستريمنج
Description: Real-time processing with Spark Structured Streaming.
             Micro-batches, windowing, stateful operations.
Duration: ~2 weeks
```

### Step 10 — Kafka
```
Tag: ADVANCED
Icon: 📨
Name EN: Apache Kafka
Name AR: أباتشي كافكا
Description: The backbone of real-time data pipelines.
             Producers, consumers, topics, partitions, Kafka Connect.
Duration: ~2 weeks
```

### Step 11 — Capstone Project
```
Tag: CAPSTONE
Icon: 🚀
Name EN: Final Project
Name AR: المشروع النهائي
Description: Build a real end-to-end data pipeline from scratch.
             Ingest → Transform → Store → Visualize. Evaluated
             individually. Goes straight into your portfolio.
Duration: ~3 weeks
```

---

## Visual Style for Pipeline

```
Timeline line: 2px dashed, color #1e293b, with animated cyan dot flowing down
Step node: 48px circle, background #0d0d1a, border 2px solid color-by-tag
Step number: monospace, small, muted cyan
Tool name: bold, white, Space Grotesk
Description: small, muted, #94a3b8
Tag badge colors:
  FOUNDATION → #00d4ff
  CORE       → #a78bfa
  ADVANCED   → #f59e0b
  CAPSTONE   → #f43f5e
```

---

## Bottom Statement

```
By step 11, you won't just know these tools.
You'll have used them together to build something real.
```

Arabic:
```
في الخطوة ١١، مش هتعرف الـ tools دي بس.
هتكون استخدمتهم مع بعض وبنيت حاجة حقيقية.
```

---

## Job Outcome Banner

Below curriculum, a banner:

```
🎯 Goal: Help every graduate land their first Junior Data Engineer role in Abu Dhabi.
We'll review your CV, prep you for interviews, and connect you to our network.
```

Arabic:
```
🎯 الهدف: نساعد كل خريج يلاقي أول وظيفة كـ Junior Data Engineer في أبوظبي.
هنراجع الـ CV بتاعك، نجهزك للـ interviews، ونوصلك بشبكتنا.
```

---

## Component File
`components/sections/Curriculum.tsx`
