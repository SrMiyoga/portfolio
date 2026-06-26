import type { Locale } from "./i18n";

/* ──────────────────────────────────────────────────────────────
   Stable, locale-independent facts. Edit here to keep the whole
   site (and CV, and SEO) in sync. GitHub URL is a placeholder —
   replace `github`/`githubHandle` once the profile is public.
   ────────────────────────────────────────────────────────────── */
export const profile = {
  name: "Pablo Javier Casado Marco",
  shortName: "Pablo Javier Casado",
  initials: "PC",
  email: "pablojcm02@gmail.com",
  phone: "+34 617 510 787",
  phoneRaw: "+34617510787",
  linkedin: "https://www.linkedin.com/in/pablojcm",
  linkedinHandle: "in/pablojcm",
  github: "https://github.com/SrMiyoga",
  githubHandle: "SrMiyoga",
  siteUrl: "https://pablocasado.dev", // TODO: ajustar al dominio final de Vercel
} as const;

export type StackGroup = { label: string; items: string[] };
export type TimelineItem = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  client?: string;
  summary: string;
  bullets: string[];
  stack: string[];
  muted?: boolean;
};
export type Feature = { title: string; body: string };

const es = {
  hero: {
    eyebrow: "Software Engineer · End-to-end",
    titleLead: "Construyo software",
    titleAccent: "de principio a fin.",
    subtitle:
      "Diseño y construyo aplicaciones completas: del modelo de datos y la arquitectura al frontend y la puesta en producción. Mi base técnica es el backend con Java y Spring Boot, pero me ocupo de todo el ciclo.",
    location: "Barcelona",
    available: "Abierto a nuevas oportunidades",
    metrics: [
      { value: "3+", label: "años en producción" },
      { value: "Multisector", label: "banca · público · IA" },
      { value: "Full-stack", label: "producto end-to-end" },
    ],
  },
  about: {
    title: "Sobre mí",
    lead: "Construyo productos completos, pensados para durar en producción.",
    paragraphs: [
      "Llevo más de tres años construyendo software en entornos donde fallar sale caro: banca en CaixaBank, la administración de justicia en el Consejo General del Poder Judicial —ambos a través de Indra— y, ahora, un producto basado en IA en Mytic Innova. Sectores muy distintos con una misma constante: tratar la fiabilidad, la seguridad y el dato como requisitos, no como extras.",
      "Trabajo de extremo a extremo: modelo de datos, arquitectura, APIs, frontend, despliegue y soporte cuando algo se rompe. El backend es donde voy más a fondo —Java y Spring Boot—, pero me muevo por todo el stack sin tratar ninguna capa como territorio ajeno. Reviso código y acompaño a quien empieza.",
      "Me importa el cómo: prefiero una arquitectura que alguien entienda dentro de un año a una solución que solo llega a tiempo el viernes. Uso la IA (ChatGPT, Claude Code) como una herramienta más para ir rápido sin renunciar al criterio. Y cuando quiero construir un producto entero a mi manera, lo hago: así nació Caudal.",
    ],
    highlights: [
      "Construyo de extremo a extremo, del dato al frontend",
      "Backend sólido en Java y Spring Boot",
      "De banca y justicia a producto con IA",
      "De la arquitectura a la guardia de producción",
    ],
  },
  experience: {
    title: "Experiencia",
    subtitle: "Dónde he construido y mantenido software real.",
    items: [
      {
        company: "Mytic Innova",
        role: "Backend Software Engineer",
        period: "May 2026 — Actualidad",
        current: true,
        summary:
          "Construyo producto a medida en un equipo Scrum. Ahora mismo, un coach pedagógico basado en IA para la Universidad Unifranz.",
        bullets: [
          "Backend y frontend del producto, con APIs REST y modelos de datos diseñados para crecer.",
          "Arquitectura hexagonal, integración continua y despliegue sobre contenedores (Docker / Kubernetes).",
          "Participo en las decisiones técnicas y en las revisiones de código del equipo.",
        ],
        stack: [
          "Java 17",
          "Spring Boot",
          "Angular",
          "Ionic",
          "PostgreSQL",
          "MongoDB",
          "OpenSearch",
          "Docker",
          "Kubernetes",
          "CI/CD",
        ],
      },
      {
        company: "Indra",
        role: "Backend Software Engineer",
        period: "Sep 2023 — May 2026",
        client: "Clientes: CaixaBank · Consejo General del Poder Judicial",
        summary:
          "Evolución y mantenimiento de sistemas críticos para el sector bancario y la administración de justicia.",
        bullets: [
          "Diseño y desarrollo de microservicios en producción, con APIs REST como contrato entre equipos.",
          "Modelado de datos de extremo a extremo: tablas, relaciones, índices y migraciones.",
          "Guardias y soporte a producción: diagnóstico y resolución de incidencias reales.",
          "Mentoría a perfiles júnior, revisión de código y relación directa con cliente.",
        ],
        stack: [
          "Java",
          "Spring Boot",
          "Microservicios",
          "REST",
          "SQL",
          "MVC",
          "Scrum",
          "Jira",
          "Confluence",
        ],
      },
      {
        company: "Lidl",
        role: "Compaginado con los estudios",
        period: "2020 — 2023",
        muted: true,
        summary:
          "Tres años a turnos mientras cursaba el ciclo de Desarrollo de Aplicaciones Multiplataforma.",
        bullets: [
          "Constancia y responsabilidad compaginando un empleo exigente con la formación técnica.",
        ],
        stack: [],
      },
    ] as TimelineItem[],
  },
  featured: {
    eyebrow: "Proyecto destacado",
    name: "Caudal",
    tagline: "Un espacio financiero compartido para hogares.",
    body: "Aplicación full-stack que he diseñado y construido íntegramente: producto, arquitectura, backend y frontend. No es un gestor de gastos más — es un espacio financiero compartido con cuentas conjuntas, división de gastos, deudas internas, presupuestos y analítica predictiva.",
    metrics: [
      { value: "48", label: "casos de uso" },
      { value: "~62", label: "endpoints REST" },
      { value: "15", label: "pantallas" },
      { value: "14", label: "módulos" },
    ],
    cta: "Ver caso de estudio",
  },
  stack: {
    title: "Stack",
    subtitle: "Las herramientas con las que trabajo a diario.",
    groups: [
      {
        label: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "Spring Security",
          "Spring Data",
          "Hibernate",
          "Maven",
          "REST",
          "JWT",
          "OpenAPI",
        ],
      },
      {
        label: "Frontend",
        items: ["Angular", "Ionic", "TypeScript", "RxJS", "HTML", "SCSS"],
      },
      {
        label: "Bases de datos",
        items: [
          "PostgreSQL",
          "MySQL",
          "Oracle",
          "SQL Server",
          "MongoDB",
          "SQLite",
          "OpenSearch",
          "Flyway",
        ],
      },
      {
        label: "DevOps & Cloud",
        items: [
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Bitbucket Pipelines",
          "Git",
        ],
      },
      {
        label: "Arquitectura & Mensajería",
        items: [
          "Microservicios",
          "Arquitectura Hexagonal",
          "MVC",
          "DDD",
          "RabbitMQ",
          "Kafka",
        ],
      },
      {
        label: "Testing & Observabilidad",
        items: ["JUnit", "Mockito", "Postman", "Elastic", "Kibana"],
      },
      {
        label: "Metodología & IA",
        items: ["Scrum", "Jira", "Confluence", "ChatGPT", "Claude Code"],
      },
    ] as StackGroup[],
  },
  education: {
    title: "Formación",
    items: [
      {
        title: "CFGS · Desarrollo de Aplicaciones Multiplataforma",
        place: "Stucom · Barcelona",
        period: "2021 — 2023",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Catalán", level: "Nativo" },
      { name: "Inglés", level: "Competencia profesional" },
    ],
  },
  contact: {
    title: "Hablemos",
    lead: "¿Buscas a alguien que sepa construir software de principio a fin? Escríbeme.",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    location: "Barcelona · Disponible para remoto e híbrido",
  },
};

