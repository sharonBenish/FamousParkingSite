import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      nuxtApp.hook('app:mounted', () => {
        if (window.innerWidth >= 1024){
        AOS.init({
          disable: 'mobile',
          duration: 500,
          easing: 'ease-in-out-cubic',
          once: true,
          // offset: 200, // Uncomment or adjust as needed
        })};
      });
    }
  });