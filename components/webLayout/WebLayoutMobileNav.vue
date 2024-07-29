<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const scrollToSection = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function goToContact() {
  if (route.path === '/') {
    // User is on the home page, scroll to contact
    scrollToSection()
  } else {
    // User is not on the home page, navigate to home then scroll
    router.push('/#contact')
  }
}
defineProps({
  isOpen: Boolean,
})

const navLink = [
  { head: 'Home', to: '/' },
  { head: 'About', to: '/about' },
  { head: 'Services', to: '/services' },
  { head: 'Use Cases', to: '/use-cases' },
  { head: 'Technology', to: '/technology' },
  { head: 'Payment Solution', to: '/payment' },
  { head: 'Departments', to: '/departments' }
]
</script>

<template>
  <Transition name="slide-fade">
    <div v-show="isOpen" class="h-100svh lg:hidden bg-e-primary flex flex-col h-full text-white">
      <div class="flex justify-between items-center px-6">
        <NuxtLink to="/">
          <NuxtImg src="/images/Logo.svg" class="w18 lg-w24 hauto" />
        </NuxtLink>
        <button class="px6 py2 my3 place-self-end" @click="$emit('closeNav')">
          Close
        </button>
      </div>
      
      <div class="px-6 flex flex-col flex-1 pb14">
        <NuxtLink
          v-for="item of navLink"
          :key="item.head"
          :to="item.to"
          class="border-b border-white p-4 text-center block"
        >
          {{ item.head }}
        </NuxtLink>
        <div flex-auto />
        <NuxtLink
          @click="goToContact()"
          class="flex justify-center mt-12 border px-2 py-4"
        >
          Get In Touch
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(100%);
}
</style>