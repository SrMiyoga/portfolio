import type { Metadata } from "next";
import { profile } from "./content";
import { localizedPath, locales, type Locale } from "./i18n";

type PageKey = "home" | "caudal" | "cv" | "cvAts";

const PATHS: Record<PageKey, string> = {
  home: "/",
  caudal: "/caudal",
  cv: "/cv",
  cvAts: "/cv/ats",
};

const META: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  es: {
    home: {
      title: `${profile.name} — Software Engineer`,
      description:
        "Software Engineer (Java · Spring Boot) que construye de extremo a extremo: del modelo de datos y la arquitectura al frontend y la producción. De banca y sector público a producto con IA.",
    },
    caudal: {
      title: "Caudal — Caso de estudio",
      description:
        "Caudal: aplicación full-stack de gestión financiera para hogares. Arquitectura hexagonal, Spring Boot, Angular, Open Banking y sincronización offline-first. Diseñada y desarrollada íntegramente por Pablo Javier Casado.",
    },
    cv: {
      title: "Currículum",
      description: `Currículum de ${profile.name}, Backend Software Engineer (Java · Spring Boot).`,
    },
    cvAts: {
      title: "Currículum (versión ATS)",
      description: `Currículum de ${profile.name} optimizado para ATS — Backend Software Engineer (Java · Spring Boot).`,
    },
  },
  en: {
    home: {
      title: `${profile.name} — Software Engineer`,
      description:
        "Software Engineer (Java · Spring Boot) who builds end to end: from the data model and architecture to the frontend and production. From banking and public sector to AI-driven product.",
    },
    caudal: {
      title: "Caudal — Case study",
      description:
        "Caudal: a full-stack financial management app for households. Hexagonal architecture, Spring Boot, Angular, Open Banking and offline-first sync. Designed and built entirely by Pablo Javier Casado.",
    },
    cv: {
      title: "Résumé",
      description: `Résumé of ${profile.name}, Backend Software Engineer (Java · Spring Boot).`,
    },
    cvAts: {
      title: "Résumé (ATS version)",
      description: `ATS-friendly résumé of ${profile.name} — Backend Software Engineer (Java · Spring Boot).`,
    },
  },
  ca: {
    home: {
      title: `${profile.name} — Software Engineer`,
      description:
        "Software Engineer (Java · Spring Boot) que construeix d'extrem a extrem: del model de dades i l'arquitectura al frontend i la producció. De banca i sector públic a producte amb IA.",
    },
    caudal: {
      title: "Caudal — Cas d'estudi",
      description:
        "Caudal: aplicació full-stack de gestió financera per a llars. Arquitectura hexagonal, Spring Boot, Angular, Open Banking i sincronització offline-first. Dissenyada i desenvolupada íntegrament per Pablo Javier Casado.",
    },
    cv: {
      title: "Currículum",
      description: `Currículum de ${profile.name}, Software Engineer (Java · Spring Boot).`,
    },
    cvAts: {
      title: "Currículum (versió ATS)",
      description: `Currículum de ${profile.name} optimitzat per a ATS — Software Engineer (Java · Spring Boot).`,
    },
  },
};

const OG_LOCALE: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
  ca: "ca_ES",
};

export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const m = META[locale][page];
  const path = PATHS[page];
  const canonical = localizedPath(locale, path);

  return {
    title: page === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        es: localizedPath("es", path),
        en: localizedPath("en", path),
        ca: localizedPath("ca", path),
        "x-default": localizedPath("es", path),
      },
    },
    openGraph: {
      type: "website",
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: profile.name,
      locale: OG_LOCALE[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}
