<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-[#090a0a]">

    <!-- ==========================================
      1. HERO SECTION
    =========================================== -->
    <section class="relative min-h-[70vh] pt-20 pb-16 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img src="/home/business-person-futuristic-business-environment.jpg" alt="YuktriX About" class="w-full h-full object-cover opacity-25 grayscale mix-blend-luminosity" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/98 via-[#090a0a]/85 to-[#090a0a]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center pt-10" data-aos="zoom-in">
        <div class="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/20 rounded-full text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
          The Firm
        </div>
        <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          Built for Disciplined<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Trading System Development.</span>
        </h1>
        <p class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
          YuktriX exists to help serious market participants move from informal trading logic to structured, validated, risk-aware, governance-ready trading systems.
        </p>
      </div>
    </section>

    <!-- Content Wrapper -->
    <div class="container mx-auto px-6 max-w-[1300px] py-24 space-y-28">

      <!-- 01: Foundation -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-4">
            <h2 class="text-xs font-mono text-[#090a0a]/40 uppercase tracking-[0.2em] mb-4">01 — The Foundation</h2>
            <h3 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight">
              Why We<br /><span class="text-[#db961f]">Exist</span>
            </h3>
          </div>

          <div class="lg:col-span-8 space-y-10">
            <p class="text-2xl md:text-3xl font-light text-[#090a0a] leading-snug">
              Many trading ideas fail not because they lack potential — but because they're pushed into execution too fast.
            </p>

            <div class="w-full h-px bg-[#090a0a]/10"></div>

            <p class="text-lg text-[#090a0a]/65 leading-relaxed font-light">
              The logic is unclear. The backtest is unrealistic. The risk rules are incomplete. YuktriX was built to solve this gap — covering strategy architecture, validation, backtesting integrity, execution design, risk engineering, journaling, and governance.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="p-8 bg-white rounded-2xl border border-[#090a0a]/5 shadow-sm">
                <h4 class="text-xs font-semibold uppercase tracking-widest text-[#db961f] mb-4">The Mission</h4>
                <p class="text-[#090a0a]/70 leading-relaxed text-sm">
                  To systemize trading through disciplined quantitative engineering — enabling serious market participants to operate with structure, clarity, and measurable edge.
                </p>
              </div>
              <div class="p-8 bg-white rounded-2xl border border-[#090a0a]/5 shadow-sm">
                <h4 class="text-xs font-semibold uppercase tracking-widest text-[#db961f] mb-4">The Vision</h4>
                <p class="text-[#090a0a]/70 leading-relaxed text-sm">
                  To redefine how capital participates in markets — where structure replaces speculation, data replaces bias, and engineered systems level the playing field.
                </p>
              </div>
            </div>

            <div class="bg-[#090a0a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div class="absolute -right-10 -top-10 w-48 h-48 bg-[#db961f]/15 blur-3xl rounded-full pointer-events-none"></div>
              <p class="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic relative z-10">
                "Let's make the game fair for everyone."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 02: What We Believe -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-4">
            <h2 class="text-xs font-mono text-[#090a0a]/40 uppercase tracking-[0.2em] mb-4">02 — The Philosophy</h2>
            <h3 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight">
              What We<br /><span class="text-[#db961f]">Believe</span>
            </h3>
          </div>

          <div class="lg:col-span-8">
            <div class="grid md:grid-cols-2 gap-5">
              <div v-for="belief in beliefs" :key="belief.key" class="p-8 bg-[#090a0a] rounded-2xl border border-white/5 hover:border-[#db961f]/30 transition-all group">
                <div class="text-[#db961f] font-display font-bold text-3xl mb-4 group-hover:scale-105 transition-transform origin-left">{{ belief.key }}</div>
                <p class="text-white/55 text-sm leading-relaxed font-light">{{ belief.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 03: Core Competence -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div class="lg:col-span-4">
            <h2 class="text-xs font-mono text-[#090a0a]/40 uppercase tracking-[0.2em] mb-4">03 — The Engine</h2>
            <h3 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight">
              Core<br /><span class="text-[#db961f]">Competence</span>
            </h3>
          </div>
          <div class="lg:col-span-8 flex items-end pb-2">
            <p class="text-xl text-[#090a0a]/65 font-light max-w-2xl leading-relaxed">
              We approach trading automation as a systems engineering discipline — not script development. Every engagement is structured around measurable outcomes, not opaque black boxes.
            </p>
          </div>
        </div>

        <div class="bg-[#090a0a] rounded-2xl overflow-hidden shadow-2xl">
          <div class="p-8 md:p-14 border-b border-white/5">
            <p class="text-[#db961f] font-mono text-sm uppercase tracking-widest mb-10">Quantitative System Engineering</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div v-for="item in competencies" :key="item.title" class="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#db961f]/30 hover:bg-white/[0.04] transition-all group">
                <h3 class="text-base font-bold text-white mb-2 group-hover:text-[#db961f] transition-colors">{{ item.title }}</h3>
                <p class="text-white/45 text-sm font-light leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="p-8 md:p-14 relative overflow-hidden">
            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#db961f]/8 blur-[120px] rounded-full pointer-events-none"></div>
            <div class="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 class="text-3xl font-display font-bold text-white mb-6 leading-tight">Full-Stack Data &<br />AI Foundation</h2>
                <p class="text-white/50 mb-8 leading-relaxed text-base font-light">
                  Behind every structured trading system lies a strong data and analytical backbone. AI is applied as an enhancement layer — not as a substitute for validation discipline.
                </p>
                <div class="space-y-3">
                  <div v-for="item in dataItems" :key="item" class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#db961f]/20 transition-colors">
                    <svg class="w-4 h-4 text-[#db961f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    <span class="text-white/70 text-sm font-medium">{{ item }}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center lg:justify-end">
                <div class="w-72 h-72 rounded-full border border-white/5 flex items-center justify-center relative">
                  <div class="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
                  <div class="absolute inset-12 rounded-full border border-[#db961f]/15"></div>
                  <div class="absolute inset-20 rounded-full border border-dashed border-[#db961f]/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                  <div class="bg-[#090a0a] w-36 h-36 rounded-full border-2 border-[#db961f]/50 shadow-[0_0_30px_rgba(219,150,31,0.15)] flex flex-col items-center justify-center z-10">
                    <svg class="w-8 h-8 text-[#db961f] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                    <span class="font-mono text-[10px] text-white/50 uppercase tracking-wider">Data Core</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04: Methodology -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5">
            <div class="sticky top-32">
              <h2 class="text-xs font-mono text-[#090a0a]/40 uppercase tracking-[0.2em] mb-4">04 — The Methodology</h2>
              <h3 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-tight mb-8">
                Structured<br /><span class="text-[#db961f]">Discipline</span>
              </h3>
              <p class="text-lg text-[#090a0a]/60 leading-relaxed mb-6 font-light">
                Every engagement follows a defined methodology — not an ad hoc development process. Structure precedes automation, always.
              </p>
              <button @click="openRegistrationModal" class="inline-flex items-center gap-3 px-8 py-4 bg-[#090a0a] text-white font-semibold rounded-xl hover:bg-[#db961f] hover:text-[#090a0a] transition-all">
                Schedule a Strategy Assessment
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="relative border-l border-[#090a0a]/15 ml-4 md:ml-6 space-y-10 pb-8">
              <div v-for="(step, index) in methodology" :key="index" class="relative pl-10 md:pl-14">
                <div class="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#cdcfd1] border-4 border-[#db961f]"></div>
                <div class="bg-white p-7 md:p-8 rounded-2xl border border-[#090a0a]/5 shadow-sm hover:shadow-md transition-shadow group">
                  <div class="text-[#db961f] font-mono text-xs font-bold mb-2 uppercase tracking-widest">Phase {{ String(index + 1).padStart(2, '0') }}</div>
                  <h4 class="text-lg font-bold text-[#090a0a] mb-2 group-hover:text-[#db961f] transition-colors tracking-tight">{{ step.title }}</h4>
                  <p class="text-[#090a0a]/55 text-sm font-light leading-relaxed">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 05: India-Based -->
      <section data-aos="fade-up" class="pb-8 pt-16">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex items-center">
          <img src="/about/india.png" alt="India Operations" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-15" />
          <div class="absolute inset-0 bg-[#090a0a]"></div>
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>

          <div class="relative z-10 w-full px-8 md:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-xs font-mono text-[#db961f] uppercase tracking-[0.2em] mb-4">05 — Operations</h2>
              <h3 class="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
                India-Based.<br />Globally <span class="text-[#db961f]">Structured.</span>
              </h3>
              <p class="text-lg text-white/65 leading-relaxed font-light">
                YuktriX operates from India with a globally aligned quantitative and engineering mindset. Our objective is to design trading system architectures that meet professional standards across evolving and dynamic market environments.
              </p>
            </div>

            <div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
              <p class="text-xl text-white font-light leading-relaxed mb-6">
                We work with serious individual participants, high-net-worth traders, proprietary desks, and financial firms seeking disciplined, structured implementation.
              </p>
              <div class="flex items-center gap-3 text-[#db961f] font-mono text-xs uppercase tracking-widest">
                <span class="w-8 h-px bg-[#db961f]"></span>
                Self-hosted. Your strategies stay yours.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { useRegistration } from "~/composables/useRegistration";
const { openRegistrationModal } = useRegistration();

const beliefs = [
  { key: "Systems must precede automation.", desc: "No tool, bot, or algorithm is safe without a formally structured strategy behind it." },
  { key: "Risk must precede return.", desc: "Risk frameworks are engineered before capital is deployed — not added after the strategy is live." },
  { key: "Validation must precede scaling.", desc: "Every system earns the right to scale through rigorous statistical testing, not assumption." },
  { key: "The trader who owns the infrastructure owns the edge.", desc: "Self-hosted systems mean your strategies stay on servers you control — permanently." },
];

const competencies = [
  { title: "Strategy Structuring", desc: "Formalizing discretionary logic into mathematically absolute, code-ready rules." },
  { title: "Statistical Robustness", desc: "Rigorous multi-regime testing to prove structural edge — not historical luck." },
  { title: "Backtesting Integrity", desc: "Deep-dive analysis to prevent curve-fitting, lookahead bias, and survivorship bias." },
  { title: "Expectancy Modeling", desc: "Advanced risk-adjusted return profiling across extended historical periods." },
  { title: "Execution Infrastructure", desc: "Building resilient, multi-broker execution with real-time order management." },
  { title: "Portfolio Coordination", desc: "System-level integration across concurrent strategies with portfolio-aware risk." },
];

const dataItems = [
  "Data pipeline architecture and ingestion",
  "Statistical analytics and feature engineering",
  "Quantitative modeling and factor research",
  "Machine learning as an enhancement layer",
  "Execution monitoring and drift detection",
];

const methodology = [
  { title: "Clarity of rule structure", desc: "Transforming discretionary ideas into absolute, testable, code-ready logic." },
  { title: "Quantitative validation", desc: "Rigorous statistical testing across multiple market regimes and datasets." },
  { title: "Defined capital governance", desc: "Position sizing and risk models engineered before capital touches the market." },
  { title: "Controlled execution design", desc: "Building the execution layer with failsafes, redundancies, and broker integrations." },
  { title: "Ongoing performance monitoring", desc: "Continuous evaluation of system drift, expectancy, and behavioral patterns." },
];
</script>
