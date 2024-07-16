<script lang="ts">
</script>

<template>
    <div class="hero relative wfull h60dvh 3xl:h70dvh bg-[url('/images/technology-hero.jpg')] bg-cover bg-no-repeat -mt20 lg:-mt24 text-[#424242]">
        <div class="hero-text text-white absolute bottom-10 w-site right-1/2 left-1/2 -translate-x-1/2 z-200">
            <h1 class="font-800 text-9 2md:text-12 lg-text-20 lg-w180">Our Technology</h1>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#000000] opacity-40"></div>
    </div>

    <div class="bg-white py10 lg:pb50 lg:pt30 mt10 bg-[url('/images/usecasesvg.svg')] bg-no-repeat bg-size">
        <div class="w-content flex-col 2lg:flex-row flex gap10">
            <div class="2lg:w-[45%] 2xl:-ml-[80px]">
                <h3 class="fw800 text-5 md:text-6.5 lg:text-8 mb6 lg:mb10">Tech value proposition</h3>
                <p class="fw600 lg:text-5 mb2 lg:mb8">FamousParking.com leverages multiple tech workflows to drive efficiency and value creation that is then passed along to our owners in the form of highly competitive rates.</p>
                <ul class="list-circle my3 ml4 lt-2lg:hidden">
                    <li class="mb4">Our tech forward team includes three full time coders and one modeling expert, with an emphasis on outcomes.</li>
                    <li class="mb4">Our proprietary code sets streamline pricing workflows and operations for both daily parking and events like sports games and concerts.</li>
                    <li class="mb4">Our DNA is AI-forward, with a focus on fostering internal prompt engineering talent.</li>
                    <li class="mb4">Our proprietary Excel models drive pricing efficiencies and create actionable insights for our team’s quality pricing decisions.</li>
                </ul>
            </div>
            <NuxtImg src="/images/technology.jpg" class="flex-1 2lg:-mr-[80px] max-h-[500px] object-cover" />
            <ul class="list-circle my ml4 text-3.5 md:text-4.5 2lg:hidden">
                <li class="mb4">A dedicated business development team focused on increasing revenue.</li>
                <li class="mb4">Dynamic Pricing system ensures drivers always pay the optimal rate.</li>
                <li class="mb4">Enhanced enforcement reduces violator rates and recovers lost revenue.</li>
                <li class="mb4">No need for costly hardware or gate systems.</li>
            </ul>
        </div>
    </div>
    <div class="bg-e-primary text-white py15">
        <div class="w-content lt-lg-flex-col flex justify-between items-center lt-lg:text-center lg-items-end">
            <div class="lg:w-130 xl:w160">
                <h3 class="text-6 lg:text-8 xl:text-12 font700 mb6">Ready to make your parking famous? </h3>
                <p class="xl:text-5 font500">Allow us to put together a parking proposal that is customized for your lot.</p>
            </div>
            <button class="flex items-center gap1 lg-gap2 bg-white text-e-primary mt4 lg-mt0 px-4 xl-px8 py-3 xl-py4 text-3.5 lg:text-4 xl:text-6 rounded-3 font-600">
                <svg class="h5 w5 lg-h8 lg-w8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.88891 24.2511C4.87827 25.8447 6.18213 27.1662 7.77569 27.177L14.5568 27.2231C20.9669 27.2666 26.2163 22.0873 26.2591 15.6772C26.302 9.26716 21.1221 4.01709 14.712 3.97358L7.93095 3.92754C6.3374 3.91672 5.016 5.22043 5.00536 6.81399L4.88891 24.2511ZM6.82637 24.2643L6.94282 6.82715C6.94648 6.27885 7.36971 5.86127 7.91801 5.86499L14.6991 5.91103C20.061 5.94743 24.3575 10.3022 24.3217 15.6641C24.2859 21.026 19.9316 25.322 14.5697 25.2856L7.78863 25.2396C7.24033 25.2358 6.82271 24.8126 6.82637 24.2643ZM11.1182 20.7516C11.1158 21.1226 11.2838 21.4986 11.5657 21.7834C11.6971 21.9191 11.8542 22.0273 12.0279 22.1015C12.2015 22.1758 12.3882 22.2147 12.5771 22.216C12.766 22.2173 12.9532 22.1809 13.1278 22.109C13.3025 22.0371 13.461 21.9311 13.5942 21.7972L18.8661 16.5958C19.1406 16.3245 19.2962 15.9554 19.2988 15.5694C19.3014 15.1835 19.1507 14.8123 18.8799 14.5373L13.8282 9.38689C13.5569 9.11238 13.1877 8.95674 12.8018 8.95412C12.4158 8.9515 12.0447 9.10212 11.7697 9.37291C11.4952 9.64422 11.3396 10.0134 11.337 10.3993C11.3344 10.7852 11.4851 11.1565 11.7559 11.4315L15.8157 15.5453L11.5794 19.7249C11.2937 20.0068 11.1207 20.3805 11.1182 20.7516Z" class="fill-e-primary"/>
                </svg>
                 Get Proposal
            </button>
        </div>
    </div>
</template>