<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-[#090a0a]">
    <!-- Hero Section -->
    <section
      class="relative min-h-[85vh] pt-20 pb-16 flex items-center justify-center overflow-hidden border-b border-[#090a0a]/10"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/home/business-person-futuristic-business-environment.jpg"
          alt="Financial Technology Background"
          class="w-full h-full object-cover opacity-90 grayscale z-0 mix-blend-multiply"
        />
        <!-- Professional dark gradient overlay matching the Services page -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/80 to-[#cdcfd1]"
        ></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center pt-10">
        <div 
          class="inline-block px-4 py-1.5 mb-8 bg-[#090a0a]/50 border border-[#db961f]/30 backdrop-blur-md rounded-full text-[#db961f] font-mono text-xs uppercase tracking-[0.2em]"
          data-aos="fade-down"
        >
          The Firm
        </div>
        
        <div data-aos="zoom-in">
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white leading-[1.1] tracking-tight"
          >
            <span class="block">Engineering discipline</span>
            <span class="block text-white/90">into modern trading.</span>
          </h1>
          
          <!-- Animated Text Chunk -->
          <div class="h-16 md:h-24 mt-6 overflow-hidden flex justify-center">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-300 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <span
                :key="activeAboutHeroIndex"
                class="inline-block text-2xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]"
              >
                {{ aboutHeroChunks[activeAboutHeroIndex] }}
              </span>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Wrapper -->
    <div class="container mx-auto px-6 max-w-[1400px] py-24 space-y-32">
      
      <!-- 01: Our Foundation (Editorial Manifesto Layout) -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Section Title -->
          <div class="lg:col-span-4">
            <h2 class="text-sm font-mono text-[#090a0a]/50 uppercase tracking-[0.2em] mb-4">01 // The Manifesto</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-[#090a0a] leading-tight">
              Our <br/><span class="text-[#db961f]">Foundation</span>
            </h3>
          </div>
          
          <!-- Content Blocks -->
          <div class="lg:col-span-8 space-y-12">
            <p class="text-2xl md:text-3xl font-light text-[#090a0a] leading-snug">
              Yuktrix exists to bring institutional-grade structure to independent trading capital.
            </p>
            
            <div class="w-full h-px bg-[#090a0a]/10"></div>
            
            <div class="grid md:grid-cols-2 gap-10">
              <div>
                <h4 class="text-xs font-bold uppercase tracking-widest text-[#db961f] mb-4">The Mission</h4>
                <p class="text-base text-[#090a0a]/80 leading-relaxed">
                  To systemize trading through disciplined quantitative engineering — enabling serious market participants to operate with structure, clarity, and measurable edge.
                </p>
              </div>
              <div>
                <h4 class="text-xs font-bold uppercase tracking-widest text-[#db961f] mb-4">The Vision</h4>
                <p class="text-base text-[#090a0a]/80 leading-relaxed">
                  To redefine how capital participates in markets — where structure replaces speculation, data replaces bias, and engineered systems level the playing field between independent traders and institutions.
                </p>
              </div>
            </div>

            <div class="bg-[#090a0a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#db961f]/20 blur-3xl rounded-full"></div>
              <svg class="w-10 h-10 text-[#db961f] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-2xl md:text-3xl font-light text-[#cdcfd1] leading-relaxed italic">
                “Let’s make the game fair for everyone.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 02: Core Competence (Redesigned with Integrated Data & AI) -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div class="lg:col-span-4">
            <h2 class="text-sm font-mono text-[#090a0a]/50 uppercase tracking-[0.2em] mb-4">02 // The Engine</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-[#090a0a] leading-tight">
              Core <br/><span class="text-[#db961f]">Competence</span>
            </h3>
          </div>
          <div class="lg:col-span-8 flex items-end pb-2">
            <p class="text-xl text-[#090a0a]/80 font-light max-w-2xl">
              Yuktrix approaches trading automation as a systems engineering discipline. We do not treat trading automation as script development. We treat it as structured quantitative system design.
            </p>
          </div>
        </div>

        <div class="bg-[#090a0a] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <!-- Part 1: Grid (Our Core Competence) -->
          <div class="p-8 md:p-16 border-b border-white/5">
            <div class="mb-12">
              <p class="text-[#db961f] font-mono text-sm uppercase tracking-widest">Quantitative System Engineering</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(item, i) in coreCompetencies" :key="i" class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#db961f]/40 hover:bg-white/[0.04] transition-all group">
                <svg class="w-8 h-8 text-[#db961f] mb-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="item.iconPaths"></svg>
                <h3 class="text-xl font-semibold text-white mb-2">{{ item.title }}</h3>
                <p class="text-white/60 text-sm">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Part 2: Full-Stack Data & AI Foundation -->
          <div class="p-8 md:p-16 relative overflow-hidden">
            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#db961f]/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div class="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Full-Stack Data & <br/>AI Foundation</h2>
                <p class="text-white/60 mb-8 leading-relaxed text-lg">
                  Behind every structured trading system lies a strong data and analytical backbone. This multidisciplinary capability enables trading systems to be designed with measurable structural integrity.
                  <br/><br/>
                  <strong class="text-white font-medium">AI is applied as an enhancement layer — not as a substitute for validation discipline.</strong>
                </p>
                <div class="space-y-4">
                  <div v-for="(item, i) in dataFoundationItems" :key="i" class="flex items-center gap-4 p-4 rounded-xl bg-[#090a0a] border border-white/10 hover:border-[#db961f]/30 transition-colors">
                    <svg class="w-5 h-5 text-[#FEE337]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="item.iconPaths"></svg>
                    <span class="text-white/80 font-medium">{{ item.text }}</span>
                  </div>
                </div>
              </div>
              
              <div class="relative flex justify-center lg:justify-end">
                <div class="w-full max-w-[400px] aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 relative">
                  <!-- Decorative Tech Rings -->
                  <div class="absolute inset-4 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]"></div>
                  <div class="absolute inset-12 rounded-full border border-[#db961f]/20"></div>
                  <div class="absolute inset-20 rounded-full border border-dashed border-[#FEE337]/30 animate-[spin_40s_linear_infinite_reverse]"></div>
                  
                  <div class="bg-[#090a0a] w-40 h-40 rounded-full border-2 border-[#db961f] shadow-[0_0_30px_rgba(219,150,31,0.2)] flex items-center justify-center flex-col z-10">
                    <svg class="w-10 h-10 text-[#db961f] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                    <span class="font-mono text-xs text-white">DATA CORE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 03: Perspective (Split Screen Contrast Layout) -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="text-center mb-16">
          <h2 class="text-sm font-mono text-[#090a0a]/50 uppercase tracking-[0.2em] mb-4">03 // The Philosophy</h2>
          <h3 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a]">
            Modern Trading <span class="text-[#db961f]">Automation</span>
          </h3>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <!-- Failure Side (Left) -->
          <div class="w-full md:w-1/2 bg-white p-12 lg:p-16 border-r border-[#090a0a]/5">
            <div class="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-8">
              <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h4 class="text-2xl font-bold text-[#090a0a] mb-8">Many automated systems fail because they:</h4>
            <ul class="space-y-6">
              <li v-for="item in ['Lack statistical validation', 'Overfit historical data', 'Ignore regime shifts', 'Operate without defined risk governance', 'Rely on opaque logic']" :key="item" class="flex items-center gap-4">
                <span class="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0"></span>
                <span class="text-lg text-[#090a0a]/70 font-light">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Belief Side (Right) -->
          <div class="w-full md:w-1/2 bg-[#090a0a] p-12 lg:p-16 relative overflow-hidden">
            <div class="absolute right-0 bottom-0 w-64 h-64 bg-[#db961f]/10 blur-[80px] rounded-full"></div>
            <div class="w-12 h-12 rounded-full bg-[#db961f]/20 flex items-center justify-center mb-8 relative z-10">
              <svg class="w-6 h-6 text-[#db961f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-2xl font-bold text-white mb-8 relative z-10">At Yuktrix, we believe:</h4>
            <ul class="space-y-6 relative z-10">
              <li v-for="(item, prefix) in {
                'Systems': 'must precede automation.',
                'Risk': 'must precede return.',
                'Validation': 'must precede scaling.',
                'Engineering': 'must precede execution.'
              }" :key="prefix" class="flex items-center gap-4 text-lg">
                <svg class="w-5 h-5 text-[#db961f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                <span class="text-white/80 font-light"><strong class="text-white font-semibold">{{ prefix }}</strong> {{ item }}</span>
              </li>
            </ul>
            <div class="mt-10 pt-8 border-t border-white/10 relative z-10">
              <p class="text-sm font-mono text-[#db961f] uppercase tracking-widest leading-relaxed">
                Structured methodology is what separates disciplined system implementation from signal-driven automation.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- 04: Consulting Discipline (Timeline Layout) -->
      <section data-aos="fade-up" class="border-t border-[#090a0a]/10 pt-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5">
            <div class="sticky top-32">
              <h2 class="text-sm font-mono text-[#090a0a]/50 uppercase tracking-[0.2em] mb-4">04 // The Methodology</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-[#090a0a] leading-tight mb-8">
                Structured <br/><span class="text-[#db961f]">Discipline</span>
              </h3>
              <p class="text-lg text-[#090a0a]/70 leading-relaxed mb-6">
                Yuktrix follows a defined implementation methodology — not an ad hoc development process.
              </p>
              <p class="text-lg text-[#090a0a]/70 leading-relaxed border-l-2 border-[#db961f] pl-4">
                Our consulting discipline ensures that trading systems are implemented with accountability, architectural clarity, and measurable integrity.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7">
            <!-- Timeline Process -->
            <div class="relative border-l border-[#090a0a]/20 ml-4 md:ml-6 space-y-12 pb-8">
              <div v-for="(step, index) in [
                { title: 'Clarity of rule structure', desc: 'Transforming discretionary ideas into absolute, code-ready logic.' },
                { title: 'Quantitative validation', desc: 'Rigorous statistical testing across multiple regimes and datasets.' },
                { title: 'Defined capital governance', desc: 'Position sizing and risk models engineered before capital deployment.' },
                { title: 'Controlled automation design', desc: 'Building the execution infrastructure with failsafes and redundancies.' },
                { title: 'Ongoing performance monitoring', desc: 'Continuous evaluation of system drift and expectancy metrics.' }
              ]" :key="index" class="relative pl-8 md:pl-12">
                <!-- Timeline Dot -->
                <div class="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#cdcfd1] border-4 border-[#db961f]"></div>
                
                <div class="bg-white p-6 md:p-8 rounded-2xl border border-[#090a0a]/5 shadow-lg hover:shadow-xl transition-shadow group">
                  <div class="text-[#db961f] font-mono text-sm font-bold mb-2">PHASE 0{{ index + 1 }}</div>
                  <h4 class="text-xl font-bold text-[#090a0a] mb-2 group-hover:text-[#db961f] transition-colors">{{ step.title }}</h4>
                  <p class="text-[#090a0a]/60 text-sm md:text-base">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 05: India-Based, Globally Structured (Wide Banner Layout) -->
      <section data-aos="fade-up" class="pb-16 pt-16">
        <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
          <img src="/about/india.png" alt="Global Operations" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" />
          <div class="absolute inset-0 bg-[#090a0a]"></div>
          <!-- Internal Grid Overlay -->
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 40px 40px;"></div>

          <div class="relative z-10 w-full px-8 md:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-sm font-mono text-[#db961f] uppercase tracking-[0.2em] mb-4">05 // Operations</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                India-Based. <br/>Globally <span class="text-[#db961f]">Structured.</span>
              </h3>
              <p class="text-lg text-white/80 leading-relaxed mb-6">
                Yuktrix operates from India with a globally aligned quantitative and engineering mindset. Our objective is to design trading system architectures that meet professional standards across evolving and dynamic market environments.
              </p>
            </div>
            
            <div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
              <svg class="w-8 h-8 text-[#db961f] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p class="text-xl text-white font-light leading-relaxed">
                We work with serious individual participants, high-net-worth traders, proprietary desks, and financial firms seeking disciplined, structured implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";

