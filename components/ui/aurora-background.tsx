"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

/**
 * Ambient aurora background: a few large, heavily-blurred colour blobs that
 * drift slowly (CSS, inner layer) and shift with scroll (Framer parallax,
 * outer layer — kept separate so the two transforms don't clash). Fixed behind
 * all content. Respects reduced motion (static blobs, no animation).
 */
export function AuroraBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const blobs = [
    {
      pos: "top-[-12%] left-[-8%] h-[55vw] w-[55vw] max-h-[680px] max-w-[680px]",
      color: "rgba(99,102,241,0.85)",
      drift: "aurora-a 24s ease-in-out infinite",
      y: y1,
    },
    {
      pos: "top-[-8%] right-[-12%] h-[50vw] w-[50vw] max-h-[640px] max-w-[640px]",
      color: "rgba(139,92,246,0.78)",
      drift: "aurora-b 30s ease-in-out infinite",
      y: y2,
    },
    {
      pos: "top-[44%] left-[26%] h-[44vw] w-[44vw] max-h-[560px] max-w-[560px]",
      color: "rgba(56,189,248,0.55)",
      drift: "aurora-c 36s ease-in-out infinite",
      y: y3,
    },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <Blob key={i} {...b} reduce={!!reduce} />
      ))}
      {/* Veil keeps text contrast comfortable over the colour */}
      <div className="absolute inset-0 bg-[var(--bg)]/35" />
    </div>
  );
}

function Blob({
  pos,
  color,
  drift,
  y,
  reduce,
}: {
  pos: string;
  color: string;
  drift: string;
  y: MotionValue<number>;
  reduce: boolean;
}) {
  const inner = (
    <div
      className="h-full w-full rounded-full opacity-80 blur-[80px]"
      style={{
        background: `radial-gradient(circle at center, ${color}, transparent 62%)`,
        animation: reduce ? undefined : drift,
      }}
    />
  );

  if (reduce) {
    return <div className={`absolute ${pos}`}>{inner}</div>;
  }
  return (
    <motion.div className={`absolute ${pos}`} style={{ y }}>
      {inner}
    </motion.div>
  );
}
