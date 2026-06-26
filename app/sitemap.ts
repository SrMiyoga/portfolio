import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";
import { localizedPath, locales } from "@/lib/i18n";

const PATHS = ["/", "/caudal", "/cv", "/cv/ats"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");

  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${base}${localizedPath(locale, path)}`,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}${localizedPath(l, path)}`]),
        ),
      },
    })),
  );
}
