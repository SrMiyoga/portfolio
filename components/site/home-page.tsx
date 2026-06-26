import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SetLang } from "@/components/util/set-lang";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Stack } from "@/components/sections/stack";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { ScrollTop } from "@/components/ui/scroll-top";
import { getContent } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <>
      <SetLang locale={locale} />
      <Nav locale={locale} />
      <main>
        <Hero c={c} locale={locale} />
        <About c={c} />
        <Experience c={c} />
        <FeaturedProject c={c} locale={locale} />
        <Stack c={c} />
        <Education c={c} />
        <Contact c={c} locale={locale} />
      </main>
      <Footer locale={locale} />
      <ScrollTop label={ui[locale].a11y.scrollTop} />
    </>
  );
}
