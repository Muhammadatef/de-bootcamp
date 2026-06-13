"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { tagVariant } from "@/lib/i18n";
import { inViewOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { useReducedMotionSafe } from "@/lib/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

const tagBorder: Record<string, string> = {
  FOUNDATION: "border-cyan",
  CORE: "border-violet",
  ADVANCED: "border-amber",
  CAPSTONE: "border-red",
};

export function Curriculum() {
  const { t } = useLanguage();
  const reduced = useReducedMotionSafe();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, inViewOnce);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="curriculum" className="bg-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <SectionHeader
            eyebrow={t.curriculum.eyebrow}
            headline={t.curriculum.headline}
            subheadline={t.curriculum.subheadline}
          />
        </motion.div>

        <div ref={timelineRef} className="relative mt-16">
          {/* Base dashed line */}
          <div
            className="absolute bottom-0 top-0 w-px border-s-2 border-dashed border-border-subtle start-[15px] md:start-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {/* Animated cyan flow line */}
          <motion.div
            aria-hidden
            style={{ scaleY: reduced ? 1 : lineScale }}
            className="absolute bottom-0 top-0 w-0.5 origin-top bg-cyan/60 start-[15px] md:start-1/2 md:-translate-x-1/2"
          />

          <ol className="relative flex flex-col gap-10 md:gap-4">
            {t.curriculum.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Step
                  key={`${step.name}-${i}`}
                  step={step}
                  index={i}
                  isLeft={isLeft}
                  durationLabel={t.curriculum.durationLabel}
                  topicsLabel={t.curriculum.topicsLabel}
                  reduced={reduced}
                />
              );
            })}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-16 max-w-2xl text-center font-heading text-h3 text-text-primary"
        >
          {t.curriculum.bottomStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 rounded-xl border border-cyan/[0.13] bg-cyan/[0.03] px-6 py-5 text-center text-sm leading-relaxed text-text-secondary"
        >
          {t.curriculum.jobBanner}
        </motion.div>
      </div>
    </section>
  );
}

type StepData = {
  tag: string;
  icon: string;
  name: string;
  description: string;
  duration: string;
  topics: readonly string[];
};

function Step({
  step,
  index,
  isLeft,
  durationLabel,
  topicsLabel,
  reduced,
}: {
  step: StepData;
  index: number;
  isLeft: boolean;
  durationLabel: string;
  topicsLabel: string;
  reduced: boolean;
}) {
  const [open, setOpen] = useState(false);
  const variant = tagVariant[step.tag] ?? "cyan";
  const num = String(index + 1).padStart(2, "0");
  const panelId = `step-topics-${index}`;

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-8">
      {/* Node circle on the line */}
      <span
        className={cn(
          "absolute top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-bg-surface text-sm start-[2px] md:start-1/2 md:-translate-x-1/2",
          tagBorder[step.tag]
        )}
        aria-hidden
      >
        {step.icon}
      </span>

      {/* Card */}
      <motion.div
        initial={
          reduced ? false : { opacity: 0, x: isLeft ? -30 : 30 }
        }
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "ms-12 overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface transition-colors hover:border-border md:ms-0",
          open && "border-cyan/40",
          isLeft ? "md:col-start-1 md:me-4" : "md:col-start-2 md:ms-4"
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn("w-full p-6 text-start", isLeft && "md:text-end")}
        >
          <div
            className={cn(
              "flex items-center gap-3",
              isLeft ? "md:flex-row-reverse" : ""
            )}
          >
            <span className="font-mono text-sm text-cyan">{num}</span>
            <Badge variant={variant}>{step.tag}</Badge>
          </div>
          <h3 className="mt-3 font-heading text-h3 text-text-primary">{step.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
          <div
            className={cn(
              "mt-4 flex items-center gap-2",
              isLeft ? "md:flex-row-reverse" : ""
            )}
          >
            <span className="font-mono text-xs text-text-muted">
              {durationLabel}: {step.duration}
            </span>
            <span
              className={cn(
                "ms-auto flex items-center gap-1.5 text-xs font-semibold text-cyan",
                isLeft && "md:ms-0 md:me-auto md:flex-row-reverse"
              )}
            >
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
              />
              {topicsLabel}
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="topics"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2.5 border-t border-border-subtle px-6 py-5 text-start">
                {step.topics.map((topic, ti) => (
                  <li
                    key={ti}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                      aria-hidden
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </li>
  );
}
