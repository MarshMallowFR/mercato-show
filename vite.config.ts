import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// In order to use the env variables into the index.html
const htmlPlugin = (env) => ({
  name: 'html-transform',
  transformIndexHtml: (html) =>
    html.replace(
      /<%=\s*([a-zA-Z_]+)\s*%>/g,
      (_match, variableName) => env[variableName],
    ),
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    plugins: [vue(), htmlPlugin(env), pluginRewriteAll()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3333,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'src/assets/style/_variables.scss';`,
        },
      },
    },
  };
});
