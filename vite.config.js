// import react from "@vitejs/plugin-react";
// import { resolve } from "path";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: resolve(__dirname, "src/index.client.js"),
//       name: "@nosto/nosto-hydrogen",
//       formats: ["es", "umd"],
//       fileName: (format) => `index.${format}.client.js`,
//     },
//     rollupOptions: {
//       external: ["react", "react-dom", "@shopify/hydrogen"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
// });

// vite.config.js
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.client.js"),
      name: "@nosto/nosto-hydrogen",
      // the proper extensions will be added
      fileName: "nosto-hydrogen",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@shopify/hydrogen"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
