import { GraduationCap, Languages } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/lib/content";

export function Education({ c }: { c: SiteContent }) {
  const e = c.education;

  return (
    <Section id="education" eyebrow={e.title} title={e.title}>
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl border border-hair bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-hair-strong">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            {e.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.place}</p>
                <p className="mt-0.5 text-sm text-muted">{item.period}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="h-full rounded-xl border border-hair bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-hair-strong">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{e.languagesTitle}</h3>
            <ul className="mt-3 space-y-2">
              {e.languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-[15px]"
                >
                  <span>{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
