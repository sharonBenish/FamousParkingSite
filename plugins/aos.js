import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      nuxtApp.hook('app:mounted', () => {
        AOS.init({
          disable: false,
          duration: 600,
          easing: 'ease-in-out-cubic',
          once: true,
          // offset: 200, // Uncomment or adjust as needed
        });
      });
    }
  });