"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parse(value: string) {
  const m = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!m) return null;
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] };
}

/**
 * Counts a numeric value up when it scrolls into view. Non-numeric values
 * (e.g. "Banca", "Full-stack") render as-is. Reduced motion → final value.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  // Memoised so the effect's deps stay stable (parse() returns a fresh object
  // each render, which otherwise restarts the animation on every render).
  const parsed = useMemo(() => parse(value), [value]);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!parsed || reduce || !inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * parsed.num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, parsed]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  // Reduced motion jumps straight to the final value; otherwise count up from 0
  // (off-screen metrics sit at 0 until scrolled into view, which is invisible).
  const display = reduce ? parsed.num : n;
  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
