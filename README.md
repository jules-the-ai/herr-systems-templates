# Herr Systems Templates

A retro-signal local-business site template for Herr Systems. The shared header and footer are maintained in `src/components/` and are assembled into each page by the Vite HTML partial plugin.

## Pages

- `/` — homepage
- `/services/` — service directory
- `/services/web-design/` — reusable service-detail page shown with Web Design content

## Editing styles

The site uses a two-stage SCSS + Tailwind v4 pipeline:

- Make custom component/layout changes in `src/styles.scss`.
- Use Tailwind utilities directly in HTML where useful; Tailwind's entry lives in `src/styles.css`.
- `src/generated.css` is a generated Sass artifact and intentionally ignored.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` compiles SCSS, runs Tailwind/Vite, and writes a deployable multi-page site to `dist/`.

## Archived logo source

`assets/davy-hexagon-mark.png` is the cropped hexagon mark from Emily’s archived davy.in logo: https://web.archive.org/web/20190117154612im_/http://davy.in/images/logo_small.png
