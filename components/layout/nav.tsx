"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { localizedPath, ui, type Locale } from "@/lib/i18n";
import { profile } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

export function Nav({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const home = localizedPath(locale, "/");
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${home}#about`, label: t.nav.about },
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#project`, label: t.nav.project },
    { href: `${home}#stack`, label: t.nav.stack },
    { href: `${home}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-hair bg-[var(--bg)]/70 backdrop-blur-xl">
      <nav className="container-tight flex h-16 items-center justify-between gap-4">
        <Link
          href={home}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--fg)] text-[13px] font-bold text-[var(--bg)]">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group/nav relative px-3 py-2 text-sm text-muted transition-colors hover:text-[var(--fg)]"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/nav:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangToggle locale={locale} />
          </div>
          <ThemeToggle label={t.a11y.toggleTheme} />
          <Link
            href={localizedPath(locale, "/cv")}
            className="hidden items-center gap-1.5 rounded-md bg-[var(--fg)] px-3.5 py-2 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileDown className="h-4 w-4" />
            {t.cta.downloadCv}
          </Link>
          <button
            type="button"
            aria-label={t.a11y.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hair text-muted md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hair bg-[var(--bg)] md:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-surface hover:text-[var(--fg)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-hair pt-4">
              <LangToggle locale={locale} />
              <Link
                href={localizedPath(locale, "/cv")}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md bg-[var(--fg)] px-3.5 py-2 text-sm font-medium text-[var(--bg)]"
              >
                <FileDown className="h-4 w-4" />
                {t.cta.downloadCv}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
