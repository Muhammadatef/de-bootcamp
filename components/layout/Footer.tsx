"use client";

import { Github, Linkedin, Globe, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { socialLinks } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#requirements", label: t.nav.requirements },
    { href: "#curriculum", label: t.nav.curriculum },
    { href: "#instructor", label: t.nav.instructor },
    { href: "#community", label: t.nav.community },
    { href: "#apply", label: t.nav.apply },
  ];

  const socials = [
    { href: socialLinks.portfolio, label: "Portfolio", Icon: Globe },
    { href: socialLinks.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: socialLinks.github, label: "GitHub", Icon: Github },
    { href: socialLinks.medium, label: "Medium", Icon: BookOpen },
  ];

  return (
    <footer className="border-t border-border-subtle bg-bg-surface">
      <div className="mx-auto max-w-container px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-heading text-lg font-bold text-text-primary">{t.nav.brand}</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">{t.footer.tagline}</p>
          </div>

          <div>
            <div className="eyebrow mb-4">{t.footer.links}</div>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">{t.instructor.name}</div>
            <div className="flex gap-3">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} · {t.footer.builtBy}. {t.footer.rights}
          </span>
          <span className="font-mono">Abu Dhabi · UAE 🇦🇪</span>
        </div>
      </div>
    </footer>
  );
}
