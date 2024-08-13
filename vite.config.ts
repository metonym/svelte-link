/// <reference types="vitest" />
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [svelte({ hot: false })],
  resolve: {
    alias: {
      [pkg.name]: path.resolve("./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
