<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black overflow-x-hidden">

    <!-- ==========================================
      1. HERO SECTION
    =========================================== -->
    <section class="relative min-h-[65vh] pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img src="/ai-powered-device-concept.jpg" alt="Services Background" class="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity scale-110" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/98 via-[#090a0a]/90 to-[#090a0a]"></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10 py-16" data-aos="zoom-in">
        <div class="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/20 rounded-full text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
          Engagements
        </div>
        <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          Engagements for<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Trading System Readiness</span>
        </h1>
        <p class="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
          Each engagement is designed around a specific stage of trading-system development. Start with an assessment to determine where you are.
        </p>
      </div>
    </section>

    <!-- ==========================================
      2. SERVICE PLANS
    =========================================== -->
    <section class="relative z-20 -mt-10 bg-[#cdcfd1] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] py-24 px-6">
      <div class="container mx-auto max-w-6xl">

        <div class="flex flex-col md:flex-row justify-between items-end mb-14 gap-6" data-aos="fade-up">
          <div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-[#090a0a] tracking-tight">Choose Your Starting Point</h2>
            <p class="text-[#090a0a]/50 mt-2 font-light">Not sure where you are? <button @click="openRegistrationModal" class="text-[#db961f] font-semibold hover:underline">Schedule a free 15-min call</button> — we'll tell you.</p>
          </div>
          <div class="text-xs font-mono text-[#090a0a]/30 uppercase tracking-widest font-semibold">5 Engagement Types</div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16">
          <div
            v-for="(plan, index) in plans"
            :key="plan.id"
            @click="activePlan = plan.id"
            :class="[
              'relative p-7 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col border',
              activePlan === plan.id
                ? 'bg-[#090a0a] border-[#db961f] shadow-2xl'
                : 'bg-white/70 border-transparent hover:bg-white hover:border-[#090a0a]/10'
            ]"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <!-- Popular badge -->
            <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#db961f] text-[#090a0a] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
              Most Popular
            </div>

            <div class="mb-6">
              <div :class="['text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-3', activePlan === plan.id ? 'text-[#db961f]' : 'text-[#090a0a]/30']">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <h3 :class="['text-xl font-display font-bold leading-tight tracking-tight mb-1', activePlan === plan.id ? 'text-white' : 'text-[#090a0a]']">
                {{ plan.title }}
              </h3>
              <p :class="['text-[11px] font-semibold uppercase tracking-widest', activePlan === plan.id ? 'text-[#db961f]' : 'text-[#090a0a]/35']">
                {{ plan.subtitle }}
              </p>
            </div>

            <div class="space-y-3 flex-grow mb-6">
              <div :class="['h-px w-full', activePlan === plan.id ? 'bg-white/10' : 'bg-[#090a0a]/5']"></div>
              <ul class="space-y-2.5">
                <li v-for="item in plan.deliverables" :key="item" class="flex items-start gap-2.5">
                  <svg :class="['w-3.5 h-3.5 mt-0.5 shrink-0', activePlan === plan.id ? 'text-[#db961f]' : 'text-[#090a0a]/30']" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  <span :class="['text-[11px] leading-snug', activePlan === plan.id ? 'text-white/75' : 'text-[#090a0a]/65']">{{ item }}</span>
                </li>
              </ul>
            </div>

            <div :class="['p-4 rounded-xl', activePlan === plan.id ? 'bg-white/5 border border-white/10' : 'bg-[#090a0a]/5 border border-transparent']">
              <div :class="['text-[9px] font-mono uppercase tracking-widest mb-1', activePlan === plan.id ? 'text-white/40' : 'text-[#090a0a]/30']">Investment</div>
              <div :class="['text-base font-bold', activePlan === plan.id ? 'text-[#db961f]' : 'text-[#090a0a]']">{{ plan.price }}</div>
            </div>

            <div v-if="activePlan === plan.id" class="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#db961f] shadow-[0_0_10px_#db961f] animate-pulse"></div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-[#090a0a] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden" data-aos="zoom-in">
          <div class="absolute top-0 right-0 w-72 h-72 bg-[#db961f]/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-display font-bold text-white tracking-tight mb-2">Ready to get started?</h3>
            <p class="text-white/40 text-sm font-light">We'll evaluate your setup and recommend the right starting point.</p>
          </div>
          <button
            @click="openRegistrationModal(activePlan)"
            class="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#db961f] text-[#090a0a] font-bold rounded-xl hover:bg-[#FEE337] transition-all shadow-lg shrink-0 relative z-10"
          >
            Schedule Strategy Assessment
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ==========================================
      3. QUALIFICATION RULES
    =========================================== -->
    <section class="py-24 px-6 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 35px 35px;"></div>
      <div class="container mx-auto max-w-5xl relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              What We Build.<br /><span class="text-[#db961f]">What We Don't.</span>
            </h2>
            <p class="text-white/50 text-lg leading-relaxed font-light mb-8">
              We exclusively design rule-based, testable, self-hosted systems. No discretionary overlays. No guaranteed returns. No signal distribution.
            </p>
            <div class="flex items-center gap-4 p-5 bg-red-500/10 border border-red-500/20 rounded-xl">
              <svg class="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span class="text-red-300 text-sm font-medium">YuktriX does not provide trading signals under any circumstances.</span>
            </div>
          </div>

          <div class="space-y-5" data-aos="fade-left">
            <div v-for="rule in rules" :key="rule.title" class="p-8 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-white/10 transition-all">
              <h4 class="text-white font-bold text-lg mb-2 tracking-tight">{{ rule.title }}</h4>
              <p class="text-white/45 text-sm leading-relaxed font-light">{{ rule.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      4. BOTTOM CTA
    =========================================== -->
    <section class="py-24 px-6 bg-[#cdcfd1]">
      <div class="max-w-3xl mx-auto text-center" data-aos="zoom-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-6 tracking-tight">
          Not sure which engagement fits?
        </h2>
        <p class="text-[#090a0a]/55 text-lg mb-10 font-light">
          Schedule a free 15-minute assessment call. We'll listen to where you are, and tell you exactly where to start — no sales pitch.
        </p>
        <button
          @click="openRegistrationModal"
          class="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#090a0a] text-white font-bold rounded-xl hover:bg-[#db961f] hover:text-[#090a0a] transition-all shadow-2xl text-lg"
        >
          Schedule Free Assessment Call
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
        <p class="mt-8 text-xs text-[#090a0a]/30 uppercase tracking-[0.3em]">No signals. No tips. No guaranteed returns.</p>
      </div>
    </section>

    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();
const activePlan = ref("foundation");

const plans = [
  {
    id: "assessment",
    title: "Strategy Architecture Assessment",
    subtitle: "For traders with ideas",
    popular: false,
    price: "Starting at ₹25,000",
    deliverables: [
      "Strategy logic review",
      "Backtest credibility evaluation",
      "Risk framework gap analysis",
      "Execution readiness assessment",
      "Written gap report",
    ],
  },
  {
    id: "foundation",
    title: "Foundation Build",
    subtitle: "From idea to live system",
    popular: true,
    price: "Starting at ₹1,00,000",
    deliverables: [
      "Full rule formalization",
      "3–5yr backtest with regime testing",
      "Single-broker live integration",
      "Journal + monitoring setup",
      "60-day stabilization support",
    ],
  },
  {
    id: "multi",
    title: "Multi-Strategy Scaling",
    subtitle: "Add concurrent strategies",
    popular: false,
    price: "Custom scoped",
    deliverables: [
      "Up to 3 concurrent strategies",
      "Portfolio-aware risk engine",
      "Multi-broker orchestration",
      "One optimization cycle",
    ],
  },
  {
    id: "institutional",
    title: "Institutional Build",
    subtitle: "Prop desks & HNIs",
    popular: false,
    price: "Custom scoped",
    deliverables: [
      "AI regime detection",
      "Volatility adaptation layer",
      "Stress testing framework",
      "Custom portfolio backend",
    ],
  },
  {
    id: "governance",
    title: "Ongoing Monitoring & Governance",
    subtitle: "For live systems",
    popular: false,
    price: "Monthly retainer",
    deliverables: [
      "Monthly drift detection",
      "Risk threshold reassessment",
      "Quarterly health audit",
      "Priority support access",
    ],
  },
];

const rules = [
  {
    title: "Rule-Based Logic Required",
    desc: "Strategies must be mathematically formalized. Discretionary overlays within core execution logic are not supported.",
  },
  {
    title: "Alpha Is Your Responsibility",
    desc: "We engineer structural integrity — validation, execution, risk, and governance. Alpha generation belongs to you.",
  },
  {
    title: "Self-Hosted Infrastructure",
    desc: "All systems are deployed on infrastructure you own and control. Your strategies never live on shared cloud servers.",
  },
];

onMounted(() => {
  if (process.client) window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
