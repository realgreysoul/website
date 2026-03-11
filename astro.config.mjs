import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://greysoul.ru",
  outDir: "./dist",
  publicDir: "./public",
  trailingSlash: "always",
  experimental: {
    rustCompiler: true,
    queuedRendering: {
      enabled: true,
    },
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.bunny(),
      weights: [400, 700, 900],
      styles: ["normal", "italic"],
      subsets: ["cyrillic", "latin"],
    },
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) {
              return "_astro/style.[hash].css";
            }
            return "_astro/[name].[hash][extname]";
          },
        },
      },
    },
  },
});
