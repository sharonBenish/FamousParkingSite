<script setup lang="ts">
const route = useRoute()
const mobileNavOpen = ref(false)

watch(() => route.path, () => {
  mobileNavOpen.value = false
})
</script>

<template>
  <main class="relative min-h-screen overflow-x-hidden" flex="~ col">
    <WebLayoutHeader class="sticky top-0 z9" @mobile-nav="mobileNavOpen = !mobileNavOpen" />
    <WebLayoutMobileNav :is-open="mobileNavOpen" class="absolute left-0 right-0 z-1000" @close-nav="mobileNavOpen = false" />
    <section class="">
      <slot />
    </section>
    <WebLayoutFooter />
  </main>
</template>