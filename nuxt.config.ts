// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt modules
  modules: [
   '@nuxt/ui' 
  ],

  // Nuxt devtools
  devtools: { enabled: import.meta.env.MODE === 'development' },

  // Nuxt UI
  ui: {
    global: true,
  }
})
