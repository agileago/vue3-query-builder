import { defineConfig } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vueJsx({ enableObjectSlots: false })],
  }
})
