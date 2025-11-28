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
          <span
            class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[#e8bb6d] text-xs font-bold tracking-widest mb-8 uppercase"
          >
            <span
              class="w-2 h-2 rounded-full bg-[#e8bb6d] animate-pulse"
            ></span>
            Platform Tools
          </span>

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

    <!-- Tool 1: AI Learning Intelligence -->
    <section
      class="py-4 md:py-24 bg-gradient-to-b from-black to-black relative overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e8bb6d]/5 via-transparent to-transparent"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <!-- Content -->
          <div data-aos="fade-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#e8bb6d]/10 rounded-full mb-6 border border-[#e8bb6d]/20"
            >
              <span
                class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
                >AI Learning Intelligence</span
              >
            </div>
            <h2
              class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
            >
              Learn the Market with AI
            </h2>
            <p class="text-white/70 text-lg mb-8 leading-relaxed">
              An AI that explains everything clearly. Indicators, candlesticks,
              options, patterns — in plain English.
            </p>
          </div>

          <!-- Image -->
          <div
            class="relative rounded-xl overflow-hidden -mt-10 md:mt-0 shadow-2xl shadow-[#e8bb6d]/10 group"
            data-aos="data-right"
          >
            <img
              src="/tools/ai.png"
              alt="AI Learning"
              class="w-full h-full object-cover 0"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Tool 2: Research Intelligence -->
    <section
      class="py-10 md:py-24 bg-black relative overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#e8bb6d]/5 to-transparent transform -skew-y-3"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div
            class="order-1 lg:order-1 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#e8bb6d]/10 group"
            data-aos="fade-right"
          >
            <img
              src="/tools/research.png"
              alt="Research Intelligence"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <!-- Content -->
          <div class="order-2 lg:order-2" data-aos="data-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#e8bb6d]/10 rounded-full mb-6 border border-[#e8bb6d]/20"
            >
              <span
                class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
                >Research Intelligence</span
              >
            </div>
            <h2
              class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
            >
              Understand Market Behaviour
            </h2>
            <p class="text-white/70 text-lg mb-8 leading-relaxed">
              Everything you need to understand the market. Market scanner,
              stock insights, sector heatmaps, and F&O dashboards.
            </p>

            <!-- Features Grid -->
          </div>
        </div>
      </div>
    </section>

    <!-- Tool 3: Strategy Intelligence -->
    <section
      class="py-10 md:py-24 bg-gradient-to-b from-black to-black relative overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#e8bb6d]/5 via-transparent to-transparent"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div data-aos="fade-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#e8bb6d]/10 rounded-full mb-6 border border-[#e8bb6d]/20"
            >
              <span
                class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
                >Strategy Intelligence</span
              >
            </div>
            <h2
              class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
            >
              From Idea to Execution
            </h2>

            <!-- Process Flow -->
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

            <!-- Features -->
          </div>

          <!-- Image -->
          <div
            class="relative rounded-xl overflow-hidden shadow-2xl shadow-[#e8bb6d]/10 group"
            data-aos="data-right"
          >
            <img
              src="/tools/build.png"
              alt="Strategy Builder"
              class="w-full h-full object-cover 0"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Tool 4: Execution Intelligence -->
    <section class="py-24 bg-black relative overflow-hidden" data-aos="fade-up">
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#e8bb6d]/5 to-transparent transform skew-y-3"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div
            class="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-2xl shadow-[#e8bb6d]/10 group"
            data-aos="fade-right"
          >
            <!-- <div
              class="absolute inset-0 bg-[#e8bb6d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            ></div> -->
            <img
              src="/tools/execution.png"
              alt="Execution Intelligence"
              class="w-full h-full object-cover 0"
            />
            <!-- Position & P&L Tracker -->
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2" data-aos="data-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#e8bb6d]/10 rounded-full mb-6 border border-[#e8bb6d]/20"
            >
              <span
                class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
                >Execution Intelligence</span
              >
            </div>
            <h2
              class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
            >
              Automated Execution You Trust
            </h2>

            <!-- Unified Broker API -->
            <div class="mb-8">
              <h3 class="text-white font-bold text-xl mb-3">
                Unified Broker API
              </h3>
              <p class="text-white/70 mb-4">
                One integration for all major Indian brokers:
              </p>
            </div>

            <!-- Features -->
          </div>
        </div>
      </div>
    </section>

    <!-- Tool 5: Developer & Quant Intelligence -->
    <section
      class="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#e8bb6d]/5 via-transparent to-transparent"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div data-aos="fade-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#e8bb6d]/10 rounded-full mb-6 border border-[#e8bb6d]/20"
            >
              <span
                class="text-[#e8bb6d] font-bold text-base md:text-2xl uppercase tracking-wider"
                >Developer & Quant Tools</span
              >
            </div>
            <h2
              class="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight"
            >
              Developer & Quant Intelligence (Pro Mode)
            </h2>
            <p class="text-white/70 text-lg mb-8 leading-relaxed">
              Tools for quants, analysts, and developers
            </p>
          </div>

          <!-- Image -->
          <div
            class="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#e8bb6d]/10 group"
            data-aos="data-right"
          >
            <img
              src="/tools/library.png"
              alt="Developer Tools"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
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
