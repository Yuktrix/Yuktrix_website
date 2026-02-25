<template>
  <!-- Unified Header: High Z-index with standard container alignment -->
  <header 
    class="fixed top-0 left-0 right-0 z-[150] bg-[#090a0a]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 transform-gpu w-full"
  >
    <!-- container mx-auto px-6 ensures alignment with About/Home page content -->
    <div class="container mx-auto px-6 h-20 flex items-center justify-between relative">
      
      <!-- Logo Brand -->
      <NuxtLink to="/" class="flex items-center gap-3 group relative z-[160] shrink-0">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#db961f]/50 transition-all duration-500 bg-white/5 flex items-center justify-center relative shadow-2xl">
          <img 
            src="/logo.png" 
            alt="Yuktrix Logo" 
            class="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-125" 
            @error="$event.target.style.display = 'none'" 
          />
          <div class="absolute inset-0 bg-gradient-to-tr from-[#db961f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <span class="text-lg md:text-2xl font-display font-bold tracking-[0.2em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#db961f] transition-all uppercase">
          Yuktrix
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide"
          active-class="text-[#db961f] font-bold"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Action Area -->
      <div class="flex items-center gap-3 relative z-[160] shrink-0">
        <button @click="openRegistrationModal" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-[#090a0a] bg-gradient-to-r from-[#db961f] to-[#FEE337] rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(219,150,31,0.2)]">
          Book Consultation
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden flex items-center justify-center w-11 h-11 text-white hover:text-[#db961f] transition-all rounded-full bg-white/5 border border-white/10 active:scale-95"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Full-Screen Mobile Navigation Overlay -->
    <Transition name="menu-anim">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[200] md:hidden h-screen w-screen overflow-hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-[#090a0a] backdrop-blur-3xl" @click="closeMenu"></div>
        
        <!-- Menu Content: Optimized for visibility and scrolling -->
        <div class="relative h-full w-full flex flex-col items-center justify-start pt-24 px-8 overflow-y-auto">
          <!-- Background Decoration -->
          <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#db961f]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <nav class="flex flex-col items-center gap-2 w-full max-w-xs relative z-10">
            <NuxtLink
              v-for="(item, index) in navItems"
              :key="item.to"
              :to="item.to"
              class="text-xl font-display font-bold text-white/90 hover:text-[#db961f] transition-all tracking-[0.2em] uppercase text-center w-full py-4 border-b border-white/5"
              active-class="text-[#db961f] border-[#db961f]/40"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
            
            <button
              @click="handleConsultation"
              class="w-full mt-8 flex items-center justify-center px-8 py-4 text-base font-bold text-[#090a0a] bg-gradient-to-r from-[#db961f] to-[#FEE337] rounded-full shadow-2xl active:scale-95 transition-all uppercase tracking-widest"
            >
              Book Consultation
            </button>
          </nav>
          
          <button @click="closeMenu" class="mt-auto mb-10 p-4 text-white/30 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-[0.4em]">
            Exit Navigator
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRegistration } from "~/composables/useRegistration";
import { useRoute } from "vue-router";

const { openRegistrationModal } = useRegistration();
const route = useRoute();

const navItems = [
  { label: "Home", to: "/" },
  { label: "The Firm", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Tools", to: "/tools" },
  { label: "Blog", to: "/blog" },
];

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

const handleConsultation = () => {
  openRegistrationModal();
  closeMenu();
};

watch(() => route.fullPath, closeMenu);

watch(isMenuOpen, (val) => {
  if (process.client) {
    if (val) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
  }
});
</script>

<style scoped>
.menu-anim-enter-active, .menu-anim-leave-active { transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.menu-anim-enter-from, .menu-anim-leave-to { opacity: 0; transform: translateY(-20px); }
:global(body.menu-open) { position: fixed; width: 100%; height: 100%; }
</style>