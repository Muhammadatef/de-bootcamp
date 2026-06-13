"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useReducedMotionSafe } from "@/lib/hooks/useReducedMotionSafe";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotionSafe();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#requirements", label: t.nav.requirements },
    { href: "#curriculum", label: t.nav.curriculum },
    { href: "#instructor", label: t.nav.instructor },
    { href: "#community", label: t.nav.community },
  ];

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-border-subtle bg-bg-primary/85 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-container items-center justify-between px-6">
        <a href="#top" className="font-heading text-base font-bold text-text-primary">
          {t.nav.brand}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#apply"
            className="rounded-xl bg-cyan px-5 py-2 text-sm font-bold text-bg-primary transition-opacity hover:opacity-90"
          >
            {t.nav.apply}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="text-text-primary"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 flex flex-col gap-2 bg-bg-primary px-6 py-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-subtle py-4 text-lg text-text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-cyan px-5 py-4 text-center text-base font-bold text-bg-primary"
            >
              {t.nav.apply}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
