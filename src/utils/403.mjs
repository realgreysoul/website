import { rename, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const src = "./dist/403/index.html";
const dest = "./dist/403.html";

if (existsSync(src)) {
  await rename(src, dest);
  await rm("./dist/403", { recursive: true, force: true });
  console.log("403.astro: moved to dist/403.html");
} else {
  console.warn("403.astro: dist/403/index.html not found, skipping");
}
