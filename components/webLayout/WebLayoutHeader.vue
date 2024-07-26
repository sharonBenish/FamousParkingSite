<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const currentPage = ref(route)
const navLink = [
  { head: 'Home', to: '/' },
  { head: 'Services', to: '/services' },
  { head: 'Use Cases', to: '/use-cases' },
  { head: 'Technology', to: '/technology' },
]
const subNavLink = [
  { head: 'About Us', to: '/about' },
  { head: 'Payment Solution', to: '/payment' }
]

const dropdown = ref(false)

function toggleDropdown(){
  dropdown.value = !dropdown.value
}

function closeDropdown(){
  dropdown.value = false
}

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

watch(()=>route.path, ()=>{
closeDropdown()
})

</script>

<template>
  <header class="bg-[#E0F2F148] rounded mx-6 lg-mx-16 mt-4 text-white">
    <div class="lt-2xl:w-site px4 2xl:px10 flex items-center justify-between h14 lg-h18 relative">
      <div class=" relative">
        <NuxtLink to="/">
          <NuxtImg src="/images/Logo.svg" class="w18 lg-w22 2xl-w-28 hauto" />
        </NuxtLink>
      </div>
      <nav class="">
        <div>
          <!-- <div class="h2 bg-e-primary lt-lg:hidden" /> -->
          <div class="">
            <div class="flex-c justify-end space-x-4.5">
              <NuxtLink
                v-for="item of navLink" :key="item.head"
                :to="item.to" class="nav-link lt-lg-hidden"
                :class="[route.path === item.to ? 'nav-active text-green-7' : '']"
              >
                {{ item.head }}
              </NuxtLink>
              <div class="relative lt-lg-hidden">
                <button @click="toggleDropdown" class="px-2 text-white text-4">
                  More
                </button>
                <div v-if="dropdown" class="absolute left-0 w-max mt-2 bg-[#E0F2F148] shadow-lg rounded">
                  <NuxtLink
                    v-for="item of subNavLink" :key="item.head"
                    :to="item.to" class="nav-link lt-lg-hidden"
                    :class="[route.path === item.to ? 'text-green-7 px8 py4' : 'px8 py4']"
                  >
                    {{ item.head }}
                  </NuxtLink>
                </div>
              </div>
              <button @click="goToContact" class="flex btn text-4 items-center gap-2 bg-e-primary px4 py2 rounded-2 text-white font-600 lt-lg-hidden">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="hover:[bg-e-primary] h8 w8 fill-white">
                  <path class="fill-inherit" d="M4.88891 24.2511C4.87827 25.8447 6.18213 27.1662 7.77569 27.177L14.5568 27.2231C20.9669 27.2666 26.2163 22.0873 26.2591 15.6772C26.302 9.26716 21.1221 4.01709 14.712 3.97358L7.93095 3.92754C6.3374 3.91672 5.016 5.22043 5.00536 6.81399L4.88891 24.2511ZM6.82637 24.2643L6.94282 6.82715C6.94648 6.27885 7.36971 5.86127 7.91801 5.86499L14.6991 5.91103C20.061 5.94743 24.3575 10.3022 24.3217 15.6641C24.2859 21.026 19.9316 25.322 14.5697 25.2856L7.78863 25.2396C7.24033 25.2358 6.82271 24.8126 6.82637 24.2643ZM11.1182 20.7516C11.1158 21.1226 11.2838 21.4986 11.5657 21.7834C11.6971 21.9191 11.8542 22.0273 12.0279 22.1015C12.2015 22.1758 12.3882 22.2147 12.5771 22.216C12.766 22.2173 12.9532 22.1809 13.1278 22.109C13.3025 22.0371 13.461 21.9311 13.5942 21.7972L18.8661 16.5958C19.1406 16.3245 19.2962 15.9554 19.2988 15.5694C19.3014 15.1835 19.1507 14.8123 18.8799 14.5373L13.8282 9.38689C13.5569 9.11238 13.1877 8.95674 12.8018 8.95412C12.4158 8.9515 12.0447 9.10212 11.7697 9.37291C11.4952 9.64422 11.3396 10.0134 11.337 10.3993C11.3344 10.7852 11.4851 11.1565 11.7559 11.4315L15.8157 15.5453L11.5794 19.7249C11.2937 20.0068 11.1207 20.3805 11.1182 20.7516Z" fill="white"/>
                  </svg>
                  Get in Touc h
                  <span class="group-hover:(w-31em h-15em)" />
              </button>
              <button class="lg:hidden py3.5 pr2 outline-none " @click="$emit('mobileNav')">
                <!-- <Icon name="ic:round-menu-open" class="h7 w7" /> -->
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66663 11.6667H11.6666M33.3333 11.6667H18.3333M33.3333 28.3333H28.3333M6.66663 28.3333H21.6666M6.66663 20H33.3333" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.btn {
  color: #fff;
  background-image: linear-gradient(45deg, white 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
  

}
.btn:hover {
    background-position: 0;
    color:#4DB6AC;
  }

.btn:hover > svg{
    fill: #4DB6AC
}
</style>