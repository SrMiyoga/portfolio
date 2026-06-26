import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { ui, type Locale } from "@/lib/i18n";
import { profile, type SiteContent } from "@/lib/content";

export function Contact({ c, locale }: { c: SiteContent; locale: Locale }) {
  const co = c.contact;
  const t = ui[locale];

  const rows = [
    {
      icon: Mail,
      label: co.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: co.phoneLabel,
      value: profile.phone,
      href: `tel:${profile.phoneRaw}`,
    },
    {
      icon: MapPin,
      label: co.locationLabel,
      value: co.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-hair py-24 sm:py-32">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-2xl border border-hair bg-card p-8 sm:p-14">
          <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-[420px] accent-glow" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">{co.title}</h2>
                <p className="mt-4 max-w-md text-lg text-muted">{co.lead}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
                  >
                    <Mail className="h-4 w-4" />
                    {t.cta.email}
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-hair-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="divide-y divide-[var(--border)] overflow-hidden rounded-xl border border-hair">
                {rows.map((r) => {
                  const Icon = r.icon;
                  const inner = (
                    <div className="flex items-center gap-4 px-5 py-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-muted">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-muted">{r.label}</p>
                        <p className="text-[15px] font-medium break-words">
                          {r.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={r.label} className="bg-card transition-colors hover:bg-surface">
                      {r.href ? (
                        <a href={r.href} className="block">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
