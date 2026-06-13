import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/hooks/useLanguage";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kufi",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mafbootcamp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohamed Atef Fahmy — Data Engineering Bootcamp | أبوظبي | مجاني",
  description:
    "Free, on-site Data Engineering bootcamp in Abu Dhabi. 10 seats only. Taught by a Senior Data Engineer with 6+ years building real production data systems in the UAE. Linux, Hadoop, Spark, Kafka, Airflow and more.",
  keywords: [
    "data engineering bootcamp abu dhabi",
    "free data engineering course uae",
    "data engineering arabic",
    "بوتكامب هندسة البيانات أبوظبي",
    "تعلم data engineering",
    "spark hadoop airflow kafka course abu dhabi",
    "junior data engineer uae",
    "Mohamed Atef Fahmy bootcamp",
  ],
  openGraph: {
    title: "Free Data Engineering Bootcamp — Abu Dhabi 🇦🇪",
    description:
      "10 seats. On-site. Free. Linux → Hadoop → Spark → Kafka. Apply now.",
    url: siteUrl,
    siteName: "DE Bootcamp Abu Dhabi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Data Engineering Bootcamp — Abu Dhabi",
    description:
      "10 seats. On-site. Free. Taught by a Senior DE with 6+ years in the UAE.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Data Engineering Bootcamp — Cohort 01",
  description:
    "Free, on-site Data Engineering bootcamp in Abu Dhabi covering Linux, Hadoop, Docker, Airflow, Spark, Kafka and more.",
  provider: {
    "@type": "Person",
    name: "Mohamed Atef Fahmy",
    url: "https://maf-portfolio-one.vercel.app/",
  },
  courseMode: "onsite",
  educationalLevel: "Beginner to Intermediate",
  inLanguage: ["ar", "en"],
  locationCreated: {
    "@type": "Place",
    name: "Abu Dhabi, UAE",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AED",
    availability: "https://schema.org/LimitedAvailability",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${notoKufi.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ScrollProgress />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
