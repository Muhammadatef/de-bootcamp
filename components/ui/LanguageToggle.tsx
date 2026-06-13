"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";

export function LanguageToggle() {
  const { t, toggle } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
    >
      <Globe className="h-3.5 w-3.5" />
      {t.otherLangName}
    </button>
  );
}
