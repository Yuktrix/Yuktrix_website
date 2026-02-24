<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#090a0a]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Logo Brand -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <!-- Optimized Logo Container: Removed padding to "zoom" the actual image -->
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#db961f]/50 transition-all duration-500 bg-white/5 flex items-center justify-center relative shadow-2xl">
          <!-- The logo image now scales up on group hover for a creative, dynamic feel -->
          <img 
            src="/logo.png" 
            alt="Yuktrix Logo" 
            class="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-125" 
            @error="$event.target.style.display = 'none'" 
          />
          <!-- Subtle overlay glow for depth -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#db961f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <span class="text-xl md:text-2xl font-display font-bold tracking-[0.2em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#db961f] transition-all uppercase">
          Yuktrix
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink to="/" class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide">Home</NuxtLink>
        <NuxtLink to="/about" class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide">The Firm</NuxtLink>
        <NuxtLink to="/services" class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide">Services</NuxtLink>
        <NuxtLink to="/tools" class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide">Tools</NuxtLink>
        <NuxtLink to="/blog" class="text-sm font-medium text-white/70 hover:text-[#db961f] transition-colors tracking-wide">Blog</NuxtLink>
      </nav>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <button @click="openRegistrationModal" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-[#090a0a] bg-gradient-to-r from-[#db961f] to-[#FEE337] rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(219,150,31,0.2)]">
          Book Consultation
        </button>
        
        <!-- Mobile Menu Icon -->
        <button class="md:hidden text-white/80 hover:text-[#db961f] p-2 transition-colors">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

    </div>
  </header>
</template>

<script setup>
import { useRegistration } from "~/composables/useRegistration";
const { openRegistrationModal } = useRegistration();
</script>