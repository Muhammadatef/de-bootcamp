"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { fadeUp, inViewOnce, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Community() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  return (
    <section id="community" className="bg-bg-primary py-16 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-container px-6"
      >
        <SectionHeader
          eyebrow={t.community.eyebrow}
          headline={t.community.headline}
          subheadline={t.community.subheadline}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.community.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="rounded-2xl border border-border-subtle bg-bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/30"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-4 font-heading text-h3 text-text-primary">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-8 grid gap-6 rounded-2xl border border-border-subtle bg-bg-surface p-7 md:grid-cols-2"
        >
          <div>
            <div className="eyebrow">{t.community.expertsLabel}</div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {t.community.experts.map((expert) => (
                <span
                  key={expert}
                  className="rounded-full border border-violet/30 bg-violet/[0.08] px-3.5 py-1.5 text-sm text-text-secondary"
                >
                  {expert}
                </span>
              ))}
            </div>
          </div>

          <div className="md:border-s md:border-border-subtle md:ps-7">
            <div className="eyebrow">{t.community.topicsLabel}</div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {t.community.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-cyan/30 bg-cyan/[0.08] px-3.5 py-1.5 font-mono text-xs text-text-secondary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* UAE AI vision statement */}
        <motion.div
          variants={fadeUp}
          className="mt-8 overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.06] to-violet/[0.06] p-8 text-center md:p-12"
        >
          <p className="font-heading text-h2 font-bold text-text-primary">
            {t.community.aiStatement}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
            {t.community.aiBanner}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
