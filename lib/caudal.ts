import type { Locale } from "./i18n";
import type { Feature } from "./content";

export type CaudalScreen = {
  /** file in /public/caudal — set when a real screenshot exists */
  src: string | null;
  /** mockup id used by the fallback renderer when src is null */
  mock: "dashboard" | "analytics" | "split" | "accounts" | "settlements";
  title: string;
  caption: string;
};

export type TechDecision = { title: string; body: string };

const es = {
  hero: {
    eyebrow: "Caso de estudio",
    name: "Caudal",
    tagline: "Un espacio financiero compartido para hogares.",
    intro:
      "Caudal es una aplicación full-stack de gestión financiera para parejas y hogares. La he diseñado y desarrollado por completo: producto, arquitectura, backend, frontend, modelo de datos y experiencia. Está pensada como producto real, no como demo: local-first, offline-first y preparada para escalar como SaaS.",
    role: "Producto · Arquitectura · Backend · Frontend",
    period: "Proyecto personal",
  },
  metrics: [
    { value: "246", label: "archivos Java" },
    { value: "48", label: "casos de uso" },
    { value: "~62", label: "endpoints REST" },
    { value: "14", label: "módulos" },
    { value: "15", label: "pantallas" },
    { value: "9", label: "diálogos" },
  ],
  sections: {
    overview: "Visión general",
    architecture: "Arquitectura",
    features: "Funcionalidades",
    screens: "Pantallas",
    decisions: "Decisiones técnicas",
    stack: "Ficha técnica",
  },
  overview: [
    "El problema: gestionar el dinero compartido en un hogar es un caos de hojas de cálculo, deudas que nadie recuerda y apps pensadas para una sola persona. Caudal lo resuelve modelando el hogar como entidad de primer nivel: varias personas, varias cuentas, reglas de reparto y un saldo de deudas siempre claro.",
    "La aplicación funciona sin conexión. El cliente persiste en SQLite local, encola cada cambio en un outbox y sincroniza con el servidor de forma bidireccional cuando hay red, resolviendo conflictos por «última escritura gana». Los identificadores se generan en el cliente, así que cada registro mantiene su identidad entre dispositivos.",
  ],
  features: [
    {
      title: "Hogares y cuentas",
      body: "Modelo multi-usuario con roles. Varias cuentas por hogar — personal, conjunta, ahorro, efectivo, tarjeta — con miembros y permisos.",
    },
    {
      title: "División de gastos",
      body: "Splits a partes iguales, por porcentaje o por importe exacto. Cada gasto compartido genera las partes de cada miembro.",
    },
    {
      title: "Deudas y liquidaciones",
      body: "Cálculo neto automático de quién debe a quién, con liquidaciones registradas e historial completo.",
    },
    {
      title: "Presupuestos",
      body: "Topes mensuales por categoría con barra de progreso y arrastre de excedentes al mes siguiente.",
    },
    {
      title: "Analítica y predicción",
      body: "Tendencias a seis meses, gasto por categoría, top de comercios y pronósticos con proyección lineal y detección de anomalías.",
    },
    {
      title: "Open Banking",
      body: "Conexión bancaria multi-proveedor (Enable Banking / Nordigen) con un gateway intercambiable mediante el patrón Strategy.",
    },
    {
      title: "Suscripciones",
      body: "Planes Free / Premium / Family preparados para monetización con Stripe y límites por plan aplicados en el backend.",
    },
    {
      title: "Sincronización offline-first",
      body: "Outbox local, sync bidireccional y resolución de conflictos por timestamp. La app es 100% usable sin conexión.",
    },
  ] as Feature[],
  decisions: [
    {
      title: "Arquitectura hexagonal por módulos",
      body: "Monolito modular con 14 módulos, cada uno separado en dominio, aplicación (casos de uso y puertos) e infraestructura. El dominio es puro: sin Lombok ni dependencias de framework. Cruzar fronteras entre módulos solo se permite a través de casos de uso. Esto mantiene la lógica testeable y deja la puerta abierta a extraer microservicios el día de mañana.",
    },
    {
      title: "El dinero nunca es un double",
      body: "Importes modelados como un Value Object Money en unidades menores (céntimos) y columnas decimales en PostgreSQL. La moneda forma parte del valor. Cero errores de redondeo en coma flotante.",
    },
    {
      title: "Identidad en el cliente + sincronización LWW",
      body: "Los UUID se generan en el cliente al crear cada fila, así que la identidad del registro es estable entre dispositivos y a través de la frontera de sincronización. Los conflictos se resuelven por «última escritura gana» según updated_at, con auditoría en el servidor.",
    },
    {
      title: "Open Banking intercambiable",
      body: "Un único gateway con tres implementaciones (Enable Banking con JWT RS256, Nordigen y un stub local) seleccionadas por variables de entorno. Añadir un proveedor nuevo no toca la lógica de negocio.",
    },
    {
      title: "Autenticación stateless y por dispositivo",
      body: "JWT de acceso corto (15 min) + refresh tokens de 7 días ligados al dispositivo y revocables. Contraseñas con BCrypt, tokens en el almacenamiento seguro nativo del dispositivo.",
    },
    {
      title: "Migraciones versionadas e inmutables",
      body: "Esquema gestionado con Flyway (19 migraciones), soft-delete y bloqueo optimista en una entidad base común. Nunca se edita una migración aplicada: siempre se añade la siguiente.",
    },
  ] as TechDecision[],
  techSheet: [
    { label: "Backend", value: "Java 17 · Spring Boot 3.3 · Spring Security · JPA / Hibernate" },
    { label: "Frontend", value: "Angular 20 (Signals) · Ionic 8 · Capacitor 8 · TypeScript" },
    { label: "Datos", value: "PostgreSQL + Flyway (servidor) · SQLite (cliente, offline-first)" },
    { label: "Auth", value: "JWT + refresh tokens por dispositivo · BCrypt" },
    { label: "Pagos", value: "Stripe (Free / Premium / Family)" },
    { label: "Banca", value: "Open Banking — Enable Banking / Nordigen" },
    { label: "Arquitectura", value: "Monolito modular hexagonal · 14 módulos · 48 casos de uso" },
  ],
  screens: [
    { src: null, mock: "dashboard", title: "Dashboard", caption: "Balance total, cuentas y últimos movimientos." },
    { src: null, mock: "analytics", title: "Analítica y pronósticos", caption: "Tendencias, presupuesto y proyección financiera." },
    { src: null, mock: "split", title: "División de gastos", caption: "Reparto entre miembros del hogar." },
    { src: null, mock: "settlements", title: "Deudas", caption: "Saldo neto y liquidaciones." },
    { src: null, mock: "accounts", title: "Cuentas", caption: "Varias cuentas por hogar, con tipos y roles." },
  ] as CaudalScreen[],
};

