// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@morev/vue-transitions/nuxt',
    '@nuxt/image',
    "@nuxt/icon"
  ],


plugins: [
  { src: "@/plugins/aos", mode: "client" },
],

// purgeCSS: {
//   whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
// },

  compatibilityDate: '2024-07-16'
})