const aboutHeroChunks = [
  "Making institutional",
  "structure accessible",
  "to independent",
  "capital.",
];
const activeAboutHeroIndex = ref(0);
const aboutHeroIntervalMs = 1800;
let aboutHeroTimer;

const coreCompetencies = [
  { title: "Strategy Structuring", desc: "Formalizing logic and rule architecture.", iconPaths: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>' },
  { title: "Statistical Robustness", desc: "Rigorous testing of system stability.", iconPaths: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>' },
  { title: "Backtesting Integrity", desc: "Deep-dive analysis to prevent curve-fitting.", iconPaths: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>' },
  { title: "Expectancy Modeling", desc: "Advanced risk assessment and return profiling.", iconPaths: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>' },
  { title: "Execution Infrastructure", desc: "Building resilient, low-latency architecture.", iconPaths: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>' },
  { title: "Portfolio Coordination", desc: "System-level integration across strategies.", iconPaths: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>' }
];

const dataFoundationItems = [
  { text: "Data pipeline architecture", iconPaths: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>' },
  { text: "Statistical analytics frameworks", iconPaths: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
  { text: "Feature engineering methodologies", iconPaths: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>' },
  { text: "Quantitative modeling techniques", iconPaths: '<rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>' },
  { text: "Machine learning enhancements", iconPaths: '<path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15a2.5 2.5 0 0 0 4.9 0 2.5 2.5 0 0 0 4.2 0 2.5 2.5 0 0 0 4.9 0v-15A2.5 2.5 0 0 0 18.5 2 2.5 2.5 0 0 0 14 4.5 2.5 2.5 0 0 0 9.5 2Z"/><path d="M14 4.5V22"/><path d="M14 12H9.5"/><path d="M14 17h4.5"/><path d="M14 7h4.5"/>' },
  { text: "Execution monitoring systems", iconPaths: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>' }
];

const teamMembers = [
  {
    name: "Ankit Sharma",
    role: "CEO & Co-Founder",
    bio: "Ex-Quant at Goldman Sachs. IIT Bombay alumnus. Passionate about democratizing institutional finance.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "CTO & Co-Founder",
    bio: "Former ML Lead at Microsoft. Expert in building scalable AI systems for financial markets.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Rohit Menon",
    role: "Head of Product",
    bio: "Ex-Product Lead at Zerodha. 10+ years crafting user-centric fintech experiences for Indian investors.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Neha Gupta",
    role: "Head of Data Science",
    bio: "PhD in Quantitative Finance. Previously built risk models for SEBI-regulated hedge funds.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
  },
];

onMounted(() => {
  aboutHeroTimer = setInterval(() => {
    activeAboutHeroIndex.value =
      (activeAboutHeroIndex.value + 1) % aboutHeroChunks.length;
  }, aboutHeroIntervalMs);
});

onBeforeUnmount(() => {
  if (aboutHeroTimer) {
    clearInterval(aboutHeroTimer);
  }
});
</script>