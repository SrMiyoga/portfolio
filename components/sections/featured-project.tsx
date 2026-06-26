import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { CountUp } from "@/components/ui/count-up";
import { PhoneMock } from "@/components/caudal/phone-mock";
import { localizedPath, type Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/content";

export function FeaturedProject({
  c,
  locale,
}: {
  c: SiteContent;
  locale: Locale;
}) {
  const f = c.featured;

  return (
    <section id="project" className="scroll-mt-24 border-t border-hair py-24 sm:py-32">
      <div className="container-tight">
        <Reveal>
          <Link
            href={localizedPath(locale, "/caudal")}
            className="group relative block overflow-hidden rounded-2xl border border-hair bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-hair-strong hover:shadow-2xl hover:shadow-black/20 sm:p-12"
          >
            <Spotlight size={520} />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-50 [background:radial-gradient(circle,var(--glow),transparent_70%)]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-sm font-medium tracking-wide text-accent">
                  {f.eyebrow}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <h2 className="text-4xl font-semibold sm:text-5xl">{f.name}</h2>
                  <ArrowUpRight className="h-7 w-7 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--fg)]" />
                </div>
                <p className="mt-3 text-xl text-[var(--fg)]">{f.tagline}</p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                  {f.body}
                </p>

                <dl className="mt-8 grid max-w-md grid-cols-4 gap-4">
                  {f.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-2xl font-semibold tabular-nums">
                        <CountUp value={m.value} />
                      </dt>
                      <dd className="mt-0.5 text-xs text-muted">{m.label}</dd>
                    </div>
                  ))}
                </dl>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {f.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <PhoneMock screen={{ src: null, mock: "dashboard", title: "Caudal — Dashboard" }} />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
