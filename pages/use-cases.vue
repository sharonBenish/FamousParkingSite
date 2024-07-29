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
    <div class="hero relative wfull h60dvh 3xl:h70dvh bg-[url('/images/usecases-hero.jpg')] bg-cover bg-no-repeat -mt20 lg:-mt24 text-[#424242]">
        <div class="hero-text text-white absolute bottom-10 w-site right-1/2 left-1/2 -translate-x-1/2 z-200">
            <h1 class="font-800 text-9 2md:text-12 lg-text-16 lg-w180">Use Cases</h1>
        </div>
        <div class="overlay absolute top-0 hfull wfull bg-[#000000] opacity-40"></div>
    </div>

    <div class="bg-[#D] pt10 pb15 lg:pt20 lg:pb30">
        <div class="w-content">
            <!--<h3 class="fw700 text-6 lg:text-8 lg:text-center mb8 lg:mb12">Features</h3>-->
            <div class="flex flex-col md:flex-row lt-md:gap8 gap4 2lg:gap8 justify-between lt-md:items-center">
                <div class="bg-e-primary rounded-5 overflow-hidden lg:w-1/3 shadow-custom lt-md:max-w-[300px]">
                    <div class="bg-white pt6 lg:pt8 pb2">
                        <svg class="h6 w6 lg:h8 lg:w8 mx-auto" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.1875 18.2812H40.2891L35.4059 7.29492C35.1849 6.79786 34.8245 6.37555 34.3683 6.07916C33.9122 5.78276 33.3799 5.62501 32.8359 5.625H12.1641C11.6201 5.62501 11.0878 5.78276 10.6317 6.07916C10.1755 6.37555 9.81513 6.79786 9.59414 7.29492L4.71094 18.2812H2.8125C2.43954 18.2812 2.08185 18.4294 1.81813 18.6931C1.55441 18.9569 1.40625 19.3145 1.40625 19.6875C1.40625 20.0605 1.55441 20.4181 1.81813 20.6819C2.08185 20.9456 2.43954 21.0938 2.8125 21.0938H4.21875V35.1562C4.21875 35.9022 4.51507 36.6175 5.04251 37.145C5.56996 37.6724 6.28533 37.9688 7.03125 37.9688H11.25C11.9959 37.9688 12.7113 37.6724 13.2387 37.145C13.7662 36.6175 14.0625 35.9022 14.0625 35.1562V33.75H30.9375V35.1562C30.9375 35.9022 31.2338 36.6175 31.7613 37.145C32.2887 37.6724 33.0041 37.9688 33.75 37.9688H37.9688C38.7147 37.9688 39.43 37.6724 39.9575 37.145C40.4849 36.6175 40.7812 35.9022 40.7812 35.1562V21.0938H42.1875C42.5605 21.0938 42.9181 20.9456 43.1819 20.6819C43.4456 20.4181 43.5938 20.0605 43.5938 19.6875C43.5938 19.3145 43.4456 18.9569 43.1819 18.6931C42.9181 18.4294 42.5605 18.2812 42.1875 18.2812ZM14.0625 26.7188H9.84375C9.47079 26.7188 9.1131 26.5706 8.84938 26.3069C8.58566 26.0431 8.4375 25.6855 8.4375 25.3125C8.4375 24.9395 8.58566 24.5819 8.84938 24.3181C9.1131 24.0544 9.47079 23.9062 9.84375 23.9062H14.0625C14.4355 23.9062 14.7931 24.0544 15.0569 24.3181C15.3206 24.5819 15.4688 24.9395 15.4688 25.3125C15.4688 25.6855 15.3206 26.0431 15.0569 26.3069C14.7931 26.5706 14.4355 26.7188 14.0625 26.7188ZM35.1562 26.7188H30.9375C30.5645 26.7188 30.2069 26.5706 29.9431 26.3069C29.6794 26.0431 29.5312 25.6855 29.5312 25.3125C29.5312 24.9395 29.6794 24.5819 29.9431 24.3181C30.2069 24.0544 30.5645 23.9062 30.9375 23.9062H35.1562C35.5292 23.9062 35.8869 24.0544 36.1506 24.3181C36.4143 24.5819 36.5625 24.9395 36.5625 25.3125C36.5625 25.6855 36.4143 26.0431 36.1506 26.3069C35.8869 26.5706 35.5292 26.7188 35.1562 26.7188ZM7.78887 18.2812L12.1641 8.4375H32.8359L37.2111 18.2812H7.78887Z" fill="#4DB6AC"/>
    </svg>

                        <h4 class="text-4 fw700 text-center my2 w-[80%] lg:w-[60%] mx-auto">Increased Parking Revenue</h4>
                    </div>
                    <p class="bg-e-primary text-white rounded-b-5 px6 lg:px8 pt6 pb8 text-3.5">Parking lot owners who switch to FamousParking from a traditional parking management company see an increase in revenue.</p>
                </div>
                <div class="bg-e-primary lg:w-1/3 rounded-5 overflow-hidden shadow-custom lt-md:max-w-[300px]">
                    <div class="bg-white pt6 lg:pt8 pb2">
                        <svg class="w6 h6 lg:h8 lg:w8 mx-auto" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.3313 27.3562L37.9875 24.8812C38.2869 23.0774 38.2487 21.2336 37.875 19.4437L40.1625 16.9687C40.3401 16.7709 40.4587 16.5273 40.5051 16.2656C40.5515 16.0038 40.5238 15.7343 40.425 15.4875C39.4764 13.1429 38.0747 11.0084 36.3 9.20623C36.1265 9.03283 35.9102 8.9085 35.6731 8.84592C35.4359 8.78334 35.1864 8.78474 34.95 8.84998L31.5 9.73123C30.4377 8.96744 29.2853 8.33768 28.0687 7.85623L27.225 4.63123C27.1623 4.36966 27.024 4.13235 26.8272 3.94894C26.6305 3.76553 26.3841 3.64416 26.1187 3.59998C24.9504 3.38073 23.7637 3.27399 22.575 3.28123C21.0876 3.28747 19.6069 3.48278 18.1687 3.86248C17.9287 3.92281 17.7096 4.04709 17.5346 4.22208C17.3596 4.39707 17.2353 4.61622 17.175 4.85623L16.275 8.17498C15.2689 8.62174 14.3134 9.17489 13.425 9.82498L10.0125 8.98123C9.7729 8.91859 9.5208 8.92214 9.28306 8.99148C9.04532 9.06082 8.83085 9.19336 8.6625 9.37498C6.79832 11.3116 5.37235 13.6264 4.48125 16.1625C4.39483 16.4076 4.3771 16.6717 4.42998 16.9262C4.48286 17.1807 4.60433 17.4158 4.78125 17.6062L7.14375 20.0625C7.02413 20.8507 6.96146 21.6465 6.95625 22.4437C6.95625 23.0062 6.95625 23.5687 7.05 24.1312L4.59375 26.8687C4.42845 27.0507 4.31376 27.2729 4.26112 27.5131C4.20848 27.7532 4.21973 28.003 4.29375 28.2375C5.06426 30.7166 6.34122 33.0088 8.04375 34.9687C8.21498 35.1701 8.43949 35.3191 8.69153 35.3987C8.94357 35.4783 9.21294 35.4852 9.46875 35.4187L12.6937 34.5937C13.8222 35.5446 15.0861 36.3219 16.4437 36.9L17.3812 40.2562C17.4535 40.4995 17.5886 40.7195 17.7729 40.894C17.9572 41.0685 18.1843 41.1912 18.4312 41.25C19.7831 41.5556 21.1669 41.7131 22.5562 41.7187C23.6625 41.7075 24.765 41.6006 25.8562 41.4C26.1151 41.3543 26.3559 41.2369 26.5515 41.0613C26.747 40.8856 26.8894 40.6587 26.9625 40.4062L27.8438 37.2375C29.4626 36.6583 30.9715 35.8088 32.3062 34.725L35.6063 35.475C35.8537 35.5325 36.1122 35.5209 36.3536 35.4416C36.595 35.3622 36.8099 35.2181 36.975 35.025C38.6186 33.1999 39.8922 31.073 40.725 28.7625C40.7923 28.5144 40.7913 28.2527 40.722 28.0051C40.6526 27.7575 40.5176 27.5333 40.3313 27.3562ZM22.725 29.7375C21.7774 29.7552 20.8358 29.5842 19.955 29.2345C19.0741 28.8848 18.2717 28.3632 17.5944 27.7003C16.9171 27.0374 16.3785 26.2464 16.0099 25.3732C15.6413 24.5001 15.4502 23.5624 15.4475 22.6147C15.4449 21.6669 15.6309 20.7282 15.9947 19.853C16.3584 18.9779 16.8927 18.1839 17.5663 17.5173C18.24 16.8506 19.0395 16.3247 19.9184 15.9701C20.7973 15.6155 21.738 15.4393 22.6856 15.4519C24.5803 15.4469 26.3993 16.1948 27.7425 17.531C29.0857 18.8671 29.8432 20.6822 29.8481 22.5769C29.8531 24.4715 29.1052 26.2905 27.769 27.6337C26.4328 28.977 24.6178 29.7344 22.7231 29.7394" fill="#4DB6AC"/>
    </svg>

                        <h4 class="text-4 fw700 text-center my2 w-[80%] lg:w-[80%] mx-auto">Local Operations and Enforcement </h4>
                    </div>
                    <p class="bg-e-primary text-white px6 lg:px8 pt6 pb8 relative bottom-0 text-3.5">Our local operations and enforcement teams provide 24/7 parking lot management to keep your property running smoothly.</p>
                </div>
                <div class="bg-e-primary rounded-5 overflow-hidden lg:w-1/3 shadow-custom lt-md:max-w-[300px]">
                    <div class="bg-white pt6 lg:pt8 pb2">
                        <svg class="h6 w6 lg:h8 lg:w8 mx-auto" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2.8125H14.1562C12.0391 2.8125 10.1484 4.31543 9.44531 6.55664L0.242188 35.7891C0.0859375 36.2988 0 36.8438 0 37.3887C0 40.0342 1.91406 42.1875 4.26562 42.1875H20V36.5625C20 35.0068 21.1172 33.75 22.5 33.75C23.8828 33.75 25 35.0068 25 36.5625V42.1875H40.7344C43.0938 42.1875 45 40.0342 45 37.3887C45 36.8438 44.9141 36.2988 44.7578 35.7891L35.5547 6.55664C34.8438 4.31543 32.9609 2.8125 30.8438 2.8125H25V8.4375C25 9.99316 23.8828 11.25 22.5 11.25C21.1172 11.25 20 9.99316 20 8.4375V2.8125ZM25 19.6875V25.3125C25 26.8682 23.8828 28.125 22.5 28.125C21.1172 28.125 20 26.8682 20 25.3125V19.6875C20 18.1318 21.1172 16.875 22.5 16.875C23.8828 16.875 25 18.1318 25 19.6875Z" fill="#4DB6AC"/>
    </svg>

                        <h4 class="text-4 fw700 text-center my2 w-[80%] lg:w-[80%] mx-auto">Real Time Performance Tracking</h4>
                    </div>
                    <p class="bg-e-primary text-white rounded-b-5 px6 lg:px8 pt6 pb8 text-3.5">Our monthly report contains the data you need to understand and align your parking operations with your broader business goals.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white py10 2lg:pb50 2lg:pt30 lg:pt20 my10 lt-2xs:bg-[url('/images/usecasemobile.svg')] lg:bg-[url('/images/usecasesvg.svg')] bg-no-repeat lt-2xs:bg-sm-size lg:bg-lg-size">
        <div class="w-content2 flex-col lg:flex-row flex gap10">
            <div class="lg:w-[45%]">
                <h3 class="fw800 text-5 md:text-6 mb10 md:text-center lg:text-left lg:max-w-[400px]">FamousParking handles parking asset types including garages, open air lots, off airport, mixed use and hotels </h3>
                <p class="fw600 text-4 lg:text-4.5">FamousParking for across parking asset types </p>
                <ul class="list-circle my3 ml4 text-4 lt-lg:hidden lg:max-w-[400px]">
                    <li class="mb4">A dedicated business development team focused on increasing revenue.</li>
                    <li class="mb4">Dynamic Pricing system ensures drivers always pay the optimal rate.</li>
                    <li class="mb4">Enhanced enforcement reduces violator rates and recovers lost revenue.</li>
                    <li class="mb4">No need for costly hardware or gate systems.</li>
                </ul>
            </div>
            <div class="lg:flex-1 sm:max-w-[600px]">
                <div class="flex justify-center gap3 lg:gap5 ml4 lg:ml10 mb3 lg:mb5" data-aos="fade-left">
                    <NuxtImg src="/images/park1.jpg" class="flex-auto w-1/2 lt-2lg:max-h-[200px] object-contain" />
                    <NuxtImg src="/images/park2.jpg" class="flex-auto w-1/2 lt-2lg:max-h-[200px] object-contain" />
                </div>
                <div class="flex justify-between gap3 lg:gap5 mr4 lg:mr10" data-aos="fade-right">
                    <NuxtImg src="/images/park3.jpg" class="flex-auto w-1/2 lt-2lg:max-h-[200px] object-contain" />
                    <NuxtImg src="/images/park5.jpg" class="flex-auto w-1/2 lt-2lg:max-h-[200px] object-contain" />
                </div>
            </div>
            <ul class="list-circle my ml4 text-3.5 md:text-4.5 lg:hidden">
                <li class="mb4">A dedicated business development team focused on increasing revenue.</li>
                <li class="mb4">Dynamic Pricing system ensures drivers always pay the optimal rate.</li>
                <li class="mb4">Enhanced enforcement reduces violator rates and recovers lost revenue.</li>
                <li class="mb4">No need for costly hardware or gate systems.</li>
            </ul>
        </div>
    </div>

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
</template>

<style scoped>
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