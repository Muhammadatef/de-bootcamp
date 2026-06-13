"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { inViewOnce, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { resourceLinks } from "@/lib/i18n";

export function Requirements() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  return (
    <section id="requirements" className="bg-bg-primary py-16 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-container px-6"
      >
        <SectionHeader
          eyebrow={t.requirements.eyebrow}
          headline={t.requirements.headline}
          subheadline={t.requirements.subheadline}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.requirements.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-bg-surface p-7 transition-colors duration-200 hover:border-cyan/[0.27]"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{card.icon}</span>
                <Badge variant="cyan">{t.requirements.badge}</Badge>
              </div>
              <h3 className="mt-4 font-heading text-h3 text-text-primary">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>

              <div className="mt-5 rounded-lg border border-border-subtle bg-bg-elevated p-4">
                <div className="mb-2 font-mono text-xs text-text-muted">
                  {t.requirements.testYourself}
                </div>
                <ul className="flex flex-col gap-1.5 font-mono text-[13px] text-text-secondary">
                  {card.tests.map((test) => (
                    <li key={test}>{test}</li>
                  ))}
                </ul>
                <div className="mt-3 text-[13px] text-green">{t.requirements.pass}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-10 text-center"
        >
          <p className="font-heading text-base text-text-primary">{t.requirements.ctaTitle}</p>
          <p className="mt-1 text-sm text-text-secondary">{t.requirements.ctaSubtitle}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {t.requirements.resourceLabels.map((label, i) => (
              <a
                key={label}
                href={resourceLinks[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
