import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import type { SiteContent } from "@/lib/content";

export function Stack({ c }: { c: SiteContent }) {
  const s = c.stack;

  return (
    <Section id="stack" eyebrow={s.title} title={s.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.groups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 0.05}>
            <div className="h-full rounded-xl border border-hair bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-hair-strong">
              <h3 className="text-sm font-semibold text-muted">{g.label}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
