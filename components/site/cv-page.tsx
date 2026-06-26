import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SetLang } from "@/components/util/set-lang";
import { CvToolbar } from "@/components/cv/cv-toolbar";
import { getContent, profile } from "@/lib/content";
import { cvSummary, cvLabels } from "@/lib/cv";
import type { Locale } from "@/lib/i18n";

export function CvPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const L = cvLabels[locale];

  return (
    <div className="min-h-dvh bg-surface">
      <SetLang locale={locale} />
      <CvToolbar locale={locale} current="design" />

      <div className="mx-auto max-w-[920px] px-4 py-8 sm:py-12">
        <article className="print-page mx-auto bg-white text-zinc-900 shadow-xl shadow-black/10">
          {/* Header band */}
          <header className="pdf-block flex items-center gap-6 border-b-2 border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_7%,#ffffff)] px-10 pb-6 pt-10 sm:px-12">
            <Image
              src="/pablo.jpg"
              alt={profile.name}
              width={104}
              height={104}
              priority
              className="h-[104px] w-[104px] shrink-0 rounded-2xl object-cover ring-1 ring-zinc-200"
              style={{ objectPosition: "center 26%" }}
            />
            <div className="min-w-0">
              <h1 className="text-[28px] font-bold leading-tight tracking-tight text-zinc-900">
                {profile.name}
              </h1>
              <p className="mt-1 text-[15px] font-semibold text-[var(--color-accent)]">
                {L.role}
              </p>
            </div>
          </header>

          {/* Two columns */}
          <div className="grid grid-cols-1 gap-x-9 px-10 pb-10 pt-6 sm:grid-cols-[230px_1fr] sm:px-12">
            {/* Sidebar */}
            <aside className="space-y-5">
              <SideBlock title={L.contact}>
                <ul className="space-y-1.5 text-[12.5px] text-zinc-700">
                  <li className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                    <span className="break-all">{profile.email}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                    {profile.phone}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                    {c.contact.location.split("·")[0].trim()}
                  </li>
                  <li className="flex items-center gap-2">
                    <LinkedinIcon className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                    {profile.linkedinHandle}
                  </li>
                  <li className="flex items-center gap-2">
                    <GithubIcon className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                    github.com/{profile.githubHandle}
                  </li>
                </ul>
              </SideBlock>

              <SideBlock title={L.skills}>
                <div className="space-y-2.5">
                  {c.stack.groups.map((g) => (
                    <div key={g.label}>
                      <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-wide text-zinc-500">
                        {g.label}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {g.items.map((it) => (
                          <span
                            key={it}
                            className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10.5px] leading-none text-zinc-700"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SideBlock>

              <SideBlock title={L.languages}>
                <ul className="space-y-1 text-[12.5px]">
                  {c.education.languages.map((l) => (
                    <li key={l.name}>
                      <span className="font-medium text-zinc-900">{l.name}</span>
                      <span className="text-zinc-500"> · {l.level}</span>
                    </li>
                  ))}
                </ul>
              </SideBlock>

              <SideBlock title={L.education}>
                {c.education.items.map((e) => (
                  <div key={e.title} className="text-[12.5px] text-zinc-700">
                    <p className="font-semibold text-zinc-900">{e.title}</p>
                    <p>{e.place}</p>
                    <p className="text-zinc-500">{e.period}</p>
                  </div>
                ))}
              </SideBlock>
            </aside>

            {/* Main */}
            <main className="mt-6 space-y-5 sm:mt-0">
              <MainBlock title={L.summary}>
                <p className="text-[13px] leading-relaxed text-zinc-700">
                  {cvSummary[locale]}
                </p>
              </MainBlock>

              <MainBlock title={L.experience}>
                <div className="space-y-3.5">
                  {c.experience.items.map((item) => (
                    <div key={item.company} className="pdf-block">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[13.5px] font-semibold text-zinc-900">
                          {item.role}{" "}
                          <span className="text-[var(--color-accent)]">
                            · {item.company}
                          </span>
                        </h3>
                        <span className="shrink-0 text-[11.5px] text-zinc-500">
                          {item.period}
                        </span>
                      </div>
                      {item.client && (
                        <p className="text-[12px] text-zinc-600">{item.client}</p>
                      )}
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-zinc-700">
                        {item.summary}
                      </p>
                      {item.bullets.length > 0 && (
                        <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[12.5px] leading-relaxed text-zinc-700 marker:text-zinc-300">
                          {item.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </MainBlock>

              <MainBlock title={L.project}>
                <p className="text-[12.5px] leading-relaxed text-zinc-700">
                  {L.projectLine}
                </p>
              </MainBlock>
            </main>
          </div>
        </article>
      </div>
    </div>
  );
}

function SideBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pdf-block">
      <h2 className="mb-2 border-b border-zinc-200 pb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function MainBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pdf-block">
      <h2 className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-900">
        <span className="inline-block h-3 w-1 rounded-full bg-[var(--color-accent)]" />
        {title}
      </h2>
      {children}
    </section>
  );
}
