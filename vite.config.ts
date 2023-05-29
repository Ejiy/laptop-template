import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  resolve: {
    alias: {
      $lib: resolve(__dirname, "./src/lib"),
      $components: resolve(__dirname, "./src/components"),
      $stores: resolve(__dirname, "./src/stores"),
      $assets: resolve(__dirname, "./src/assets"),
      $utils: resolve(__dirname, "./src/utils"),
    },
  },
});
