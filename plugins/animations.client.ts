import { defineNuxtPlugin } from '#app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      })

      // Register GSAP Plugins
      gsap.registerPlugin(ScrollTrigger)
    })
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
