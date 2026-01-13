import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://greysoul.ru",
  outDir: "./dist",
  publicDir: "./public",
  trailingSlash: "always",
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
