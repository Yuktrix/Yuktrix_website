<template>
  <div>
    <header
      class="fixed w-full top-0 z-50 transition-all duration-300"
      :class="[
        mobileMenuOpen
          ? 'bg-yuktrix-black/96 backdrop-blur-xl border-b border-white/10'
          : isScrolled
          ? 'bg-yuktrix-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent',
        !showHeader ? '-translate-y-full' : 'translate-y-0',
      ]"
    >
      <div class="px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo Section (Left) -->
          <NuxtLink to="/" class="flex items-center group">
            <div class="flex items-center">
              <div
                class="md:w-[80px] md:h-[80px] w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center overflow-hidden"
              >
                <img
                  src="/logo.png"
                  alt="Yuktrix Logo"
                  class="w-[90px] object-contain"
                />
              </div>
              <img src="/logo2.png" class="w-[130px]" alt="" />
            </div>
          </NuxtLink>

          <!-- Navigation & CTA (Right) -->
          <div class="flex items-center space-x-8">
            <!-- Navigation -->
            <nav class="hidden md:flex gap-7 items-center">
              <NuxtLink
                v-for="link in links"
                :key="link.path"
                :to="link.path"
                class="text-base font-medium text-gray-300 hover:text-[#e8bb6d] transition-colors relative px-1 py-0.5"
                active-class="text-[#e8bb6d]"
              >
                {{ link.name }}
                <span
                  v-if="$route.path === link.path"
                  class="block mx-auto mt-1 h-1 w-5 rounded bg-[#e8bb6d]"
                />
              </NuxtLink>
            </nav>

            <!-- CTA Button -->
            <button
              @click="openRegistrationModal"
              class="bg-[#e8bb6d] text-black px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#e8bb6d]Hover transition-all hover:scale-105 whitespace-nowrap shadow-md hidden md:block"
            >
              Get Early Access
            </button>

            <!-- Mobile Menu Button -->
            <button
              class="md:hidden text-white hover:text-[#e8bb6d] transition-colors p-2"
              @click="toggleMobileMenu"
            >
              <svg
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu (Dropdown) -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute w-full bg-white border-t border-white/10"
      >
        <nav class="flex flex-col p-8 gap-4">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="text-black text-lg font-medium hover:text-[#e8bb6d] transition-colors py-2"
            active-class="text-[#e8bb6d]"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
          <button
            @click="openRegistrationModal"
            class="bg-[#e8bb6d] text-black px-4 py-3 rounded-full font-bold text-base hover:bg-[#e8bb6d]Hover transition-all w-full mt-2 shadow"
          >
            Get Early Access
          </button>
        </nav>
      </div>
    </header>
    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const { openRegistrationModal } = useRegistration();

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Tools", path: "/tools" },
  { name: "Blog", path: "/blog" },
];

const isScrolled = ref(false);
const showHeader = ref(true);
const mobileMenuOpen = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Update isScrolled for background effects
  isScrolled.value = currentScrollY > 20;

  // Show/hide header based on scroll direction
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down & past 100px
    showHeader.value = false;
  } else {
    // Scrolling up or at top
    showHeader.value = true;
  }

  lastScrollY = currentScrollY;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  lastScrollY = window.scrollY;
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const $route = useRoute();
</script>