export type CaudalContent = typeof es;

const en: CaudalContent = {
  hero: {
    eyebrow: "Case study",
    name: "Caudal",
    tagline: "A shared financial workspace for households.",
    intro:
      "Caudal is a full-stack financial management app for couples and households. I designed and built all of it: product, architecture, backend, frontend, data model and experience. It's built as a real product, not a demo: local-first, offline-first and ready to scale as a SaaS.",
    role: "Product · Architecture · Backend · Frontend",
    period: "Personal project",
  },
  metrics: [
    { value: "246", label: "Java files" },
    { value: "48", label: "use cases" },
    { value: "~62", label: "REST endpoints" },
    { value: "14", label: "modules" },
    { value: "15", label: "screens" },
    { value: "9", label: "dialogs" },
  ],
  sections: {
    overview: "Overview",
    architecture: "Architecture",
    features: "Features",
    screens: "Screens",
    decisions: "Technical decisions",
    stack: "Tech sheet",
  },
  overview: [
    "The problem: managing shared money in a household is a mess of spreadsheets, debts nobody remembers, and apps built for a single person. Caudal solves it by modelling the household as a first-class entity: multiple people, multiple accounts, splitting rules and an always-clear debt balance.",
    "The app works offline. The client persists to local SQLite, queues every change in an outbox, and syncs bidirectionally with the server when there's a connection, resolving conflicts last-write-wins. Identifiers are minted on the client, so each record keeps its identity across devices.",
  ],
  features: [
    {
      title: "Households & accounts",
      body: "Multi-user model with roles. Multiple accounts per household — personal, joint, savings, cash, card — with members and permissions.",
    },
    {
      title: "Expense splitting",
      body: "Splits by equal share, percentage or exact amount. Every shared expense generates each member's portion.",
    },
    {
      title: "Debts & settlements",
      body: "Automatic net calculation of who owes whom, with recorded settlements and a full history.",
    },
    {
      title: "Budgets",
      body: "Monthly caps per category with progress bars and rollover of leftovers into the next month.",
    },
    {
      title: "Analytics & forecasting",
      body: "Six-month trends, spending by category, top merchants, and forecasts with linear projection and anomaly detection.",
    },
    {
      title: "Open Banking",
      body: "Multi-provider bank connection (Enable Banking / Nordigen) with a swappable gateway via the Strategy pattern.",
    },
    {
      title: "Subscriptions",
      body: "Free / Premium / Family tiers ready for Stripe monetisation, with per-plan limits enforced in the backend.",
    },
    {
      title: "Offline-first sync",
      body: "Local outbox, bidirectional sync and timestamp-based conflict resolution. The app is 100% usable offline.",
    },
  ] as Feature[],
  decisions: [
    {
      title: "Modular hexagonal architecture",
      body: "A modular monolith of 14 modules, each split into domain, application (use cases and ports) and infrastructure. The domain is pure: no Lombok, no framework dependencies. Crossing module boundaries is only allowed through use cases. This keeps the logic testable and leaves the door open to extracting microservices later.",
    },
    {
      title: "Money is never a double",
      body: "Amounts modelled as a Money value object in minor units (cents) with decimal columns in PostgreSQL. The currency is part of the value. Zero floating-point rounding errors.",
    },
    {
      title: "Client-side identity + LWW sync",
      body: "UUIDs are minted on the client when each row is created, so a record's identity is stable across devices and across the sync boundary. Conflicts resolve last-write-wins by updated_at, audited on the server.",
    },
    {
      title: "Swappable Open Banking",
      body: "A single gateway with three implementations (Enable Banking with RS256 JWT, Nordigen, and a local stub) selected by environment variables. Adding a new provider never touches business logic.",
    },
    {
      title: "Stateless, device-scoped auth",
      body: "Short-lived access JWTs (15 min) plus 7-day refresh tokens bound to the device and revocable. Passwords with BCrypt, tokens in the device's native secure storage.",
    },
    {
      title: "Versioned, immutable migrations",
      body: "Schema managed with Flyway (19 migrations), soft-delete and optimistic locking on a shared base entity. An applied migration is never edited — you always add the next one.",
    },
  ] as TechDecision[],
  techSheet: [
    { label: "Backend", value: "Java 17 · Spring Boot 3.3 · Spring Security · JPA / Hibernate" },
    { label: "Frontend", value: "Angular 20 (Signals) · Ionic 8 · Capacitor 8 · TypeScript" },
    { label: "Data", value: "PostgreSQL + Flyway (server) · SQLite (client, offline-first)" },
    { label: "Auth", value: "JWT + device-scoped refresh tokens · BCrypt" },
    { label: "Payments", value: "Stripe (Free / Premium / Family)" },
    { label: "Banking", value: "Open Banking — Enable Banking / Nordigen" },
    { label: "Architecture", value: "Modular hexagonal monolith · 14 modules · 48 use cases" },
  ],
  screens: [
    { src: null, mock: "dashboard", title: "Dashboard", caption: "Total balance, accounts and latest transactions." },
    { src: null, mock: "analytics", title: "Analytics & forecasts", caption: "Trends, budget and financial projection." },
    { src: null, mock: "split", title: "Expense splitting", caption: "Sharing between household members." },
    { src: null, mock: "settlements", title: "Debts", caption: "Net balance and settlements." },
    { src: null, mock: "accounts", title: "Accounts", caption: "Multiple accounts per household, with types and roles." },
  ] as CaudalScreen[],
};

