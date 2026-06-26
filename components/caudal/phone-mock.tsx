import Image from "next/image";
import type { CaudalScreen } from "@/lib/caudal";
import {
  MockAccounts,
  MockAnalytics,
  MockDashboard,
  MockSettlements,
  MockSplit,
} from "./mock-screens";

const MOCKS = {
  dashboard: MockDashboard,
  analytics: MockAnalytics,
  split: MockSplit,
  settlements: MockSettlements,
  accounts: MockAccounts,
} as const;

/**
 * iPhone-style frame. Renders a real screenshot when `src` is provided,
 * otherwise a faithful CSS mock of the given screen. Either way the chrome
 * (notch, frame) is identical so the gallery stays consistent.
 */
export function PhoneMock({
  screen,
  priority,
}: {
  screen: Pick<CaudalScreen, "src" | "mock" | "title">;
  priority?: boolean;
}) {
  const Mock = MOCKS[screen.mock];

  return (
    <div className="relative mx-auto w-[252px] shrink-0">
      <div className="relative rounded-[2.4rem] border border-hair-strong bg-[#0c0c0f] p-2 shadow-2xl shadow-black/30">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] bg-[#0b0b0d]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          {screen.src ? (
            <Image
              src={screen.src}
              alt={screen.title}
              fill
              sizes="252px"
              className="object-cover object-top"
              priority={priority}
            />
          ) : (
            <Mock />
          )}
        </div>
      </div>
    </div>
  );
}
