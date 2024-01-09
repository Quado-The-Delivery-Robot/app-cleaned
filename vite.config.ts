import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],

    server: {
        proxy: {
            "/api": { target: "http://api.quadoapp.com", changeOrigin: true, rewrite: (path) => path.replace("/api", "") },
        },
    },
});
