<template>
  <div class="pt-10 md:pb-24 bg-black">
    <!-- Header -->
    <section
      class="relative flex flex-col justify-center items-center mb-20 min-h-screen"
    >
      <div class="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/service.png"
          alt="Financial Trading Background"
          class="w-full h-full object-cover opacity-35"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#FEE337]/10"
        ></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <h1
          class="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
          data-aos="zoom-in"
        >
          Empower Your Next Move, <br />
          With Our
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#e8bb6d] to-white"
            >Intelligence</span
          >
        </h1>
        <p
          class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Everything you need to learn, analyze, build, test, and execute your
          market decisions — powered by Semantic AI, built for Indian markets.
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="container mx-auto px-6 space-y-10 md:space-y-32">
      <!-- Service 1: AI Trading OS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-1" data-aos="fade-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            01
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI Trading OS
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            For Retail Traders & Investors
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            A complete environment to learn, build, backtest, and automate
            strategies — all in one place.
          </p>

          <div
            class="p-4 bg-[#FEE337]/10 rounded-lg border border-[#FEE337]/20"
          >
            <p class="text-white/80 text-sm">
              <span class="font-bold text-[#FEE337]">Who This Is For:</span>
              Retail traders, part-time traders, beginner-to-intermediate
              investors, working professionals who want clarity + safety.
            </p>
          </div>
        </div>

        <div class="order-2 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/services/trading.png"
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
              src="/services/quant.png"
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            Quant Intelligence Stack
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            For Advanced Users & Developers
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            Pro-level tools for quants, analysts, and developers who want full
            control.
          </p>

          <div
            class="p-4 bg-[#FEE337]/10 rounded-lg border border-[#FEE337]/20"
          >
            <p class="text-white/80 text-sm">
              <span class="font-bold text-[#FEE337]">Who This Is For:</span>
              Quant traders, researchers, data scientists, algo developers, and
              fintech teams.
            </p>
          </div>
        </div>
      </div>

      <!-- Service 3: Institutional Intelligence Layer -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-2 relative" data-aos="fade-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/services/institutional.png"
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            Institutional Intelligence Layer
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            For Enterprises
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            Deploy the Yuktrix Intelligence Engine inside your own
            infrastructure.
          </p>

          <div
            class="p-4 bg-[#FEE337]/10 rounded-lg border border-[#FEE337]/20"
          >
            <p class="text-white/80 text-sm">
              <span class="font-bold text-[#FEE337]">Who This Is For:</span>
              Family offices, proprietary desks, fintech institutions, research
              houses, and enterprise trading teams.
            </p>
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI Tutor & Learning Engine
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            For All Levels
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            AI-powered financial education, personalized to your pace.
          </p>

          <div
            class="p-4 bg-[#FEE337]/10 rounded-lg border border-[#FEE337]/20"
          >
            <p class="text-white/80 text-sm">
              <span class="font-bold text-[#FEE337]">Who This Is For:</span>
              Beginners, intermediate traders, long-term investors, and content
              creators.
            </p>
          </div>
        </div>

        <div class="order-2 lg:order-1 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/services/tut.png"
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            API Wrapper & Unified Broker Layer
          </h2>
          <p class="text-white/70 leading-relaxed text-lg mb-6">
            One API. Every major Indian broker.
          </p>
        </div>

        <div class="order-1 relative" data-aos="data-right">
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/services/api.png"
              alt="AI Tutor"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Service 6: Custom Solutions & White-Label Intelligence -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          class="order-2 lg:order-1 relative mb-8 xl:mb-0"
          data-aos="fade-right"
        >
          <div
            class="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FEE337]/30 transition-all group"
          >
            <img
              src="/services/custom.png"
              alt="Custom Solutions"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            ></div>
          </div>
        </div>

        <div class="order-1 lg:order-2" data-aos="data-right">
          <div
            class="inline-block px-3 py-1 bg-[#FEE337]/10 border border-[#FEE337]/30 rounded-full text-[#FEE337] font-mono text-sm mb-4"
          >
            06
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            Custom Solutions & White-Label Intelligence
          </h2>
          <p
            class="text-white/60 text-sm uppercase tracking-wider mb-4 font-bold"
          >
            For Businesses
          </p>
          <p class="text-white/70 mb-6 leading-relaxed text-lg">
            AI-powered research, dashboards, and strategy infrastructure built
            for your brand.
          </p>

          <div
            class="p-4 bg-[#FEE337]/10 rounded-lg border border-[#FEE337]/20"
          >
            <p class="text-white/80 text-sm">
              <span class="font-bold text-[#FEE337]">Who This Is For:</span>
              Fintech startups, brokers, education companies, wealth platforms,
              and trading academies.
            </p>
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
import { onMounted } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();

onMounted(() => {
  // AOS animations initialized globally
});
</script>
