"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Globe, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { useReducedMotionSafe } from "@/lib/hooks/useReducedMotionSafe";
import { inViewOnce, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { socialLinks } from "@/lib/i18n";

export function Instructor() {
  const { t } = useLanguage();
  const reduced = useReducedMotionSafe();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  const socials = [
    { href: socialLinks.portfolio, label: "Portfolio", Icon: Globe },
    { href: socialLinks.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: socialLinks.github, label: "GitHub", Icon: Github },
    { href: socialLinks.medium, label: "Medium", Icon: BookOpen },
  ];

  return (
    <section id="instructor" className="bg-bg-primary py-16 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-container px-6"
      >
        <SectionHeaderLeft eyebrow={t.instructor.eyebrow} headline={t.instructor.headline} />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[40%_60%]">
          {/* Photo / visual placeholder */}
          <motion.div variants={slideInLeft}>
            <motion.div
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={
                reduced ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              className="group relative overflow-hidden rounded-[20px] border border-border-subtle bg-gradient-to-br from-bg-surface to-bg-elevated p-8 transition-shadow hover:shadow-cyan-glow"
            >
              <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/5 font-heading text-5xl font-bold text-cyan">
                  MAF
                </div>
                <div className="mt-6 rounded-full border border-border-subtle bg-bg-primary/60 px-4 py-1.5 font-mono text-xs text-text-secondary backdrop-blur">
                  {t.instructor.badgeOverlay}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={slideInRight}>
            <h3 className="font-heading text-h2 text-text-primary">{t.instructor.name}</h3>
            <p className="mt-1 font-mono text-sm text-cyan">{t.instructor.title}</p>

            <p className="mt-6 font-heading text-h3 font-semibold text-text-primary">
              {t.instructor.shortBio}
            </p>

            <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-text-secondary">
              {t.instructor.fullBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credential chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {t.instructor.credentials.map((cred) => (
                <span
                  key={cred}
                  className="whitespace-nowrap rounded-full border border-border-subtle bg-bg-surface px-3.5 py-1.5 text-xs text-text-secondary"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pull quote */}
        <motion.blockquote
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-16 border-s-2 border-cyan ps-6 text-xl italic leading-relaxed text-text-primary"
        >
          {t.instructor.quote}
          <footer className="mt-3 font-mono text-sm not-italic text-text-muted">
            {t.instructor.quoteAuthor}
          </footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}

function SectionHeaderLeft({ eyebrow, headline }: { eyebrow: string; headline: string }) {
  return (
    <div className="max-w-2xl">
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="mt-4 font-heading text-h2 text-text-primary"
      >
        {headline}
      </motion.h2>
    </div>
  );
}
