<template>
  <!-- Footer -->
  <footer class="bg-black border-t border-white/10 py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <NuxtLink to="/" class="flex items-center md:-ml-6 group">
              <div class="flex items-center">
                <div
                  class="md:w-[102px] md:h-[102px] w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/logo.png"
                    alt="Yuktrix Logo"
                    class="w-full h-full object-contain"
                    @error="$event.target.style.display = 'none'"
                  />
                </div>
                <img src="/logo2.png" class="w-[130px]" alt="" />
              </div>
            </NuxtLink>
          </div>
          <h3 class="text-white font-bold text-lg mb-2">
            It Reads. It Reasons. It Trades.”
          </h3>
          <p class="text-white/70 mb-4">
            Investing | Trading | Wealth Insights | Automation
          </p>
          <p class="text-white/60 text-sm mb-6">
            Designed in India.<br />
            Made for Everyone.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              href="#"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#e8bb6d] hover:border-[#e8bb6d] transition-all"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="text-white font-bold mb-4">{{ section.title }}</h4>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link">
              <a
                href="#"
                class="text-white/70 hover:text-[#e8bb6d] transition-all text-sm"
                >{{ link }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-white/60 text-sm">
          © 2025 Yuktrix. All rights reserved.
        </p>
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-white/60 hover:text-[#e8bb6d] transition-all"
            >Privacy Policy</a
          >
          <a href="#" class="text-white/60 hover:text-[#e8bb6d] transition-all"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, h, onMounted } from "vue";
import {
  ChartBarIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  BoltIcon,
  AcademicCapIcon,
  UserGroupIcon,
  // ... other Heroicons you might need
} from "@heroicons/vue/24/outline";

const { $gsap } = useNuxtApp();
const activeFAQ = ref(null);

// const footerLinks = [
//   {
//     title: "Product",
//     links: ["Features", "Pricing", "Roadmap", "Changelog", "Status"],
//   },
//   {
//     title: "Resources",
//     links: [
//       "Documentation",
//       "API Reference",
//       "Blog",
//       "Help Center",
//       "Community",
//     ],
//   },
//   {
//     title: "Company",
//     links: ["About Us", "Careers", "Press", "Contact", "Legal"],
//   },
// ];

// Define simple SVG components for brand icons
const TwitterIcon = h(
  "svg",
  { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
  [
    h("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    }),
  ]
);

const LinkedInIcon = h(
  "svg",
  { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
  [
    h("path", {
      d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
    }),
  ]
);

const DiscordIcon = h(
  "svg",
  { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
  [
    h("path", {
      d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037 13.459 13.459 0 00-.59 1.227 18.356 18.356 0 00-8.726 0 13.62 13.62 0 00-.592-1.227.074.074 0 00-.08-.037 19.736 19.736 0 00-4.885 1.515.071.071 0 00-.035.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
    }),
  ]
);

const GitHubIcon = h(
  "svg",
  { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
  [
    h("path", {
      d: "M12 2C6.475 2 2 6.475 2 12a10 10 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.362 1.087 2.937.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z",
    }),
  ]
);

// Updated socialLinks array using component references
const socialLinks = [
  { name: "Twitter", icon: TwitterIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "Discord", icon: DiscordIcon },
  { name: "GitHub", icon: GitHubIcon },
];

function toggleFAQ(index) {
  activeFAQ.value = activeFAQ.value === index ? null : index;
}

onMounted(() => {
  $gsap.to(".gsap-hero-text", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.1,
  });
});
</script>
