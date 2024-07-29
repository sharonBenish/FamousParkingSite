<script setup lang="ts">
</script>

<template>
    <!--HERO SECTION-->
    <div class="hero relative wfull h60dvh xl:h70dvh bg-[url('/images/Department.svg')] bg-cover bg-center bg-no-repeat -mt20 lg:-mt24">
        <div class="hero-text text-white absolute bottom-10 w-site right-1/2 left-1/2 -translate-x-1/2 z-200">
            <h1 class="font-800 text-9 2md:text-12 lg-text-16 lg-w180">Departments</h1>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#000000] opacity-50"></div>
    </div>

    <!--WHAT WE DO-->
    <div class="min-h100 md:bg-dpt bg-no-repeat bg-pos-right-top mt-15 lg:mt-25 pb-15 lb-py25">
        <div class="w-content">
            <h2 class="border-l-e-primary pl2 lg-pl4 border-l-8 mb6 flex items-center gap-2 lg-gap-4 text-5 lg-text-8 font700 text-[#424242]">What we do for you 
                <span><svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.16666 16.5H30.8333M30.8333 16.5L21.5833 8.25M30.8333 16.5L21.5833 24.75" stroke="#4DB6AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </h2>
            <p class="text-4">At FamousParking we put the pieces together to ensure your parking asset receives industry leading attention to detail in pricing, customer service and operations. Our approach not only boosts your earnings but also aligns seamlessly with your broader business objectives.</p>
        </div>
        <div class="w-content flex-col my20">
            <div id="pricing" class="flex lt-2xs:flex-col lt-2xs:gap5 gap20 mb15">
                <div class="border-e-primary bg-[#D3F0ED]/60 border-2 text-e-primary lt-2xs:h16 lt-2xs:w16 h20 w20 flex items-center justify-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="lt-2xs:h10 lt-2xs:w10 h12 w12" viewBox="0 0 24 24"><path fill="currentColor" d="M11.487 20.5v-2.034q-1.287-.166-2.211-.891t-1.374-2.006l.927-.404q.433 1.123 1.19 1.73t2.052.605q1.14 0 2.084-.568t.943-1.832q0-1.067-.694-1.714q-.695-.647-2.598-1.259q-1.939-.617-2.729-1.41q-.79-.794-.79-2.067q0-1.394 1.069-2.227q1.069-.832 2.13-.9V3.5h1v2.023q1.039.104 1.784.576t1.236 1.343l-.889.454q-.357-.646-.984-1.046t-1.596-.4q-1.158 0-1.954.613q-.796.612-.796 1.587q0 .921.653 1.492q.654.572 2.62 1.193q1.82.576 2.68 1.481q.858.905.858 2.272q0 1.506-1.06 2.393t-2.552.996V20.5z"/></svg>
                </div>
                <div class="lt-2xs:w-full text-justify w-2/3 flex-1">
                    <h3 class="lt-2xs:text-5 text-6 fw600 text-e-primary mb4">Dynamic Pricing</h3>
                    <p class="text-4 mb4">Our Pricing Team uses detailed analysis and historical data to set flexible, precise rates for parking facilities. With full-time specialists and advanced tools, we adjust pricing based on demand patterns, such as weekends and midnight hours, and adapt monthly rates to seasonal trends and location.</p>
                    <p class="text-4">With our proactive approach and consistency, we have recorded different records of sales during special recurring demand trends, example was Senate House session, where we recorded $35- $45 for less than 6 hour parking duration. We focus on smart, data-driven pricing to maximize revenue and enhance our facility's performance.</p>
                </div>
            </div>
            <div id="customer" class="flex lt-2xs:flex-col lt-2xs:gap5 gap20 mb15">
            <div class="bg-[#D3F0ED]/60 border-e-primary border-2 text-e-primary lt-2xs:h16 lt-2xs:w16 h20 w20 flex items-center justify-center rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="lt-2xs:h10 lt-2xs:w10 h12 w12" viewBox="0 0 24 24"><path fill="currentColor" d="M11.77 20v-1H19v-7.446q0-2.81-2.066-4.693Q14.867 4.977 12 4.977T7.066 6.861T5 11.554v5.696H3v-4.706h1l.017-1.224q.046-1.57.709-2.905T6.47 6.092t2.515-1.54T12 4t3.013.552q1.428.552 2.513 1.538q1.085.985 1.744 2.32q.66 1.334.712 2.895l.017 1.24h1v4.705h-1V20zm-2.385-6.461q-.31 0-.54-.21t-.23-.52t.23-.531t.54-.22q.31 0 .539.215q.23.216.23.535q0 .31-.23.52t-.54.21m5.232 0q-.31 0-.54-.21t-.23-.52t.23-.53t.54-.22t.539.215t.23.535q0 .31-.23.52t-.54.21M6.718 11.95q-.136-2.246 1.447-3.829q1.582-1.583 3.887-1.583q1.935 0 3.43 1.163t1.827 3.055q-1.987-.025-3.688-1.014t-2.61-2.75q-.362 1.731-1.505 3.034q-1.144 1.303-2.788 1.924"/></svg>
            </div>
            <div class="lt-2xs:w-full w-2/3 flex-1 text-justify">
                <h3 class="lt-2xs:text-5 text-6 text-e-primary fw600 mb4">Customer Care</h3>
                <p class="text-4 mb4">Customer care is our top priority. We understand that happy customers drive our success, and we've put in place specific processes to ensure their satisfaction. These include on-demand towing, monthly customer outreach, clear directions and photos for lost customers, and offering monetary refunds. Our customer care team is equipped with the tools and authority to provide a positive experience for all our customers.</p>
                <p class="text-4 mb4">We are committed to being available from 5 AM to 2 AM daily, with an impressive average response time of less than one minute. We listen to our customers and solve their problems promptly with clear directions, photos, towing services, and refunds.</p>
                <p class="text-4 mb4">Famous Parking lots have customers who are big fans, and we build those relationships one solved problem at a time. In June, our dedicated team of (5) five handled an average of 65 customer inquiries per day, and in July, this number rose to 80 inquiries per day. We assist customers in locating their parking spots and tow illegally parked vehicles to ensure our customers can enjoy their reserved spots.</p>
                <p class="text-4">Here's an interesting tidbit: Our team navigates and identifies correct locations using photos from customers and Google Maps, all without being on-site.</p>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
</style>