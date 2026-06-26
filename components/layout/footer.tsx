import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { ui, localizedPath, type Locale } from "@/lib/i18n";
import { profile } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const year = 2026;

  return (
    <footer className="no-print border-t border-hair py-12">
      <div className="container-tight flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link
            href={localizedPath(locale, "/")}
            className="font-semibold tracking-tight"
          >
            {profile.shortName}
          </Link>
          <p className="mt-1 text-sm text-muted">{t.footer.built}</p>
          <p className="mt-0.5 text-xs text-muted">
            © {year} · {t.footer.stack}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hair text-muted transition-colors hover:border-hair-strong hover:text-[var(--fg)]"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hair text-muted transition-colors hover:border-hair-strong hover:text-[var(--fg)]"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hair text-muted transition-colors hover:border-hair-strong hover:text-[var(--fg)]"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
