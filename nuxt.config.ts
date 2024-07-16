// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@morev/vue-transitions/nuxt',
    '@nuxt/image',
    "@nuxt/icon"
  ],

  compatibilityDate: '2024-07-16'
})