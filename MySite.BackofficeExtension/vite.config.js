import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es"]
        },
        outDir: "../CustomDesktopProject/App_Plugins/BackofficeExtension",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/]
        },
    },
    base: "/App_Plugins/Client/"
});