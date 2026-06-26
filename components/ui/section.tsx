import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-hair py-24 sm:py-32 ${className}`}
    >
      <div className="container-tight">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl sm:mb-16">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium tracking-wide text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
