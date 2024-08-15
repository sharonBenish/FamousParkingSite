<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'font-sen antialiased text-gray-9',
  },
  link: [
    { rel: 'icon', href: '/images/Logo.svg' },
  ],
  script: [
    { src: 'https://unpkg.com/@botpoison/browser', async: true },
  ],
})

useSeoMeta({
  title: 'Famous Parking',
  titleTemplate: title => (title !== 'Famous Parking' ? `${title} | Famous Parking` : title),
  description: 'Famous Parking is a platform that handles your parking needs',
  ogSiteName: 'FamousParking',
  ogImage: '/images/logo.png',
  ogImageAlt: 'FamousParking'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
