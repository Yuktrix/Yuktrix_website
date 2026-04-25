// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@netlify/nuxt','@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2026-02-23',
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Space+Grotesk': [400, 500, 600, 700],
    }
  },
  app: {
    head: {
      title: 'YuktriX — Self-Hosted Trading ERP | Trading System Architecture for Indian Markets',
      meta: [
        { name: 'description', content: 'Build, validate, and execute trading strategies with YuktriX — a self-hosted Trading ERP covering the full lifecycle from capital planning to continuous improvement. One-time cost. Your data stays yours.' },
        { name: 'keywords', content: 'trading ERP, self-hosted trading platform, algo trading India, ICT trading software, backtesting platform, quantitative trading, Upstox API, AngelOne integration, trading system architecture' },
        { property: 'og:title', content: 'YuktriX — Self-Hosted Trading ERP' },
        { property: 'og:description', content: 'Build, validate, and execute trading strategies with YuktriX — a self-hosted Trading ERP covering the full lifecycle from capital planning to continuous improvement.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' }
      ],
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
})
