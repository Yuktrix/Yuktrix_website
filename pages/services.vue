<template>
  <!-- Root wrapper with overflow-x-hidden for header alignment parity -->
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black overflow-x-hidden">
    
    <!-- ==========================================
      1. HERO SECTION (Institutional Precision)
    =========================================== -->
    <section class="relative min-h-[75vh] pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <div class="absolute inset-0 z-0">
        <img
          src="/ai-powered-device-concept.jpg"
          alt="Financial Trading Background"
          class="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity scale-110 will-change-transform"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/85 to-[#cdcfd1]/10"></div>
      </div>

      <!-- Architectural Grid Overlay -->
      <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.12]" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 5rem 5rem; mask-image: radial-gradient(circle at center, black, transparent 80%);"></div>

      <div class="container mx-auto px-6 text-center relative z-10" data-aos="zoom-in">
        <div 
          class="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/30 backdrop-blur-sm rounded-full text-[#db961f] font-mono text-[10px] uppercase tracking-[0.4em] font-bold"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse shadow-[0_0_8px_#db961f]"></span>
          Service Infrastructure
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 text-white leading-none tracking-tighter uppercase">
          Engagement <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337] font-extrabold italic uppercase">Protocols</span>
        </h1>
        <p class="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
          Objective diagnostics and engineering nodes for professional trading system implementation.
        </p>
      </div>
    </section>

    <!-- ==========================================
      2. THE COMMAND CENTER (High-Performance Static Grid)
    =========================================== -->
    <section class="relative z-20 -mt-16 bg-[#cdcfd1] rounded-t-[3.5rem] shadow-[0_-30px_60px_rgba(0,0,0,0.25)] py-28 px-6 border-t border-white/50">
      <div class="container mx-auto max-w-[1400px]">
        
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8" data-aos="fade-up">
          <div class="text-left">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-2 uppercase tracking-tighter text-black">Plan Architecture</h2>
          </div>
          <div class="flex items-center gap-6 font-mono text-[10px] font-bold text-[#090a0a]/40 uppercase tracking-widest">
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full border border-black/20"></span> STANDBY</div>
            <div class="flex items-center gap-2 text-[#db961f] font-black"><span class="w-2 h-2 rounded-full bg-[#db961f] shadow-[0_0_5px_#db961f]"></span> ACTIVE_NODE</div>
          </div>
        </div>

        <!-- The Grid: Perfectly static to avoid disappearing containers -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          
          <div 
            v-for="(plan, index) in engagementPlans" 
            :key="plan.id"
            @click="activeTier = plan.id"
            :class="[
              'relative p-8 rounded-[2rem] transition-colors duration-300 cursor-pointer flex flex-col group overflow-hidden border',
              activeTier === plan.id 
                ? 'bg-[#090a0a] text-white border-[#db961f] shadow-2xl' 
                : 'bg-white/70 hover:bg-white text-[#090a0a] border-black/5 hover:border-[#db961f]/20'
            ]"
          >
            <!-- Plan Identity -->
            <div class="mb-8">
              <div class="font-mono text-[9px] font-black tracking-[0.3em] mb-4 uppercase" :class="activeTier === plan.id ? 'text-[#db961f]' : 'text-black/30'">
                PLAN_0{{ index + 1 }}
              </div>
              <h3 class="text-2xl font-display font-bold uppercase leading-tight tracking-tighter" :class="activeTier === plan.id ? 'text-white' : 'text-[#090a0a]'">
                {{ plan.title }}
              </h3>
              <p class="text-[10px] font-bold uppercase tracking-widest mt-2" :class="activeTier === plan.id ? 'text-[#db961f]' : 'text-black/40'">
                {{ plan.target }}
              </p>
            </div>

            <!-- Deliverables -->
            <div class="space-y-6 flex-grow">
              <div class="h-px w-full" :class="activeTier === plan.id ? 'bg-white/10' : 'bg-black/5'"></div>
              
              <div>
                <h4 class="text-[9px] font-mono font-bold uppercase tracking-widest opacity-40 mb-3">Deliverables</h4>
                <ul class="space-y-3">
                  <li v-for="inc in plan.inclusions" :key="inc" class="flex items-start gap-2">
                    <svg class="w-3.5 h-3.5 mt-0.5 shrink-0" :class="activeTier === plan.id ? 'text-[#db961f]' : 'text-black/30'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    <span class="text-[11px] leading-snug font-medium opacity-80">{{ inc }}</span>
                  </li>
                </ul>
              </div>

              <!-- Metadata -->
              <div class="mt-4 p-4 rounded-2xl transition-colors" :class="activeTier === plan.id ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-transparent'">
                <div class="text-[9px] font-mono uppercase opacity-50 mb-1">{{ plan.metaLabel }}</div>
                <div class="text-lg font-display font-bold tracking-tight" :class="activeTier === plan.id ? 'text-[#db961f]' : 'text-[#090a0a]'">{{ plan.metaValue }}</div>
              </div>
            </div>

            <!-- Constraints -->
            <div class="mt-8 pt-6 border-t border-dashed" :class="activeTier === plan.id ? 'border-white/10' : 'border-black/10'">
              <span class="text-[8px] font-mono font-black uppercase tracking-widest opacity-30 block mb-2">Technical_Constraint</span>
              <p class="text-[10px] leading-relaxed opacity-60 italic">
                {{ plan.note }}
              </p>
            </div>

            <!-- Highlight Status -->
            <div class="absolute top-8 right-8">
              <div v-if="activeTier === plan.id" class="w-2 h-2 rounded-full bg-[#db961f] shadow-[0_0_12px_#db961f] animate-pulse"></div>
            </div>
          </div>

        </div>

        <!-- Master Interface Button -->
        <div class="bg-[#090a0a] rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border-t border-white/10" data-aos="zoom-in">
          <div class="absolute top-0 right-0 w-96 h-96 bg-[#db961f]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div class="text-center md:text-left relative z-10">
            <h3 class="text-2xl font-display font-bold text-white uppercase tracking-tight mb-2">Protocol Readiness: <span class="text-[#db961f] italic">Verified</span></h3>
          </div>

          <button 
            @click="triggerEngagement"
            class="group relative inline-flex items-center justify-center px-12 py-5 font-black uppercase tracking-[0.4em] italic text-[#090a0a] bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#db961f] hover:shadow-[0_0_40px_rgba(219,150,31,0.5)] transform active:scale-95"
          >
            <span class="relative z-10 flex items-center gap-4">
              Initialize Implementation Protocol
              <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </button>
        </div>

      </div>
    </section>

    <!-- ==========================================
      3. MODULAR ADD-ONS (System Extensions)
    =========================================== -->
    <section class="py-32 px-6 bg-[#090a0a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"></div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center mb-24" data-aos="fade-up">
          <h2 class="text-4xl font-display font-bold text-white uppercase tracking-tighter">Engagement <span class="text-[#db961f]">Add-ons</span></h2>
          <p class="text-white/30 font-mono text-xs uppercase tracking-[0.4em] mt-3">Upsell modules for expanded technical scope</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          <div v-for="addon in addons" :key="addon.t" class="p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/5 hover:border-[#db961f]/40 transition-all group backdrop-blur-sm">
            <h4 class="text-white font-bold mb-4 group-hover:text-[#db961f] transition-colors uppercase tracking-tight text-xl leading-tight">{{ addon.t }}</h4>
            <p class="text-white/30 text-sm leading-relaxed font-light">{{ addon.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      4. ELIGIBILITY GATE (Verification Rules)
    =========================================== -->
    <section class="py-24 px-6 border-y border-black/5 bg-white/40 overflow-hidden">
      <div class="container mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos="fade-right">
            <h2 class="text-6xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.85] text-[#090a0a]">
              Strict<br/><span class="text-red-600 drop-shadow-sm">Eligibility</span>
            </h2>
            <p class="text-[#090a0a]/70 text-xl leading-relaxed font-light mb-10 max-w-md">
              We exclusively automate rule-based strategies. No discretionary overlays allowed within core engine logic.
            </p>
            <div class="inline-flex items-center gap-4 p-4 bg-red-600 text-white rounded-xl font-mono text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl">
              <svg class="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              Zero Discretion Protocol Required
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6" data-aos="fade-left">
            <div v-for="rule in [{h:'Absolute Logic', d:'Rules must be mathematically formal. Manual intervention within core execution is strictly architected out.', n:'GATE_01'}, {h:'No Profit Guarantees', d:'We engineer structural integrity. Alpha generation and ROI remain the responsibility of the owner.', n:'GATE_02'}]" :key="rule.h" class="p-10 bg-[#090a0a] rounded-[3rem] border border-white/5 relative group overflow-hidden">
              <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-[#db961f]/5 blur-3xl rounded-full"></div>
              <div class="text-[10px] font-mono text-[#db961f] mb-6 tracking-[0.3em] uppercase font-bold">{{ rule.n }}</div>
              <h4 class="font-display font-bold mb-4 uppercase text-white text-3xl italic tracking-tighter">{{ rule.h }}</h4>
              <p class="text-white/50 text-sm leading-relaxed font-light">{{ rule.d }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Master Console Footer CTA -->
    <section class="py-32 px-6">
      <div class="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 class="text-4xl md:text-6xl font-display font-bold text-[#090a0a] mb-8 uppercase tracking-tighter leading-none">Ready to <br/>Construct?</h2>
          <button 
            @click="openRegistrationModal(activeTier)" 
            class="w-full py-8 bg-[#090a0a] text-white font-black uppercase tracking-[0.6em] italic hover:bg-[#db961f] hover:text-[#090a0a] transition-all shadow-2xl rounded-[2.5rem] text-xl hover:scale-[1.02]"
          >
              Open Technical Gateway
          </button>
          <p class="mt-12 font-mono text-[10px] text-[#090a0a]/40 uppercase tracking-[0.4em] font-bold">Standard Technical Assessment Fee Applies // Institutional Grade Protocol</p>
      </div>
    </section>

    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();

// Selection state for highlighter effect
const activeTier = ref('Foundation');

const triggerEngagement = () => {
  if (activeTier.value) {
    openRegistrationModal(activeTier.value);
  }
};

const engagementPlans = [
  {
    id: 'Audit',
    title: 'Infrastructure Audit',
    target: 'Diagnostics Node',
    inclusions: [
      'Strategy Logic Review',
      'Backtest Credibility Check',
      'Risk Framework Evaluation',
      'Execution Architecture Assessment'
    ],
    metaLabel: 'Primary Output',
    metaValue: 'Gap Report',
    note: 'Technical assessment only. Build or deployment not included.'
  },
  {
    id: 'Foundation',
    title: 'Foundation',
    target: 'Systemization Node',
    inclusions: [
      'Absolute Rule Formalization',
      '3-5yr Quantitative Validation',
      '1-Broker Live Integration',
      'OMS Monitoring Setup'
    ],
    metaLabel: 'Min. Threshold',
    metaValue: '₹1,00,000+',
    note: 'Restricted to single strategy. 60-Day stabilization included.'
  },
  {
    id: 'Pro',
    title: 'The Multi-Node',
    target: 'Scaling Node',
    inclusions: [
      'Up to 3 Concurrent Strats',
      'Portfolio-aware Risk Engine',
      'Multi-broker Orchestration',
      'One optimization cycle'
    ],
    metaLabel: 'Architecture',
    metaValue: 'Multi-Strategy',
    note: 'Excludes advanced Institutional AI modules.'
  },
  {
    id: 'Institutional',
    title: 'The Sovereign',
    target: 'Alpha Engine Node',
    inclusions: [
      'AI Adaptive Regime Layers',
      'Volatility Adaptation STX',
      'Stress Logic Integration',
      'Custom Portfolio Backend'
    ],
    metaLabel: 'Tier Model',
    metaValue: 'Institutional',
    note: 'Custom scoped for prop-desks and institutional HNI entities.'
  },
  {
    id: 'Governance',
    title: 'The Sentinel',
    target: 'Oversight Node',
    inclusions: [
      'Monthly Drift Detection',
      'Performance Expectancy Review',
      'Risk Threshold Reassessment',
      'Quarterly Health Auditing'
    ],
    metaLabel: 'Billing Cycle',
    metaValue: 'Monthly Retainer',
    note: 'Continuous monitoring only. Excludes new implementation scope.'
  }
];

const addons = [
  {t:'Strategy Automation', d:'Additional rule-set integration per node.'},
  {t:'Broker Sync', d:'Cross-broker order orchestration logic.'},
  {t:'Multi-Account Deployment', d:'Execution across distinct investor IDs.'},
  {t:'Advanced Reporting', d:'Institutional investor-grade analytics templates.'},
  {t:'Infra Remediation', d:'Audit-to-fix rapid implementation sprints.'},
  {t:'Technical Enablement', d:'Workshops for technical institution/educator teams.'}
];

onMounted(() => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }

/* System highlight transition */
.cursor-pointer {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
</style>