const ca: CaudalContent = {
  hero: {
    eyebrow: "Cas d'estudi",
    name: "Caudal",
    tagline: "Un espai financer compartit per a llars.",
    intro:
      "Caudal és una aplicació full-stack de gestió financera per a parelles i llars. L'he dissenyat i desenvolupat completament: producte, arquitectura, backend, frontend, model de dades i experiència. Està pensada com a producte real, no com a demo: local-first, offline-first i preparada per escalar com a SaaS.",
    role: "Producte · Arquitectura · Backend · Frontend",
    period: "Projecte personal",
  },
  metrics: [
    { value: "246", label: "arxius Java" },
    { value: "48", label: "casos d'ús" },
    { value: "~62", label: "endpoints REST" },
    { value: "14", label: "mòduls" },
    { value: "15", label: "pantalles" },
    { value: "9", label: "diàlegs" },
  ],
  sections: {
    overview: "Visió general",
    architecture: "Arquitectura",
    features: "Funcionalitats",
    screens: "Pantalles",
    decisions: "Decisions tècniques",
    stack: "Fitxa tècnica",
  },
  overview: [
    "El problema: gestionar els diners compartits en una llar és un caos de fulls de càlcul, deutes que ningú recorda i apps pensades per a una sola persona. Caudal ho resol modelant la llar com a entitat de primer nivell: diverses persones, diversos comptes, regles de repartiment i un saldo de deutes sempre clar.",
    "L'aplicació funciona sense connexió. El client persisteix en SQLite local, encua cada canvi en un outbox i sincronitza amb el servidor de manera bidireccional quan hi ha xarxa, resolent conflictes per «última escriptura guanya». Els identificadors es generen al client, així que cada registre manté la seva identitat entre dispositius.",
  ],
  features: [
    {
      title: "Llars i comptes",
      body: "Model multiusuari amb rols. Diversos comptes per llar — personal, conjunt, estalvi, efectiu, targeta — amb membres i permisos.",
    },
    {
      title: "Divisió de despeses",
      body: "Splits a parts iguals, per percentatge o per import exacte. Cada despesa compartida genera les parts de cada membre.",
    },
    {
      title: "Deutes i liquidacions",
      body: "Càlcul net automàtic de qui deu a qui, amb liquidacions registrades i historial complet.",
    },
    {
      title: "Pressupostos",
      body: "Límits mensuals per categoria amb barra de progrés i trasllat d'excedents al mes següent.",
    },
    {
      title: "Analítica i predicció",
      body: "Tendències a sis mesos, despesa per categoria, top de comerços i pronòstics amb projecció lineal i detecció d'anomalies.",
    },
    {
      title: "Open Banking",
      body: "Connexió bancària multiproveïdor (Enable Banking / Nordigen) amb una passarel·la intercanviable mitjançant el patró Strategy.",
    },
    {
      title: "Subscripcions",
      body: "Plans Free / Premium / Family preparats per a la monetització amb Stripe i límits per pla aplicats al backend.",
    },
    {
      title: "Sincronització offline-first",
      body: "Outbox local, sync bidireccional i resolució de conflictes per timestamp. L'app és 100% usable sense connexió.",
    },
  ] as Feature[],
  decisions: [
    {
      title: "Arquitectura hexagonal per mòduls",
      body: "Monòlit modular amb 14 mòduls, cadascun separat en domini, aplicació (casos d'ús i ports) i infraestructura. El domini és pur: sense Lombok ni dependències de framework. Creuar fronteres entre mòduls només es permet a través de casos d'ús. Això manté la lògica testejable i deixa la porta oberta a extreure microserveis el dia de demà.",
    },
    {
      title: "Els diners mai són un double",
      body: "Imports modelats com un Value Object Money en unitats menors (cèntims) i columnes decimals a PostgreSQL. La moneda forma part del valor. Zero errors d'arrodoniment en coma flotant.",
    },
    {
      title: "Identitat al client + sincronització LWW",
      body: "Els UUID es generen al client en crear cada fila, així que la identitat del registre és estable entre dispositius i a través de la frontera de sincronització. Els conflictes es resolen per «última escriptura guanya» segons updated_at, amb auditoria al servidor.",
    },
    {
      title: "Open Banking intercanviable",
      body: "Una única passarel·la amb tres implementacions (Enable Banking amb JWT RS256, Nordigen i un stub local) seleccionades per variables d'entorn. Afegir un proveïdor nou no toca la lògica de negoci.",
    },
    {
      title: "Autenticació stateless i per dispositiu",
      body: "JWT d'accés curt (15 min) + refresh tokens de 7 dies lligats al dispositiu i revocables. Contrasenyes amb BCrypt, tokens a l'emmagatzematge segur natiu del dispositiu.",
    },
    {
      title: "Migracions versionades i immutables",
      body: "Esquema gestionat amb Flyway (19 migracions), soft-delete i bloqueig optimista en una entitat base comuna. Mai s'edita una migració aplicada: sempre s'afegeix la següent.",
    },
  ] as TechDecision[],
  techSheet: [
    { label: "Backend", value: "Java 17 · Spring Boot 3.3 · Spring Security · JPA / Hibernate" },
    { label: "Frontend", value: "Angular 20 (Signals) · Ionic 8 · Capacitor 8 · TypeScript" },
    { label: "Dades", value: "PostgreSQL + Flyway (servidor) · SQLite (client, offline-first)" },
    { label: "Auth", value: "JWT + refresh tokens per dispositiu · BCrypt" },
    { label: "Pagaments", value: "Stripe (Free / Premium / Family)" },
    { label: "Banca", value: "Open Banking — Enable Banking / Nordigen" },
    { label: "Arquitectura", value: "Monòlit modular hexagonal · 14 mòduls · 48 casos d'ús" },
  ],
  screens: [
    { src: null, mock: "dashboard", title: "Tauler", caption: "Saldo total, comptes i últims moviments." },
    { src: null, mock: "analytics", title: "Analítica i pronòstics", caption: "Tendències, pressupost i projecció financera." },
    { src: null, mock: "split", title: "Divisió de despeses", caption: "Repartiment entre membres de la llar." },
    { src: null, mock: "settlements", title: "Deutes", caption: "Saldo net i liquidacions." },
    { src: null, mock: "accounts", title: "Comptes", caption: "Diversos comptes per llar, amb tipus i rols." },
  ] as CaudalScreen[],
};

export const caudalContent: Record<Locale, CaudalContent> = { es, en, ca };
