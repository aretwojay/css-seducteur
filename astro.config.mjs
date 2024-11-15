// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import fulldev from "fulldev-ui/integration";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  // Must be 'static' or 'hybrid'
  site: "https://css-seducteur-css.site",
  output: "static",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [
    sitemap(),
    tailwind({
      // Disable injecting styles, import manually instead
      applyBaseStyles: false,
    }),
    fulldev({
      injectRoutes: true,
      css: "/src/css/custom.css",
      colors: {
        theme: "dark",
        dark: {
          background: "#111110",
          base: "#6F6D66",
          brand: "#F50",
        },
        light: {
          background: "#EEEEEC",
          base: "#6F6D66",
          brand: "#F50",
        },
      },
    }),
  ],
});
