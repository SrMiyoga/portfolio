import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/lib/content";

export function About({ c }: { c: SiteContent }) {
  const a = c.about;

  return (
    <Section id="about" eyebrow={a.title} title={a.lead}>
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {a.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="space-y-3 rounded-xl border border-hair bg-card p-6">
            {a.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px]">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
