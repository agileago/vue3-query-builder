import { defineConfig } from 'vite'
import pkg from './package.json'
import dtsPlugin from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [dtsPlugin({ outputDir: 'types' }), tsconfigPaths()],
    build: {
      target: 'es2015',
      lib: {
        entry: 'src/index.ts',
        name: pkg.name,
        fileName: pkg.name,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['tslib'],
      },
      sourcemap: true,
      minify: false,
    },
  }
})
