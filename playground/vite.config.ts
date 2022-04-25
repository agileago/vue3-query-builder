import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import vueJsx from '@vue3-oop/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx({ enableObjectSlots: false }),
    tsconfigPaths(),
    checker({ typescript: true }),
  ],
})
