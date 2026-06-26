import { Smartphone, Server, Database, RefreshCw } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const COPY = {
  es: {
    client: "Cliente",
    clientStack: "Angular · Ionic · Capacitor",
    clientStore: "SQLite local + outbox",
    server: "Servidor",
    serverStack: "Spring Boot · monolito modular",
    serverStore: "PostgreSQL + Flyway",
    sync: "Sincronización bidireccional · última escritura gana",
    http: "HTTP + JWT",
    layers: "Arquitectura hexagonal",
    domain: "Dominio",
    domainDesc: "Agregados puros, reglas de negocio, Money VO",
    application: "Aplicación",
    applicationDesc: "Casos de uso · puertos",
    infrastructure: "Infraestructura",
    infrastructureDesc: "Adaptadores web, persistencia JPA, seguridad",
  },
  en: {
    client: "Client",
    clientStack: "Angular · Ionic · Capacitor",
    clientStore: "Local SQLite + outbox",
    server: "Server",
    serverStack: "Spring Boot · modular monolith",
    serverStore: "PostgreSQL + Flyway",
    sync: "Bidirectional sync · last-write-wins",
    http: "HTTP + JWT",
    layers: "Hexagonal architecture",
    domain: "Domain",
    domainDesc: "Pure aggregates, business rules, Money VO",
    application: "Application",
    applicationDesc: "Use cases · ports",
    infrastructure: "Infrastructure",
    infrastructureDesc: "Web adapters, JPA persistence, security",
  },
  ca: {
    client: "Client",
    clientStack: "Angular · Ionic · Capacitor",
    clientStore: "SQLite local + outbox",
    server: "Servidor",
    serverStack: "Spring Boot · monòlit modular",
    serverStore: "PostgreSQL + Flyway",
    sync: "Sincronització bidireccional · última escriptura guanya",
    http: "HTTP + JWT",
    layers: "Arquitectura hexagonal",
    domain: "Domini",
    domainDesc: "Agregats purs, regles de negoci, Money VO",
    application: "Aplicació",
    applicationDesc: "Casos d'ús · ports",
    infrastructure: "Infraestructura",
    infrastructureDesc: "Adaptadors web, persistència JPA, seguretat",
  },
} as const;

function Node({
  icon: Icon,
  title,
  stack,
  store,
}: {
  icon: typeof Smartphone;
  title: string;
  stack: string;
  store: string;
}) {
  return (
    <div className="flex-1 rounded-xl border border-hair bg-[var(--bg)] p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted">{stack}</p>
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-hair bg-surface px-2.5 py-1 text-xs text-muted">
        <Database className="h-3.5 w-3.5" />
        {store}
      </div>
    </div>
  );
}

export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <div className="space-y-6">
      {/* System architecture */}
      <div className="rounded-2xl border border-hair bg-card p-5 sm:p-8">
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          <Node
            icon={Smartphone}
            title={t.client}
            stack={t.clientStack}
            store={t.clientStore}
          />

          <div className="flex shrink-0 flex-col items-center gap-2 px-2 lg:w-48">
            <span className="text-xs font-medium text-muted">{t.http}</span>
            <div className="relative h-px w-full bg-[var(--border-strong)] lg:w-auto lg:flex-1">
              <div className="absolute inset-0 hidden lg:block">
                <div className="h-px w-full [background:repeating-linear-gradient(90deg,var(--color-accent)_0_6px,transparent_6px_12px)] opacity-60" />
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hair bg-surface px-2.5 py-1 text-[11px] text-accent">
              <RefreshCw className="h-3 w-3" />
              POST /sync
            </span>
          </div>

          <Node
            icon={Server}
            title={t.server}
            stack={t.serverStack}
            store={t.serverStore}
          />
        </div>
        <p className="mt-5 text-center text-xs text-muted">{t.sync}</p>
      </div>

      {/* Hexagonal layers */}
      <div className="rounded-2xl border border-hair bg-card p-5 sm:p-8">
        <p className="mb-5 text-sm font-semibold text-muted">{t.layers}</p>
        <div className="space-y-3">
          {[
            { name: t.infrastructure, desc: t.infrastructureDesc, pad: "" },
            { name: t.application, desc: t.applicationDesc, pad: "sm:mx-8" },
            { name: t.domain, desc: t.domainDesc, pad: "sm:mx-16" },
          ].map((layer, i) => (
            <div
              key={layer.name}
              className={`flex items-center justify-between rounded-xl border px-5 py-4 ${layer.pad} ${
                i === 2
                  ? "border-accent/40 bg-accent/[0.07]"
                  : "border-hair bg-[var(--bg)]"
              }`}
            >
              <span className={`font-medium ${i === 2 ? "text-accent" : ""}`}>
                {layer.name}
              </span>
              <span className="hidden text-right text-sm text-muted sm:block">
                {layer.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
