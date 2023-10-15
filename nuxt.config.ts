// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt modules
  modules: [
    '@nuxtjs/color-mode',

    '@nuxt/image',

    '@nuxt/ui',

    'dayjs-nuxt',
  ],

  // Nuxt devtools
  devtools: { 
    enabled: import.meta.env.MODE === 'development',
  },

  // Nuxt Colour Mode
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  // Nuxt UI
  ui: {
    global: true,
  },

  // Nuxt DayJS
  dayjs: {}
})
