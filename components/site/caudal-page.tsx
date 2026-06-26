import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SetLang } from "@/components/util/set-lang";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ArchitectureDiagram } from "@/components/caudal/architecture-diagram";
import { Modules } from "@/components/caudal/modules";
import { FeatureGrid } from "@/components/caudal/feature-grid";
import { ScreenGallery } from "@/components/caudal/screen-gallery";
import { TechSheet } from "@/components/caudal/tech-sheet";
import { Decisions } from "@/components/caudal/decisions";
import { ScrollTop } from "@/components/ui/scroll-top";
import { caudalContent } from "@/lib/caudal";
import { localizedPath, ui, type Locale } from "@/lib/i18n";

export function CaudalPage({ locale }: { locale: Locale }) {
  const d = caudalContent[locale];
  const t = ui[locale];

  return (
    <>
      <SetLang locale={locale} />
      <Nav locale={locale} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-hair">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] accent-glow" />
          <div className="container-tight relative py-20 sm:py-28">
            <Reveal>
              <Link
                href={localizedPath(locale, "/")}
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--fg)]"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.cta.backHome}
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 text-sm font-medium tracking-wide text-accent">
                {d.hero.eyebrow}
              </p>
              <h1 className="mt-2 text-5xl font-semibold sm:text-7xl">
                {d.hero.name}
              </h1>
              <p className="mt-4 text-2xl text-[var(--fg)]">{d.hero.tagline}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {d.hero.intro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span className="font-medium text-[var(--fg)]">{d.hero.role}</span>
                <span aria-hidden>·</span>
                <span>{d.hero.period}</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hair bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-6">
                {d.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-card px-4 py-5 text-center transition-colors duration-300 hover:bg-surface"
                  >
                    <dt className="text-2xl font-semibold tabular-nums">
                      <CountUp value={m.value} />
                    </dt>
                    <dd className="mt-1 text-xs text-muted">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <Section id="overview" eyebrow="01" title={d.sections.overview}>
          <div className="grid max-w-4xl gap-5">
            {d.overview.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Architecture */}
        <Section id="architecture" eyebrow="02" title={d.sections.architecture}>
          <Reveal>
            <ArchitectureDiagram locale={locale} />
          </Reveal>
          <Reveal>
            <Modules title={d.modules.title} intro={d.modules.intro} />
          </Reveal>
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="03" title={d.sections.features}>
          <FeatureGrid features={d.features} />
        </Section>

        {/* Screens */}
        <Section id="screens" eyebrow="04" title={d.sections.screens}>
          <ScreenGallery screens={d.screens} />
        </Section>

        {/* Decisions */}
        <Section id="decisions" eyebrow="05" title={d.sections.decisions}>
          <Decisions decisions={d.decisions} />
        </Section>

        {/* Tech sheet */}
        <Section id="tech" eyebrow="06" title={d.sections.stack}>
          <TechSheet rows={d.techSheet} />
          <Reveal>
            <div className="mt-10">
              <Link
                href={`${localizedPath(locale, "/")}#contact`}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                {t.cta.contact}
              </Link>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer locale={locale} />
      <ScrollTop label={t.a11y.scrollTop} />
    </>
  );
}