export type SiteContent = typeof es;

const en: SiteContent = {
  hero: {
    eyebrow: "Software Engineer · End-to-end",
    titleLead: "I build software",
    titleAccent: "end to end.",
    subtitle:
      "I design and build complete applications: from the data model and architecture to the frontend and shipping to production. My technical core is backend with Java and Spring Boot, but I own the whole cycle.",
    location: "Barcelona (Spain)",
    available: "Open to new opportunities",
    metrics: [
      { value: "3+", label: "years in production" },
      { value: "Multi-sector", label: "banking · public · AI" },
      { value: "Full-stack", label: "end-to-end product" },
    ],
  },
  about: {
    title: "About",
    lead: "I build complete products, made to last in production.",
    paragraphs: [
      "I've spent 3+ years building software in places where failing is expensive: banking at CaixaBank, the justice administration at Spain's General Council of the Judiciary (CGPJ) —both through Indra— and now an AI-driven product at Mytic Innova. Very different sectors with one constant: treating reliability, security and data as requirements, not extras.",
      "I work end to end: data model, architecture, APIs, frontend, deployment and support when something breaks. Backend is where I go deepest —Java and Spring Boot— but I move across the whole stack without treating any layer as someone else's job. I review code and support people who are starting out.",
      "I care about the how: I'd rather write an architecture someone still understands a year from now than a solution that just makes it by Friday. I use AI (ChatGPT, Claude Code) as one more tool to move fast without giving up judgement. And when I want to build a whole product my way, I do — that's how Caudal came to be.",
    ],
    highlights: [
      "I build end to end, from data to frontend",
      "Solid backend in Java and Spring Boot",
      "From banking and justice to AI-driven product",
      "From architecture to the on-call pager",
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Where I've built and maintained real software.",
    items: [
      {
        company: "Mytic Innova",
        role: "Backend Software Engineer",
        period: "May 2026 — Present",
        current: true,
        summary:
          "I build custom product in a Scrum team — currently an AI-based pedagogical coach for Unifranz University.",
        bullets: [
          "Backend and frontend of the product, with REST APIs and data models designed to grow.",
          "Hexagonal architecture, continuous integration and container-based deployment (Docker / Kubernetes).",
          "I take part in the team's technical decisions and code reviews.",
        ],
        stack: [
          "Java 17",
          "Spring Boot",
          "Angular",
          "Ionic",
          "PostgreSQL",
          "MongoDB",
          "OpenSearch",
          "Docker",
          "Kubernetes",
          "CI/CD",
        ],
      },
      {
        company: "Indra",
        role: "Backend Software Engineer",
        period: "Sep 2023 — May 2026",
        client: "Clients: CaixaBank · General Council of the Judiciary (CGPJ)",
        summary:
          "Evolution and maintenance of critical systems for the banking sector and the justice administration.",
        bullets: [
          "Designed and built microservices in production, with REST APIs as the contract between teams.",
          "End-to-end data modelling: tables, relationships, indexes and migrations.",
          "On-call and production support: diagnosing and resolving real incidents.",
          "Mentoring junior engineers, code review and direct client contact.",
        ],
        stack: [
          "Java",
          "Spring Boot",
          "Microservices",
          "REST",
          "SQL",
          "MVC",
          "Scrum",
          "Jira",
          "Confluence",
        ],
      },
      {
        company: "Lidl",
        role: "Alongside my studies",
        period: "2020 — 2023",
        muted: true,
        summary:
          "Three years of shift work while studying for my Multiplatform Application Development diploma.",
        bullets: [
          "Consistency and responsibility, balancing a demanding job with technical education.",
        ],
        stack: [],
      },
    ] as TimelineItem[],
  },
  featured: {
    eyebrow: "Featured project",
    name: "Caudal",
    tagline: "A shared financial workspace for households.",
    body: "A full-stack app I designed and built entirely on my own: product, architecture, backend and frontend. It's not another expense tracker — it's a shared financial workspace with joint accounts, expense splitting, internal debts, budgets and predictive analytics.",
    metrics: [
      { value: "48", label: "use cases" },
      { value: "~62", label: "REST endpoints" },
      { value: "15", label: "screens" },
      { value: "14", label: "modules" },
    ],
    cta: "View case study",
  },
  stack: {
    title: "Stack",
    subtitle: "The tools I work with every day.",
    groups: [
      {
        label: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "Spring Security",
          "Spring Data",
          "Hibernate",
          "Maven",
          "REST",
          "JWT",
          "OpenAPI",
        ],
      },
      {
        label: "Frontend",
        items: ["Angular", "Ionic", "TypeScript", "RxJS", "HTML", "SCSS"],
      },
      {
        label: "Databases",
        items: [
          "PostgreSQL",
          "MySQL",
          "Oracle",
          "SQL Server",
          "MongoDB",
          "SQLite",
          "OpenSearch",
          "Flyway",
        ],
      },
      {
        label: "DevOps & Cloud",
        items: [
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Bitbucket Pipelines",
          "Git",
        ],
      },
      {
        label: "Architecture & Messaging",
        items: [
          "Microservices",
          "Hexagonal Architecture",
          "MVC",
          "DDD",
          "RabbitMQ",
          "Kafka",
        ],
      },
      {
        label: "Testing & Observability",
        items: ["JUnit", "Mockito", "Postman", "Elastic", "Kibana"],
      },
      {
        label: "Ways of working & AI",
        items: ["Scrum", "Jira", "Confluence", "ChatGPT", "Claude Code"],
      },
    ] as StackGroup[],
  },
  education: {
    title: "Education",
    items: [
      {
        title: "Higher Diploma · Multiplatform Application Development",
        place: "Stucom · Barcelona",
        period: "2021 — 2023",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "Catalan", level: "Native" },
      { name: "English", level: "Professional working proficiency" },
    ],
  },
  contact: {
    title: "Let's talk",
    lead: "Looking for someone who can build software end to end? Get in touch.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "Barcelona · Available for remote and hybrid",
  },
};

