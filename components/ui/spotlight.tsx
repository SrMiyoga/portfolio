"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-following radial glow. Drop inside a `position: relative` element with
 * the `group` class; it tracks the pointer over that parent and fades in on
 * hover. Decorative only.
 */
export function Spotlight({ size = 420 }: { size?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
    };
    parent.addEventListener("pointermove", move);
    return () => parent.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 60%)`,
      }}
    />
  );
}
