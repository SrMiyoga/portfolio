"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, swapLocale, type Locale } from "@/lib/i18n";

export function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <div className="inline-flex items-center rounded-md border border-hair p-0.5 text-[13px] font-medium">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={swapLocale(pathname, l)}
            aria-current={active ? "true" : undefined}
            className={`rounded-[5px] px-2 py-1 uppercase transition-colors ${
              active
                ? "bg-surface text-[var(--fg)]"
                : "text-muted hover:text-[var(--fg)]"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
