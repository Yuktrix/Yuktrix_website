<template>
  <div class="md:pb-12 bg-[#cdcfd1] min-h-screen">
    <!-- Header / Hero Section -->
    <section
      class="relative min-h-[85vh] pt-20 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/ai-powered-device-concept.jpg"
          alt="Financial Trading Background"
          class="w-full h-full object-cover opacity-80"
        />
        <!-- Darker gradient for better text readability and professional contrast -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/80 via-[#090a0a]/60 to-[#cdcfd1]/90"
        ></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div 
          class="inline-block px-4 py-1.5 mb-6 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-white/90 font-mono text-xs uppercase tracking-widest"
          data-aos="fade-down"
        >
          Implementation Services
        </div>
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight"
          data-aos="zoom-in"
        >
          Trading Automation Consulting & <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]"
            >Systemized Implementation</span
          >
        </h1>
        <p 
          class="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Structured quantitative system design, validation, and disciplined execution architecture for serious market participants.
        </p>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="container mx-auto px-6 py-20 relative z-10 -mt-16">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-[#090a0a] mb-4">Core Competencies & Services</h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-[#db961f] to-[#FEE337] mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card (Iterated cleanly via Vue v-for) -->
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group bg-white rounded-2xl p-8 border border-black/5 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-[#db961f]/40 transition-all duration-300 flex flex-col h-full"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Card Header -->
          <div class="mb-6 flex items-center justify-between">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#cdcfd1]/30 text-[#090a0a] font-mono font-bold text-lg border border-[#cdcfd1] group-hover:bg-[#db961f] group-hover:text-white group-hover:border-[#db961f] transition-colors duration-300">
              {{ service.id }}
            </div>
          </div>
          
          <h3 class="text-xl md:text-2xl font-bold mb-6 text-[#090a0a] leading-tight">
            {{ service.title }}
          </h3>
          
          <!-- Card Content Body -->
          <div class="space-y-6 flex-grow">
            <!-- Challenge -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-black/40 mb-2">The Challenge</h4>
              <p class="text-black/70 text-sm leading-relaxed">
                {{ service.challenge }}
              </p>
            </div>
            
            <!-- Approach -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#db961f] mb-2">Our Approach</h4>
              <p class="text-black/80 text-sm leading-relaxed border-l-2 border-[#db961f] pl-4 py-1">
                {{ service.approach }}
              </p>
            </div>
            
            <!-- Deliverables -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-black/40 mb-3">Deliverables</h4>
              <ul class="space-y-2">
                <li v-for="(item, i) in service.deliverables" :key="i" class="flex items-start gap-2 text-sm text-black/80 font-medium">
                  <!-- Custom Check SVG -->
                  <svg class="w-4 h-4 text-[#db961f] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Optional Note Footer -->
          <div v-if="service.note" class="mt-8 pt-6 border-t border-black/5">
            <p class="text-xs text-black/50 italic leading-relaxed">
              * {{ service.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-24 bg-[#090a0a] text-center overflow-hidden mt-12 shadow-2xl"
    >
      <!-- Background Effect -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#db961f]/10 rounded-full blur-[120px] pointer-events-none z-0"
      ></div>

      <!-- Content Container -->
      <div class="container mx-auto px-6 relative z-10" data-aos="zoom-in">
        <div class="mb-6 flex justify-center">
          <span class="px-5 py-2 rounded-full border border-[#db961f]/30 bg-[#db961f]/10 text-[#FEE337] text-sm font-semibold tracking-widest uppercase">
            Yuktrix Engagements
          </span>
        </div>

        <h3
          class="text-3xl md:text-5xl font-display font-bold max-w-4xl mx-auto leading-tight mb-8 text-white drop-shadow-lg"
        >
          Ready to Architect <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]"
            >Your Trading System?</span
          >
        </h3>

        <div class="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
          <span v-for="tag in ['Strategy Complexity', 'Risk Profile', 'Capital Scale', 'Automation Scope', 'Institutional Requirements']" :key="tag" class="px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-full text-xs font-medium tracking-wide">
            {{ tag }}
          </span>
        </div>

        <p
          class="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Engagements are custom-tailored based on your specific requirements. Initial consultations assess implementation feasibility before any roadmap design.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            @click="openRegistrationModal"
            class="group relative bg-gradient-to-r from-[#db961f] to-[#FEE337] text-[#090a0a] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(219,150,31,0.3)] overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2"> 
              Book a Consultation Call 
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
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

// Extracted Content Data for clean, maintainable rendering
const services = [
  {
    id: "01",
    title: "Strategy Structuring & Quantitative Validation",
    challenge: "Many trading strategies remain ideas rather than systems. Without formal rule structuring and statistical validation, performance becomes inconsistent and vulnerable to regime shifts.",
    approach: "We convert discretionary trading logic into defined rule-based systems supported by quantitative analysis. Validation precedes automation.",
    deliverables: [
      "Rule formalization & logic structuring",
      "Expectancy modeling",
      "Drawdown and risk behavior analysis",
      "Statistical robustness testing",
      "Multi-period backtesting",
      "Sensitivity and parameter stability review"
    ],
    note: "This service may operate independently or as part of full end-to-end implementation."
  },
  {
    id: "02",
    title: "Execution Architecture & Automation Implementation",
    challenge: "Even validated systems fail when execution is inconsistent or operationally unstable. Manual intervention introduces variability and risk.",
    approach: "We design structured automation architecture aligned with defined system logic and capital governance. Automation is implemented with engineering discipline — not code-only deployment.",
    deliverables: [
      "Broker API integration",
      "Execution engine structuring",
      "Order management systems",
      "Position sizing logic integration",
      "Monitoring and logging infrastructure",
      "Deployment architecture design"
    ],
    note: "This service is available for clients who already have defined trading strategies."
  },
  {
    id: "03",
    title: "Risk Management Framework Design",
    challenge: "Entries are often optimized while risk architecture remains undefined. Capital governance must be engineered before system scaling.",
    approach: "We design structured risk frameworks integrated into system logic. Risk precedes return.",
    deliverables: [
      "Position sizing models",
      "Capital allocation design",
      "Exposure limit structuring",
      "Drawdown control frameworks",
      "Portfolio-level risk evaluation",
      "Monitoring dashboards"
    ],
    note: "This service can be delivered independently or integrated within full implementation engagements."
  },
  {
    id: "04",
    title: "AI & Quantitative Enhancement Systems",
    challenge: "Markets evolve. Static rule systems may require adaptive intelligence layers to remain robust.",
    approach: "We apply machine learning and quantitative modeling techniques as structured enhancement layers. AI augments validation — it does not replace discipline.",
    deliverables: [
      "Regime detection modeling",
      "Volatility adaptation frameworks",
      "Feature-based signal evaluation",
      "Parameter sensitivity analysis",
      "Quantitative enhancement modules"
    ],
    note: "Primarily suited for advanced or institutional-scale participants."
  },
  {
    id: "05",
    title: "Ongoing Monitoring & Optimization Governance",
    challenge: "Deployment does not eliminate responsibility. System drift and structural changes require disciplined evaluation.",
    approach: "We implement governance frameworks for ongoing performance assessment. Optimization is validation-driven — not reactive.",
    deliverables: [
      "Periodic performance reviews",
      "Expectancy drift analysis",
      "Risk metric reassessment",
      "Structural integrity evaluation",
      "Parameter review cycles"
    ],
    note: null
  },
  {
    id: "06",
    title: "Trading Infrastructure Audit & System Review",
    challenge: "Existing trading systems may lack transparency, validation clarity, or risk governance.",
    approach: "We conduct structured audits to evaluate system robustness and infrastructure integrity.",
    deliverables: [
      "Strategy logic review",
      "Backtest credibility assessment",
      "Risk framework evaluation",
      "Execution architecture analysis",
      "Structural gap identification"
    ],
    note: "Ideal for traders and firms seeking independent system evaluation."
  },
  {
    id: "07",
    title: "Portfolio-Level System Architecture Design",
    challenge: "Multiple strategies operating independently can create hidden risk concentration.",
    approach: "We design portfolio-level architecture coordinating capital allocation across systems.",
    deliverables: [
      "Multi-strategy allocation design",
      "Correlation analysis",
      "Exposure balancing models",
      "Portfolio risk structuring",
      "Integrated governance design"
    ],
    note: null
  }
];

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // AOS animations initialized globally
});
</script>