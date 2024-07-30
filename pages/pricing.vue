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
    <div class="hero relative wfull h60dvh xl:h70dvh bg-[url('/images/Department.svg')] bg-cover bg-center bg-no-repeat -mt20 lg:-mt24">
        <div class="hero-text text-white absolute bottom-10 w-site right-1/2 left-1/2 -translate-x-1/2 z-200">
            <h1 class="font-800 text-9 2md:text-12 lg-text-16 lg-w180">Dynamic Pricing</h1>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#000000] opacity-50"></div>
    </div>

    <div>
        <div class="w-content flex-col my20">
            <div id="pricing" class="flex lt-2xs:flex-col lt-2xs:gap5 gap20 mb15">
                <div class="border-e-primary bg-[#D3F0ED]/60 border-2 text-e-primary lt-2xs:h16 lt-2xs:w16 h20 w20 flex items-center justify-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="lt-2xs:h10 lt-2xs:w10 h12 w12" viewBox="0 0 24 24"><path fill="currentColor" d="M11.487 20.5v-2.034q-1.287-.166-2.211-.891t-1.374-2.006l.927-.404q.433 1.123 1.19 1.73t2.052.605q1.14 0 2.084-.568t.943-1.832q0-1.067-.694-1.714q-.695-.647-2.598-1.259q-1.939-.617-2.729-1.41q-.79-.794-.79-2.067q0-1.394 1.069-2.227q1.069-.832 2.13-.9V3.5h1v2.023q1.039.104 1.784.576t1.236 1.343l-.889.454q-.357-.646-.984-1.046t-1.596-.4q-1.158 0-1.954.613q-.796.612-.796 1.587q0 .921.653 1.492q.654.572 2.62 1.193q1.82.576 2.68 1.481q.858.905.858 2.272q0 1.506-1.06 2.393t-2.552.996V20.5z"/></svg>
                </div>
                <div class="lt-2xs:w-full md:text-justify w-2/3 flex-1">
                    <h3 class="lt-2xs:text-5 text-6 fw600 text-e-primary mb4">Dynamic Pricing</h3>
                    <p class="text-4 mb4">Our Pricing Team uses detailed analysis and historical data to set flexible, precise rates for parking facilities. With full-time specialists and advanced tools, we adjust pricing based on demand patterns, such as weekends and midnight hours, and adapt monthly rates to seasonal trends and location.</p>
                    <p class="text-4">With our proactive approach and consistency, we have recorded different records of sales during special recurring demand trends, example was Senate House session, where we recorded $35- $45 for less than 6 hour parking duration. We focus on smart, data-driven pricing to maximize revenue and enhance our facility's performance.</p>
                    <NuxtImg src="/images/pricing-dpt.jpg" class="wfull my10 rounded-2 max-h-100 object-cover" />
                </div>
            </div>
            <div class="flex lt-2xs:flex-col lt-2xs:gap5 gap20 mb15">
            <div class="bg-[#D3F0ED]/60 border-e-primary border-2 text-e-primary lt-2xs:h16 lt-2xs:w16 h20 w20 flex items-center justify-center rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="lt-2xs:h10 lt-2xs:w10 h12 w12" viewBox="0 0 24 24"><path fill="currentColor" d="M11.23 14.154v-1.538h1.54v1.538zm-4 0v-1.538h1.54v1.538zm8 0v-1.538h1.54v1.538zm-4 3.846v-1.538h1.54V18zm-4 0v-1.538h1.54V18zm8 0v-1.538h1.54V18zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z"/></svg>
            </div>
            <div class="lt-2xs:w-full w-2/3 flex-1 md:text-justify">
                <h3 class="lt-2xs:text-5 text-6 text-e-primary fw600 mb4">Event Pricing</h3>
                <p class="text-4 mb4">Parking develops a reputation when the price is perfect. We have people not algorithms to adjust event prices in real time based on weather, competitors, sales rate, and time remaining. Where other lots sell out days in advance or leave empty spots, we get the most out of every event. Build an audience of wealthy people looking for convenience by always having a spot available last minute before the event. Appeal to budget conscious fans with discounts when it's slow. </p> 
                <NuxtImg src="/images/pricing-dpt2.jpg" class="wfull my10 rounded-2 max-h-100 object-cover" />              
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