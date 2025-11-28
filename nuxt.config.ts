// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Space+Grotesk': [400, 500, 600, 700],
    }
  },
  app: {
    head: {
      title: 'Yuktrix - AI Financial Intelligence',
      meta: [
        { name: 'description', content: 'Your AI Financial Intelligence Platform — For Investing, Trading & Wealth Decisions' }
      ],
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
})
