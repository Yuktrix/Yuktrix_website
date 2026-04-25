<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black overflow-x-hidden">

    <!-- ==========================================
      1. HERO SECTION
    =========================================== -->
    <section class="relative min-h-[65vh] pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img src="/tools/market.png" alt="Platform Background" class="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/98 via-[#090a0a]/90 to-[#090a0a]"></div>
      </div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_50%_0%,_rgba(219,150,31,0.12),transparent_65%)] pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10 text-center py-16" data-aos="zoom-in">
        <div class="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/20 rounded-full text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
          The Platform
        </div>
        <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          Research Infrastructure<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">for Serious Trading.</span>
        </h1>
        <p class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-6">
          Not signal engines. Not prediction tools. Structured instruments for validation, testing, execution, and continuous improvement.
        </p>
        <div class="inline-flex items-center gap-3 px-5 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm font-medium">
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          YUKTRIX DOES NOT PROVIDE TRADING SIGNALS. Research and validation only.
        </div>
      </div>
    </section>

    <!-- ==========================================
      2. PLATFORM OVERVIEW
    =========================================== -->
    <section class="bg-[#cdcfd1] relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] py-24 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div data-aos="fade-right">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-[#090a0a] mb-6 leading-tight tracking-tight">
              A Trading ERP — Not Just Another Tool
            </h2>
            <p class="text-lg text-[#090a0a]/65 leading-relaxed font-light mb-8">
              YuktriX is a self-hosted platform covering the complete trading lifecycle — from capital planning and strategy research to live execution, journaling, and continuous improvement. One unified system, on infrastructure you own.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="stat in stats" :key="stat.label" class="p-5 bg-white/60 rounded-xl border border-white/80 text-center">
                <div class="text-2xl font-bold text-[#db961f] font-mono mb-1">{{ stat.value }}</div>
                <div class="text-xs font-semibold text-[#090a0a]/45 uppercase tracking-wider">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4" data-aos="fade-left">
            <div v-for="(layer, i) in platformLayers" :key="i" class="flex items-center gap-5 p-5 bg-white/60 rounded-2xl border border-white/80 hover:bg-white hover:border-[#db961f]/20 transition-all group">
              <div class="w-10 h-10 rounded-xl bg-[#090a0a] flex items-center justify-center text-[#db961f] text-sm font-bold font-mono shrink-0 group-hover:bg-[#db961f] group-hover:text-[#090a0a] transition-all">{{ String(i + 1).padStart(2, '0') }}</div>
              <div>
                <div class="font-bold text-[#090a0a] text-sm group-hover:text-[#db961f] transition-colors">{{ layer.title }}</div>
                <div class="text-xs text-[#090a0a]/45 font-light mt-0.5">{{ layer.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      3. TOOL MODULES (Alternating Layout)
    =========================================== -->
    <section class="bg-[#090a0a] py-28 px-6 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="container mx-auto max-w-6xl relative z-10 space-y-32">

        <div v-for="(module, i) in modules" :key="i" class="grid lg:grid-cols-2 gap-16 items-center" data-aos="fade-up">
          <!-- Text — alternates side -->
          <div :class="['space-y-6', i % 2 === 1 ? 'lg:order-2' : '']">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.2em]" :style="`background: ${module.color}15; color: ${module.color}; border: 1px solid ${module.color}30`">
              {{ module.badge }}
            </div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white leading-tight tracking-tight">{{ module.title }}</h2>
            <p class="text-white/50 text-base leading-relaxed font-light">{{ module.desc }}</p>
            <ul class="space-y-3">
              <li v-for="feat in module.features" :key="feat" class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" :style="`background: ${module.color}; box-shadow: 0 0 8px ${module.color}`"></span>
                <span class="text-white/65 text-sm font-medium">{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Visual — alternates side -->
          <div :class="['bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden', i % 2 === 1 ? 'lg:order-1' : '']">
            <div class="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div class="flex gap-1.5"><div class="w-2.5 h-2.5 rounded-full bg-red-500/60"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/60"></div></div>
              <span class="text-[10px] font-mono text-white/25 uppercase tracking-widest ml-2">{{ module.windowLabel }}</span>
            </div>
            <div class="p-8" v-html="module.visual"></div>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================
      4. WHO IT'S FOR
    =========================================== -->
    <section class="py-24 px-6 bg-[#cdcfd1] relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div class="container mx-auto max-w-5xl text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-4 tracking-tight">
          Built for Structured System Builders
        </h2>
        <p class="text-[#090a0a]/55 text-lg mb-12 font-light">
          Whether you're discretionary, semi-systematic, or fully algorithmic — if you treat trading as a business, this platform is for you.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          <div v-for="(audience, i) in audiences" :key="i" class="p-7 bg-white rounded-2xl border border-[#090a0a]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div class="text-[#db961f] font-bold text-2xl font-mono mb-4 group-hover:scale-110 transition-transform origin-left">→</div>
            <h4 class="text-[#090a0a] font-bold text-sm leading-tight">{{ audience }}</h4>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="openRegistrationModal" class="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#090a0a] text-white font-bold rounded-xl hover:bg-[#db961f] hover:text-[#090a0a] transition-all shadow-xl">
            See the Platform in Action
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          <a href="/services" class="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white border border-[#090a0a]/10 text-[#090a0a] font-medium rounded-xl hover:bg-[#090a0a] hover:text-white transition-all">
            View Engagement Options
          </a>
        </div>
      </div>
    </section>

    <RegistrationModal />
  </div>
</template>

<script setup>
import { useRegistration } from "~/composables/useRegistration";
const { openRegistrationModal } = useRegistration();

const stats = [
  { value: "70+", label: "Chart Patterns" },
  { value: "10yr+", label: "NSE Backtest Data" },
  { value: "3", label: "Broker Integrations" },
  { value: "Local", label: "AI — No Cloud" },
];

const platformLayers = [
  { title: "AI Learning", desc: "Local LLM explains indicators, patterns, and concepts in plain language." },
  { title: "Research", desc: "Market scanner, stock insights, sector heatmaps, and F&O dashboards." },
  { title: "Strategy Builder", desc: "70+ patterns, full ICT engine, 10+ year NSE backtest with real cost modeling." },
  { title: "Execution", desc: "Unified API for Upstox, AngelOne, Groww. Paper trade first. Real-time order management." },
  { title: "Dev/Quant Tools", desc: "API endpoints, custom indicators, optimization algorithms, raw data access." },
];

const modules = [
  {
    badge: "Strategy Builder",
    color: "#db961f",
    title: "70+ Patterns. Full ICT Engine. Real Cost Modeling.",
    desc: "Build strategies using a comprehensive library of technical patterns and the complete ICT methodology — order blocks, fair value gaps, liquidity sweeps, market structure shifts. Backtest against 10+ years of NSE data with realistic slippage and brokerage modeling.",
    features: [
      "70+ technical patterns including full ICT engine",
      "Automated OB, FVG, liquidity sweep detection",
      "10+ year NSE historical data with real cost modeling",
      "Walk-forward and regime-aware backtesting",
      "Sharpe, Sortino, max drawdown, and VAR reporting",
    ],
    windowLabel: "strategy-builder.log",
    visual: `<div class="font-mono text-sm text-white/60 space-y-2">
      <div class="text-white/30">> Loading NSE data (2010–2024)... [DONE]</div>
      <div class="text-blue-400">> Building ICT strategy: FVG + OB confluence...</div>
      <div class="text-white/30">> Running backtest with real costs: ₹20 brokerage + slippage...</div>
      <div class="text-[#db961f]">[PASS] Sharpe Ratio: 1.84</div>
      <div class="text-[#db961f]">[PASS] Sortino Ratio: 2.31</div>
      <div class="text-red-400">[WARN] Max Drawdown: -14.2% — review position sizing</div>
      <div class="text-green-400">[PASS] Approval Gate: CLEARED for live deployment</div>
      <div class="mt-4 flex items-center gap-2"><span class="text-[#db961f] animate-pulse">_</span></div>
    </div>`,
  },
  {
    badge: "Execution Engine",
    color: "#22c55e",
    title: "Multi-Broker Execution. Paper Trade First.",
    desc: "Connect to Upstox, AngelOne, and Groww through a unified API. Paper trade any strategy before going live. Real-time order management, position tracking, and execution monitoring across all brokers from one interface.",
    features: [
      "Unified API across Upstox, AngelOne, Groww",
      "Paper trading mode before any live deployment",
      "Real-time order status and position tracking",
      "Execution quality monitoring (slippage analysis)",
      "Multi-account and multi-broker orchestration",
    ],
    windowLabel: "execution-monitor.log",
    visual: `<div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 text-sm">
        <span class="text-white/50 font-mono text-xs">NIFTY 24000 CE</span>
        <span class="text-green-400 font-bold text-xs">FILLED @ 120.50</span>
      </div>
      <div class="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 text-sm">
        <span class="text-white/50 font-mono text-xs">BANKNIFTY 52000 PE</span>
        <span class="text-yellow-400 font-bold text-xs">PENDING</span>
      </div>
      <div class="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 text-sm">
        <span class="text-white/50 font-mono text-xs">RELIANCE OCT FUT</span>
        <span class="text-green-400 font-bold text-xs">FILLED @ 2,945.25</span>
      </div>
      <div class="mt-4 p-3 bg-[#db961f]/10 border border-[#db961f]/20 rounded-lg">
        <div class="text-[10px] font-mono text-[#db961f] uppercase tracking-wider">Slippage this session: ₹38 avg — within target</div>
      </div>
    </div>`,
  },
  {
    badge: "AI Journal",
    color: "#a855f7",
    title: "Auto-Logged Journal. Local AI. Zero Cloud.",
    desc: "Every trade is automatically logged with P&L, strategy tag, market conditions, and emotional state. A local LLM (Ollama) analyzes your entries to spot behavioral patterns, flag discipline breaches, and suggest improvements — all on your machine.",
    features: [
      "Auto-logged entries with every trade",
      "P&L, strategy tag, and emotional state tracking",
      "Local LLM analysis — no cloud, fully private",
      "Behavioral pattern detection across sessions",
      "Daily debrief and discipline scoring",
    ],
    windowLabel: "ai-journal-analysis.log",
    visual: `<div class="font-mono text-sm text-white/60 space-y-2">
      <div class="text-white/30">> Ollama model loaded. Analyzing 30 days of journal...</div>
      <div class="text-purple-400">[PATTERN] Monday entries: avg loss 2.1x vs rest of week</div>
      <div class="text-purple-400">[PATTERN] After-2PM trades: win rate 34% vs 58% morning</div>
      <div class="text-purple-400">[PATTERN] "FOMO" tag correlates with 73% losing trades</div>
      <div class="text-blue-400">[RULE] Suggest: Block new entries Mon AM + after 2 PM</div>
      <div class="text-green-400">[DONE] Report saved locally. No data left your machine.</div>
      <div class="mt-3 flex items-center gap-2"><span class="text-purple-400 animate-pulse">_</span></div>
    </div>`,
  },
];

const audiences = [
  "Algo traders who want self-hosted infrastructure",
  "ICT traders needing automated pattern detection",
  "HNI participants needing structured risk governance",
  "Prop desks and independent quants",
];
</script>
