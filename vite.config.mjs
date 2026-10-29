import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const includePartials = () => ({
  name: "herr-html-partials",
  transformIndexHtml(html) {
    return html.replace(/<!-- @include (.+?) -->/g, (_, file) =>
      readFileSync(resolve(process.cwd(), file.trim()), "utf8"),
    );
  },
});

export default defineConfig({
  plugins: [tailwindcss(), includePartials()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        services: resolve(process.cwd(), "services/index.html"),
        webDesign: resolve(process.cwd(), "services/web-design/index.html"),
      },
    },
  },
});
