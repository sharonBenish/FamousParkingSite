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
</script>

<template>
    <div class="hero relative wfull h60dvh xl:h70dvh bg-[url('/images/CustomerService.png')] bg-cover bg-center bg-no-repeat -mt20 lg:-mt24">
        <div class="hero-text text-white absolute bottom-10 w-site right-1/2 left-1/2 -translate-x-1/2 z-200">
            <h1 class="font-800 text-9 2md:text-12 lg-text-16 lg-w180">Customer Service</h1>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#000000] opacity-50"></div>
    </div>

    <div>
        <div class="w-content flex-col my20">
            <div id="customer" class="flex lt-2xs:flex-col lt-2xs:gap5 gap20 mb15">
            <div class="bg-[#D3F0ED]/60 border-e-primary border-2 text-e-primary lt-2xs:h16 lt-2xs:w16 h20 w20 flex items-center justify-center rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="lt-2xs:h10 lt-2xs:w10 h12 w12" viewBox="0 0 24 24"><path fill="currentColor" d="M11.77 20v-1H19v-7.446q0-2.81-2.066-4.693Q14.867 4.977 12 4.977T7.066 6.861T5 11.554v5.696H3v-4.706h1l.017-1.224q.046-1.57.709-2.905T6.47 6.092t2.515-1.54T12 4t3.013.552q1.428.552 2.513 1.538q1.085.985 1.744 2.32q.66 1.334.712 2.895l.017 1.24h1v4.705h-1V20zm-2.385-6.461q-.31 0-.54-.21t-.23-.52t.23-.531t.54-.22q.31 0 .539.215q.23.216.23.535q0 .31-.23.52t-.54.21m5.232 0q-.31 0-.54-.21t-.23-.52t.23-.53t.54-.22t.539.215t.23.535q0 .31-.23.52t-.54.21M6.718 11.95q-.136-2.246 1.447-3.829q1.582-1.583 3.887-1.583q1.935 0 3.43 1.163t1.827 3.055q-1.987-.025-3.688-1.014t-2.61-2.75q-.362 1.731-1.505 3.034q-1.144 1.303-2.788 1.924"/></svg>
            </div>
            <div class="lt-2xs:w-full w-2/3 flex-1 md:text-justify">
                <h3 class="lt-2xs:text-5 text-6 text-e-primary fw600 mb4">Customer Care</h3>
                <p class="text-4 mb4">Customer care is our top priority. We understand that happy customers drive our success, and we've put in place specific processes to ensure their satisfaction. These include on-demand towing, monthly customer outreach, clear directions and photos for lost customers, and offering monetary refunds. Our customer care team is equipped with the tools and authority to provide a positive experience for all our customers.</p>
                <p class="text-4 mb4">We are committed to being available from 5 AM to 2 AM daily, with an impressive average response time of less than one minute. We listen to our customers and solve their problems promptly with clear directions, photos, towing services, and refunds.</p>
                <p class="text-4 mb4">Famous Parking lots have customers who are big fans, and we build those relationships one solved problem at a time. In June, our dedicated team of (5) five handled an average of 65 customer inquiries per day, and in July, this number rose to 80 inquiries per day. We assist customers in locating their parking spots and tow illegally parked vehicles to ensure our customers can enjoy their reserved spots.</p>
                <p class="text-4">Here's an interesting tidbit: Our team navigates and identifies correct locations using photos from customers and Google Maps, all without being on-site.</p>
                <NuxtImg src="/images/customer.jpg" class="wfull my10 rounded-2 max-h-100 object-cover" />
            </div>
            </div>
        </div>
    </div>
    <div class="bg-e-primary text-white py15 lg:py20">
        <div class="w-content lt-lg-flex-col flex justify-between items-center lt-lg:text-center lg-items-end">
            <div class="lg:w-130 xl:w160">
                <h3 class="text-6 lg:text-8 xl:text-10 font700 mb6">Ready to make your parking famous?</h3>
                <p class="xl:text-5 font500">Allow us to put together a parking proposal that is customized for your lot.</p>
            </div>
            
            <button class="btn-white flex items-center gap1 lg-gap2 bg-white text-e-primary mt4 lg-mt0 px-6 py4 text-3.5 lg:text-4 rounded-2 font-600" @click="goToContact()">
                <svg class="h8 w8 fill-[#4DB6AC]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.88891 24.2511C4.87827 25.8447 6.18213 27.1662 7.77569 27.177L14.5568 27.2231C20.9669 27.2666 26.2163 22.0873 26.2591 15.6772C26.302 9.26716 21.1221 4.01709 14.712 3.97358L7.93095 3.92754C6.3374 3.91672 5.016 5.22043 5.00536 6.81399L4.88891 24.2511ZM6.82637 24.2643L6.94282 6.82715C6.94648 6.27885 7.36971 5.86127 7.91801 5.86499L14.6991 5.91103C20.061 5.94743 24.3575 10.3022 24.3217 15.6641C24.2859 21.026 19.9316 25.322 14.5697 25.2856L7.78863 25.2396C7.24033 25.2358 6.82271 24.8126 6.82637 24.2643ZM11.1182 20.7516C11.1158 21.1226 11.2838 21.4986 11.5657 21.7834C11.6971 21.9191 11.8542 22.0273 12.0279 22.1015C12.2015 22.1758 12.3882 22.2147 12.5771 22.216C12.766 22.2173 12.9532 22.1809 13.1278 22.109C13.3025 22.0371 13.461 21.9311 13.5942 21.7972L18.8661 16.5958C19.1406 16.3245 19.2962 15.9554 19.2988 15.5694C19.3014 15.1835 19.1507 14.8123 18.8799 14.5373L13.8282 9.38689C13.5569 9.11238 13.1877 8.95674 12.8018 8.95412C12.4158 8.9515 12.0447 9.10212 11.7697 9.37291C11.4952 9.64422 11.3396 10.0134 11.337 10.3993C11.3344 10.7852 11.4851 11.1565 11.7559 11.4315L15.8157 15.5453L11.5794 19.7249C11.2937 20.0068 11.1207 20.3805 11.1182 20.7516Z" class="fill-inherit"/>
                </svg>
                Get In Touch
            </button>
        </div>
    </div>
</template>

<style></style>