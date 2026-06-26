import type { Locale } from "./i18n";

/** Professional summary used at the top of the CV (kept separate from the
 *  site's "About", which is written for the web rather than for an ATS). */
export const cvSummary: Record<Locale, string> = {
  es: "Software Engineer con más de 3 años construyendo y manteniendo software en producción en sectores muy distintos: banca (CaixaBank), administración de justicia (Consejo General del Poder Judicial) y, ahora, producto basado en IA (Mytic Innova). Trabajo de extremo a extremo —modelo de datos, backend, frontend, despliegue y soporte— con Java y Spring Boot como base técnica. Autor de Caudal, una aplicación financiera full-stack con arquitectura hexagonal, Open Banking y sincronización offline-first.",
  en: "Software Engineer with 3+ years building and maintaining production software across very different sectors: banking (CaixaBank), the justice administration (Spain's General Council of the Judiciary) and, now, an AI-driven product (Mytic Innova). I work end to end —data model, backend, frontend, deployment and support— with Java and Spring Boot as my technical core. Author of Caudal, a full-stack financial app with hexagonal architecture, Open Banking and offline-first sync.",
  ca: "Software Engineer amb més de 3 anys construint i mantenint software en producció en sectors molt diferents: banca (CaixaBank), administració de justícia (Consell General del Poder Judicial) i, ara, producte basat en IA (Mytic Innova). Treballo d'extrem a extrem —model de dades, backend, frontend, desplegament i suport— amb Java i Spring Boot com a base tècnica. Autor de Caudal, una aplicació financera full-stack amb arquitectura hexagonal, Open Banking i sincronització offline-first.",
};

export const cvLabels: Record<
  Locale,
  {
    summary: string;
    experience: string;
    project: string;
    education: string;
    languages: string;
    skills: string;
    projectLine: string;
    atsVersion: string;
    designVersion: string;
    role: string;
    contact: string;
  }
> = {
  es: {
    summary: "Perfil",
    contact: "Contacto",
    experience: "Experiencia",
    project: "Proyecto destacado",
    education: "Formación",
    languages: "Idiomas",
    skills: "Aptitudes",
    projectLine:
      "Caudal — Aplicación financiera full-stack (Java 17, Spring Boot, Angular, Ionic, PostgreSQL/SQLite). Arquitectura hexagonal, 14 módulos, 48 casos de uso, ~62 endpoints REST, Open Banking, Stripe y sincronización offline-first. Producto, arquitectura, backend y frontend desarrollados íntegramente.",
    atsVersion: "Versión ATS",
    designVersion: "Versión con diseño",
    role: "Software Engineer · Java · Spring Boot",
  },
  en: {
    summary: "Profile",
    contact: "Contact",
    experience: "Experience",
    project: "Featured project",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    projectLine:
      "Caudal — Full-stack financial app (Java 17, Spring Boot, Angular, Ionic, PostgreSQL/SQLite). Hexagonal architecture, 14 modules, 48 use cases, ~62 REST endpoints, Open Banking, Stripe and offline-first sync. Product, architecture, backend and frontend built entirely solo.",
    atsVersion: "ATS version",
    designVersion: "Designed version",
    role: "Software Engineer · Java · Spring Boot",
  },
  ca: {
    summary: "Perfil",
    contact: "Contacte",
    experience: "Experiència",
    project: "Projecte destacat",
    education: "Formació",
    languages: "Idiomes",
    skills: "Aptituds",
    projectLine:
      "Caudal — Aplicació financera full-stack (Java 17, Spring Boot, Angular, Ionic, PostgreSQL/SQLite). Arquitectura hexagonal, 14 mòduls, 48 casos d'ús, ~62 endpoints REST, Open Banking, Stripe i sincronització offline-first. Producte, arquitectura, backend i frontend desenvolupats íntegrament.",
    atsVersion: "Versió ATS",
    designVersion: "Versió amb disseny",
    role: "Software Engineer · Java · Spring Boot",
  },
};
