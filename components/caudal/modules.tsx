import { caudalModules } from "@/lib/caudal";

export function Modules({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-hair bg-card p-5 sm:p-8">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 max-w-2xl text-sm text-muted">{intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {caudalModules.map((m) => (
          <span
            key={m}
            className="rounded-md border border-hair bg-surface px-2.5 py-1 font-mono text-[13px] text-[var(--fg)] transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:text-accent"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
