"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export default function SuccessPage() {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="absolute end-6 top-6">
        <LanguageToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green/30 bg-green/10"
        >
          <CheckCircle2 className="h-10 w-10 text-green" />
        </motion.div>

        <h1 className="mt-8 font-heading text-h1 text-text-primary">{t.success.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">{t.success.body}</p>
        <p className="mt-3 text-sm text-text-muted">{t.success.checkInbox}</p>

        <a
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-xl border border-border-subtle px-6 py-3 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
        >
          {t.success.backHome}
        </a>
      </motion.div>
    </main>
  );
}
