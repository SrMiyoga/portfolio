import { Reveal } from "@/components/ui/reveal";
import type { TechDecision } from "@/lib/caudal";

export function Decisions({ decisions }: { decisions: TechDecision[] }) {
  return (
    <div className="grid gap-x-8 gap-y-px sm:grid-cols-2">
      {decisions.map((d, i) => (
        <Reveal key={d.title} delay={(i % 2) * 0.05}>
          <div className="border-t border-hair py-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{d.title}</h3>
            </div>
            <p className="mt-2 pl-8 text-[15px] leading-relaxed text-muted">
              {d.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
