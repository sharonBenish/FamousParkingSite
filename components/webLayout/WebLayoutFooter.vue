<script setup lang="ts">
import MailChimp from '../MailChimp.vue';

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

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { head: 'Home', to: '/' },
      { head: 'Use Cases', to: '/use-cases' },
      { head: 'Services', to: '/services' },
      { head: 'Technology', to: '/technology' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { head: 'Sales@famousparking.com', to: 'mailto:' },
      { head: 'support@famousparking.com', to: 'mailto:' },
      { head: '+1 (331) 316-8148', to: 'tel:' },
      { head: '+1 (217) 978-7672', to: 'tel:' }
    ],
  },
  {
    title: 'Legal',
    links: [
      { head: 'Privacy Policy', to: '/' },
      { head: 'Terms and Conditions', to: '/' },
    ],
  },
  {
    title: 'More',
    links: [
      { head: 'About Us', to: '/about' },
      { head: 'Payment Solution', to: '/payment' }
    ],
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="pt14 bg-white">  
    <div class="w-site lt-sm:px px-6 lg-px-16 pb8 lg:pb15">
      <div class="flex flex-col 2md:flex-row justify-between lg:items-center gap-4">
        <NuxtLink to="/" class="-ml4">
          <NuxtImg src="/images/Logo.svg" class="w22 md:w25 lg-w30 hauto" />
        </NuxtLink>
        <MailChimp />
      </div>
      <div class="flex-2/5 flex lt-lg:mt4 flex justify-between flex-wrap gap-y-6 py10">
        <div v-for="item of footerLinks" :key="item.title" class="text-gray-7 lt-lg:w-1/2 ">
          <h4 class="mb6 relative text-e-primary lg:text-4.25 fw500 before:(content-[''] absolute left-0 -bottom-2.5 h0.5 bg-e-primary w10 rounded-full)">
            {{ item.title }}
          </h4>
          <NuxtLink v-if="item.title !== 'Contact'" v-for="list of item.links" :key="list.head" :to="list.to" class="text-3 lg:text-3.75 mb1.5 fw300 block hover:text-e-primary duration-400">
            {{ list.head }}
          </NuxtLink>
          <a v-else v-for="list of item.links" :key="list.to" :href="`${list.to}${list.head}`" class="text-3 lg:text-3.75 mb1.5 fw300 block hover:text-e-primary duration-400">
            {{list.head}}
          </a>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center gap4 lg:gap10">
          <NuxtLink to="/">
            <svg class="w4.5 h4.5 lg-w6 lg-h6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7.39658C8.56641 7.39658 7.39649 8.5665 7.39649 10.0001C7.39649 11.4337 8.56641 12.6036 10 12.6036C11.4336 12.6036 12.6035 11.4337 12.6035 10.0001C12.6035 8.5665 11.4336 7.39658 10 7.39658ZM17.8086 10.0001C17.8086 8.92197 17.8184 7.85361 17.7578 6.77744C17.6973 5.52744 17.4121 4.41806 16.498 3.504C15.582 2.58798 14.4746 2.30478 13.2246 2.24423C12.1465 2.18369 11.0781 2.19345 10.002 2.19345C8.92383 2.19345 7.85547 2.18369 6.7793 2.24423C5.5293 2.30478 4.41992 2.58994 3.50586 3.504C2.58984 4.42001 2.30664 5.52744 2.24609 6.77744C2.18555 7.85556 2.19531 8.92392 2.19531 10.0001C2.19531 11.0763 2.18555 12.1466 2.24609 13.2227C2.30664 14.4727 2.5918 15.5821 3.50586 16.4962C4.42188 17.4122 5.5293 17.6954 6.7793 17.756C7.85742 17.8165 8.92578 17.8067 10.002 17.8067C11.0801 17.8067 12.1484 17.8165 13.2246 17.756C14.4746 17.6954 15.584 17.4102 16.498 16.4962C17.4141 15.5802 17.6973 14.4727 17.7578 13.2227C17.8203 12.1466 17.8086 11.0782 17.8086 10.0001ZM10 14.006C7.7832 14.006 5.99414 12.2169 5.99414 10.0001C5.99414 7.7833 7.7832 5.99423 10 5.99423C12.2168 5.99423 14.0059 7.7833 14.0059 10.0001C14.0059 12.2169 12.2168 14.006 10 14.006ZM14.1699 6.76572C13.6523 6.76572 13.2344 6.34775 13.2344 5.83017C13.2344 5.31259 13.6523 4.89462 14.1699 4.89462C14.6875 4.89462 15.1055 5.31259 15.1055 5.83017C15.1056 5.95307 15.0815 6.0748 15.0346 6.18837C14.9876 6.30195 14.9187 6.40514 14.8318 6.49205C14.7449 6.57895 14.6417 6.64786 14.5281 6.69482C14.4145 6.74178 14.2928 6.76587 14.1699 6.76572Z" fill="#CCCCCC"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/">
            <svg class="w4.5 h4.5 lg-w6 lg-h6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7167 5.00016C18.075 5.29183 17.3833 5.4835 16.6667 5.57516C17.4 5.1335 17.9667 4.4335 18.2333 3.59183C17.5417 4.0085 16.775 4.30016 15.9667 4.46683C15.3083 3.75016 14.3833 3.3335 13.3333 3.3335C11.375 3.3335 9.775 4.9335 9.775 6.9085C9.775 7.19183 9.80833 7.46683 9.86667 7.72516C6.9 7.57516 4.25833 6.15016 2.5 3.99183C2.19167 4.51683 2.01667 5.1335 2.01667 5.7835C2.01667 7.02516 2.64167 8.12516 3.60833 8.75016C3.01667 8.75016 2.46667 8.5835 1.98333 8.3335V8.3585C1.98333 10.0918 3.21667 11.5418 4.85 11.8668C4.3257 12.0109 3.77503 12.0309 3.24167 11.9252C3.46801 12.6356 3.91128 13.2572 4.50918 13.7026C5.10708 14.148 5.82954 14.3949 6.575 14.4085C5.31139 15.4089 3.74501 15.9497 2.13333 15.9418C1.85 15.9418 1.56667 15.9252 1.28333 15.8918C2.86667 16.9085 4.75 17.5002 6.76667 17.5002C13.3333 17.5002 16.9417 12.0502 16.9417 7.32516C16.9417 7.16683 16.9417 7.01683 16.9333 6.8585C17.6333 6.3585 18.2333 5.72516 18.7167 5.00016Z" fill="#CCCCCC"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/">
            <svg class="w4.5 h4.5 lg-w6 lg-h6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3333 9.99984C18.3333 5.39984 14.6 1.6665 10 1.6665C5.4 1.6665 1.66667 5.39984 1.66667 9.99984C1.66667 14.0332 4.53333 17.3915 8.33333 18.1665V12.4998H6.66667V9.99984H8.33333V7.9165C8.33333 6.30817 9.64167 4.99984 11.25 4.99984H13.3333V7.49984H11.6667C11.2083 7.49984 10.8333 7.87484 10.8333 8.33317V9.99984H13.3333V12.4998H10.8333V18.2915C15.0417 17.8748 18.3333 14.3248 18.3333 9.99984Z" fill="#CCCCCC"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/">
            <svg class="w4.5 h4.5 lg-w6 lg-h6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 12.4998L12.6583 9.99984L8.33333 7.49984V12.4998ZM17.9667 5.97484C18.075 6.3665 18.15 6.8915 18.2 7.55817C18.2583 8.22484 18.2833 8.79984 18.2833 9.29984L18.3333 9.99984C18.3333 11.8248 18.2 13.1665 17.9667 14.0248C17.7583 14.7748 17.275 15.2582 16.525 15.4665C16.1333 15.5748 15.4167 15.6498 14.3167 15.6998C13.2333 15.7582 12.2417 15.7832 11.325 15.7832L10 15.8332C6.50833 15.8332 4.33333 15.6998 3.475 15.4665C2.725 15.2582 2.24167 14.7748 2.03333 14.0248C1.925 13.6332 1.85 13.1082 1.8 12.4415C1.74167 11.7748 1.71667 11.1998 1.71667 10.6998L1.66667 9.99984C1.66667 8.17484 1.8 6.83317 2.03333 5.97484C2.24167 5.22484 2.725 4.7415 3.475 4.53317C3.86667 4.42484 4.58333 4.34984 5.68333 4.29984C6.76667 4.2415 7.75833 4.2165 8.675 4.2165L10 4.1665C13.4917 4.1665 15.6667 4.29984 16.525 4.53317C17.275 4.7415 17.7583 5.22484 17.9667 5.97484Z" fill="#CCCCCC"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="h0.5 w1/4 bg-[#D9D9D9] mx-auto my5"></div>
        <div class="w-max flex-c text-3 lg:text-3.25 fw500 text-[#757575] tracking-tight lt-lg:mt text-center mx-auto">
          <p mr1>
            Copyright
          </p>
          <Icon name="ph:copyright" class="h3.5 w3.5 mt0.1" />
          <p ml1>
            Famous Parking {{ year }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>