# Herr Systems Templates

A retro-signal local-business site template for Herr Systems. The homepage shell is preserved in `index.html`. Service routes in `public/services/` reuse that same header, footer, theme script, and `public/retro3.css` shell stylesheet; Vite copies those static routes into `dist/`.

## Pages

- `/` — homepage
- `/services/` — service directory
- `/services/web-design/` — reusable service-detail page shown with Web Design content

## Editing styles

The site uses a two-stage SCSS + Tailwind v4 pipeline:

- Make custom component/layout changes in `src/styles.scss`.
- Use Tailwind utilities directly in HTML where useful; Tailwind's entry lives in `src/styles.css`.
- The service directory’s layout is edited in `src/services.scss`; the styles task compiles it to `public/services.css`. Bump its stylesheet query in `public/services/index.html` when changing directory styling.
- `src/generated.css` is a generated Sass artifact and intentionally ignored.
- Original service illustrations live in `public/assets/services/` as editable pixel-grid SVGs. Each has a 192 × 144 viewBox, `preserveAspectRatio="xMidYMid meet"`, and crisp-edge rendering. The directory displays them with proportional width and automatic height; do not assign independent fixed heights.

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
