// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@morev/vue-transitions/nuxt',
    "@nuxt/icon"
  ],

plugins: [
  { src: "@/plugins/aos", mode: "client" },
],

  compatibilityDate: '2024-07-16'
})