const ca: SiteContent = {
  hero: {
    eyebrow: "Software Engineer · End-to-end",
    titleLead: "Construeixo software",
    titleAccent: "de principi a fi.",
    subtitle:
      "Dissenyo i construeixo aplicacions completes: del model de dades i l'arquitectura al frontend i la posada en producció. La meva base tècnica és el backend amb Java i Spring Boot, però m'ocupo de tot el cicle.",
    location: "Barcelona",
    available: "Obert a noves oportunitats",
    metrics: [
      { value: "3+", label: "anys en producció" },
      { value: "Multisector", label: "banca · públic · IA" },
      { value: "Full-stack", label: "producte end-to-end" },
    ],
  },
  about: {
    title: "Sobre mi",
    lead: "Construeixo productes complets, pensats per durar en producció.",
    paragraphs: [
      "Fa més de tres anys que construeixo software en entorns on fallar surt car: banca a CaixaBank, l'administració de justícia al Consell General del Poder Judicial —tots dos a través d'Indra— i, ara, un producte basat en IA a Mytic Innova. Sectors molt diferents amb una mateixa constant: tractar la fiabilitat, la seguretat i les dades com a requisits, no com a extres.",
      "Treballo d'extrem a extrem: model de dades, arquitectura, APIs, frontend, desplegament i suport quan alguna cosa es trenca. El backend és on aprofundeixo més —Java i Spring Boot—, però em moc per tot l'stack sense tractar cap capa com a territori aliè. Reviso codi i acompanyo qui comença.",
      "M'importa el com: prefereixo una arquitectura que algú entengui d'aquí a un any abans que una solució que només arriba a temps el divendres. Faig servir la IA (ChatGPT, Claude Code) com una eina més per anar ràpid sense renunciar al criteri. I quan vull construir un producte sencer a la meva manera, ho faig: així va néixer Caudal.",
    ],
    highlights: [
      "Construeixo d'extrem a extrem, de les dades al frontend",
      "Backend sòlid en Java i Spring Boot",
      "De banca i justícia a producte amb IA",
      "De l'arquitectura a la guàrdia de producció",
    ],
  },
  experience: {
    title: "Experiència",
    subtitle: "On he construït i mantingut software real.",
    items: [
      {
        company: "Mytic Innova",
        role: "Backend Software Engineer",
        period: "Maig 2026 — Actualitat",
        current: true,
        summary:
          "Construeixo producte a mida en un equip Scrum. Ara mateix, un coach pedagògic basat en IA per a la Universitat Unifranz.",
        bullets: [
          "Backend i frontend del producte, amb APIs REST i models de dades dissenyats per créixer.",
          "Arquitectura hexagonal, integració contínua i desplegament sobre contenidors (Docker / Kubernetes).",
          "Participo en les decisions tècniques i en les revisions de codi de l'equip.",
        ],
        stack: [
          "Java 17",
          "Spring Boot",
          "Angular",
          "Ionic",
          "PostgreSQL",
          "MongoDB",
          "OpenSearch",
          "Docker",
          "Kubernetes",
          "CI/CD",
        ],
      },
      {
        company: "Indra",
        role: "Backend Software Engineer",
        period: "Set. 2023 — Maig 2026",
        client: "Clients: CaixaBank · Consell General del Poder Judicial",
        summary:
          "Evolució i manteniment de sistemes crítics per al sector bancari i l'administració de justícia.",
        bullets: [
          "Disseny i desenvolupament de microserveis en producció, amb APIs REST com a contracte entre equips.",
          "Modelatge de dades d'extrem a extrem: taules, relacions, índexs i migracions.",
          "Guàrdies i suport a producció: diagnòstic i resolució d'incidències reals.",
          "Mentoria a perfils júnior, revisió de codi i relació directa amb el client.",
        ],
        stack: [
          "Java",
          "Spring Boot",
          "Microservicios",
          "REST",
          "SQL",
          "MVC",
          "Scrum",
          "Jira",
          "Confluence",
        ],
      },
      {
        company: "Lidl",
        role: "Compaginat amb els estudis",
        period: "2020 — 2023",
        muted: true,
        summary:
          "Tres anys a torns mentre cursava el cicle de Desenvolupament d'Aplicacions Multiplataforma.",
        bullets: [
          "Constància i responsabilitat compaginant una feina exigent amb la formació tècnica.",
        ],
        stack: [],
      },
    ] as TimelineItem[],
  },
  featured: {
    eyebrow: "Projecte destacat",
    name: "Caudal",
    tagline: "Un espai financer compartit per a llars.",
    body: "Aplicació full-stack que he dissenyat i construït íntegrament: producte, arquitectura, backend i frontend. No és un gestor de despeses més — és un espai financer compartit amb comptes conjunts, divisió de despeses, deutes interns, pressupostos i analítica predictiva.",
    metrics: [
      { value: "48", label: "casos d'ús" },
      { value: "~62", label: "endpoints REST" },
      { value: "15", label: "pantalles" },
      { value: "14", label: "mòduls" },
    ],
    cta: "Veure cas d'estudi",
  },
  stack: {
    title: "Stack",
    subtitle: "Les eines amb què treballo cada dia.",
    groups: [
      {
        label: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "Spring Security",
          "Spring Data",
          "Hibernate",
          "Maven",
          "REST",
          "JWT",
          "OpenAPI",
        ],
      },
      {
        label: "Frontend",
        items: ["Angular", "Ionic", "TypeScript", "RxJS", "HTML", "SCSS"],
      },
      {
        label: "Bases de dades",
        items: [
          "PostgreSQL",
          "MySQL",
          "Oracle",
          "SQL Server",
          "MongoDB",
          "SQLite",
          "OpenSearch",
          "Flyway",
        ],
      },
      {
        label: "DevOps i Cloud",
        items: ["Docker", "Kubernetes", "CI/CD", "Bitbucket Pipelines", "Git"],
      },
      {
        label: "Arquitectura i Missatgeria",
        items: [
          "Microserveis",
          "Arquitectura Hexagonal",
          "MVC",
          "DDD",
          "RabbitMQ",
          "Kafka",
        ],
      },
      {
        label: "Testing i Observabilitat",
        items: ["JUnit", "Mockito", "Postman", "Elastic", "Kibana"],
      },
      {
        label: "Metodologia i IA",
        items: ["Scrum", "Jira", "Confluence", "ChatGPT", "Claude Code"],
      },
    ] as StackGroup[],
  },
  education: {
    title: "Formació",
    items: [
      {
        title: "CFGS · Desenvolupament d'Aplicacions Multiplataforma",
        place: "Stucom · Barcelona",
        period: "2021 — 2023",
      },
    ],
    languagesTitle: "Idiomes",
    languages: [
      { name: "Espanyol", level: "Nadiu" },
      { name: "Català", level: "Nadiu" },
      { name: "Anglès", level: "Competència professional" },
    ],
  },
  contact: {
    title: "Parlem",
    lead: "Busques algú que sàpiga construir software de principi a fi? Escriu-me.",
    emailLabel: "Email",
    phoneLabel: "Telèfon",
    locationLabel: "Ubicació",
    location: "Barcelona · Disponible per a remot i híbrid",
  },
};

export const content: Record<Locale, SiteContent> = { es, en, ca };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
