<template>
  <div>
    <!-- Hero Section -->
    <section
      data-aos="fade-up"
      class="relative md:h-screen pt-10 flex items-center justify-center overflow-hidden bg-black"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/tools/bg.png"
          alt="Tools Background"
          class="w-full h-full object-cover opacity-30"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"
        ></div>
      </div>

      <!-- Animated Glow Effects -->
      <div
        class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e8bb6d]/10 rounded-full blur-[100px] animate-pulse z-0"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000 z-0"
      ></div>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 relative z-10 text-center pt-20">
        <div ref="heroText" class="gsap-hero-text opacity-0 translate-y-10">
          <h1
            class="text-3xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight"
          >
            The Yuktrix <br />
            <span class="text-[#e8bb6d]">Intelligence Stack</span>
          </h1>

          <p
            class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Built to help you
            <strong class="text-white font-semibold"
              >learn, research, build, test,</strong
            >
            and <strong class="text-white font-semibold">execute</strong> with
            clarity and confidence Simple. Powerful. Unified.
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-gray-500 animate-bounce"
      >
        <span class="text-xs uppercase tracking-widest opacity-70">Scroll</span>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <section class="container mx-auto px-6 space-y-10 md:space-y-32 py-10">
      <!-- Service 1: AI Trading OS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-1" data-aos="fade-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            01
          </div>
          <h2
            class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
          >
            AI Learning Intelligence
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            Learn the Market with AI
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            An AI that explains everything clearly. Indicators, candlesticks,
            options, patterns — in plain English.
          </p>
        </div>

        <div class="order-2 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/tools/ai.png"
              alt="AI Trading OS"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Service 2: Quant Intelligence Stack -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 relative" data-aos="fade-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/tools/research.png"
              alt="Quant Intelligence Stack"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="order-1 lg:order-2" data-aos="data-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            02
          </div>
          <h2
            class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
          >
            Research Intelligence
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            Understand Market Behaviour
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            Everything you need to understand the market. Market scanner, stock
            insights, sector heatmaps, and F&O dashboards.
          </p>
        </div>
      </div>

      <!-- Service 3: Institutional Intelligence Layer -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-2 relative" data-aos="fade-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/tools/build.png"
              alt="Institutional Intelligence Layer"
              class="md:w-[1200px] h-full object-cover"
            />
          </div>
        </div>

        <div class="order-1 lg:order-1" data-aos="data-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            03
          </div>
          <h2
            class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
          >
            Strategy Intelligence
          </h2>
          <h2
            class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
          >
            From Idea to Execution
          </h2>
          <div class="flex items-center gap-4 mb-8 flex-wrap">
            <div
              class="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white font-medium"
            >
              Idea
            </div>
            <span class="text-[#e8bb6d] text-2xl">→</span>
            <div
              class="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white font-medium"
            >
              Logic
            </div>
            <span class="text-[#e8bb6d] text-2xl">→</span>
            <div
              class="px-4 py-3 bg-[#e8bb6d]/10 rounded-lg border border-[#e8bb6d]/30 text-[#e8bb6d] font-bold"
            >
              Strategy
            </div>
          </div>
        </div>
      </div>

      <!-- Service 4: AI Tutor & Learning Engine -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-1 lg:order-2" data-aos="fade-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            04
          </div>
          <h2
            class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
          >
            Execution Intelligence
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            Automated Execution You Trust
          </p>
          <h3 class="text-white font-bold text-xl mb-3">Unified Broker API</h3>
          <p class="text-white/70 mb-4">
            One integration for all major Indian brokers:
          </p>
        </div>

        <div class="order-2 lg:order-1 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/tools/execution.png"
              alt="AI Tutor"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Service 5: API Wrapper & Unified Broker Layer -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        <div class="order-" data-aos="fade-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            05
          </div>
          <h2
            class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
          >
            Developer & Quant Tools
          </h2>
          <h2
            class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
          >
            Developer & Quant Intelligence (Pro Mode)
          </h2>
          <p class="text-white/70 text-lg mb-8 leading-relaxed">
            Tools for quants, analysts, and developers
          </p>
        </div>

        <div class="order-1 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/tools/library.png"
              alt="AI Tutor"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-32 bg-black text-center border-t border-white/10 overflow-hidden"
    >
      <!-- 1. Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="AI Technology Background"
          class="w-full h-full object-cover opacity-40"
        />
        <!-- Gradient Overlay for Readability -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"
        ></div>
      </div>

      <!-- 2. Glowing Orb Effect (Preserved & Enhanced) -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8bb6d]/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse"
      ></div>

      <!-- 3. Content Container -->
      <div class="container mx-auto px-4 relative z-10" data-aos="zoom-in">
        <!-- Small Badge -->
        <div class="mb-8 flex justify-center">
          <span
            class="px-4 py-1.5 rounded-full border border-[#e8bb6d]/30 bg-[#e8bb6d]/10 text-[#e8bb6d] text-4xl md:text-6xl font-semibold tracking-wide uppercase backdrop-blur-sm"
          >
            Yuktrix
          </span>
        </div>

        <!-- Main Heading -->
        <h3
          class="text-4xl md:text-6xl font-display font-bold max-w-[1440px] mx-auto leading-tight mb-8 text-white drop-shadow-lg"
        >
          Where Data Awakens <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#e8bb6d] to-white"
            >Intelligence</span
          >
        </h3>

        <!-- Subtext -->
        <p
          class="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          <strong class="text-white font-medium">Yuktrix</strong> — Your AI
          companion for smarter trading and investing.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            @click="openRegistrationModal"
            class="group relative bg-[#e8bb6d] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden"
          >
            <span class="relative z-10"> Get Started For Free </span>
            <div
              class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>
    <RegistrationModal />
  </div>
</template>

<script setup>
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const heroText = ref(null);

onMounted(() => {
  // Animate hero text in
  if (heroText.value) {
    gsap.to(heroText.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }
});
</script>
