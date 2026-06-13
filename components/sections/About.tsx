"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { fadeUp, inViewOnce, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  return (
    <section id="about" className="bg-bg-primary py-16 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-container px-6"
      >
        <SectionHeader
          eyebrow={t.about.eyebrow}
          headline={t.about.headline}
          subheadline={t.about.subheadline}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="rounded-2xl border border-border-subtle bg-bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/20"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-4 font-heading text-h3 text-text-primary">{card.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-text-secondary">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-8 rounded-xl border border-cyan/[0.13] bg-cyan/[0.03] px-6 py-4 text-center text-sm text-text-secondary"
        >
          {t.about.banner}
        </motion.div>
      </motion.div>
    </section>
  );
}
