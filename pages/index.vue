<template>
  <div class="font-sans selection:bg-[#db961f] selection:text-black bg-[#cdcfd1] overflow-x-hidden">

    <!-- 1. HERO -->
    <section class="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img src="/home/slide.png" alt="" class="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity scale-110" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/80 to-[#090a0a]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center pt-10">
        <div class="gsap-hero-text opacity-0 translate-y-10 max-w-4xl mx-auto flex flex-col items-center">

          <!-- Logo -->
          <div class="mb-12">
            <div class="w-24 h-24 rounded-3xl bg-white/8 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-[0_0_60px_rgba(219,150,31,0.15)]">
              <img src="/logo.png" alt="YuktriX" class="w-18 h-18 object-contain scale-110" />
            </div>
          </div>

          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
            <span class="text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">Personalized Trading ERP</span>
          </div>

          <!-- Headline -->
          <h1 class="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-5 tracking-tight text-white">
            From Trading Idea to<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Validated, Execution-Ready</span><br />System.
          </h1>

          <!-- Single sub-sentence -->
          <p class="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Your dedicated quant partner for a personalized trading journey.<br class="hidden md:block" />From raw idea to a validated, live-running system — built around your edge.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 mb-14">
            <button
              @click="openRegistrationModal"
              class="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#db961f] text-[#090a0a] font-bold rounded-xl hover:bg-[#FEE337] transition-all hover:shadow-[0_0_40px_rgba(219,150,31,0.4)] hover:-translate-y-0.5"
            >
              Request Strategy Assessment
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <a href="#lifecycle" class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/5 border border-white/10 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 transition-all">
              See the Full Lifecycle
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>

          <!-- Stat chips -->
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="stat in heroStats" :key="stat" class="px-4 py-1.5 bg-white/5 border border-white/8 rounded-full text-xs text-white/35 font-medium">{{ stat }}</span>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <div class="relative w-px h-14 bg-white/10 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#db961f] to-transparent animate-scrolldown"></div>
        </div>
      </div>
    </section>

    <!-- 2. THE PROBLEM -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="mb-16" data-aos="fade-up">
          <p class="text-xs font-mono font-bold text-[#db961f] uppercase tracking-[0.3em] mb-5">The Problem</p>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight tracking-tight max-w-2xl">
            Most traders manage serious capital without a real system behind it.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <div v-for="(problem, i) in problems.slice(0, 3)" :key="i" class="group">
            <div class="text-[72px] font-display font-bold text-[#090a0a]/5 leading-none mb-3 select-none group-hover:text-[#db961f]/8 transition-colors">0{{ i + 1 }}</div>
            <h3 class="text-base font-bold text-[#090a0a] mb-2">{{ problem.title }}</h3>
            <p class="text-sm text-[#090a0a]/50 leading-relaxed font-light">{{ problem.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. THE LIFECYCLE -->
    <section id="lifecycle" class="py-24 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#db961f]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-6xl relative z-10">
        <div class="mb-14" data-aos="fade-up">
          <p class="text-xs font-mono font-bold text-[#db961f] uppercase tracking-[0.3em] mb-5">The Platform</p>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight">
            9 stages. One platform.
          </h2>
          <p class="text-white/40 mt-4 max-w-md font-light text-base">Every stage of running trading as a structured business — in sequence, in one system.</p>
        </div>

        <!-- Desktop grid -->
        <div class="hidden lg:grid grid-cols-3 gap-4 mb-10" data-aos="fade-up">
          <div
            v-for="(step, i) in lifecycleSteps"
            :key="i"
            @mouseenter="activeStep = i"
            :class="['p-6 rounded-2xl border cursor-default transition-all duration-300', activeStep === i ? 'bg-[#db961f] border-[#db961f]' : 'bg-white/[0.03] border-white/5 hover:border-white/15']"
          >
            <span :class="['text-xl font-display font-bold block mb-3', activeStep === i ? 'text-[#090a0a]/40' : 'text-[#db961f]/50']">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 :class="['text-sm font-bold mb-2', activeStep === i ? 'text-[#090a0a]' : 'text-white']">{{ step.title }}</h3>
            <p :class="['text-xs leading-relaxed font-light', activeStep === i ? 'text-[#090a0a]/70' : 'text-white/35']">{{ step.desc }}</p>
          </div>
        </div>

        <!-- Mobile stepper -->
        <div class="lg:hidden space-y-3 mb-10" data-aos="fade-up">
          <div v-for="(step, i) in lifecycleSteps" :key="i" class="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <span class="shrink-0 text-[#db961f] font-mono font-bold text-xs mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="text-white font-bold text-sm mb-1">{{ step.title }}</h3>
              <p class="text-white/40 text-xs leading-relaxed font-light">{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <button @click="openRegistrationModal" class="inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
            See how this applies to your trading
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 4. WHY US -->
    <section class="py-24 bg-[#cdcfd1]">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="mb-14" data-aos="fade-up">
          <p class="text-xs font-mono font-bold text-[#090a0a]/40 uppercase tracking-[0.3em] mb-5">Why Us</p>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight tracking-tight">
            Built differently.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6" data-aos="fade-up">
          <div v-for="diff in differentiators" :key="diff.title" class="bg-white rounded-2xl p-8 border border-[#090a0a]/5 hover:border-[#db961f]/20 hover:shadow-lg transition-all">
            <div class="w-10 h-10 rounded-xl bg-[#090a0a] flex items-center justify-center mb-6">
              <span class="text-[#db961f] font-bold text-xs font-mono">{{ diff.icon }}</span>
            </div>
            <h3 class="text-base font-bold text-[#090a0a] mb-3">{{ diff.title }}</h3>
            <p class="text-sm text-[#090a0a]/55 leading-relaxed font-light">{{ diff.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. COMPARISON -->
    <section class="py-24 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="container mx-auto px-6 max-w-4xl relative z-10">
        <div class="mb-14" data-aos="fade-up">
          <p class="text-xs font-mono font-bold text-[#db961f] uppercase tracking-[0.3em] mb-5">Ownership vs Subscription</p>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight">
            Stop renting.<br />Start owning.
          </h2>
          <p class="text-white/35 mt-4 font-light">Two-year cost comparison for a typical trader.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-white/10" data-aos="fade-up">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="p-5 text-left text-xs font-mono text-white/20 uppercase tracking-wider w-1/4"></th>
                <th
                  v-for="col in comparisonCols"
                  :key="col.name"
                  :class="['p-5 text-center text-sm font-bold', col.highlight ? 'bg-[#db961f]/10 text-[#db961f]' : 'text-white/40']"
                >
                  {{ col.name }}
                  <span v-if="col.highlight" class="block text-[10px] font-mono text-[#db961f]/60 mt-1 normal-case tracking-normal">← You're here</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in comparisonRows" :key="i" class="border-b border-white/5 last:border-0">
                <td class="p-5 text-sm text-white/40 font-medium">{{ row.label }}</td>
                <td
                  v-for="(val, j) in row.values"
                  :key="j"
                  :class="['p-5 text-center text-sm font-semibold', comparisonCols[j].highlight ? 'text-[#db961f] bg-[#db961f]/5' : 'text-white/35']"
                >{{ val }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 6. FINAL CTA -->
    <section class="py-32 bg-[#cdcfd1] text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#090a0a 1.5px, transparent 1.5px); background-size: 35px 35px;"></div>

      <div class="max-w-3xl mx-auto px-6 relative z-10" data-aos="zoom-in">
        <h2 class="text-5xl md:text-6xl font-display font-bold text-[#090a0a] mb-5 tracking-tight leading-tight">
          Your trading deserves<br />an operating system.
        </h2>
        <p class="text-[#090a0a]/50 mb-10 font-light max-w-md mx-auto leading-relaxed">
          Stop managing serious capital with spreadsheets and Telegram groups. Build the infrastructure behind your edge.
        </p>
        <button
          @click="openRegistrationModal"
          class="group inline-flex items-center gap-3 px-10 py-4 bg-[#090a0a] text-white font-bold rounded-xl hover:bg-[#db961f] hover:text-[#090a0a] transition-all shadow-2xl"
        >
          Schedule Your Strategy Assessment
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
        <p class="text-xs text-[#090a0a]/30 mt-8 font-medium uppercase tracking-[0.2em]">No signals. No tips. System architecture for serious market participants.</p>
      </div>
    </section>

    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();
const { $gsap } = useNuxtApp();

const activeStep = ref(0);
let stepTimer;

const heroStats = [
  "9-stage trading lifecycle",
  "ICT engine built-in",
  "Local AI, private by design",
  "Personalized for your strategy",
];

const problems = [
  { title: "Undefined Strategy Logic", desc: "Strategies remain dependent on discretionary judgment, screenshots, and loose rules with no formal structure." },
  { title: "Weak Risk Structure", desc: "Risk is bolted on after the strategy instead of being engineered before capital is deployed." },
  { title: "Fragmented Tools", desc: "Traders cobble together 5–7 disconnected tools with no unified operating layer." },
];

const lifecycleSteps = [
  { title: "Capital Plan", desc: "Define total capital, allocate across strategies, set max risk per trade and per day." },
  { title: "Strategy R&D", desc: "Build with 70+ patterns, full ICT engine. Backtest 10+ years of NSE data with real cost modeling." },
  { title: "Approval Gate", desc: "Statistical robustness, Sharpe, Sortino, max drawdown, VAR. Doesn't meet criteria? Doesn't trade." },
  { title: "Pre-Trade Checklist", desc: "Regime assessment, position sizing, broker check, risk parameters. Every single day." },
  { title: "Execution", desc: "Live through Upstox/AngelOne/Groww. Paper trade first. Multi-broker orchestration." },
  { title: "Trade Journal", desc: "Auto-logged with P&L, strategy tag, emotional state. AI spots behavioral patterns." },
  { title: "Daily Debrief", desc: "Did you follow your rules? Grade discipline. Track consistency over time." },
  { title: "Board Review", desc: "Weekly P&L, cost audit, strategy attribution, risk utilization — like a business board meeting." },
  { title: "Kaizen", desc: "AI analyzes journal, spots mistakes, suggests refinements. Loop back to 01 with better data." },
];

const differentiators = [
  {
    icon: "PV",
    title: "Private by Design",
    body: "Your strategies run on infrastructure you control. Your data never leaves your environment — no third-party cloud exposure, no platform dependency.",
  },
  {
    icon: "AI",
    title: "Local AI, No Cloud Costs",
    body: "Ollama-powered trade journal analysis runs entirely on your machine. Behavioral pattern detection, strategy suggestions — zero cloud exposure, zero API costs.",
  },
  {
    icon: "ICT",
    title: "Native ICT Engine",
    body: "Order blocks, fair value gaps, liquidity sweeps, and market structure shifts — detected automatically across timeframes, built into the strategy builder natively.",
  },
];

const comparisonCols = [
  { name: "Streak", highlight: false },
  { name: "Tradetron", highlight: false },
  { name: "Zerodha", highlight: false },
  { name: "YuktriX", highlight: true },
];

const comparisonRows = [
  { label: "Pricing", values: ["₹999/mo", "₹2K/mo", "Free*", "One-time"] },
  { label: "Your Data?", values: ["Their cloud", "Their cloud", "Their cloud", "Your server"] },
  { label: "ICT Engine", values: ["No", "No", "No", "Full"] },
  { label: "AI Built-in", values: ["No", "No", "No", "Local LLM"] },
  { label: "Trade Journal", values: ["No", "No", "No", "Auto-logged"] },
  { label: "2-Year Cost", values: ["₹24K", "₹48K", "Free*", "One-time"] },
];

onMounted(() => {
  if ($gsap) {
    $gsap.to(".gsap-hero-text", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });
  }
  stepTimer = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % lifecycleSteps.length;
  }, 700);
  setTimeout(() => clearInterval(stepTimer), 9 * 700 + 500);
});

onBeforeUnmount(() => { if (stepTimer) clearInterval(stepTimer); });
</script>

<style scoped>
@keyframes scrolldown { 0% { transform: translateY(-100%); } 50% { transform: translateY(100%); } 100% { transform: translateY(100%); } }
.animate-scrolldown { animation: scrolldown 2s ease-in-out infinite; }
</style>
