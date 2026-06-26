import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { localizedPath, ui, type Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/content";

export function Hero({ c, locale }: { c: SiteContent; locale: Locale }) {
  const t = ui[locale];
  const h = c.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] accent-glow" />

      <div className="container-tight relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-hair bg-card px-3 py-1 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {h.available}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] sm:text-7xl">
            <span className="text-gradient">{h.titleLead}</span>{" "}
            <span className="text-accent">{h.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {h.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`${localizedPath(locale, "/")}#contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              {t.cta.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={localizedPath(locale, "/caudal")}
              className="inline-flex items-center gap-2 rounded-lg border border-hair-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              {t.cta.viewProject}
            </Link>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4" />
              {h.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-hair bg-[var(--border)]">
            {h.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-card px-5 py-6 transition-colors duration-300 hover:bg-surface"
              >
                <dt className="text-2xl font-semibold tabular-nums sm:text-3xl">
                  <CountUp value={m.value} />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
