import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-hair bg-surface px-2.5 py-1 text-[13px] font-medium text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:bg-accent/[0.06] hover:text-[var(--fg)]">
      {children}
    </span>
  );
}
