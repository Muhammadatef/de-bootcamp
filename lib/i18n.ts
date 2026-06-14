export type Lang = "en" | "ar";

/**
 * All user-facing copy in English and Arabic.
 * Structured by section. Some values are arrays (lists/cards) and are kept
 * parallel between languages so indices line up.
 */
export const copy = {
  en: {
    dir: "ltr",
    langName: "EN",
    otherLangName: "عربي",

    nav: {
      brand: "MAF · Bootcamp",
      about: "About",
      requirements: "Requirements",
      curriculum: "Curriculum",
      instructor: "Instructor",
      community: "Community",
      apply: "Apply Now",
      menu: "Menu",
      close: "Close",
    },

    hero: {
      eyebrow: "FREE COHORT · ABU DHABI · 10 SEATS ONLY",
      headline: "Become a Data Engineer. For Real.",
      subheadline:
        "Not tutorials. Not theory. A structured 4-month hands-on bootcamp taught by a Senior Data Engineer with 6+ years building real production data systems in the UAE.",
      ctaPrimary: "Apply Now — It's Free →",
      ctaSecondary: "See the curriculum ↓",
      socialProof: "🎯 10 seats only  ·  📍 Abu Dhabi, on-site  ·  🆓 Completely free",
      scroll: "scroll to explore",
    },

    about: {
      eyebrow: "ABOUT THE COHORT",
      headline: "Not a course. A community.",
      subheadline:
        "The first cohort of what will become Abu Dhabi's premier Data Engineering community — and you can be part of it from day one.",
      cards: [
        {
          icon: "🎁",
          title: "Why is it free?",
          body:
            "The first cohort is completely free because community matters more than money at this stage. You pay nothing — we even cover the cost of the workspace we meet in for every session. In return, you commit fully — attend every session, complete the project, and help shape what this becomes.",
        },
        {
          icon: "🎯",
          title: "What you walk away with",
          body:
            "✅ 11 production-grade skills\n✅ Real portfolio project\n✅ Certificate of completion\n✅ Job application support\n✅ Lifetime access to the community\n✅ Direct mentorship from a Senior DE",
        },
        {
          icon: "📅",
          title: "How it works",
          body:
            "📍 On-site, Abu Dhabi\n🗓️ 2 sessions per week\n⏱️ 2.5 hours per session\n📆 4 months duration\n👥 Maximum 10 students\n🌍 Arabic language, bilingual materials",
        },
      ],
      banner:
        "⚡ Applications are open. We review on a rolling basis and close when 10 students are confirmed.",
    },

    requirements: {
      eyebrow: "WHO THIS IS FOR",
      headline: "You already have a head start.",
      subheadline:
        "We don't start from zero. You need three foundations — and if you have them, you're ready for everything we'll build together.",
      badge: "REQUIRED",
      testYourself: "Test yourself:",
      pass: "If yes to all 3 → you're good. ✅",
      cards: [
        {
          icon: "🐍",
          title: "Python Basics",
          description:
            "You're comfortable with variables, loops, functions, and basic OOP. You've written scripts before — even small ones count.",
          tests: [
            "→ Can you write a class with methods?",
            "→ Can you loop through a list and filter it?",
            "→ Can you read a CSV file with Python?",
          ],
        },
        {
          icon: "🗃️",
          title: "Basic SQL",
          description:
            "You know how to write SELECT queries, use WHERE, GROUP BY, and JOIN tables. You don't need to be a DBA — just fluent in the basics.",
          tests: [
            "→ Can you JOIN two tables on a foreign key?",
            "→ Can you GROUP BY and use aggregate functions?",
            "→ Can you write a subquery?",
          ],
        },
        {
          icon: "🐧",
          title: "Linux Foundations",
          description:
            "You're not afraid of the terminal. You know basic commands — navigating directories, creating files, permissions. We'll go deeper but you need this base.",
          tests: [
            "→ Can you navigate the filesystem with cd, ls, pwd?",
            "→ Can you create, move, and delete files?",
            "→ Do you understand file permissions (chmod)?",
          ],
        },
      ],
      ctaTitle: "Not there yet? No problem.",
      ctaSubtitle: "Here are free resources to get you ready:",
      resourceLabels: ["Python basics", "SQL basics", "Linux basics"],
    },

    curriculum: {
      eyebrow: "THE CURRICULUM",
      headline: "From Linux to Kafka. In 4 months.",
      subheadline:
        "Every skill builds on the last. Every session is hands-on. By the end, you'll have a real project that proves you can do this.",
      durationLabel: "Duration",
      topicsLabel: "What we will cover",
      steps: [
        {
          tag: "FOUNDATION",
          icon: "🐧",
          name: "Linux",
          description:
            "Master the command line. The foundation every data engineer needs before touching any tool.",
          duration: "~2 weeks",
          topics: [
            "Navigating the filesystem & essential commands",
            "File permissions, users, and processes",
            "Pipes, redirection, and grep / sed / awk",
            "Bash scripting & automation with cron",
            "SSH, package management, and environment setup",
          ],
        },
        {
          tag: "FOUNDATION",
          icon: "🐘",
          name: "Hadoop",
          description:
            "Understand distributed storage and processing. HDFS, MapReduce, YARN — the backbone of big data.",
          duration: "~2 weeks",
          topics: [
            "Distributed storage with HDFS",
            "The MapReduce programming model",
            "Resource management with YARN",
            "Cluster architecture & data locality",
            "When to use Hadoop — and when not to",
          ],
        },
        {
          tag: "CORE",
          icon: "🐳",
          name: "Docker",
          description:
            "Containerize everything. Learn to build, run, and orchestrate reproducible data environments.",
          duration: "~1.5 weeks",
          topics: [
            "Images, containers, and layers",
            "Writing Dockerfiles",
            "Volumes, networking, and ports",
            "Docker Compose for multi-service stacks",
            "Building reproducible data environments",
          ],
        },
        {
          tag: "CORE",
          icon: "🌬️",
          name: "Apache Airflow",
          description:
            "Orchestrate your pipelines. Build DAGs, schedule jobs, and monitor workflow dependencies like a pro.",
          duration: "~2 weeks",
          topics: [
            "DAGs, tasks, and operators",
            "Scheduling, backfills, and catchup",
            "Task dependencies & orchestration",
            "Connections, hooks, and sensors",
            "Monitoring, retries, and alerting",
          ],
        },
        {
          tag: "CORE",
          icon: "🗄️",
          name: "Databases",
          description:
            "Go beyond SQL. Understand ACID, indexing, partitioning, sharding, and database internals.",
          duration: "~1.5 weeks",
          topics: [
            "ACID properties & transactions",
            "Indexing & query optimization",
            "Partitioning & sharding",
            "Normalization vs denormalization",
            "OLTP vs OLAP internals",
          ],
        },
        {
          tag: "CORE",
          icon: "🏭",
          name: "Data Warehouse",
          description:
            "Design analytical systems. Star schemas, dimensional modeling, slowly changing dimensions, ETL patterns.",
          duration: "~2 weeks",
          topics: [
            "Dimensional modeling & star schemas",
            "Facts and dimensions",
            "Slowly Changing Dimensions (SCD)",
            "ETL vs ELT patterns",
            "Designing analytical data models",
          ],
        },
        {
          tag: "CORE",
          icon: "🐝",
          name: "Apache Hive",
          description:
            "Query big data with SQL-like syntax. Build on top of HDFS and integrate with your DWH architecture.",
          duration: "~1.5 weeks",
          topics: [
            "HiveQL & SQL-on-Hadoop",
            "Tables, partitions, and buckets",
            "File formats (ORC, Parquet)",
            "Integrating Hive with the warehouse",
            "Performance tuning",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "⚡",
          name: "Apache Spark — Batch",
          description:
            "Process massive datasets at scale. DataFrames, transformations, optimizations, and real ETL jobs.",
          duration: "~2.5 weeks",
          topics: [
            "Spark architecture & execution model",
            "RDDs vs DataFrames",
            "Transformations & actions",
            "Joins, aggregations, and UDFs",
            "Performance tuning & partitioning",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "🌊",
          name: "Apache Spark — Streaming",
          description:
            "Real-time processing with Spark Structured Streaming. Micro-batches, windowing, stateful operations.",
          duration: "~2 weeks",
          topics: [
            "The Structured Streaming model",
            "Micro-batch vs continuous processing",
            "Windowing & watermarking",
            "Stateful operations",
            "Reading from and writing to Kafka",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "📨",
          name: "Apache Kafka",
          description:
            "The backbone of real-time data pipelines. Producers, consumers, topics, partitions, Kafka Connect.",
          duration: "~2 weeks",
          topics: [
            "Topics, partitions, and offsets",
            "Producers & consumers",
            "Consumer groups & rebalancing",
            "Kafka Connect & schema registry",
            "Building real-time pipelines",
          ],
        },
        {
          tag: "CAPSTONE",
          icon: "🚀",
          name: "Final Project",
          description:
            "Build a real end-to-end data pipeline from scratch. Ingest → Transform → Store → Visualize. Evaluated individually. Goes straight into your portfolio.",
          duration: "~3 weeks",
          topics: [
            "Scoping a real end-to-end pipeline",
            "Ingestion → transformation → storage → visualization",
            "Combining the full stack you learned",
            "Code review & engineering best practices",
            "Portfolio-ready delivery & presentation",
          ],
        },
      ],
      bottomStatement:
        "By step 11, you won't just know these tools. You'll have used them together to build something real.",
      jobBanner:
        "🎯 Goal: Help every graduate land their first Junior Data Engineer role in Abu Dhabi. We'll review your CV, prep you for interviews, and connect you to our network.",
    },

    instructor: {
      eyebrow: "YOUR INSTRUCTOR",
      headline: "Taught by someone who actually does this.",
      name: "Mohamed Atef Fahmy",
      title: "Senior Data Engineer",
      badgeOverlay: "Senior Data Engineer · 6+ Years",
      shortBio:
        "I didn't learn data engineering from tutorials. I learned it by building systems that couldn't fail.",
      fullBio: [
        "I'm a Senior Data Engineer with 6+ years of experience building production-grade data systems across the UAE.",
        "I currently work as a Senior Data Engineer at the Statistics Centre of Abu Dhabi (SCAD).",
        "Before that, at e& (Etisalat), the UAE's largest telecom, I took a Spark/Scala ETL pipeline from 16 hours down to 2 hours — an 87.5% performance improvement on a mission-critical system.",
        "From July 2023 to December 2024, I was a Session Lead at Udacity, mentoring learners in programming fundamentals, data analytics, web development, AI, cybersecurity, and Python — simplifying complex topics through hands-on, engaging sessions and personalized support.",
        "I hold an Azure Data Engineer Associate certification (DP-203) and I've worked across Scrapy, Airflow, Spark, Kafka, Docker, Hadoop, and Hive in real production environments.",
        "I'm not teaching you what I read in a book. I'm teaching you what I do every day.",
      ],
      credentials: [
        "🏢 SCAD — Abu Dhabi",
        "🏢 e& (Etisalat) — UAE Telecom",
        "🎓 Session Lead @ Udacity",
        "🏢 LigaData",
        "📜 Azure DP-203 Certified",
        "🌍 6+ Years UAE Experience",
      ],
      quote:
        "The best engineers I know didn't learn from courses. They learned by building things that mattered. That's what we're going to do.",
      quoteAuthor: "— Mohamed Atef Fahmy",
    },

    community: {
      eyebrow: "THE COMMUNITY",
      headline: "It doesn't end at graduation.",
      subheadline:
        "This cohort is the start of a community. We host events and bring in experts to keep everyone connected, current, and learning long after the bootcamp ends.",
      cards: [
        {
          icon: "🎤",
          title: "Expert Talks",
          body: "We invite Data Engineers, AI Engineers, and BI Engineers to share how they design and ship real systems.",
        },
        {
          icon: "🤝",
          title: "Events & Meetups",
          body: "Regular in-person gatherings in Abu Dhabi to connect, network, and grow with people who do this work.",
        },
        {
          icon: "🧠",
          title: "Real Conversations",
          body: "Talks on the current state of the field, modern architectures, the latest tools, and where AI is taking data.",
        },
      ],
      expertsLabel: "Who we bring in",
      experts: ["👷 Data Engineers", "🤖 AI Engineers", "📊 BI Engineers"],
      topicsLabel: "What we talk about",
      topics: ["Current industry status", "Architectures", "Tools", "AI"],
      aiStatement: "No good data engineers — no AI.",
      aiBanner:
        "🇦🇪 The UAE is building one of the world's leading AI nations. But every AI model, every agent, every insight runs on data — and data doesn't move itself. Strong AI starts with strong data engineers. That's exactly what this community exists to build.",
    },

    form: {
      eyebrow: "JOIN THE COHORT",
      headline: "Apply for Cohort 01",
      subheadline:
        "10 seats. Free. On-site in Abu Dhabi. We review applications on a rolling basis. Strong applicants are contacted within 3–5 business days.",
      sectionPersonal: "Personal Information",
      sectionTechnical: "Technical Background",
      sectionMotivation: "Motivation",
      sectionCommitment: "Commitment & Availability",
      sectionDocuments: "Documents",
      optional: "(optional)",
      fields: {
        fullName: { label: "Full Name", placeholder: "Mohamed Ali" },
        email: { label: "Email Address", placeholder: "you@example.com" },
        phone: {
          label: "Phone Number (WhatsApp preferred)",
          placeholder: "+971 50 123 4567",
        },
        nationality: { label: "Nationality" },
        city: { label: "Current City" },
        status: { label: "Current Status" },
        commit4Months: { label: "Can you commit for the full 4 months?" },
        available5Hours: { label: "Are you available at least 5 hours per week?" },
        timeEffort: { label: "Are you ready to give it the time and effort it takes?" },
        englishComfortable: { label: "Are you comfortable learning in English?" },
        aboutYou: {
          label: "Tell us more about you — your habits, hobbies, and what you enjoy doing",
          placeholder:
            "What does a typical week look like for you? What do you do for fun? Any side projects, sports, books, or things you're passionate about?",
        },
        pythonLevel: { label: "Python Experience Level" },
        sqlLevel: { label: "SQL Experience Level" },
        linuxLevel: { label: "Linux Experience Level" },
        motivation: {
          label: "Why do you want to join this bootcamp? How will it benefit you? Be specific.",
          placeholder:
            "Tell us about your goals, where you are now, and where you want to be. What will you build with these skills? Why Abu Dhabi? Why Data Engineering?",
        },
        goal: { label: "What is your goal after the bootcamp?" },
        linkedin: { label: "LinkedIn Profile URL", placeholder: "https://linkedin.com/in/yourname" },
        github: { label: "GitHub Profile URL", placeholder: "https://github.com/yourusername" },
        commitment: {
          label:
            "I understand this is a serious commitment. I will attend all sessions, complete the project, and contribute to the community.",
        },
      },
      selectPlaceholder: "Select an option",
      cityOptions: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Other UAE", "Outside UAE"],
      statusOptions: [
        "Fresh Graduate",
        "Junior Developer",
        "Software Engineer",
        "Data Analyst",
        "Student",
        "Career Switcher",
        "Other",
      ],
      pythonOptions: [
        "Beginner — I know the basics (variables, loops, functions)",
        "Intermediate — I've built scripts and understand OOP",
        "Advanced — I use Python professionally",
      ],
      sqlOptions: [
        "Basic — I can write SELECT, WHERE, GROUP BY",
        "Intermediate — I'm comfortable with JOINs and subqueries",
        "Advanced — I design database schemas",
      ],
      linuxOptions: [
        "Beginner — I know basic terminal commands",
        "Intermediate — I'm comfortable with permissions and scripting",
        "Advanced — I manage Linux servers",
      ],
      goalOptions: [
        "Get a Junior Data Engineer job in Abu Dhabi",
        "Switch from another tech role to Data Engineering",
        "Build my own data projects / startup",
        "Upskill and get promoted at my current job",
        "Other (please specify in motivation above)",
      ],
      yesNoOptions: ["Yes", "No"],
      nationalityOptions: [
        "Emirati",
        "Egyptian",
        "Saudi",
        "Jordanian",
        "Lebanese",
        "Syrian",
        "Palestinian",
        "Iraqi",
        "Yemeni",
        "Sudanese",
        "Moroccan",
        "Algerian",
        "Tunisian",
        "Libyan",
        "Omani",
        "Bahraini",
        "Kuwaiti",
        "Qatari",
        "Indian",
        "Pakistani",
        "Bangladeshi",
        "Sri Lankan",
        "Nepali",
        "Filipino",
        "Indonesian",
        "Iranian",
        "Turkish",
        "British",
        "American",
        "Canadian",
        "French",
        "German",
        "Nigerian",
        "Kenyan",
        "Ethiopian",
        "South African",
        "Somali",
        "Other",
      ],
      upload: {
        title: "Upload Your CV",
        prompt: "Drag your CV here, or click to browse",
        hint: "PDF, DOC, DOCX — max 5MB",
        change: "Click to replace",
      },
      submit: "Submit Application →",
      submitting: "Submitting...",
      charCounter: (n: number, max: number) => `${n} / ${max} characters`,
      successTitle: "✅ Application received!",
      successBody:
        "We'll review your application and get back to you within 3–5 business days via email or WhatsApp. Thank you, and good luck!",
      errorBody:
        "❌ Something went wrong. Please try again or email us directly at applications@mafbootcamp.com.",
    },

    success: {
      title: "✅ Application received!",
      body:
        "Thank you for applying to DE Bootcamp Cohort 01. We review every application personally and reach out to strong candidates within 3–5 business days via email or WhatsApp.",
      checkInbox: "Check your inbox for a confirmation email.",
      backHome: "← Back to home",
    },

    footer: {
      tagline: "Free, on-site Data Engineering bootcamp in Abu Dhabi.",
      builtBy: "Built by Mohamed Atef Fahmy",
      rights: "All rights reserved.",
      links: "Quick links",
    },
  },

  ar: {
    dir: "rtl",
    langName: "عربي",
    otherLangName: "EN",

    nav: {
      brand: "MAF · بوتكامب",
      about: "عن الكوهورت",
      requirements: "المتطلبات",
      curriculum: "المنهج",
      instructor: "المدرب",
      community: "المجتمع",
      apply: "قدّم الآن",
      menu: "القائمة",
      close: "إغلاق",
    },

    hero: {
      eyebrow: "كوهورت مجاني · أبوظبي · ١٠ مقاعد فقط",
      headline: "كن مهندس بيانات. بجد.",
      subheadline:
        "مش كورسات يوتيوب. مش نظريات. بوتكامب عملي ٤ شهور، بيدرسك مهندس بيانات أول بخبرة أكتر من ٦ سنين في بناء أنظمة data حقيقية في الإمارات.",
      ctaPrimary: "قدّم الآن — مجاني →",
      ctaSecondary: "شوف المنهج ↓",
      socialProof: "🎯 ١٠ مقاعد فقط  ·  📍 أبوظبي، حضوري  ·  🆓 مجاني بالكامل",
      scroll: "اسكرول لتستكشف",
    },

    about: {
      eyebrow: "عن الكوهورت",
      headline: "مش كورس. مجتمع.",
      subheadline:
        "الكوهورت الأول لأكبر مجتمع Data Engineering في أبوظبي — وانت ممكن تكون جزء منه من أول يوم.",
      cards: [
        {
          icon: "🎁",
          title: "ليه مجاني؟",
          body:
            "الكوهورت الأول مجاني بالكامل لأن المجتمع أهم من الفلوس في المرحلة دي. انت مش هتدفع ولا جنيه — وكمان إحنا اللي بنغطّي تكلفة المكان اللي بنتقابل فيه كل session. في المقابل، انت بتلتزم بالكامل — تحضر كل session، تخلص البروجيكت، وتساعد في بناء اللي هييجي بعده.",
        },
        {
          icon: "🎯",
          title: "هتطلع بإيه",
          body:
            "✅ ١١ مهارة من مستوى production\n✅ بروجيكت حقيقي في البورتفوليو\n✅ شهادة إتمام\n✅ دعم في التقديم على الوظايف\n✅ عضوية دايمة في المجتمع\n✅ mentorship مباشر من Senior DE",
        },
        {
          icon: "📅",
          title: "إزاي بيشتغل",
          body:
            "📍 حضوري، أبوظبي\n🗓️ ٢ session في الأسبوع\n⏱️ ٢.٥ ساعة لكل session\n📆 ٤ شهور\n👥 ١٠ طلاب كحد أقصى\n🌍 باللغة العربية، مواد bilingual",
        },
      ],
      banner:
        "⚡ التقديم مفتوح. بنراجع الطلبات بشكل مستمر وبنقفل لما نوصل لـ ١٠ طلاب.",
    },

    requirements: {
      eyebrow: "مين ده ليه",
      headline: "عندك بداية بالفعل.",
      subheadline:
        "مش بنبدأ من الصفر. محتاج ٣ أساسيات — ولو عندك دول، انت جاهز لكل اللي هنبنيه مع بعض.",
      badge: "مطلوب",
      testYourself: "اختبر نفسك:",
      pass: "لو جاوبت آه على الـ ٣ → انت تمام ✅",
      cards: [
        {
          icon: "🐍",
          title: "أساسيات Python",
          description:
            "مرتاح مع المتغيرات، الـ loops، الـ functions، والـ OOP الأساسي. كتبت scripts قبل كده.",
          tests: [
            "→ تقدر تكتب class فيها methods؟",
            "→ تقدر تعمل loop على list وتفلترها؟",
            "→ تقدر تقرأ CSV file بـ Python؟",
          ],
        },
        {
          icon: "🗃️",
          title: "SQL الأساسي",
          description:
            "عارف تكتب SELECT، WHERE، GROUP BY، وتعمل JOIN. مش محتاج تكون DBA — بس تبقى fluent في الأساسيات.",
          tests: [
            "→ تقدر تعمل JOIN بين جدولين؟",
            "→ تقدر تستخدم GROUP BY مع aggregate functions؟",
            "→ تقدر تكتب subquery؟",
          ],
        },
        {
          icon: "🐧",
          title: "أساسيات Linux",
          description:
            "مش بتخاف من الـ terminal. عارف الأوامر الأساسية — التنقل في الـ directories، إنشاء ملفات، الـ permissions. هنتعمق أكتر بس محتاج الأساس ده.",
          tests: [
            "→ تقدر تتنقل بـ cd، ls، pwd؟",
            "→ تقدر تنشئ وتحرك وتحذف ملفات؟",
            "→ فاهم الـ file permissions (chmod)؟",
          ],
        },
      ],
      ctaTitle: "لسه ما وصلتش؟ مش مشكلة.",
      ctaSubtitle: "في مصادر مجانية تجهزك:",
      resourceLabels: ["Python", "SQL", "Linux"],
    },

    curriculum: {
      eyebrow: "المنهج",
      headline: "من Linux لـ Kafka. في ٤ شهور.",
      subheadline:
        "كل مهارة بتبني على اللي قبلها. كل session عملي. في النهاية هيكون معاك بروجيكت حقيقي يثبت إنك تقدر.",
      durationLabel: "المدة",
      topicsLabel: "اللي هنغطّيه",
      steps: [
        {
          tag: "FOUNDATION",
          icon: "🐧",
          name: "لينكس",
          description:
            "اتقن سطر الأوامر. الأساس اللي كل مهندس بيانات محتاجه قبل ما يلمس أي tool.",
          duration: "~٢ أسابيع",
          topics: [
            "التنقّل في نظام الملفات والأوامر الأساسية",
            "الصلاحيات والمستخدمين والـ processes",
            "الـ pipes والـ redirection و grep / sed / awk",
            "كتابة الـ Bash scripts والأتمتة بـ cron",
            "SSH وإدارة الحزم وإعداد البيئة",
          ],
        },
        {
          tag: "FOUNDATION",
          icon: "🐘",
          name: "هادوب",
          description:
            "افهم التخزين والمعالجة الموزعة. HDFS، MapReduce، YARN — العمود الفقري للـ big data.",
          duration: "~٢ أسابيع",
          topics: [
            "التخزين الموزّع باستخدام HDFS",
            "نموذج البرمجة MapReduce",
            "إدارة الموارد عبر YARN",
            "معمارية الـ cluster وقُرب البيانات",
            "إمتى تستخدم Hadoop وإمتى لأ",
          ],
        },
        {
          tag: "CORE",
          icon: "🐳",
          name: "دوكر",
          description:
            "حِط كل حاجة في container. اتعلم تبني وتشغّل وتنظّم بيئات بيانات قابلة للتكرار.",
          duration: "~١.٥ أسبوع",
          topics: [
            "الـ images والـ containers والطبقات",
            "كتابة الـ Dockerfiles",
            "الـ volumes والشبكات والـ ports",
            "Docker Compose لتشغيل عدة خدمات",
            "بناء بيئات بيانات قابلة لإعادة الإنتاج",
          ],
        },
        {
          tag: "CORE",
          icon: "🌬️",
          name: "أباتشي إيرفلو",
          description:
            "نظّم الـ pipelines بتاعتك. ابنِ DAGs، جدول المهام، وراقب الـ dependencies كالمحترفين.",
          duration: "~٢ أسابيع",
          topics: [
            "الـ DAGs والـ tasks والـ operators",
            "الجدولة والـ backfills",
            "الاعتماديات وتنسيق المهام",
            "الـ connections والـ hooks والـ sensors",
            "المراقبة وإعادة المحاولة والتنبيهات",
          ],
        },
        {
          tag: "CORE",
          icon: "🗄️",
          name: "قواعد البيانات",
          description:
            "تجاوز الـ SQL. افهم ACID، الـ indexing، الـ partitioning، الـ sharding، وداخل قواعد البيانات.",
          duration: "~١.٥ أسبوع",
          topics: [
            "خصائص ACID والـ transactions",
            "الـ indexing وتحسين الاستعلامات",
            "الـ partitioning والـ sharding",
            "الـ normalization مقابل denormalization",
            "الفرق بين OLTP و OLAP من الداخل",
          ],
        },
        {
          tag: "CORE",
          icon: "🏭",
          name: "مستودع البيانات",
          description:
            "صمّم أنظمة تحليلية. Star schemas، النمذجة البُعدية، الـ SCD، وأنماط الـ ETL.",
          duration: "~٢ أسابيع",
          topics: [
            "النمذجة البُعدية والـ star schemas",
            "الـ facts والـ dimensions",
            "الأبعاد بطيئة التغيّر (SCD)",
            "أنماط ETL مقابل ELT",
            "تصميم نماذج بيانات تحليلية",
          ],
        },
        {
          tag: "CORE",
          icon: "🐝",
          name: "أباتشي هايف",
          description:
            "استعلم عن الـ big data بصيغة شبيهة بالـ SQL. ابنِ فوق HDFS واربطه بمعمارية الـ DWH.",
          duration: "~١.٥ أسبوع",
          topics: [
            "لغة HiveQL والـ SQL فوق Hadoop",
            "الجداول والـ partitions والـ buckets",
            "صيغ الملفات (ORC، Parquet)",
            "دمج Hive مع الـ warehouse",
            "تحسين الأداء",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "⚡",
          name: "أباتشي سبارك — باتش",
          description:
            "عالج datasets ضخمة على نطاق واسع. DataFrames، transformations، تحسينات، و ETL حقيقي.",
          duration: "~٢.٥ أسبوع",
          topics: [
            "معمارية Spark ونموذج التنفيذ",
            "الـ RDDs مقابل الـ DataFrames",
            "الـ transformations والـ actions",
            "الـ joins والتجميعات والـ UDFs",
            "تحسين الأداء والـ partitioning",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "🌊",
          name: "أباتشي سبارك — ستريمنج",
          description:
            "معالجة لحظية بـ Spark Structured Streaming. micro-batches، windowing، عمليات stateful.",
          duration: "~٢ أسابيع",
          topics: [
            "نموذج Structured Streaming",
            "الـ micro-batch مقابل المعالجة المستمرة",
            "الـ windowing والـ watermarking",
            "العمليات ذات الحالة (stateful)",
            "القراءة والكتابة من/إلى Kafka",
          ],
        },
        {
          tag: "ADVANCED",
          icon: "📨",
          name: "أباتشي كافكا",
          description:
            "العمود الفقري لـ pipelines اللحظية. producers، consumers، topics، partitions، Kafka Connect.",
          duration: "~٢ أسابيع",
          topics: [
            "الـ topics والـ partitions والـ offsets",
            "الـ producers والـ consumers",
            "الـ consumer groups والـ rebalancing",
            "Kafka Connect والـ schema registry",
            "بناء pipelines في الزمن الحقيقي",
          ],
        },
        {
          tag: "CAPSTONE",
          icon: "🚀",
          name: "المشروع النهائي",
          description:
            "ابنِ data pipeline حقيقي من البداية للنهاية. Ingest → Transform → Store → Visualize. بيتقيّم فردياً. وبيدخل البورتفوليو بتاعك على طول.",
          duration: "~٣ أسابيع",
          topics: [
            "تحديد نطاق pipeline حقيقي من البداية للنهاية",
            "الاستيعاب ← التحويل ← التخزين ← التصوّر",
            "دمج الـ stack الكامل اللي اتعلمته",
            "مراجعة الكود وأفضل ممارسات الهندسة",
            "تسليم جاهز للبورتفوليو وعرض المشروع",
          ],
        },
      ],
      bottomStatement:
        "في الخطوة ١١، مش هتعرف الـ tools دي بس. هتكون استخدمتهم مع بعض وبنيت حاجة حقيقية.",
      jobBanner:
        "🎯 الهدف: نساعد كل خريج يلاقي أول وظيفة كـ Junior Data Engineer في أبوظبي. هنراجع الـ CV بتاعك، نجهزك للـ interviews، ونوصلك بشبكتنا.",
    },

    instructor: {
      eyebrow: "المدرب",
      headline: "بيعلمك حد بيعمل ده فعلاً.",
      name: "محمد عاطف فهمي",
      title: "مهندس بيانات سينيور",
      badgeOverlay: "Senior Data Engineer · 6+ سنين",
      shortBio:
        "أنا ما تعلمتش data engineering من tutorials. تعلمته وأنا ببني أنظمة ماتقدرش تفشل.",
      fullBio: [
        "أنا Senior Data Engineer بخبرة أكتر من ٦ سنين في بناء أنظمة data حقيقية في الإمارات.",
        "دلوقتي بشتغل Senior Data Engineer في مركز إحصاء أبوظبي (SCAD).",
        "قبل كده في e& (اتصالات)، أكبر شركة اتصالات في الإمارات، قلصت pipeline Spark/Scala من ١٦ ساعة لـ ساعتين — تحسين ٨٧.٥٪ في نظام مش مسموح له يفشل.",
        "من يوليو ٢٠٢٣ لديسمبر ٢٠٢٤، اشتغلت Session Lead في Udacity، بدرّب المتعلمين على أساسيات البرمجة، تحليل البيانات، تطوير الويب، الذكاء الاصطناعي، الأمن السيبراني، وPython — وببسّط المواضيع المعقدة من خلال sessions عملية ودعم شخصي.",
        "عندي شهادة Azure Data Engineer Associate (DP-203) وشغلت مع Scrapy، Airflow، Spark، Kafka، Docker، Hadoop، وHive في بيئات production حقيقية.",
        "مش بعلمك اللي قرأته في كتاب. بعلمك اللي بعمله كل يوم.",
      ],
      credentials: [
        "🏢 SCAD — أبوظبي",
        "🏢 e& (اتصالات) — اتصالات الإمارات",
        "🎓 Session Lead في Udacity",
        "🏢 LigaData",
        "📜 Azure DP-203 معتمد",
        "🌍 ٦+ سنين خبرة في الإمارات",
      ],
      quote:
        "أحسن المهندسين اللي عرفتهم ما اتعلموش من كورسات. اتعلموا وهما بيبنوا حاجات مهمة. ده اللي هنعمله.",
      quoteAuthor: "— محمد عاطف فهمي",
    },

    community: {
      eyebrow: "المجتمع",
      headline: "مش بينتهي عند التخرج.",
      subheadline:
        "الكوهورت ده بداية مجتمع. بنعمل events وبنجيب خبراء عشان نفضل متواصلين، ومواكبين، وبنتعلم حتى بعد ما البوتكامب يخلص.",
      cards: [
        {
          icon: "🎤",
          title: "جلسات مع خبراء",
          body: "بنجيب Data Engineers و AI Engineers و BI Engineers يشاركوا إزاي بيصمموا ويبنوا أنظمة حقيقية.",
        },
        {
          icon: "🤝",
          title: "Events ولقاءات",
          body: "لقاءات حضورية منتظمة في أبوظبي عشان نتواصل ونعمل network ونكبر مع ناس بتشتغل في المجال ده.",
        },
        {
          icon: "🧠",
          title: "نقاشات حقيقية",
          body: "حوارات عن وضع المجال حالياً، الـ architectures الحديثة، أحدث الـ tools، وفين الـ AI بياخد الـ data.",
        },
      ],
      expertsLabel: "مين بنجيب",
      experts: ["👷 Data Engineers", "🤖 AI Engineers", "📊 BI Engineers"],
      topicsLabel: "بنتكلم عن إيه",
      topics: ["وضع المجال حالياً", "الـ Architectures", "الـ Tools", "الـ AI"],
      aiStatement: "من غير data engineers كويسين — مفيش AI.",
      aiBanner:
        "🇦🇪 الإمارات بتبني واحدة من أقوى دول الـ AI في العالم. بس أي AI model، أي agent، أي insight شغال على data — والـ data مش بتتحرك لوحدها. الـ AI القوي بيبدأ بـ data engineers أقوياء. وده بالظبط اللي المجتمع ده موجود عشانه.",
    },

    form: {
      eyebrow: "انضم للكوهورت",
      headline: "قدّم لكوهورت ٠١",
      subheadline:
        "١٠ مقاعد. مجاني. حضوري في أبوظبي. بنراجع الطلبات بشكل مستمر. المتقدمين المتميزين بيتواصل معاهم خلال ٣-٥ أيام عمل.",
      sectionPersonal: "المعلومات الشخصية",
      sectionTechnical: "الخلفية التقنية",
      sectionMotivation: "الدافع",
      sectionCommitment: "الالتزام والتفرّغ",
      sectionDocuments: "المستندات",
      optional: "(اختياري)",
      fields: {
        fullName: { label: "الاسم الكامل", placeholder: "محمد علي" },
        email: { label: "البريد الإلكتروني", placeholder: "you@example.com" },
        phone: {
          label: "رقم الجوال (واتساب أفضل)",
          placeholder: "+971 50 123 4567",
        },
        nationality: { label: "الجنسية" },
        city: { label: "مدينة الإقامة الحالية" },
        status: { label: "وضعك الحالي" },
        commit4Months: { label: "هل تقدر تلتزم طوال الـ ٤ شهور كاملة؟" },
        available5Hours: { label: "هل عندك على الأقل ٥ ساعات متاحة أسبوعياً؟" },
        timeEffort: { label: "هل أنت مستعد تبذل الوقت والمجهود المطلوب؟" },
        englishComfortable: { label: "هل أنت مرتاح للتعلّم باللغة الإنجليزية؟" },
        aboutYou: {
          label: "حدثنا أكثر عنك — عاداتك، هواياتك، والحاجات اللي بتحب تعملها",
          placeholder:
            "أسبوعك بيكون عامل إزاي؟ بتعمل إيه في وقت فراغك؟ عندك مشاريع جانبية، رياضة، كتب، أو حاجات شغوف بيها؟",
        },
        pythonLevel: { label: "مستواك في Python" },
        sqlLevel: { label: "مستواك في SQL" },
        linuxLevel: { label: "مستواك في Linux" },
        motivation: {
          label: "ليه عايز تنضم للبوتكامب ده؟ هيفيدك إزاي؟ كن محدداً.",
          placeholder:
            "حدثنا عن أهدافك، فين انت دلوقتي، وفين عايز توصل. هتبني إيه بالمهارات دي؟ ليه أبوظبي؟ ليه Data Engineering؟",
        },
        goal: { label: "هدفك بعد البوتكامب إيه؟" },
        linkedin: { label: "رابط LinkedIn", placeholder: "https://linkedin.com/in/yourname" },
        github: { label: "رابط GitHub", placeholder: "https://github.com/yourusername" },
        commitment: {
          label:
            "أفهم إن ده التزام جدي. هحضر كل الـ sessions، هخلص البروجيكت، وهساهم في المجتمع.",
        },
      },
      selectPlaceholder: "اختر",
      cityOptions: ["أبوظبي", "دبي", "الشارقة", "عجمان", "إمارة أخرى", "خارج الإمارات"],
      statusOptions: [
        "حديث التخرج",
        "مطور مبتدئ",
        "مهندس برمجيات",
        "محلل بيانات",
        "طالب",
        "تحويل مسار مهني",
        "غير ذلك",
      ],
      pythonOptions: [
        "مبتدئ — أعرف الأساسيات (متغيرات، loops، functions)",
        "متوسط — بنيت scripts وأفهم OOP",
        "متقدم — بستخدم Python باحتراف",
      ],
      sqlOptions: [
        "أساسي — أقدر أكتب SELECT، WHERE، GROUP BY",
        "متوسط — مرتاح مع JOINs والـ subqueries",
        "متقدم — بصمم database schemas",
      ],
      linuxOptions: [
        "مبتدئ — أعرف أوامر الـ terminal الأساسية",
        "متوسط — مرتاح مع الـ permissions والـ scripting",
        "متقدم — بدير Linux servers",
      ],
      goalOptions: [
        "ألاقي وظيفة Junior Data Engineer في أبوظبي",
        "أحوّل من دور تقني تاني لـ Data Engineering",
        "أبني بروجيكتات/startup خاصة بيا",
        "أطوّر مهاراتي وأترقّى في شغلي الحالي",
        "غير ذلك (وضّح في الدافع فوق)",
      ],
      yesNoOptions: ["نعم", "لا"],
      nationalityOptions: [
        "إماراتي",
        "مصري",
        "سعودي",
        "أردني",
        "لبناني",
        "سوري",
        "فلسطيني",
        "عراقي",
        "يمني",
        "سوداني",
        "مغربي",
        "جزائري",
        "تونسي",
        "ليبي",
        "عُماني",
        "بحريني",
        "كويتي",
        "قطري",
        "هندي",
        "باكستاني",
        "بنغلاديشي",
        "سريلانكي",
        "نيبالي",
        "فلبيني",
        "إندونيسي",
        "إيراني",
        "تركي",
        "بريطاني",
        "أمريكي",
        "كندي",
        "فرنسي",
        "ألماني",
        "نيجيري",
        "كيني",
        "إثيوبي",
        "جنوب أفريقي",
        "صومالي",
        "غير ذلك",
      ],
      upload: {
        title: "ارفع الـ CV بتاعك",
        prompt: "اسحب الـ CV هنا، أو اضغط للاختيار",
        hint: "PDF, DOC, DOCX — حد أقصى 5MB",
        change: "اضغط للاستبدال",
      },
      submit: "أرسل الطلب →",
      submitting: "جارٍ الإرسال...",
      charCounter: (n: number, max: number) => `${n} / ${max} حرف`,
      successTitle: "✅ وصلنا طلبك!",
      successBody:
        "هنراجع طلبك ونتواصل معاك خلال ٣-٥ أيام عمل على الإيميل أو واتساب. شكراً، وبالتوفيق!",
      errorBody:
        "❌ في مشكلة حصلت. حاول تاني أو راسلنا على applications@mafbootcamp.com.",
    },

    success: {
      title: "✅ وصلنا طلبك!",
      body:
        "شكراً لتقديمك على DE Bootcamp كوهورت ٠١. بنراجع كل طلب بنفسنا وبنتواصل مع المتقدمين المتميزين خلال ٣-٥ أيام عمل على الإيميل أو واتساب.",
      checkInbox: "تفقّد إيميلك، هتلاقي رسالة تأكيد.",
      backHome: "← الرجوع للرئيسية",
    },

    footer: {
      tagline: "بوتكامب Data Engineering مجاني وحضوري في أبوظبي.",
      builtBy: "من إعداد محمد عاطف فهمي",
      rights: "كل الحقوق محفوظة.",
      links: "روابط سريعة",
    },
  },
} as const;

export type Copy = (typeof copy)[Lang];

/**
 * Canonical, language-independent values submitted by the form and validated
 * by the Zod schema. The per-language `*Options` arrays above are parallel to
 * these by index and provide the display labels.
 */
export const formValues = {
  city: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Other UAE", "Outside UAE"],
  status: [
    "Fresh Graduate",
    "Junior Developer",
    "Software Engineer",
    "Data Analyst",
    "Student",
    "Career Switcher",
    "Other",
  ],
  python: ["Beginner", "Intermediate", "Advanced"],
  sql: ["Basic", "Intermediate", "Advanced"],
  linux: ["Beginner", "Intermediate", "Advanced"],
  yesNo: ["Yes", "No"],
  nationality: [
    "Emirati",
    "Egyptian",
    "Saudi",
    "Jordanian",
    "Lebanese",
    "Syrian",
    "Palestinian",
    "Iraqi",
    "Yemeni",
    "Sudanese",
    "Moroccan",
    "Algerian",
    "Tunisian",
    "Libyan",
    "Omani",
    "Bahraini",
    "Kuwaiti",
    "Qatari",
    "Indian",
    "Pakistani",
    "Bangladeshi",
    "Sri Lankan",
    "Nepali",
    "Filipino",
    "Indonesian",
    "Iranian",
    "Turkish",
    "British",
    "American",
    "Canadian",
    "French",
    "German",
    "Nigerian",
    "Kenyan",
    "Ethiopian",
    "South African",
    "Somali",
    "Other",
  ],
  goal: [
    "Get a Junior Data Engineer job in Abu Dhabi",
    "Switch from another tech role to Data Engineering",
    "Build my own data projects / startup",
    "Upskill and get promoted at my current job",
    "Other (please specify in motivation above)",
  ],
} as const;

/** Zip canonical values with their localized labels into option objects. */
export function zipOptions(
  values: readonly string[],
  labels: readonly string[]
): { value: string; label: string }[] {
  return values.map((value, i) => ({ value, label: labels[i] ?? value }));
}

/** Tag → badge color variant mapping used by Curriculum. */
export const tagVariant: Record<string, "cyan" | "violet" | "amber" | "red"> = {
  FOUNDATION: "cyan",
  CORE: "violet",
  ADVANCED: "amber",
  CAPSTONE: "red",
};

/** External resource links for the Requirements section CTA. */
export const resourceLinks = [
  "https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/python/python-resources.md",
  "https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/sql/sql-resources.md",
  "https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker/blob/main/linux/linux-resources.md",
];

export const socialLinks = {
  portfolio: "https://maf-portfolio-one.vercel.app/",
  linkedin: "https://www.linkedin.com/in/mohamed-atef-fahmy-khalil/",
  github: "https://github.com/Muhammadatef",
  medium: "https://medium.com/@muhamedfahmy7474",
};
