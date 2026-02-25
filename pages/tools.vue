<template>
  <!-- Root wrapper uses overflow-x-hidden to prevent layout shifts and ensure header parity -->
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black overflow-x-hidden">
    
    <!-- ==========================================
      1. HERO SECTION (Dark - Aligned with Header)
    =========================================== -->
    <header class="relative pt-32 pb-32 overflow-hidden bg-[#090a0a]">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="/tools/market.png"
          alt="Market Research Background"
          class="w-full h-full object-cover object-center opacity-75 grayscale mix-blend-luminosity"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/80 to-[#090a0a]"></div>
      </div>

      <!-- Ambient Glows -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(219,150,31,0.15),transparent_70%)]"></div>
      </div>
      
      <!-- Using standard container to match Header and About page logic -->
      <div class="container mx-auto px-6 relative z-10 text-center" data-aos="zoom-in">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#db961f]/10 border border-[#db961f]/20 text-[#db961f] text-xs font-bold mb-8 uppercase tracking-[0.2em]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] mr-2 animate-pulse"></span>
          Professional Infrastructure
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
          Quant Research & <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Trading System</span> Validation
        </h1>
        <p class="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
          Structured web-based research infrastructure for disciplined systemized trading development. Built for serious market participants seeking rigorous validation.
        </p>
      </div>
    </header>

    <!-- ==========================================
      2. INTRODUCTION & METRICS (Silver - Overlapping)
    =========================================== -->
    <section class="bg-[#cdcfd1] relative z-20 -mt-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] py-24">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left: Intro & Disclaimer -->
          <div class="space-y-8" data-aos="fade-right">
            <p class="text-xl text-[#090a0a]/80 leading-relaxed font-light">
              The Yuktrix Quant Research Lab provides web-based tools designed to support structured trading system research, quantitative validation, and performance analysis.
            </p>
            
            <div class="p-8 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-xl relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full"></div>
              <p class="text-[#090a0a]/70 text-sm mb-6 italic relative z-10">
                "These tools are built to complement professional trading automation consulting engagements and are intended for serious market participants seeking disciplined system development."
              </p>
              <div class="flex items-center gap-4 mb-6 relative z-10">
                <div class="flex-1 h-px bg-[#090a0a]/10"></div>
                <div class="text-xs font-bold text-red-600 uppercase tracking-[0.2em] font-mono">DISCLAIMER</div>
                <div class="flex-1 h-px bg-[#090a0a]/10"></div>
              </div>
              <div class="flex flex-col items-center text-center relative z-10">
                <span class="text-[#090a0a] font-bold tracking-wide mb-1 uppercase">Research and Validation Only</span>
                <span class="text-red-600 font-medium text-sm">YUKTRIX DOES NOT PROVIDE TRADING SIGNALS.</span>
              </div>
            </div>
          </div>

          <!-- Right: Metrics Grid -->
          <div class="grid grid-cols-2 gap-4 md:gap-6" data-aos="fade-left">
            <div v-for="(metric, i) in metrics" :key="i" class="h-32 md:h-40 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg flex flex-col items-center justify-center p-4 hover:border-[#db961f]/50 hover:bg-white transition-all group">
              <span class="text-[#db961f] text-3xl md:text-4xl font-bold font-mono mb-2 group-hover:scale-110 transition-transform">{{ metric.value }}</span>
              <span class="text-xs font-bold text-[#090a0a]/50 uppercase tracking-widest text-center">{{ metric.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      3. LAB OVERVIEW (Dark - High Contrast)
    =========================================== -->
    <section class="bg-[#090a0a] py-32 relative z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">The Quant Research Lab</h2>
            <p class="text-white/60 text-lg max-w-2xl font-light">Modern systemized trading requires structured research infrastructure. The Lab is designed as a multi-layer research stack for measurable system development.</p>
          </div>
          <div class="text-[#db961f] font-bold font-mono text-xs md:text-sm flex items-center px-4 py-2 bg-[#db961f]/10 rounded-lg border border-[#db961f]/20">
            <span class="mr-3 w-2 h-2 rounded-full bg-[#db961f] animate-pulse"></span>
            SYSTEM_INFRASTRUCTURE [0x00A1]
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" data-aos="fade-up" data-aos-delay="100">
          <div v-for="(layer, index) in labLayers" :key="index" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#db961f]/50 hover:bg-white/10 transition-all text-center group">
            <span class="block text-white font-bold mb-3 group-hover:text-[#db961f] transition-colors">{{ layer.title }}</span>
            <span class="text-xs font-mono text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{{ layer.level }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      4. TOOL MODULES (Silver - Overlapping)
    =========================================== -->
    <section class="bg-[#cdcfd1] relative z-20 -mt-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] py-32">
      <div class="container mx-auto px-6 space-y-40">
          
        <!-- Module 1: Backtesting -->
        <div class="grid lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
          <div class="lg:col-span-5 space-y-8">
            <div class="w-14 h-14 bg-[#db961f]/10 rounded-2xl flex items-center justify-center border border-[#db961f]/30 shadow-[0_0_20px_rgba(219,150,31,0.2)]">
              <svg class="w-7 h-7 text-[#db961f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#090a0a] leading-tight">Statistical Backtesting & Robustness Engine</h2>
            <div>
              <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-3">Purpose</h3>
              <p class="text-[#090a0a]/70 text-lg font-light leading-relaxed">To evaluate strategy integrity before capital deployment. This engine emphasizes stability across market regimes rather than short-term optimization.</p>
            </div>
            <div class="pt-4 border-t border-[#090a0a]/10">
              <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-5">Capabilities</h3>
              <ul class="space-y-4 text-[#090a0a]/80 text-sm md:text-base font-medium">
                <li v-for="item in ['Multi-period historical backtesting', 'Expectancy modeling & drawdown analysis', 'Risk-reward evaluation & sensitivity testing', 'Overfitting detection controls', 'Structural robustness review']" :key="item" class="flex items-start gap-4">
                  <span class="w-1.5 h-1.5 bg-[#db961f] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#db961f]"></span> 
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Terminal UI Mockup (Dark Contrast) -->
          <div class="lg:col-span-7 bg-[#090a0a] border border-[#090a0a]/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[400px]">
            <div class="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span class="text-[11px] font-mono text-white/40 uppercase tracking-widest">Backtest_Engine_v4.2.log</span>
            </div>
            <div class="p-8 font-mono text-sm md:text-base text-white/70 leading-loose flex-grow">
              <div class="text-white/50 mb-2">> Initializing Historical Data Engine...</div>
              <div class="text-white/50 mb-2">> Loading market constituents (2010-2024)... [DONE]</div>
              <div class="text-blue-400 mb-2">> Running Expectancy Model on 'Alpha_v2'...</div>
              <div class="text-yellow-400 mb-2">[WARN] Potential overfitting detected in Period 3 (2020 Q2)</div>
              <div class="text-green-400 mb-6">[PASS] Structural Robustness Score: 8.4/10</div>
              
              <div class="mt-4 p-5 bg-white/[0.03] border border-white/10 rounded-xl space-y-3 text-sm">
                <div class="flex justify-between items-center border-b border-white/5 pb-2">
                  <span class="text-white/60">Total Expectancy:</span> 
                  <span class="text-green-400 font-bold">+1.24R</span>
                </div>
                <div class="flex justify-between items-center border-b border-white/5 pb-2">
                  <span class="text-white/60">Max Drawdown:</span> 
                  <span class="text-red-400 font-bold">-12.4%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-white/60">Win Rate:</span> 
                  <span class="text-white font-bold">56.2%</span>
                </div>
              </div>
              <div class="mt-6 flex items-center gap-2">
                <span class="text-[#db961f] animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Module 2: Strategy Analyzer -->
        <div class="grid lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
          <!-- Chart UI Mockup (Dark Contrast) -->
          <div class="lg:col-span-7 order-2 lg:order-1 bg-[#090a0a] border border-[#090a0a]/20 rounded-2xl overflow-hidden shadow-2xl h-[400px] flex flex-col relative p-8 group">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(219,150,31,0.05),transparent_60%)]"></div>
            
            <div class="flex justify-between items-center mb-8 relative z-10">
              <span class="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Sustainability Matrix</span>
              <span class="text-xs font-mono text-[#db961f]">LIVE_EVAL</span>
            </div>

            <!-- Abstract Bar Chart -->
            <div class="flex-grow flex items-end justify-between gap-2 relative z-10 pb-4 border-b border-white/10">
              <div v-for="h in [40, 60, 30, 80, 50, 90, 70, 45, 85, 65, 35, 75]" :key="h" class="w-full bg-[#db961f]/20 rounded-t-sm group-hover:bg-[#db961f]/30 transition-all duration-500 relative overflow-hidden" :style="{ height: `${h}%` }">
                <div class="absolute bottom-0 left-0 w-full bg-[#db961f] transition-all duration-1000" :style="{ height: `${h * 0.4}%` }"></div>
              </div>
            </div>
            
            <div class="flex justify-between mt-4 relative z-10">
              <span class="text-[10px] font-mono text-white/30">Q1</span>
              <span class="text-[10px] font-mono text-white/30">Q2</span>
              <span class="text-[10px] font-mono text-white/30">Q3</span>
              <span class="text-[10px] font-mono text-white/30">Q4</span>
            </div>
          </div>

          <div class="lg:col-span-5 order-1 lg:order-2 space-y-8 lg:pl-8">
            <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <svg class="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#090a0a] leading-tight">Strategy Performance Analyzer</h2>
            <div>
              <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-3">Purpose</h3>
              <p class="text-[#090a0a]/70 text-lg font-light leading-relaxed">To evaluate performance quality beyond simple profitability metrics. Designed to assess long-term sustainability rather than short-term outcomes.</p>
            </div>
            <div class="pt-4 border-t border-[#090a0a]/10">
              <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-5">Capabilities</h3>
              <ul class="space-y-4 text-[#090a0a]/80 text-sm md:text-base font-medium">
                <li v-for="item in ['Risk-adjusted return analysis', 'Volatility sensitivity review', 'Win-rate vs expectancy evaluation', 'Drawdown depth and recovery analysis', 'Capital efficiency assessment & regime breakdown']" :key="item" class="flex items-start gap-4">
                  <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> 
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Module 3: Feature Intelligence -->
        <div class="grid lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
          <div class="lg:col-span-5 space-y-8">
            <div class="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/30">
              <svg class="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#090a0a] leading-tight">Quantitative Feature Intelligence</h2>
            <div>
              <p class="text-[#090a0a]/70 text-lg font-light leading-relaxed">Provides structured access to over 1000 curated research variables across multiple dimensions. This framework supports quantitative strategy research and model development.</p>
            </div>
            
            <div class="grid grid-cols-2 gap-8 pt-4 border-t border-[#090a0a]/10">
              <div>
                <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-4">Coverage</h3>
                <ul class="space-y-3 text-sm text-[#090a0a]/80 font-medium">
                  <li>Macro indicators</li>
                  <li>Sector metrics</li>
                  <li>Fundamentals</li>
                  <li>Volatility measures</li>
                </ul>
              </div>
              <div>
                <h3 class="text-[#090a0a]/50 font-bold uppercase text-xs tracking-[0.2em] mb-4">Capabilities</h3>
                <ul class="space-y-3 text-sm text-[#090a0a]/80 font-medium">
                  <li>Factor exploration</li>
                  <li>Correlation analysis</li>
                  <li>Regime filtering</li>
                  <li>Export workflows</li>
                </ul>
              </div>
            </div>
            <p class="text-xs text-emerald-700 font-mono italic p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">Note: This is not a prediction engine. It is a research environment.</p>
          </div>

          <!-- Data Grid UI Mockup (Dark Contrast) -->
          <div class="lg:col-span-7 bg-[#090a0a] border border-[#090a0a]/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div class="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
              <span class="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Feature Matrix</span>
              <span class="text-xs font-mono text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/20">INDEX: 0.94 Coherence</span>
            </div>

            <div class="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
              <div v-for="(tag, i) in featureTags" :key="i" 
                   :class="['h-12 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all border', tag.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-white/5 text-white/40 border-white/5 hover:bg-white/10']">
                {{ tag.name }}
              </div>
            </div>

            <div class="mt-8 pt-6 relative z-10">
              <div class="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                <span>Cluster: Volatility_Regime_A</span>
                <span>Processing... 94%</span>
              </div>
              <div class="w-full h-1.5 bg-black rounded-full overflow-hidden">
                <div class="w-[94%] h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      5. TARGET AUDIENCE (Dark)
    =========================================== -->
    <section class="py-32 bg-[#090a0a] relative z-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Structured System Builders</h2>
          <p class="text-white/60 text-lg">The Quant Research Lab integrates with Yuktrix consulting for high-level engagements.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          <div v-for="(audience, i) in ['Individual Quant Traders', 'HNW System Participants', 'Research-focused Teams', 'Advisory & Inst. Desks']" :key="i" 
               class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#db961f]/50 hover:bg-white/10 transition-all group">
            <span class="text-sm font-mono font-bold text-[#db961f] mb-4 block group-hover:translate-x-2 transition-transform">→ 0{{ i + 1 }}</span>
            <h4 class="text-white font-bold text-lg">{{ audience }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      6. CTA SECTION (Silver - Overlapping)
    =========================================== -->
    <section class="bg-[#cdcfd1] py-32 relative z-20 -mt-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#090a0a 1px, transparent 1px); background-size: 30px 30px;"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10" data-aos="zoom-in">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#090a0a] mb-6 tracking-tight">Access Structure & Deployment</h2>
        <p class="text-[#090a0a]/70 mb-12 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          The Quant Research Lab is available through a structured access model depending on research scope and feature usage.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button @click="openRegistrationModal" class="bg-[#090a0a] text-white font-bold py-5 px-10 rounded-full hover:scale-105 transition-all shadow-xl group flex items-center justify-center gap-3">
            Book a Consultation Call
            <svg class="w-5 h-5 text-[#db961f] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button class="bg-transparent border-2 border-[#090a0a]/20 text-[#090a0a] font-bold py-5 px-10 rounded-full hover:bg-[#090a0a]/5 transition-colors">
            Technical Specifications
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

// Data extracted to keep template clean
const metrics = [
  { value: "1k+", label: "Research Factors" },
  { value: "0.1ms", label: "Engine Latency" },
  { value: "∞", label: "Regime Tests" },
  { value: "SQL", label: "Structured Output" }
];

const labLayers = [
  { title: "Strategy Validation", level: "L1 Layer" },
  { title: "Performance Analysis", level: "L2 Layer" },
  { title: "Multi-factor Research", level: "L3 Layer" },
  { title: "Risk-aware Modeling", level: "L4 Layer" },
  { title: "Structural Evaluation", level: "L5 Layer" }
];

const featureTags = [
  { name: "GDP_DELTA", active: true },
  { name: "BETA_IND", active: false },
  { name: "VIX_SKW", active: true },
  { name: "CPI_YOY", active: false },
  { name: "SENT_SCORE", active: true },
  { name: "CORR_50D", active: false },
  { name: "OBV_MOM", active: false },
  { name: "EPS_GRTH", active: true },
  { name: "IVOL_RSK", active: false },
  { name: "YKT_ALPH", active: true },
  { name: "LIQ_RATIO", active: false },
  { name: "PEG_FWD", active: true }
];
</script>