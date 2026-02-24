<template>
  <div class="font-sans selection:bg-[#db961f] selection:text-black bg-[#cdcfd1]">
    <!-- ==========================================
      1. HERO SECTION (Creative Tech Design)
    =========================================== -->
    <section class="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <!-- Deep Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/home/slide.png"
          alt="Financial Intelligence Background"
          class="w-full h-full object-cover object-center opacity-30 grayscale mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <!-- Advanced Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/80 to-[#cdcfd1]/10"></div>
      </div>

      <!-- Architectural Grid Overlay -->
      <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15]" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 4rem 4rem; mask-image: radial-gradient(circle at center, black, transparent 80%); -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);"></div>

      <!-- Animated Glow Effects -->
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#db961f]/15 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite] z-0 pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite] z-0 pointer-events-none"></div>

      <!-- Floating Tech Badges (Parallax/Float effect) -->
      <div class="hidden lg:flex absolute top-[30%] left-10 items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white/50 font-mono text-[10px] uppercase tracking-widest animate-[bounce_4s_ease-in-out_infinite]">
        <span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span> System.Active
      </div>
      <div class="hidden lg:flex absolute bottom-[30%] right-10 items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white/50 font-mono text-[10px] uppercase tracking-widest animate-[bounce_5s_ease-in-out_infinite_reverse]">
        <svg class="w-4 h-4 text-[#db961f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> 0.1ms Latency
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-6 relative z-10 pt-10 text-center flex flex-col items-center justify-center">
        <div class="gsap-hero-text opacity-0 translate-y-10 flex flex-col items-center w-full">
          
          <!-- Top Badge -->
          <div class="inline-flex items-center justify-center gap-3 px-5 py-2 mb-8 bg-[#090a0a] border border-[#db961f]/30 rounded-full shadow-[0_0_20px_rgba(219,150,31,0.15)] backdrop-blur-xl">
            <span class="w-2 h-2 rounded-full bg-[#db961f] animate-ping"></span>
            <span class="text-[#db961f] text-[11px] font-mono font-bold uppercase tracking-[0.25em]">Quantitative Architecture</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] mb-8 tracking-tighter max-w-5xl mx-auto drop-shadow-2xl">
            <span class="block text-white mb-2">Where Quant Discipline</span>
            <span class="flex items-center justify-center gap-4 text-[#db961f] italic font-light my-4 text-4xl md:text-5xl lg:text-6xl">
              <span class="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[#db961f]"></span>
              Meets
              <span class="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[#db961f]"></span>
            </span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-br from-white via-[#cdcfd1] to-white/50 pb-2">
              Automation Intelligence
            </span>
          </h1>

          <!-- Dynamic Feature Scroller (Terminal Style) -->
          <div class="h-14 md:h-16 overflow-hidden mb-12 flex items-center justify-start bg-white/5 border border-white/10 backdrop-blur-md px-6 md:px-8 py-3 rounded-2xl w-full max-w-lg shadow-inner">
            <span class="text-[#db961f] font-mono mr-4 font-bold text-lg">></span>
            <Transition name="hero-feature" mode="out-in">
              <div
                :key="activeHeroFeatureIndex"
                class="text-base md:text-lg font-mono text-white/90 tracking-wide w-full text-left flex items-center"
              >
                {{ heroFeatures[activeHeroFeatureIndex] }}<span class="inline-block w-2 h-5 bg-[#db961f] ml-1 animate-pulse"></span>
              </div>
            </Transition>
          </div>

          <!-- CTA Button -->
          <button
            @click="openRegistrationModal"
            class="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-[#090a0a] bg-gradient-to-r from-[#db961f] to-[#FEE337] rounded-full overflow-hidden shadow-[0_0_40px_rgba(219,150,31,0.25)] hover:shadow-[0_0_60px_rgba(219,150,31,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span class="relative z-10 flex items-center gap-3 text-lg tracking-wide uppercase"> 
              Book Free Consultation
              <svg class="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
      </div>

      <!-- Advanced Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-white/30 z-10">
        <span class="text-[10px] font-bold font-mono uppercase tracking-[0.3em] opacity-80">Initialize</span>
        <div class="relative w-px h-16 bg-white/10 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#db961f] to-transparent animate-scrolldown"></div>
        </div>
      </div>
    </section>

   <!-- ==========================================
      2. PROBLEM VS SOLUTION (Editorial Glassmorphism)
    =========================================== -->
    <section class="py-24 bg-[#cdcfd1] relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      <div class="container mx-auto px-6 max-w-[1400px]">
        
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          <!-- LEFT COLUMN: THE FLAW -->
          <div class="flex flex-col h-full" data-aos="fade-right">
            
            <!-- 1. Heading (Standardized Height for Alignment) -->
            <div class="lg:h-[200px] mb-8 lg:mb-0">
              <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-red-500/10 border border-red-500/20 text-red-600 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                The Flaw
              </div>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-[1.1]">
                Structural Problem in <br/><span class="text-red-600/90">Modern Trading</span>
              </h2>
            </div>

            <!-- 2. Image -->
            <div class="relative group mb-8">
              <div class="absolute inset-0 bg-red-500/10 blur-[60px] rounded-full transform translate-y-4 group-hover:bg-red-500/20 transition-colors duration-500 pointer-events-none"></div>
              <div class="relative rounded-[2rem] p-3 bg-white/20 backdrop-blur-md border border-white/40 shadow-xl overflow-hidden">
                 <img src="/home/Structural_problem.png" alt="Structural Problem" class="rounded-3xl w-full h-[250px] md:h-[300px] object-cover" />
                 <div class="absolute inset-0 bg-red-500/5 mix-blend-overlay pointer-events-none rounded-3xl"></div>
              </div>
            </div>

            <!-- 3. Content -->
            <div class="flex-grow flex flex-col">
              <p class="text-xl font-light text-[#090a0a]/70 mb-8 leading-snug">
                <strong class="font-bold text-[#090a0a]">It’s not the strategy. It’s the structure.</strong> If your system leaks at every stage, no amount of capital will fix it.
              </p>

              <!-- Elegant Glassmorphic Card (Flaw Pattern) -->
              <div class="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.05)] relative overflow-hidden mt-auto">
                <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[60px] rounded-full pointer-events-none"></div>
                
                <h3 class="text-sm font-bold text-[#090a0a]/50 uppercase tracking-widest mb-4 relative z-10">Common Structural Weaknesses:</h3>
                
                <div class="space-y-2 relative z-10">
                  <div v-for="(item, i) in flawPoints" :key="i" class="flex items-start gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-black/5 group">
                    <div class="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-500 transition-colors duration-300">
                       <svg class="w-3.5 h-3.5 text-red-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span class="text-sm md:text-[15px] text-[#090a0a]/80 font-medium leading-relaxed group-hover:text-[#090a0a] transition-colors">{{ item }}</span>
                  </div>
                </div>

                <!-- Strong Centralized Statement -->
                <div class="mt-6 flex justify-center relative z-10">
                   <div class="inline-flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-[0.1em] uppercase shadow-lg cursor-default">
                    <span class="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></span>
                    It breaks faster.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: THE FIX -->
          <div class="flex flex-col h-full" data-aos="fade-left">
            
            <!-- 1. Heading (Standardized Height for Alignment) -->
            <div class="lg:h-[200px] mb-8 lg:mb-0">
              <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#db961f]/10 border border-[#db961f]/30 text-[#db961f] rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse shadow-[0_0_8px_rgba(219,150,31,0.8)]"></span>
                The Fix
              </div>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] leading-[1.1]">
                The <span class="text-[#db961f]">Optimized Solution</span>
              </h2>
            </div>

            <!-- 2. Image -->
            <div class="relative group mb-8">
              <div class="absolute inset-0 bg-[#db961f]/20 blur-[60px] rounded-full transform translate-y-4 group-hover:bg-[#db961f]/30 transition-colors duration-500 pointer-events-none"></div>
              <div class="relative rounded-[2rem] p-3 bg-white/20 backdrop-blur-md border border-white/40 shadow-xl overflow-hidden">
                 <img src="/home/systemized_trading.png" alt="Systemized Trading" class="rounded-3xl w-full h-[250px] md:h-[300px] object-cover" />
              </div>
            </div>

            <!-- 3. Content -->
            <div class="flex-grow flex flex-col">
              <p class="text-xl font-light text-[#090a0a]/70 mb-8 leading-snug">
                <strong class="font-bold text-[#db961f]">It’s Not More Signals. It’s a System.</strong> Systemized trading converts ideas into rule-defined, statistically validated, risk-governed processes.
              </p>
              
              <!-- Elegant Glassmorphic Card (Solution Pattern) -->
              <div class="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.05)] relative overflow-hidden mt-auto">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#db961f]/5 blur-[60px] rounded-full pointer-events-none"></div>
                
                <h3 class="text-sm font-bold text-[#090a0a]/50 uppercase tracking-widest mb-4 relative z-10">Systemized Advantages:</h3>

                <div class="space-y-2 relative z-10">
                  <div v-for="(item, i) in solutionPoints" :key="i" class="flex items-start gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-black/5 group">
                    <div class="w-7 h-7 rounded-full bg-[#db961f]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#db961f] transition-colors duration-300">
                       <svg class="w-3.5 h-3.5 text-[#db961f] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span class="text-sm md:text-[15px] text-[#090a0a]/80 font-medium leading-relaxed group-hover:text-[#090a0a] transition-colors">{{ item }}</span>
                  </div>
                </div>

                <!-- Strong Centralized Statement -->
                <div class="mt-6 flex justify-center relative z-10">
                   <div class="inline-flex items-center gap-3 bg-[#090a0a] text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-[0.1em] uppercase shadow-lg cursor-default">
                    <span class="w-2 h-2 rounded-full bg-[#db961f] shadow-[0_0_8px_#db961f]"></span>
                    Structure first. Scale second.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ==========================================
      3. IMPLEMENTATION FRAMEWORK (Glowing Timeline)
    =========================================== -->
    <section class="py-32 bg-[#090a0a] relative overflow-hidden">
      <!-- Ambient Glows -->
      <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#cdcfd1]/20 to-transparent"></div>
      <div class="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#db961f]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-7xl relative z-10">
        
        <!-- Header -->
        <div class="text-center mb-24" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span class="text-[#db961f]">Implementation Framework</span>
          </h2>
          <p class="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Yuktrix operates as an algorithmic trading consultancy focused on structured systemized trading implementation.
            <br/><span class="text-white font-semibold mt-2 inline-block">This is not bot selling. This is professional trading architecture.</span>
          </p>
        </div>

        <!-- Central Timeline Track -->
        <div class="relative max-w-6xl mx-auto">
          <!-- The Glowing Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#db961f]/0 via-[#db961f] to-[#db961f]/0 -translate-x-1/2 shadow-[0_0_15px_rgba(219,150,31,0.5)]"></div>

          <!-- Timeline Items -->
          <div v-for="(step, index) in frameworkSteps" :key="index" class="relative mb-24 md:mb-32 last:mb-0" :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
            <div class="md:grid md:grid-cols-2 gap-16 items-stretch">
              
              <!-- Content (Alternating logic) -->
              <div :class="['order-2 md:order-none md:row-start-1 md:h-full', index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12']">
                <div class="h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#db961f]/50 hover:bg-white/10 transition-all group relative overflow-hidden flex flex-col">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#db961f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#db961f] transition-colors">
                    {{ step.title }}
                  </h3>
                  <p class="text-white/70 text-lg leading-relaxed mb-8">
                    <span class="font-bold text-white block mb-2">{{ step.subtitle }}</span>
                    {{ step.desc }}
                  </p>
                  <div :class="['flex flex-wrap gap-3', index % 2 === 0 ? 'md:justify-end' : 'md:justify-start']">
                    <span v-for="tag in step.tags" :key="tag" class="px-4 py-1.5 rounded-full bg-[#db961f]/10 text-[#db961f] text-xs font-bold uppercase tracking-wider border border-[#db961f]/20">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Node Marker (Desktop) -->
              <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="w-14 h-14 rounded-full bg-[#090a0a] border-4 border-[#db961f] flex items-center justify-center shadow-[0_0_20px_rgba(219,150,31,0.6)]">
                  <span class="text-[#db961f] font-bold text-xl">{{ index + 1 }}</span>
                </div>
              </div>

              <!-- Image (Alternating logic) -->
              <div :class="['order-1 mb-8 md:mb-0 md:order-none md:row-start-1 md:h-full', index % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:pr-12']">
                <div class="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2 h-full min-h-[300px] lg:min-h-[400px]">
                  <img :src="step.image" :alt="step.title" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#090a0a]/80 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="text-center mt-32" data-aos="fade-up">
          <button @click="openRegistrationModal" class="relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[#db961f] rounded-full overflow-hidden group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="relative">Start Building Your Framework</span>
          </button>
        </div>

      </div>
    </section>

<!-- ==========================================
      4. AUDIENCE SEGMENTATION
    =========================================== -->
    <section class="py-32 px-6 bg-[#cdcfd1]">
        <div class="max-w-7xl mx-auto" data-aos="fade-up">
            <div class="grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 flex flex-col justify-center">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-[#090a0a] mb-6">Target <br/><span class="text-[#db961f]">Parameters</span></h2>
                    <p class="text-[#090a0a]/70 text-lg leading-relaxed">
                        We maintain a strict qualification process to ensure implementation alignment and capital seriousness.
                    </p>
                    <div class="mt-10 p-4 border border-red-500/20 rounded-xl bg-red-500/10 text-red-600 font-bold text-xs md:text-sm font-mono tracking-widest uppercase shadow-sm">
                        [!] Yuktrix does not sell signals
                    </div>
                </div>
                
                <div class="lg:col-span-8 grid md:grid-cols-2 gap-8">
                    <!-- ACCESS GRANTED -->
                    <div class="p-8 lg:p-10 border border-white/40 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform">
                        <span class="font-mono text-[11px] font-bold text-[#db961f] block mb-6 tracking-[0.2em] uppercase">ACCESS_GRANTED</span>
                        <h3 class="text-[#090a0a] font-bold text-xl lg:text-2xl mb-8 uppercase tracking-wider">This Engagement is For:</h3>
                        <ul class="space-y-5 text-base text-[#090a0a]/80 font-medium">
                            <li class="flex items-start gap-4">
                                <span class="text-[#db961f] mt-0.5">→</span>
                                <span>Serious Individual Market Participants</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-[#db961f] mt-0.5">→</span>
                                <span>High Net Worth Traders (HNIs)</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-[#db961f] mt-0.5">→</span>
                                <span>Proprietary Trading Desks</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-[#db961f] mt-0.5">→</span>
                                <span>Advisory & Financial Firms</span>
                            </li>
                        </ul>
                    </div>

                    <!-- ACCESS DENIED -->
                    <div class="p-8 lg:p-10 border border-[#090a0a]/10 bg-[#090a0a] rounded-[2rem] shadow-2xl hover:-translate-y-1 transition-transform relative overflow-hidden">
                        <div class="absolute right-0 top-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <span class="font-mono text-[11px] font-bold text-red-500 block mb-6 tracking-[0.2em] uppercase relative z-10">ACCESS_DENIED</span>
                        <h3 class="text-white font-bold text-xl lg:text-2xl mb-8 uppercase tracking-wider relative z-10">This is Not For:</h3>
                        <ul class="space-y-5 text-base text-white/70 font-light relative z-10">
                            <li class="flex items-start gap-4">
                                <span class="text-red-500 mt-0.5">✕</span>
                                <span>Short-term signal seekers</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-red-500 mt-0.5">✕</span>
                                <span>Copy-trading participants</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-red-500 mt-0.5">✕</span>
                                <span>"Guaranteed return" expectations</span>
                            </li>
                            <li class="flex items-start gap-4">
                                <span class="text-red-500 mt-0.5">✕</span>
                                <span>Casual capital experimentation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
      5. TECH STACK (Full-Stack Data & AI Expertise)
    =========================================== -->
    <section class="py-32 px-6 bg-[#090a0a] relative overflow-hidden border-t border-white/5">
        <!-- Glows -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#db961f]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div class="container max-w-7xl mx-auto relative z-10" data-aos="fade-up">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Left: 2x2 Grid -->
                <div class="order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-4 md:gap-6">
                        <div class="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#db961f]/50 transition-all group">
                            <div class="font-mono text-xs font-bold text-[#db961f] mb-4 tracking-[0.2em]">DATA_ENG</div>
                            <span class="text-white/90 font-bold text-sm md:text-lg uppercase leading-tight block group-hover:text-white">Pipeline Architecture</span>
                        </div>
                        <div class="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#db961f]/50 transition-all group">
                            <div class="font-mono text-xs font-bold text-[#db961f] mb-4 tracking-[0.2em]">STAT_MOD</div>
                            <span class="text-white/90 font-bold text-sm md:text-lg uppercase leading-tight block group-hover:text-white">Quantitative Analytics</span>
                        </div>
                        <div class="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#db961f]/50 transition-all group">
                            <div class="font-mono text-xs font-bold text-[#db961f] mb-4 tracking-[0.2em]">ML_CORE</div>
                            <span class="text-white/90 font-bold text-sm md:text-lg uppercase leading-tight block group-hover:text-white">Engineered Enhancements</span>
                        </div>
                        <div class="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#db961f]/50 transition-all group">
                            <div class="font-mono text-xs font-bold text-[#db961f] mb-4 tracking-[0.2em]">INFRA_DEV</div>
                            <span class="text-white/90 font-bold text-sm md:text-lg uppercase leading-tight block group-hover:text-white">Execution Design</span>
                        </div>
                    </div>
                </div>
                
                <!-- Right: Content -->
                <div class="order-1 lg:order-2">
                    <span class="font-mono text-xs font-bold text-[#db961f] mb-6 block tracking-[0.2em] uppercase">CAPABILITY_INDEX</span>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">Built on Full-Stack <br/><span class="text-[#db961f]">Data & AI Expertise</span></h2>
                    <p class="text-white/70 text-lg leading-relaxed mb-10">
                        Yuktrix integrates professional data engineering with quantitative strategy evaluation. Our multidisciplinary capability enables solutions grounded in measurable validation — not assumptions.
                    </p>
                    <div class="p-6 border-l-4 border-[#db961f] bg-[#db961f]/10 rounded-r-xl backdrop-blur-sm">
                        <p class="text-white/90 italic font-medium">
                            "We do not deploy opaque black-box systems. Clarity before commitment."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
      6. CONSULTATION PROCESS (Closing CTA)
    =========================================== -->
    <section id="consultation" class="relative py-32 px-6 bg-[#cdcfd1] text-center overflow-hidden">
        <!-- Background Image & Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/home/background.png" alt="AI Technology Background" class="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#cdcfd1] via-[#cdcfd1]/90 to-[#cdcfd1]/40"></div>
        </div>

        <div class="max-w-5xl mx-auto relative z-10" data-aos="zoom-in">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#090a0a] mb-6 tracking-tight">Consultation Structure</h2>
            <div class="font-mono text-xs md:text-sm font-bold text-[#db961f] uppercase tracking-[0.2em] mb-16 px-6 py-2.5 bg-[#090a0a] inline-block rounded-full shadow-lg">Engagement_Workflow</div>
            
            <div class="grid md:grid-cols-2 gap-px bg-[#090a0a]/10 rounded-[2.5rem] border border-[#090a0a]/10 overflow-hidden shadow-2xl mb-24">
                
                <!-- Phase 01 -->
                <div class="p-10 md:p-14 text-left bg-white/80 backdrop-blur-xl hover:bg-white transition-colors">
                    <h4 class="text-[#db961f] font-mono text-xs font-bold tracking-[0.2em] mb-6 uppercase">PHASE_01</h4>
                    <h3 class="text-2xl font-bold text-[#090a0a] mb-8">Assessment Phase</h3>
                    <ul class="space-y-4 text-base text-[#090a0a]/80 font-medium">
                        <li class="flex items-center gap-4"><span class="w-1.5 h-1.5 rounded-full bg-[#db961f]"></span> Strategy clarity assessment</li>
                        <li class="flex items-center gap-4"><span class="w-1.5 h-1.5 rounded-full bg-[#db961f]"></span> Risk tolerance modeling</li>
                        <li class="flex items-center gap-4"><span class="w-1.5 h-1.5 rounded-full bg-[#db961f]"></span> Capital structure review</li>
                        <li class="flex items-center gap-4"><span class="w-1.5 h-1.5 rounded-full bg-[#db961f]"></span> Implementation scoping</li>
                    </ul>
                </div>

                <!-- Phase 02 -->
                <div class="p-10 md:p-14 text-left bg-[#090a0a] relative overflow-hidden">
                    <div class="absolute right-0 bottom-0 w-64 h-64 bg-[#db961f]/10 blur-[80px] rounded-full pointer-events-none"></div>
                    <h4 class="text-[#db961f] font-mono text-xs font-bold tracking-[0.2em] mb-6 uppercase relative z-10">PHASE_02</h4>
                    <h3 class="text-2xl font-bold text-white mb-8 relative z-10">Roadmap Design</h3>
                    <p class="text-white/70 text-lg leading-relaxed relative z-10">
                        Qualified engagements proceed to a structured technical assessment and implementation roadmap design.
                    </p>
                </div>

            </div>

            <!-- CTA Button -->
            <div>
                <h3 class="text-3xl md:text-4xl font-bold text-[#090a0a] mb-10">Build Structured Infrastructure</h3>
                <button @click="openRegistrationModal" class="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white bg-[#090a0a] rounded-full overflow-hidden shadow-[0_15px_30px_rgba(9,10,10,0.2)] hover:-translate-y-1 transition-all">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#db961f] rounded-full group-hover:w-[30rem] group-hover:h-[30rem]"></span>
                    <span class="relative group-hover:text-[#090a0a] transition-colors tracking-widest uppercase text-sm md:text-base">Book Consultation Call</span>
                </button>
                <p class="mt-10 font-mono text-[11px] font-bold text-[#090a0a]/50 tracking-[0.2em] uppercase">SERIOUS INQUIRIES ONLY // SUBJECT TO QUALIFICATION</p>
            </div>
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

// --- DATA ARRAYS TO KEEP TEMPLATE CLEAN ---

const heroFeatures = [
  "Structured Strategy Design",
  "Statistical Validation",
  "Controlled Automation",
  "Capital Risk Engineering",
  "Execution Infrastructure",
  "Performance Governance",
];

const flawPoints = [
  "Undefined rule logic",
  "Inconsistent risk boundaries",
  "Over-optimized backtests",
  "Execution variability",
  "Lack of statistical robustness",
  "Black Box Trading Bots",
  "Uncontrolled execution environments"
];

const solutionPoints = [
  "Clear entry and exit rules — no ambiguity.",
  "Measurable risk parameters — position size, drawdown, exposure.",
  "Statistical validation — edge proven, not assumed.",
  "Backtesting integrity — realistic, unbiased testing.",
  "Structured execution — discipline through process.",
  "Ongoing performance governance — monitored, refined, controlled.",
  "Automation is the final layer — not the starting point."
];

const frameworkSteps = [
  {
    title: "Strategy Structuring",
    subtitle: "Turn intuition into rules.",
    desc: "We convert discretionary trading logic into clearly defined, rule-based systems that can be tested, measured, and scaled.",
    tags: ["No assumptions", "Only structure"],
    image: "/home/Strategy Structuring.png"
  },
  {
    title: "Quantitative Validation",
    subtitle: "Test the edge before risking capital.",
    desc: "We evaluate statistical robustness, model expectancy, and analyze risk to ensure your strategy has a measurable foundation — not just hope.",
    tags: ["If it’s not quantifiable,", "It’s not tradable."],
    image: "/home/Data Validation.png"
  },
  {
    title: "Backtesting & Stress Testing",
    subtitle: "See how it survives reality.",
    desc: "We test your system across multiple market cycles and extreme conditions to validate durability and behavioral stability. Because markets don’t move in straight lines.",
    tags: ["If it doesn’t survive history,", "It won’t survive reality."],
    image: "/home/backtest.png"
  },
  {
    title: "Execution Architecture Design",
    subtitle: "Automate with discipline.",
    desc: "We design clean execution frameworks with broker API integration, ensuring structured and consistent order placement. Automation is powerful — only when engineered correctly.",
    tags: ["If it’s not systematically executed,", "It’s emotionally exposed."],
    image: "/home/Execution.png"
  },
  {
    title: "Risk Framework Engineering",
    subtitle: "See how it survives reality.", 
    desc: "We test your system across multiple market cycles and extreme conditions to validate durability and behavioral stability. Because markets don’t move in straight lines.", 
    tags: ["If risk isn’t controlled,", "Loss is guaranteed."],
    image: "/home/Risk.png"
  },
  {
    title: "Monitoring & Optimization",
    subtitle: "Stay adaptive. Stay structured.",
    desc: "Markets evolve. Systems must too. We provide periodic evaluation to maintain robustness and performance integrity. Structure is not a one-time setup — it’s governance.",
    tags: ["If it’s not monitored,", "It’s decaying."],
    image: "/home/Monitoring.png"
  }
];

// --- ANIMATION LOGIC ---

const activeHeroFeatureIndex = ref(0);
const heroFeatureIntervalMs = 2200;
let heroFeatureTimer;

onMounted(() => {
  // GSAP initialization for hero
  if ($gsap) {
    $gsap.to(".gsap-hero-text", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.1,
    });
  }

  // Text rotator
  heroFeatureTimer = window.setInterval(() => {
    activeHeroFeatureIndex.value =
      (activeHeroFeatureIndex.value + 1) % heroFeatures.length;
  }, heroFeatureIntervalMs);
});

onBeforeUnmount(() => {
  if (heroFeatureTimer) {
    window.clearInterval(heroFeatureTimer);
  }
});
</script>

<style scoped>
.hero-feature-enter-active,
.hero-feature-leave-active {
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-feature-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.hero-feature-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>