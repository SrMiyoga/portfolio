import { Reveal } from "@/components/ui/reveal";

type Row = { label: string; value: string };

export function TechSheet({ rows }: { rows: Row[] }) {
  return (
    <Reveal>
      <dl className="overflow-hidden rounded-2xl border border-hair bg-card">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-1 gap-1 px-6 py-4 transition-colors hover:bg-surface sm:grid-cols-[200px_1fr] sm:gap-6 ${
              i > 0 ? "border-t border-hair" : ""
            }`}
          >
            <dt className="text-sm font-semibold text-muted">{r.label}</dt>
            <dd className="text-[15px]">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
