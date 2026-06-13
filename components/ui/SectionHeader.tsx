"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, headline, subheadline, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <motion.div variants={fadeUp} className="eyebrow">
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-4 whitespace-pre-line font-heading text-h2 text-text-primary"
      >
        {headline}
      </motion.h2>
      {subheadline ? (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-text-secondary"
        >
          {subheadline}
        </motion.p>
      ) : null}
    </div>
  );
}
