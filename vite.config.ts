import { defineConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),

    quasar(),
  ],
});
