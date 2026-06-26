import Link from "next/link";
import { ArrowLeft, LayoutGrid, FileText } from "lucide-react";
import { LangToggle } from "@/components/layout/lang-toggle";
import { PrintButton } from "@/components/cv/print-button";
import { cvLabels } from "@/lib/cv";
import { localizedPath, ui, type Locale } from "@/lib/i18n";

export function CvToolbar({
  locale,
  current,
}: {
  locale: Locale;
  current: "design" | "ats";
}) {
  const t = ui[locale];
  const L = cvLabels[locale];
  const isDesign = current === "design";

  return (
    <div className="no-print sticky top-0 z-10 border-b border-hair bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[920px] flex-wrap items-center justify-between gap-3 px-6 py-3">
        <Link
          href={localizedPath(locale, "/")}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--fg)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.cta.backHome}
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={localizedPath(locale, isDesign ? "/cv/ats" : "/cv")}
            className="inline-flex items-center gap-1.5 rounded-md border border-hair px-3 py-2 text-sm text-muted transition-colors hover:border-hair-strong hover:text-[var(--fg)]"
          >
            {isDesign ? (
              <FileText className="h-4 w-4" />
            ) : (
              <LayoutGrid className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {isDesign ? L.atsVersion : L.designVersion}
            </span>
          </Link>
          <LangToggle locale={locale} />
          <PrintButton label={t.cta.print} />
        </div>
      </div>
    </div>
  );
}
