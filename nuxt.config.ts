// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '@thombruce/tnt-content'
  ],
  content: {
    documentDriven: {
      globals: {
        theme: {
          where: {
            _id: 'content:_theme.yml'
          },
          without: ['_']
        }
      },
      layoutFallbacks: ['theme'],
    },
  },
})
