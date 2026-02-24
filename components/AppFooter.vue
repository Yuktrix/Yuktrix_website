<template>
  <footer class="bg-[#090a0a] border-t border-white/10 pt-20 pb-10 overflow-hidden relative selection:bg-[#db961f] selection:text-black font-sans">
    <!-- Ambient Background Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#db961f]/5 blur-[120px] rounded-t-full pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        <!-- Left Brand Column -->
        <div class="lg:col-span-8">
          <NuxtLink to="/" class="flex items-center gap-4 group mb-8 inline-flex">
            <!-- Optimized Logo Container: Removed padding and added overflow-hidden for the zoom effect -->
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center border border-white/10 group-hover:border-[#db961f]/50 transition-all duration-500 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-lg">
              <img 
                src="/logo.png" 
                alt="Yuktrix Logo" 
                class="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-125" 
                @error="$event.target.style.display = 'none'" 
              />
              <!-- Subtle overlay glow matching the header's aesthetic -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#db961f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            <span class="text-3xl md:text-5xl font-display font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#db961f] uppercase">
              YUKTRIX
            </span>
          </NuxtLink>
          
          <h3 class="text-xl md:text-3xl font-light text-white mb-6 leading-snug">
            Where Quant discipline meets <br/><span class="font-bold text-[#db961f]">Automation Intelligence.</span>
          </h3>
          
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-3 mt-8">
            <span v-for="tag in ['Investing', 'Trading', 'Wealth Insights', 'Automation']" :key="tag" class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-mono tracking-widest uppercase shadow-sm">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Right Info & Social Column -->
        <div class="lg:col-span-4 flex flex-col lg:items-end justify-end">
          <div class="text-left lg:text-right mb-10">
            <div class="font-mono text-xs font-bold text-[#db961f] tracking-[0.2em] mb-3 uppercase">Headquarters</div>
            <p class="text-white/60 text-sm leading-relaxed">
              Designed in India.<br />
              Engineered for Global Markets.
            </p>
          </div>
          
          <!-- Social Icons -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#090a0a] hover:bg-[#db961f] hover:border-[#db961f] transition-all duration-300 shadow-lg group"
            >
              <component :is="social.icon" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright & Legal -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-white/40 text-[11px] md:text-xs font-mono tracking-[0.2em] uppercase text-center md:text-left">
          © {{ new Date().getFullYear() }} Yuktrix. All rights reserved.
        </p>
        <div class="flex gap-8 text-xs md:text-sm font-medium">
          <a href="#" class="text-white/50 hover:text-[#db961f] transition-colors tracking-wide">Privacy Policy</a>
          <a href="#" class="text-white/50 hover:text-[#db961f] transition-colors tracking-wide">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { h } from "vue";

// Custom SVG Icons ensuring crisp rendering without external library bloat
const TwitterIcon = h("svg", { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" }, [
  h("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }),
]);

const LinkedInIcon = h("svg", { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" }, [
  h("path", { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }),
]);

const InstagramIcon = h("svg", { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" }, [
  h("path", { d: "M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.56 4 20 5.44 20 7.75v8.5C20 18.56 18.56 20 16.25 20h-8.5C5.44 20 4 18.56 4 16.25v-8.5C4 5.44 5.44 4 7.75 4zm4.25 3.5A4.75 4.75 0 107.25 12 4.756 4.756 0 0012 7.5zm0 2A2.75 2.75 0 119.25 12 2.753 2.753 0 0112 9.5zm4.75-2.75a1 1 0 11-1 1 1 1 0 011-1z" }),
]);

const GmailIcon = h("svg", { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" }, [
  h("path", { d: "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 6.155a1 1 0 001.228 0L20 8.236V18H4z" }),
]);

// Social Links Data
const socialLinks = [
  { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/company/yuktrixin/" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/yuktrix/" },
  { name: "Twitter", icon: TwitterIcon, href: "https://x.com/yuktrix" },
  { name: "Gmail", icon: GmailIcon, href: "mailto:ceo@yuktrix.org" },
];
</script>