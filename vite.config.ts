import { defineConfig } from 'vite'
import pkg from './package.json'
import dtsPlugin from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueJsx from '@vue3-oop/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vueJsx({ enableObjectSlots: false }),
      dtsPlugin({ outputDir: 'types' }),
      tsconfigPaths(),
    ],
    build: {
      target: 'es2015',
      lib: {
        entry: 'src/index.ts',
        name: pkg.name,
        fileName: pkg.name,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['tslib', 'injection-js', 'vue3-oop', 'vue'],
      },
      sourcemap: true,
      minify: false,
    },
  }
})
