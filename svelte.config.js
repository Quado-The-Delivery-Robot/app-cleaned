import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import * as child_process from "node:child_process";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        version: {
            name: child_process.execSync("git rev-parse HEAD").toString().trim(),
        },
        adapter: adapter(),
        csrf: {
            checkOrigin: false,
        },
    },
};

export default config;
