import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://greysoul.ru",
  outDir: "./dist",
  publicDir: "./public",
  trailingSlash: "always",
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-v20-cyrillic_latin-regular.woff2"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/inter-v20-cyrillic_latin-italic.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/inter-v20-cyrillic_latin-700.woff2"],
          },
          {
            weight: 700,
            style: "italic",
            src: [
              "./src/assets/fonts/inter-v20-cyrillic_latin-700italic.woff2",
            ],
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/inter-v20-cyrillic_latin-900.woff2"],
          },
          {
            weight: 900,
            style: "italic",
            src: [
              "./src/assets/fonts/inter-v20-cyrillic_latin-900italic.woff2",
            ],
          },
        ],
      },
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
