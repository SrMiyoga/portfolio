# Portfolio — Pablo Javier Casado Marco

Marca personal y portfolio profesional. Web estilo startup (inspiración: Stripe, Vercel, Linear), bilingüe ES/EN, dark mode, SEO, y CV exportable a PDF optimizado para ATS.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · next-themes.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm start          # sirve el build
npm run lint
```

Rutas: `/` y `/en` (home) · `/caudal` y `/en/caudal` (caso de estudio) · `/cv` y `/en/cv` (CV imprimible).

## Estructura

```
app/                  Rutas (ES en raíz, EN bajo /en) + sitemap, robots, OG image
components/
  layout/             Nav, Footer, toggles de tema/idioma
  sections/           Secciones de la home (Hero, About, Experience, ...)
  caudal/             Caso de estudio: diagramas, galería, mockups, ficha técnica
  cv/                 Botón de impresión
  site/               Ensamblado de páginas (HomePage, CaudalPage, CvPage)
  ui/                 Primitivas (Section, Reveal, Badge, brand-icons)
lib/
  content.ts          ★ TODO el contenido del CV (experiencia, stack, contacto)
  caudal.ts           ★ Contenido del caso de estudio de Caudal
  cv.ts               Resumen y etiquetas del CV
  i18n.ts             Locales + textos de interfaz
  seo.ts              Metadata + hreflang por página/idioma
```

## Cómo actualizarlo (pensado para 5 años)

Casi todo es **datos**, no componentes:

- **Experiencia, stack, formación, contacto** → `lib/content.ts` (objetos `es` y `en`).
- **Caso de estudio de Caudal** → `lib/caudal.ts`.
- **Tu dominio definitivo** → `profile.siteUrl` en `lib/content.ts` (afecta a SEO, OG y sitemap).
- **Tu GitHub** (pendiente) → `profile.github` y `profile.githubHandle` en `lib/content.ts`.

### Sustituir los mockups de Caudal por capturas reales

La galería usa mockups CSS (`components/caudal/mock-screens.tsx`) porque encajan con el diseño oscuro. Para usar capturas reales:

1. Guarda los PNG (proporción de móvil, ~9:19.5) en `public/caudal/`.
2. En `lib/caudal.ts`, array `screens`, rellena `src` con la ruta (p. ej. `"/caudal/dashboard.png"`). Si `src` tiene valor, se muestra la imagen; si es `null`, el mockup.

## Exportar el CV a PDF (ATS)

Abre `/cv` (o `/en/cv`) y pulsa **Descargar PDF** → imprimir → "Guardar como PDF". El layout es A4, una columna, texto seleccionable y sin elementos que rompan el parsing de un ATS.

## Desplegar en Vercel

1. Sube el proyecto a GitHub:
   ```bash
   git add -A
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/portfolio.git
   git push -u origin main
   ```
2. En [vercel.com/new](https://vercel.com/new), importa el repo. Vercel detecta Next.js automáticamente — no hace falta configurar build ni output.
3. Deploy. Cuando tengas el dominio definitivo, actualiza `profile.siteUrl` en `lib/content.ts` y vuelve a desplegar para que el SEO/OG apunten bien.

> El directorio `scripts/` contiene utilidades de captura con Playwright usadas durante el desarrollo; no afectan al build ni al deploy.
