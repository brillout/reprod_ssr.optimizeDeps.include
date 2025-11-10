import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import { compiled } from "vite-plugin-compiled-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vike(),
    compiled({
      extract: true,
    }),
    react(),
    telefunc(),
  ],
  ssr: {
    optimizeDeps: {
      include: ['@compiled/react/runtime']
    }
  },
  optimizeDeps: {
    include: ['@compiled/react/runtime']
  }
});
