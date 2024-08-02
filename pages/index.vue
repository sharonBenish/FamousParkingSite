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

function goToDepartment(dpt:string) {
    router.push(`/departments/#${dpt}`)
}


const loading = ref(false)
const success = ref(false)

const contactForm = ref({
    firstname: '',
    lastName: '',
    email: '',
    number: '',
    city: '',
    address: '',
    message: '',
})
const FORMSPARK_ACTION_URL = "https://submit-form.com/b2Lf2bMuX"

async function submitForm() {
    success.value = false
    loading.value = true
    await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
        ...contactForm.value,
        }),
    }).then(()=>{
        success.value = true;
    }).catch(()=>{
        alert("Couldn't submit form")
    })
    .finally(()=>{
        loading.value = false
    })
}
</script>

<template>
    <!--HERO SECTION-->
    <div class="hero relative wfull h85dvh md:h85dvh 3xl:h70dvh bg-[url('/images/Hero-img.svg')] bg-center bg-cover -mt20 lg:-mt22">
        <div class="hero-text text-white absolute bottom-65 lg:bottom-75 lt-2xl:w-site 2xl:w-[80%] right-1/2 left-1/2 -translate-x-1/2 z-200 lg:pl-30">
            <h1 class="font-800 text-10 2md:text-12 lg:text-18 lg:w250 xl:300 mb6 lg:mb10" data-aos="fade-right" data-aos-delay="200" data-aos-easing="linear">Get Famous. Make Money.</h1>
            <div data-aos="fade-right" data-aos-delay="400" data-aos-easing="linear"  class="lg-flex lg-flex-row lg-gap-10 items-end">
                <p class="font-600 xl:text-6 md:w150 lg:wmax">Parking management that will make your lot known. Start today!</p>
                <button class="flex btn items-center gap1 lg-gap2 bg-e-primary mt4 lg-mt0 px-4 xl-px6 py-3 xl-py4 text-4 rounded-2 font-600" @click="goToContact()">
                    <svg class="h8 w8 text-white fill-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88891 24.2511C4.87827 25.8447 6.18213 27.1662 7.77569 27.177L14.5568 27.2231C20.9669 27.2666 26.2163 22.0873 26.2591 15.6772C26.302 9.26716 21.1221 4.01709 14.712 3.97358L7.93095 3.92754C6.3374 3.91672 5.016 5.22043 5.00536 6.81399L4.88891 24.2511ZM6.82637 24.2643L6.94282 6.82715C6.94648 6.27885 7.36971 5.86127 7.91801 5.86499L14.6991 5.91103C20.061 5.94743 24.3575 10.3022 24.3217 15.6641C24.2859 21.026 19.9316 25.322 14.5697 25.2856L7.78863 25.2396C7.24033 25.2358 6.82271 24.8126 6.82637 24.2643ZM11.1182 20.7516C11.1158 21.1226 11.2838 21.4986 11.5657 21.7834C11.6971 21.9191 11.8542 22.0273 12.0279 22.1015C12.2015 22.1758 12.3882 22.2147 12.5771 22.216C12.766 22.2173 12.9532 22.1809 13.1278 22.109C13.3025 22.0371 13.461 21.9311 13.5942 21.7972L18.8661 16.5958C19.1406 16.3245 19.2962 15.9554 19.2988 15.5694C19.3014 15.1835 19.1507 14.8123 18.8799 14.5373L13.8282 9.38689C13.5569 9.11238 13.1877 8.95674 12.8018 8.95412C12.4158 8.9515 12.0447 9.10212 11.7697 9.37291C11.4952 9.64422 11.3396 10.0134 11.337 10.3993C11.3344 10.7852 11.4851 11.1565 11.7559 11.4315L15.8157 15.5453L11.5794 19.7249C11.2937 20.0068 11.1207 20.3805 11.1182 20.7516Z" class="fill-inherit"/>
                    </svg>
                    Get In Touch
                </button>
            </div>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#222222] opacity-50"></div>
    </div>

    <!--WHAT WE DO-->
    <div class="min-h100 lg:bg-[url('/images/Vector.svg')] bg-no-repeat bg-pos-right-top mt-15 lg:mt-25 pb-15 lb-py25">
        <div class="w-content">
            <h2 class="border-l-e-primary pl2 lg-pl4 border-l-8 mb6 flex items-center gap-2 lg-gap-4 text-5 lg-text-8 font700 text-[#424242]">What we do for you 
                <span><svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.16666 16.5H30.8333M30.8333 16.5L21.5833 8.25M30.8333 16.5L21.5833 24.75" stroke="#4DB6AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </h2>
            <p class="text-4">At FamousParking we put the pieces together to ensure your parking asset receives industry leading attention to detail in pricing, customer service and operations. Our approach not only boosts your earnings but also aligns seamlessly with your broader business objectives.</p>
            <div class="flex justify-evenly lg-justify-center wfull relative my-20 lg-my40 image-container">
                <!--Detail In Pricing-->
                <div @click="router.push('/pricing')" class="w-1/3 h-auto relative lt-lg:flex-1 hover:big-110 hover:transition-transform cursor-pointer">
                    <img class="wfull hfull object-cover rounded-2" src="/images/Pricing.png"/>
                    <div class="absolute bottom-0 w-full py-0.5 lg-py2 bg-e-primary/50 text-3 lg-text-4 text-white text-center font-500 rounded-b-2">Detail In Pricing</div>
                </div>
                <!--Operations-->
                <div @click="router.push('/operations')" class="w-1/3 lt-lg:flex-1 lg-w-2/5 z-10 -mx-10 lt-lg:-mt-12 lg:-mx-12 lg:-my-12 relative hover:big-110 hover:transition-transform cursor-pointer">
                    <div class="h1 lg-h2 w-10 lg-w20 rounded mb2 lg-mb4 bg-e-primary mx-auto"></div>
                    <img class="wfull object-cover rounded-2" src="/images/Operations.png"/>
                    <div class="absolute bottom-8 lg-bottom-6 xl-bottom-7 w-full py-0.5 lg-py2 bg-e-primary/50 text-3 lg-text-4 text-white text-center font-500 rounded-b-2">Operations</div>
                </div>
                <!--Customer Service-->
                <div @click="router.push('/customer-service')" class="w-1/3 relative lt-lg:flex-1 hover:big-110 hover:transition-transform cursor-pointer">
                    <img class="wfull" src="/images/CustomerService.png"/>
                    <div class="absolute bottom-0 w-full py-0.5 lg-py2 bg-e-primary/50 text-3 lg-text-4 text-white text-center font-500 rounded-b-2">Customer Service</div>
                </div>
            </div>

            <button class="flex btn mx-auto items-center gap1 lg-gap2 bg-e-primary mt4 lg-mt0 px-4 xl-px6 py-3 xl-py4 text-4 border-2 border-e-primary rounded-2 font-600" @click="goToContact()">
                    <svg class="h8 w8 text-white fill-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88891 24.2511C4.87827 25.8447 6.18213 27.1662 7.77569 27.177L14.5568 27.2231C20.9669 27.2666 26.2163 22.0873 26.2591 15.6772C26.302 9.26716 21.1221 4.01709 14.712 3.97358L7.93095 3.92754C6.3374 3.91672 5.016 5.22043 5.00536 6.81399L4.88891 24.2511ZM6.82637 24.2643L6.94282 6.82715C6.94648 6.27885 7.36971 5.86127 7.91801 5.86499L14.6991 5.91103C20.061 5.94743 24.3575 10.3022 24.3217 15.6641C24.2859 21.026 19.9316 25.322 14.5697 25.2856L7.78863 25.2396C7.24033 25.2358 6.82271 24.8126 6.82637 24.2643ZM11.1182 20.7516C11.1158 21.1226 11.2838 21.4986 11.5657 21.7834C11.6971 21.9191 11.8542 22.0273 12.0279 22.1015C12.2015 22.1758 12.3882 22.2147 12.5771 22.216C12.766 22.2173 12.9532 22.1809 13.1278 22.109C13.3025 22.0371 13.461 21.9311 13.5942 21.7972L18.8661 16.5958C19.1406 16.3245 19.2962 15.9554 19.2988 15.5694C19.3014 15.1835 19.1507 14.8123 18.8799 14.5373L13.8282 9.38689C13.5569 9.11238 13.1877 8.95674 12.8018 8.95412C12.4158 8.9515 12.0447 9.10212 11.7697 9.37291C11.4952 9.64422 11.3396 10.0134 11.337 10.3993C11.3344 10.7852 11.4851 11.1565 11.7559 11.4315L15.8157 15.5453L11.5794 19.7249C11.2937 20.0068 11.1207 20.3805 11.1182 20.7516Z" class="fill-inherit"/>
                    </svg>
                    Get In Touch
            </button>
        </div>
    </div>

    <!--STATISTICS-->
    <div class="bg-e-primary/15 pt10 pb15 lg-pt20 lg-pb40 mb60 xs:mb70 2xs:mb80 2sm:mb90 md:mb100 2md:mb120 md:px10 lg:mb150 sm:px10 ">
        <div class="w-content relative">
            <div class="flex justify-between lt-2md:max-w-[500px] max-w-[800px] mx-auto">
                <div class="text-center">
                    <h3 class="text-5 lg-text-8 xl-text-10 text-[#424242] font700" data-aos="fade-down" data-aos-easing="linear">500+</h3>
                    <p class="text-3 xl-text-4 text-e-primary font600">Parking Locations</p>
                </div>
                <div class="text-center">
                    <h3 class="text-5 lg-text-8 xl-text-10 text-[#424242] font700" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">300,000+</h3>
                    <p class="text-3 xl-text-4 text-e-primary font600">Reservations</p>
                </div>
                <div class="text-center">
                    <h3 class="text-5 lg-text-8 xl-text-10 text-[#424242] font700" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="400">300+</h3>
                    <p class="text-3 xl-text-4 text-e-primary font600">Asset Owners</p>
                </div>
            </div>
            <div class="absolute left-0 right-0 -mt4 sm:-mt9 2sm:-mt10 2md:-mt12 lg:-mt15 xl:-mt12 w-full">
                <img class="w-full" data-aos="fade-up" data-aos-delay="600" src="/images/ChartSection.svg"/>
            </div>
        </div>
    </div>

    <!--CTA-->
    <div class="bg-e-primary text-white py15 lg:py20">
        <div class="w-content lt-lg-flex-col flex justify-between items-center lt-lg:text-center lg-items-end">
            <div class="lg:w-130 xl:w160">
                <h3 class="text-6 lg:text-8 xl:text-10 font700 mb6">Ready to make your parking famous? </h3>
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

    <!--About-->
    <div class="lg:w-content">
        <div class="w-content lg-my-20 shadow-custom lg-rounded-7 text-center px0 ">
            <div class="px-6 2md:px-20 lg-px30 py20" data-aos="fade-right">
                <div class="bg-e-primary h9 w9 lg-h12.5 lg-w12.5 rounded-full flex items-center justify-center mx-auto"><svg class="h5 w5 lg-h7.5 lg-w7.5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3 15.1625C26.475 15.1625 26.6375 15.2375 26.775 15.375L28.375 16.975C28.65 17.2375 28.65 17.675 28.375 17.9375L27.125 19.1875L24.5625 16.625L25.8125 15.375C25.95 15.2375 26.125 15.1625 26.3 15.1625ZM23.8375 17.35L26.4 19.9125L18.825 27.5H16.25V24.925L23.8375 17.35ZM23.75 3.75C25.125 3.75 26.25 4.875 26.25 6.25V11.25L13.75 23.75V26.25H6.25C4.875 26.25 3.75 25.125 3.75 23.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H11.475C12 2.3 13.375 1.25 15 1.25C16.625 1.25 18 2.3 18.525 3.75H23.75ZM15 3.75C14.3125 3.75 13.75 4.3125 13.75 5C13.75 5.6875 14.3125 6.25 15 6.25C15.6875 6.25 16.25 5.6875 16.25 5C16.25 4.3125 15.6875 3.75 15 3.75Z" fill="white"/>
                </svg></div>

                <h3 class="lg-text-6 font700 text-[#424242] my5">Our Commitment</h3>
                <p class="text-[#757575] text-3.5 lg-text-4.5 font500">Customers want to be heard and have their problems solved quickly. With an average response time of 1 minute, our commitment to a superior customer experience reduces refunds and increases repeat business, driving higher parking revenue.</p>
            </div>

            <!--<div class="bg-e-primary h0.5 w30 lg-w50 mx-auto my15"></div> -->

            <div class="bg-[#E4F4F3] px-6 2md:px-20 lg-px30 py20" data-aos="fade-left">
                <div class="bg-e-primary h9 w9 lg-h12.5 lg-w12.5 rounded-full flex items-center justify-center mx-auto"><svg class="h5 w5 lg-h7.5 lg-w7.5" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_276_795)">
                <path d="M14.0801 21.5214C14.2734 21.7904 14.6133 21.9697 15 21.9697C15.3867 21.9697 15.7266 21.7904 15.9258 21.5214L22.3828 12.546C23.25 11.3384 23.7539 10.0095 23.7539 8.46968C23.748 4.0189 19.8633 0.596436 15 0.596436C10.1367 0.596436 6.25195 4.0189 6.25195 8.46968C6.25195 10.0095 6.75586 11.3384 7.62305 12.546L14.0801 21.5214ZM15 3.97144C17.7598 3.97144 19.998 5.98589 19.998 8.46968C19.998 10.9535 17.7598 12.9679 15 12.9679C12.2402 12.9679 10.002 10.9535 10.002 8.46968C10.002 5.98589 12.2402 3.97144 15 3.97144ZM21.4102 17.656L15 25.3447L8.58984 17.656C6.39844 18.6896 4.99805 20.2347 4.99805 21.9697C4.99805 25.0757 9.47461 27.5964 15 27.5964C20.5254 27.5964 25.002 25.0757 25.002 21.9697C25.002 20.2347 23.6016 18.6896 21.4102 17.656Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_276_795">
                <rect width="30" height="27" fill="white" transform="translate(0 0.596436)"/>
                </clipPath>
                </defs>
                </svg>
                </div>

                <h3 class="lg-text-6 font700 text-[#424242] my5">Our Locations</h3>
                <p class="text-[#757575] text-3.5 lg-text-4.5 font500">With over 700 locations under management, FamousParking has a proven track record of parking management in all major US cities. We optimize for event, transient, and monthly parking based on demand. </p>
            </div>

            <!--<div class="bg-e-primary h0.5 w30 lg-w50 mx-auto my15"></div>-->

            <div class="px-6 2md:px-20 lg-px30 py20" data-aos="fade-right">
                <div class="bg-e-primary h9 w9 lg-h12.5 lg-w12.5 rounded-full flex items-center justify-center mx-auto"><svg class="h5 w5 lg-h7.5 lg-w7.5" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.60082C4 8.70617 4.34241 7.84816 4.9519 7.21555C5.5614 6.58294 6.38805 6.22754 7.25 6.22754H24.75C25.1768 6.22754 25.5994 6.31479 25.9937 6.48431C26.388 6.65384 26.7463 6.90231 27.0481 7.21555C27.3499 7.52879 27.5893 7.90065 27.7526 8.30992C27.9159 8.71918 28 9.15783 28 9.60082V14.7427C26.6317 13.9228 25.0795 13.4911 23.4996 13.4912C21.9196 13.4913 20.3675 13.9231 18.9992 14.7432C17.631 15.5633 16.4949 16.7428 15.7051 18.1631C14.9153 19.5834 14.4997 21.1945 14.5 22.8344H7.25C6.8232 22.8344 6.40059 22.7472 6.00628 22.5777C5.61197 22.4081 5.25369 22.1597 4.9519 21.8464C4.65011 21.5332 4.41072 21.1613 4.24739 20.7521C4.08406 20.3428 4 19.9041 4 19.4612V9.60082ZM15.436 26.9862C15.1202 26.3258 14.8809 25.629 14.723 24.9103H3C2.73478 24.9103 2.48043 25.0197 2.29289 25.2143C2.10536 25.409 2 25.673 2 25.9482C2 26.2235 2.10536 26.4875 2.29289 26.6822C2.48043 26.8768 2.73478 26.9862 3 26.9862H15.436ZM18.843 18.7211C18.9042 18.9286 18.9234 19.1469 18.8996 19.3625C18.8758 19.578 18.8094 19.7862 18.7046 19.9739C18.5997 20.1616 18.4587 20.3248 18.2903 20.4534C18.122 20.582 17.9299 20.6732 17.726 20.7212L16.19 21.0845C15.9481 22.1724 15.9344 23.3016 16.15 24.3955L17.848 24.8345C18.0462 24.8855 18.2324 24.9773 18.3956 25.1046C18.5588 25.2319 18.6956 25.392 18.7979 25.5754C18.9002 25.7588 18.9659 25.9617 18.991 26.1719C19.0161 26.3822 19.0001 26.5956 18.944 26.7993L18.448 28.5877C19.24 29.3379 20.1777 29.9031 21.198 30.2453L22.458 28.896C22.6006 28.7439 22.7711 28.623 22.9594 28.5405C23.1477 28.458 23.3501 28.4154 23.5545 28.4154C23.7589 28.4154 23.9613 28.458 24.1496 28.5405C24.3379 28.623 24.5084 28.7439 24.651 28.896L25.887 30.2162C26.906 29.8607 27.8394 29.2819 28.624 28.5192L28.157 26.9488C28.0957 26.7413 28.0763 26.5228 28.1 26.3071C28.1238 26.0915 28.1901 25.8832 28.295 25.6954C28.3998 25.5075 28.5409 25.3442 28.7094 25.2155C28.8778 25.0869 29.07 24.9957 29.274 24.9477L30.81 24.5844C31.0519 23.4965 31.0656 22.3673 30.85 21.2734L29.152 20.8343C28.954 20.7834 28.7678 20.6916 28.6047 20.5643C28.4416 20.4371 28.3048 20.2771 28.2025 20.0939C28.1002 19.9106 28.0346 19.7078 28.0094 19.4977C27.9842 19.2875 28.0001 19.0742 28.056 18.8706L28.552 17.0812C27.76 16.331 26.8223 15.7658 25.802 15.4236L24.542 16.7729C24.3994 16.925 24.2289 17.0458 24.0406 17.1284C23.8523 17.2109 23.6499 17.2534 23.4455 17.2534C23.2411 17.2534 23.0387 17.2109 22.8504 17.1284C22.6621 17.0458 22.4916 16.925 22.349 16.7729L21.113 15.4527C20.094 15.8082 19.1606 16.387 18.376 17.1497L18.843 18.7211ZM25.5 22.8344C25.5 23.385 25.2893 23.913 24.9142 24.3023C24.5391 24.6916 24.0304 24.9103 23.5 24.9103C22.9696 24.9103 22.4609 24.6916 22.0858 24.3023C21.7107 23.913 21.5 23.385 21.5 22.8344C21.5 22.2839 21.7107 21.7559 22.0858 21.3666C22.4609 20.9773 22.9696 20.7586 23.5 20.7586C24.0304 20.7586 24.5391 20.9773 24.9142 21.3666C25.2893 21.7559 25.5 22.2839 25.5 22.8344Z" fill="white"/>
                    </svg>
                </div>

                <h3 class="lg-text-6 font700 text-[#424242] my5">Our Technology</h3>
                <p class="text-[#757575] text-3.5 lg-text-4.5 font500">We are experts in online visibility, demand-based pricing, license plate readers, and enforcement technology to increase revenue. </p>
            </div>
        </div>
    </div>
    <!--Contact form-->
    <div id="contact" class="bg-[url('/images/ContactBg.jpg')] py15 lg-py30">
        <div class="w-content">
            <h2 class="border-l-e-primary pl2 lg-pl4 border-l-8 mb6 flex items-center gap-2 lg-gap-4 text-5 lg-text-9 font700 text-[#424242] mb10">Get in touch</h2>

            <form class="text-3 lg-text-4" @submit.prevent="submitForm" incomplete-message="Please fill out all the required fields">
                <div class="flex justify-between gap-10 lg-gap20 mb10 lt-lg:flex-wrap">
                    <div class="w-full lg-w-1/2 flex flex-col gap2">
                        <label for="firstname">First name</label>
                        <input v-model="contactForm.firstname" required id="firstname" name="firstname" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="First name" />
                    </div>
                    <div class="w-full lg-w-1/2 flex flex-col gap2">
                        <label for="lastname">Last name</label>
                        <input v-model="contactForm.lastName" required id="lastname" name="lastname" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="Last name" />
                    </div>
                </div>
                <div class="flex justify-between gap-10 lg-gap20 mb10 lt-lg:flex-wrap">
                    <div class="wfull lg-w-1/2 flex flex-col gap2">
                        <label for="email">Email</label>
                        <input v-model="contactForm.email" required id="email" name="email" type="email" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="Email" />
                    </div>
                    <div class="wfull lg-w-1/2 flex flex-col gap2">
                        <label for="number">Phone number</label>
                        <input v-model="contactForm.number" required name="number" id="number" type="tel" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="Phone number" />
                    </div>
                </div>
                <div class="flex flex-col gap2 mb10">
                    <label for="address">Parking facility address</label>
                    <input v-model="contactForm.address" required name="address" id="address" type="text" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="Parking facility address" />
                </div>
                <div class="flex flex-col gap2 mb10">
                    <label for="city">Parking facility city</label>
                    <input v-model="contactForm.city" required name="city" id="city" type="text" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="Parking facility city" />
                </div>
                <div class="flex flex-col gap2 mb10">
                    <label for="message">How can we help?</label>
                    <textarea v-model="contactForm.message" required id="message" name="message" rows="4" class="outline-0 px2.5 py3 border border-[#E2E1E5] bg-white rounded placeholder-[#D2D2D2]" placeholder="How can we help?"></textarea>
                </div>

                <Transition name="slide-fade">
                    <div v-if="success" class="my5 p5 border border-dashed border-green-6 text-green-6">
                        Thank you for reaching out, our team will review your inquiry and respond as soon as possible.
                    </div>
                </Transition>
                <div class="flex justify-end">
                    <button :disabled="loading" type="submit" class="bg-[#424242]! rounded-2.5 px8 py3 lg-px12 lg-py4 text-3 lg-text-3.725 text-white font700">
                        <span v-if="loading">Loading...</span>
                        <span v-else>Submit</span>
                    </button>
                </div>
            </form>
        </div> 
    </div>

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
#mc_embed_signup{
    background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}

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

.btn-white {
  color: #4DB6AC;
  background-image: linear-gradient(45deg, #4DB6AC 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: all 300ms ease-in-out; 
}
.btn-white:hover {
    background-position: 0;
    color:#fff;
    border: 2px solid #fff;
  }

.btn-white:hover > svg{
    fill: #fff
}
</style>