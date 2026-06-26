import { SetLang } from "@/components/util/set-lang";
import { CvToolbar } from "@/components/cv/cv-toolbar";
import { getContent, profile } from "@/lib/content";
import { cvSummary, cvLabels } from "@/lib/cv";
import type { Locale } from "@/lib/i18n";

export function CvAtsPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const L = cvLabels[locale];

  const contactBits = [
    profile.email,
    profile.phone,
    c.contact.location.split("·")[0].trim(),
    profile.linkedinHandle,
    `github.com/${profile.githubHandle}`,
  ];

  return (
    <div className="min-h-dvh bg-surface">
      <SetLang locale={locale} />
      <CvToolbar locale={locale} current="ats" />

      <div className="mx-auto max-w-[850px] px-4 py-8 sm:py-12">
        <article className="print-page mx-auto bg-white p-10 text-zinc-900 shadow-xl shadow-black/10 sm:p-14">
          <header className="pdf-block border-b border-zinc-200 pb-5">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              {profile.name}
            </h1>
            <p className="mt-1 text-base font-medium text-zinc-700">{L.role}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-zinc-600">
              {contactBits.join("  ·  ")}
            </p>
          </header>

          <Block title={L.summary}>
            <p className="text-[13.5px] leading-relaxed text-zinc-700">
              {cvSummary[locale]}
            </p>
          </Block>

          <Block title={L.experience}>
            <div className="space-y-4">
              {c.experience.items.map((item) => (
                <div key={item.company} className="pdf-block">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[14px] font-semibold text-zinc-900">
                      {item.role} · {item.company}
                    </h3>
                    <span className="shrink-0 text-[12px] text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  {item.client && (
                    <p className="text-[12.5px] text-zinc-600">{item.client}</p>
                  )}
                  <p className="mt-1 text-[13px] leading-relaxed text-zinc-700">
                    {item.summary}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-[13px] leading-relaxed text-zinc-700 marker:text-zinc-400">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Block>

          <Block title={L.project}>
            <p className="text-[13px] leading-relaxed text-zinc-700">
              {L.projectLine}
            </p>
          </Block>

          <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            <Block title={L.education}>
              {c.education.items.map((e) => (
                <div key={e.title} className="text-[13px] text-zinc-700">
                  <p className="font-semibold text-zinc-900">{e.title}</p>
                  <p>{e.place}</p>
                  <p className="text-zinc-500">{e.period}</p>
                </div>
              ))}
            </Block>
            <Block title={L.languages}>
              <ul className="text-[13px] text-zinc-700">
                {c.education.languages.map((l) => (
                  <li key={l.name} className="flex justify-between">
                    <span className="font-medium">{l.name}</span>
                    <span className="text-zinc-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <Block title={L.skills}>
            <div className="space-y-1.5">
              {c.stack.groups.map((g) => (
                <p key={g.label} className="text-[13px] leading-relaxed">
                  <span className="font-semibold text-zinc-900">{g.label}: </span>
                  <span className="text-zinc-700">{g.items.join(" · ")}</span>
                </p>
              ))}
            </div>
          </Block>
        </article>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pdf-block mt-5">
      <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
