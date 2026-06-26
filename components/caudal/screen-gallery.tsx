import { PhoneMock } from "./phone-mock";
import type { CaudalScreen } from "@/lib/caudal";

export function ScreenGallery({ screens }: { screens: CaudalScreen[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
      <div className="flex w-max gap-6">
        {screens.map((s, i) => (
          <figure key={s.title} className="w-[252px] shrink-0">
            <PhoneMock screen={s} priority={i === 0} />
            <figcaption className="mt-4 px-1">
              <p className="text-sm font-semibold">{s.title}</p>
              <p className="mt-0.5 text-sm text-muted">{s.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
