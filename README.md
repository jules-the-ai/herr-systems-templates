# Herr Systems Templates

A retro-signal local-business site template for Herr Systems. The homepage shell is preserved in `index.html`. Service routes in `public/services/` reuse that same header, footer, theme script, and `public/retro3.css` shell stylesheet; Vite copies those static routes into `dist/`.

## Pages

- `/` — homepage
- `/about/` — About page with story, principles, staff headshots, approach, and contact. Edit `public/about/index.html` and `src/about.scss` (compiled to `public/about.css`).
- `/services/` — main service directory, with exterior billboard
- `/services/billboard/` — retained preview URL for the approved exterior-billboard design. Shared billboard styles live in `src/services-billboard.scss` and compile to `public/services-billboard.css`. Reduced-motion preferences disable the slow pixel drift.
- `/services/web-design/` — business-focused service detail template; edit the content here and layout in `src/service-detail.scss` (compiled to `public/service-detail.css`). Reuses the approved billboard, shell, header, footer, and original design illustration.
- `/archive/services-contained/` — preserved older directory with its intro inside the shell.
- `/archive/web-design-original/` — preserved previous Web Design template.

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

## Staff preview

The About page uses explicitly labeled sample profiles, not real staff claims. Replace staff names, roles, bios, and `public/assets/about/headshot-*.svg` with actual details and photos. Photos use a 6:7 desktop crop and square mobile crop with `object-fit: cover`; adjust `object-position` per image as needed. Remove the STAFF PREVIEW label, preview note, and HEADSHOT overlays when final content is ready. All preview illustrations are original local SVGs.
