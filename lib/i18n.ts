export const locales = ["es", "en", "ca"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/**
 * Build a locale-aware path. ES (default) is served at the root ("/"),
 * other locales under their prefix ("/en", "/ca").
 *   localizedPath("es", "/caudal") -> "/caudal"
 *   localizedPath("en", "/caudal") -> "/en/caudal"
 *   localizedPath("ca", "/")       -> "/ca"
 */
export function localizedPath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/** Swap the locale of the current pathname, preserving the rest of the route. */
export function swapLocale(pathname: string, to: Locale): string {
  const prefixes = locales.filter((l) => l !== defaultLocale);
  const re = new RegExp(`^/(${prefixes.join("|")})(?=/|$)`);
  const stripped = pathname.replace(re, "") || "/";
  return localizedPath(to, stripped);
}

/** UI chrome strings (nav, buttons, labels) kept separate from page content. */
export const ui = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      project: "Proyecto",
      stack: "Stack",
      education: "Formación",
      contact: "Contacto",
    },
    cta: {
      contact: "Contacto",
      downloadCv: "Descargar CV",
      viewProject: "Ver proyecto",
      viewCaseStudy: "Ver caso de estudio",
      backHome: "Volver al inicio",
      print: "Descargar PDF",
      email: "Escríbeme",
    },
    theme: { light: "Tema claro", dark: "Tema oscuro" },
    langLabel: "Idioma",
    a11y: { menu: "Menú", toggleTheme: "Cambiar tema", scrollTop: "Subir" },
    footer: {
      built: "Diseñado y desarrollado por Pablo Javier Casado",
      stack: "Next.js · TypeScript · Tailwind CSS",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      project: "Project",
      stack: "Stack",
      education: "Education",
      contact: "Contact",
    },
    cta: {
      contact: "Get in touch",
      downloadCv: "Download CV",
      viewProject: "View project",
      viewCaseStudy: "View case study",
      backHome: "Back home",
      print: "Download PDF",
      email: "Email me",
    },
    theme: { light: "Light theme", dark: "Dark theme" },
    langLabel: "Language",
    a11y: { menu: "Menu", toggleTheme: "Toggle theme", scrollTop: "Back to top" },
    footer: {
      built: "Designed and built by Pablo Javier Casado",
      stack: "Next.js · TypeScript · Tailwind CSS",
      rights: "All rights reserved.",
    },
  },
  ca: {
    nav: {
      about: "Sobre mi",
      experience: "Experiència",
      project: "Projecte",
      stack: "Stack",
      education: "Formació",
      contact: "Contacte",
    },
    cta: {
      contact: "Contacte",
      downloadCv: "Descarregar CV",
      viewProject: "Veure projecte",
      viewCaseStudy: "Veure cas d'estudi",
      backHome: "Tornar a l'inici",
      print: "Descarregar PDF",
      email: "Escriu-me",
    },
    theme: { light: "Tema clar", dark: "Tema fosc" },
    langLabel: "Idioma",
    a11y: { menu: "Menú", toggleTheme: "Canviar tema", scrollTop: "Tornar a dalt" },
    footer: {
      built: "Dissenyat i desenvolupat per Pablo Javier Casado",
      stack: "Next.js · TypeScript · Tailwind CSS",
      rights: "Tots els drets reservats.",
    },
  },
} as const;

export type UiStrings = (typeof ui)[Locale];
