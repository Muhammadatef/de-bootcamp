"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { useReducedMotionSafe } from "@/lib/hooks/useReducedMotionSafe";
import { inViewOnce, staggerContainer } from "@/lib/animations";
import { PipelineNode } from "@/components/ui/PipelineNode";

const PIPELINE_TOOLS = [
  { icon: "🐧", label: "Linux" },
  { icon: "🐘", label: "Hadoop" },
  { icon: "🐳", label: "Docker" },
  { icon: "🌬️", label: "Airflow" },
  { icon: "🗄️", label: "Database" },
  { icon: "🏭", label: "DWH" },
  { icon: "🐝", label: "Hive" },
  { icon: "⚡", label: "Spark Batch" },
  { icon: "🌊", label: "Spark Streaming" },
  { icon: "📨", label: "Kafka" },
  { icon: "🚀", label: "Project" },
];

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotionSafe();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  const words = t.hero.headline.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-[60px]"
    >
      {/* Animated dot-grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div
        ref={ref}
        className="mx-auto grid w-full max-w-container items-center gap-12 px-6 py-16 lg:grid-cols-[60%_40%]"
      >
        {/* Left column: text */}
        <div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="eyebrow"
            >
              {t.hero.eyebrow}
            </motion.div>

            <h1 className="mt-5 font-heading text-hero text-text-primary">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: (idx: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: { delay: reduced ? 0 : idx * 0.05, duration: 0.4 },
                    }),
                  }}
                  className="inline-block"
                >
                  {word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl bg-cyan px-8 py-3.5 text-base font-bold text-bg-primary transition-all hover:-translate-y-px hover:opacity-90 motion-safe:animate-pulse-ring"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-xl border border-border-subtle px-6 py-3 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-8 text-sm text-text-muted"
            >
              {t.hero.socialProof}
            </motion.p>
          </motion.div>

          {/* Mobile / tablet: horizontal chip list (pipeline hidden) */}
          <div className="mt-10 lg:hidden">
            <div className="flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PIPELINE_TOOLS.map((tool) => (
                <span
                  key={tool.label}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-border-subtle bg-bg-surface px-3.5 py-1.5 font-mono text-xs text-text-secondary"
                >
                  <span>{tool.icon}</span>
                  {tool.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: animated pipeline (desktop only) */}
        <div className="relative hidden lg:block">
          <PipelineVisual animate={!reduced && isInView} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 text-xs text-text-muted"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={reduced ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>↓ {t.hero.scroll}</span>
      </motion.a>
    </section>
  );
}

function PipelineVisual({ animate }: { animate: boolean }) {
  return (
    <div className="relative ms-4 ps-4">
      {/* Connecting dashed line */}
      <div
        className="absolute bottom-2 top-2 start-[7px] w-px border-s border-dashed border-border"
        aria-hidden
      />
      {/* Flowing data packets */}
      {animate &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute start-[5px] h-1.5 w-1.5 rounded-full bg-cyan"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
          />
        ))}

      <motion.div
        initial="hidden"
        animate={animate ? "visible" : "visible"}
        variants={staggerContainer}
        className="relative flex flex-col gap-3"
      >
        {PIPELINE_TOOLS.map((tool, i) => (
          <div key={tool.label} className="ms-3">
            <PipelineNode icon={tool.icon} label={tool.label} index={i} animate={animate} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
