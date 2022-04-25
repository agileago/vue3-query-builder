import type { UserConfig } from 'vitepress'
import pkg from '../../package.json'

const config: UserConfig = {
  base: `/${pkg.name}/`,
  title: pkg.name.toUpperCase(),
  description: 'lib starter 介绍',
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '^/guide/' },
      {
        text: 'DEMO',
        link: 'https://stackblitz.com/edit/vite-y7m4fy?file=main.tsx',
      },
      {
        text: 'Github',
        link: 'https://github.com/agileago/vue3-oop',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          children: [{ text: '使用指南', link: '/guide/' }],
        },
      ],
    },
  },
}

export default config
