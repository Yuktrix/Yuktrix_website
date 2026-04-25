<template>
  <div class="font-sans selection:bg-[#db961f] selection:text-black bg-[#cdcfd1] overflow-x-hidden">

    <!-- ==========================================
      1. HERO SECTION
    =========================================== -->
    <section class="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img src="/home/slide.png" alt="Trading Systems Background" class="w-full h-full object-cover object-center opacity-40 grayscale mix-blend-luminosity scale-110 will-change-transform" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/98 via-[#090a0a]/85 to-[#090a0a]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 pt-10 text-center flex flex-col items-center justify-center">
        <div class="gsap-hero-text opacity-0 translate-y-10 flex flex-col items-center w-full max-w-5xl mx-auto" data-aos="zoom-in">

          <div class="inline-flex items-center gap-3 px-6 py-2.5 mb-10 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-[#db961f] animate-pulse"></span>
            <span class="text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">Quantitative Trading System Architecture</span>
          </div>

          <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.0] mb-8 tracking-tight text-white">
            From Trading Idea to<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Validated, Execution-Ready</span><br />
            System.
          </h1>

          <p class="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
            YuktriX helps serious traders, desks, and financial firms formalize strategy logic, validate assumptions, engineer execution workflows, and build governance-ready trading systems — deployed on infrastructure you own.
          </p>

          <p class="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Most trading ideas begin as market intuition. YuktriX converts that intuition into structured rules, testable logic, realistic validation, execution planning, and risk-aware system architecture. One-time cost. Self-hosted. Your strategies stay yours.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-14">
            <button @click="openRegistrationModal" class="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#db961f] text-[#090a0a] font-bold rounded-xl hover:bg-[#FEE337] transition-all hover:shadow-[0_0_40px_rgba(219,150,31,0.4)] hover:-translate-y-0.5">
              Request Strategy Assessment
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <a href="#lifecycle" class="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
              See the Full Trading Lifecycle
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-medium">
            <span>Not a signal provider.</span>
            <span class="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Not a copy-trading platform.</span>
            <span class="w-1 h-1 rounded-full bg-white/20"></span>
            <span>A structured system for traders who want to own their edge.</span>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/20 z-10">
        <div class="relative w-px h-16 bg-white/10 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#db961f] to-transparent animate-scrolldown"></div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      2. THE PROBLEM
    =========================================== -->
    <section class="py-28 bg-white relative z-20 -mt-1">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="max-w-3xl mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-6 leading-tight tracking-tight">
            Most Trading Systems Fail<br />Before They Reach the Market.
          </h2>
          <p class="text-lg text-[#090a0a]/60 leading-relaxed font-light">
            A trading idea can look strong in theory and still fail during validation, execution, or live monitoring. The issue is rarely the idea itself — it's the lack of structured rules, realistic testing, risk engineering, and governance around it.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up">
          <div v-for="(problem, i) in problems" :key="i" class="p-7 rounded-2xl border border-[#090a0a]/5 bg-[#f5f5f5] hover:border-red-200 hover:bg-white transition-all group">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs font-mono font-bold text-red-400">0{{ i + 1 }}</span>
              <div class="flex-1 h-px bg-red-100 group-hover:bg-red-200 transition-colors"></div>
            </div>
            <h3 class="text-base font-bold text-[#090a0a] mb-2">{{ problem.title }}</h3>
            <p class="text-sm text-[#090a0a]/55 leading-relaxed font-light">{{ problem.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      3. THE 9-STEP TRADING LIFECYCLE
    =========================================== -->
    <section id="lifecycle" class="py-28 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#db961f]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-7xl relative z-10">
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/20 rounded-full text-[#db961f] text-xs font-semibold uppercase tracking-[0.2em]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
            The Complete Platform
          </div>
          <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            The Complete Trader's Lifecycle<br /><span class="text-[#db961f]">— In One Platform.</span>
          </h2>
          <p class="text-lg text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            YuktriX is not another charting tool or algo bot. It's a Trading ERP — an end-to-end operating system that covers every stage of running trading as a structured business.
          </p>
        </div>

        <!-- Desktop: Grid lifecycle -->
        <div class="hidden lg:grid grid-cols-3 gap-5 mb-8" data-aos="fade-up">
          <div
            v-for="(step, i) in lifecycleSteps"
            :key="i"
            @mouseenter="activeStep = i"
            :class="['group relative p-8 rounded-2xl border cursor-default transition-all duration-300', activeStep === i ? 'bg-[#db961f] border-[#db961f] shadow-[0_0_40px_rgba(219,150,31,0.3)]' : 'bg-white/[0.03] border-white/5 hover:border-white/15']"
          >
            <div class="flex items-start gap-4 mb-5">
              <span :class="['text-3xl font-display font-bold', activeStep === i ? 'text-[#090a0a]' : 'text-[#db961f]']">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="flex-1 pt-2">
                <h3 :class="['text-base font-bold leading-tight', activeStep === i ? 'text-[#090a0a]' : 'text-white']">{{ step.title }}</h3>
              </div>
            </div>
            <p :class="['text-sm leading-relaxed font-light', activeStep === i ? 'text-[#090a0a]/80' : 'text-white/40']">{{ step.desc }}</p>
          </div>
        </div>

        <!-- Mobile: Vertical stepper -->
        <div class="lg:hidden space-y-4" data-aos="fade-up">
          <div v-for="(step, i) in lifecycleSteps" :key="i" class="flex gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="shrink-0 w-10 h-10 rounded-full bg-[#db961f]/10 border border-[#db961f]/30 flex items-center justify-center text-[#db961f] text-sm font-bold font-mono">{{ String(i + 1).padStart(2, '0') }}</div>
            <div>
              <h3 class="text-white font-bold text-sm mb-1">{{ step.title }}</h3>
              <p class="text-white/45 text-sm leading-relaxed font-light">{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-16" data-aos="zoom-in">
          <button @click="openRegistrationModal" class="inline-flex items-center gap-3 px-10 py-4 bg-[#db961f] text-[#090a0a] font-bold rounded-xl hover:bg-[#FEE337] transition-all hover:shadow-[0_0_40px_rgba(219,150,31,0.4)]">
            See How This Applies to Your Trading
          </button>
        </div>
      </div>
    </section>

    <!-- ==========================================
      4. NATIVE AI SECTION
    =========================================== -->
    <section class="py-28 bg-[#cdcfd1] relative z-20 -mt-1 overflow-hidden">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#090a0a]/5 border border-[#090a0a]/10 rounded-full text-[#090a0a]/60 text-xs font-semibold uppercase tracking-[0.2em]">
              Local AI — No Cloud Required
            </div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-6 leading-tight tracking-tight">
              AI That Runs On Your Machine.<br /><span class="text-[#db961f]">Not Someone Else's Cloud.</span>
            </h2>
            <p class="text-lg text-[#090a0a]/65 leading-relaxed mb-8 font-light">
              Local AI powered by Ollama. Analyzes your trade journal, identifies emotional patterns, generates insights, and suggests strategy improvements. No cloud API costs. No data leaving your machine.
            </p>
            <div class="space-y-4">
              <div v-for="feat in aiFeatures" :key="feat" class="flex items-center gap-4 p-4 bg-white/60 rounded-xl border border-white/80">
                <svg class="w-5 h-5 text-[#db961f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm font-medium text-[#090a0a]/80">{{ feat }}</span>
              </div>
            </div>
          </div>

          <div class="bg-[#090a0a] rounded-2xl p-8 shadow-2xl relative overflow-hidden" data-aos="fade-left">
            <div class="absolute top-0 right-0 w-64 h-64 bg-[#db961f]/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div class="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
              <div class="flex gap-1.5"><div class="w-3 h-3 rounded-full bg-red-500/70"></div><div class="w-3 h-3 rounded-full bg-yellow-500/70"></div><div class="w-3 h-3 rounded-full bg-green-500/70"></div></div>
              <span class="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-2">ai-journal-insights.log</span>
            </div>
            <div class="font-mono text-sm text-white/60 space-y-3 relative z-10">
              <div class="text-white/30">> Loading Ollama local model...</div>
              <div class="text-green-400">> Model ready. Analyzing 47 journal entries...</div>
              <div class="text-white/30">> Pattern recognition running...</div>
              <div class="text-[#db961f]">[INSIGHT] Overtrading detected on Mondays. Avg loss 2.3x vs other days.</div>
              <div class="text-[#db961f]">[INSIGHT] Win rate drops 18% when entering after 2 PM.</div>
              <div class="text-blue-400">[SUGGEST] Rule: No new entries after 2 PM. Review Monday positions.</div>
              <div class="text-green-400">[DONE] 3 behavioral patterns identified. Report saved locally.</div>
              <div class="mt-4 flex items-center gap-2">
                <span class="text-[#db961f] animate-pulse">_</span>
                <span class="text-white/20 text-xs">All processing done on your machine. Zero cloud exposure.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      5. WHO THIS IS FOR
    =========================================== -->
    <section class="py-28 bg-white">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-5 tracking-tight">
            Built for Traders Who Treat Capital Seriously.
          </h2>
          <div class="inline-flex items-center gap-4 p-4 bg-red-50 border border-red-100 rounded-xl text-sm font-medium text-red-600">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            YuktriX does not provide trading signals. Alpha generation is your responsibility.
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6" data-aos="fade-up">
          <div class="p-10 bg-[#090a0a] rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-green-500/5 blur-[60px] rounded-full pointer-events-none"></div>
            <div class="text-xs font-mono font-semibold text-green-400 uppercase tracking-[0.3em] mb-6 relative z-10">Designed For</div>
            <ul class="space-y-4 relative z-10">
              <li v-for="item in designedFor" :key="item" class="flex items-center gap-4">
                <span class="w-2 h-2 rounded-full bg-green-400 shrink-0 shadow-[0_0_8px_#4ade80]"></span>
                <span class="text-white/80 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="p-10 bg-[#f5f5f5] rounded-2xl relative overflow-hidden border border-[#090a0a]/5">
            <div class="absolute top-0 right-0 w-48 h-48 bg-red-500/5 blur-[60px] rounded-full pointer-events-none"></div>
            <div class="text-xs font-mono font-semibold text-red-400 uppercase tracking-[0.3em] mb-6 relative z-10">Not For</div>
            <ul class="space-y-4 relative z-10">
              <li v-for="item in notFor" :key="item" class="flex items-center gap-4">
                <span class="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                <span class="text-[#090a0a]/55 font-medium line-through">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      6. COMPARISON TABLE
    =========================================== -->
    <section class="py-28 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="container mx-auto px-6 max-w-5xl relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Stop Renting. Start Owning.
          </h2>
          <p class="text-white/45 font-light">Two-year cost comparison for a typical trader.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-white/10" data-aos="fade-up">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="p-5 text-left text-xs font-mono text-white/30 uppercase tracking-wider"></th>
                <th v-for="col in comparisonCols" :key="col.name" :class="['p-5 text-center text-sm font-bold', col.highlight ? 'bg-[#db961f]/10 text-[#db961f]' : 'text-white/50']">
                  {{ col.name }}
                  <span v-if="col.highlight" class="block text-xs font-mono text-[#db961f]/70 mt-1">← You're here</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in comparisonRows" :key="i" :class="['border-b border-white/5', i % 2 === 0 ? 'bg-white/[0.02]' : '']">
                <td class="p-5 text-sm font-medium text-white/50">{{ row.label }}</td>
                <td v-for="(val, j) in row.values" :key="j" :class="['p-5 text-center text-sm font-semibold', comparisonCols[j].highlight ? 'text-[#db961f] bg-[#db961f]/5' : 'text-white/50']">{{ val }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ==========================================
      7. FINAL CTA
    =========================================== -->
    <section class="py-32 bg-[#cdcfd1] text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(#090a0a 1.5px, transparent 1.5px); background-size: 35px 35px;"></div>

      <div class="max-w-4xl mx-auto px-6 relative z-10" data-aos="zoom-in">
        <h2 class="text-5xl md:text-7xl font-display font-bold text-[#090a0a] mb-6 tracking-tight leading-none">
          Your Trading Deserves<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#090a0a] via-[#db961f] to-[#090a0a]">an Operating System.</span>
        </h2>
        <p class="text-lg text-[#090a0a]/60 mb-12 font-light max-w-2xl mx-auto">
          Stop managing seven-figure capital with spreadsheets, Telegram groups, and broker apps.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button @click="openRegistrationModal" class="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#090a0a] text-white font-bold rounded-xl hover:bg-[#db961f] hover:text-[#090a0a] transition-all shadow-2xl">
            Schedule Your Strategy Assessment
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <a href="/tools" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/60 border border-[#090a0a]/10 text-[#090a0a] font-medium rounded-xl hover:bg-white transition-all">
            Explore the Platform
          </a>
        </div>

        <p class="text-xs font-medium text-[#090a0a]/35 uppercase tracking-[0.3em]">
          No signals. No tips. No guaranteed returns. Disciplined system architecture for serious market participants.
        </p>
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

const problems = [
  { title: "Undefined Strategy Logic", desc: "Strategies remain dependent on discretionary judgment, screenshots, and loose rules with no formal structure." },
  { title: "Overfit Backtests", desc: "Historical results create false confidence when robustness checks and regime testing are missing." },
  { title: "Weak Risk Structure", desc: "Risk is bolted on after the strategy instead of being engineered before capital is deployed." },
  { title: "Execution Mismatch", desc: "Slippage, latency, and API behavior change live performance in ways backtests don't capture." },
  { title: "No Monitoring", desc: "Live systems degrade silently without health checks, drift detection, and intervention rules." },
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

const aiFeatures = [
  "Trade journal analysis — spots behavioral patterns automatically",
  "Local LLM via Ollama — no cloud costs, fully private",
  "Strategy improvement suggestions based on your actual data",
  "Emotional pattern detection across entries",
];

const designedFor = [
  "Algo traders who want to own their infrastructure",
  "ICT methodology traders needing automated pattern detection",
  "HNI participants (₹50L+) needing structured risk governance",
  "Prop desks building internal systems",
  "Independent quants wanting statistical rigor",
];

const notFor = [
  "Signal seekers or tip followers",
  "Copy-trading or guaranteed-return expectations",
  "Traders who want someone else to trade for them",
  "Casual hobbyists",
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
