// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // Must be 'static' or 'hybrid'
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});
