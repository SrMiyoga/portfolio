import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import type { SiteContent } from "@/lib/content";

export function Experience({ c }: { c: SiteContent }) {
  const e = c.experience;

  return (
    <Section id="experience" eyebrow={e.title} title={e.subtitle}>
      <ol className="relative space-y-10 border-l border-hair pl-6 sm:pl-8">
        {e.items.map((item, i) => (
          <Reveal as="li" key={item.company} delay={i * 0.05} className="relative">
            <span
              className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-[var(--bg)] sm:-left-[39px] ${
                item.current ? "bg-accent" : "bg-[var(--border-strong)]"
              }`}
            />
            <div
              className={`rounded-xl border border-hair bg-card p-6 transition-all duration-300 hover:border-hair-strong hover:shadow-lg hover:shadow-black/10 ${
                item.muted ? "opacity-80 hover:opacity-100" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-muted">· {item.company}</span>
                </h3>
                <span className="text-sm text-muted">{item.period}</span>
              </div>
              {item.client && (
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.client}
                </p>
              )}
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.summary}
              </p>
              {item.bullets.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-[15px] leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {item.stack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
