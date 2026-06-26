import {
  Users,
  Split,
  Scale,
  PiggyBank,
  LineChart,
  Landmark,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { Feature } from "@/lib/content";

const ICONS = [
  Users,
  Split,
  Scale,
  PiggyBank,
  LineChart,
  Landmark,
  CreditCard,
  RefreshCw,
];

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <Reveal key={f.title} delay={(i % 4) * 0.05}>
            <div className="group/card h-full rounded-xl border border-hair bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-hair-strong hover:shadow-lg hover:shadow-black/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 text-accent transition-all duration-300 group-hover/card:scale-110 group-hover/card:bg-accent/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {f.body}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
