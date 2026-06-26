"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Keeps <html lang> in sync with the page locale. The root layout renders a
 * default lang; this corrects it per route (ES at "/", EN at "/en") alongside
 * the hreflang alternates declared in each page's metadata.
 */
export function SetLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
