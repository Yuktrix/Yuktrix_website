<template>
  <!-- Root wrapper with overflow-x-hidden for structural stability -->
  <div class="font-sans selection:bg-[#db961f] selection:text-black bg-[#cdcfd1] overflow-x-hidden">
    
    <!-- ==========================================
      1. HERO SECTION (Cinematic Institutional Entry)
    =========================================== -->
    <section class="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#090a0a]">
      <!-- Background Engine -->
      <div class="absolute inset-0 z-0">
        <img
          src="/home/slide.png"
          alt="Financial Intelligence Background"
          class="w-full h-full object-cover object-center opacity-60 grayscale mix-blend-luminosity scale-110 will-change-transform"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/95 via-[#090a0a]/80 to-[#cdcfd1]/10"></div>
      </div>

      <!-- Architectural Grid Overlay -->
      <div class="absolute inset-0 pointer-events-none z-0 opacity-[0.15]" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 5rem 5rem; mask-image: radial-gradient(circle at center, black, transparent 80%); -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);"></div>

      <!-- Content Container -->
      <div class="container mx-auto px-6 relative z-10 pt-10 text-center flex flex-col items-center justify-center">
        <div class="gsap-hero-text opacity-0 translate-y-10 flex flex-col items-center w-full" data-aos="zoom-in">
          
          <div class="inline-flex items-center justify-center gap-4 px-8 py-3 mb-10 bg-[#090a0a]/80 border border-[#db961f]/40 rounded-full shadow-[0_0_30px_rgba(219,150,31,0.2)] backdrop-blur-xl group">
            <span class="w-3 h-3 rounded-full bg-[#db961f] animate-ping"></span>
            <span class="text-[#db961f] text-[14px] font-mono font-black uppercase tracking-[0.4em]">Quantitative Architecture</span>
          </div>

          <h1 class="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold leading-[0.9] mb-10 tracking-tighter max-w-6xl mx-auto uppercase text-white">
            <span class="block">Quant Discipline</span>
            <span class="flex items-center justify-center gap-6 text-[#db961f] italic font-light my-6 text-4xl md:text-6xl">
              <span class="flex-grow h-px bg-gradient-to-r from-transparent to-[#db961f]/50"></span>
              <span class="tracking-[0.2em]">Meets</span>
              <span class="flex-grow h-px bg-gradient-to-l from-transparent to-[#db961f]/50"></span>
            </span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-br from-white via-[#cdcfd1] to-white/30 pb-2 leading-tight">
              Automation Intelligence
            </span>
          </h1>

          <!-- Master Scroller (Terminal Style) -->
          <div class="h-16 md:h-20 overflow-hidden mb-14 flex items-center justify-start bg-white/5 border border-white/10 backdrop-blur-md px-8 py-3 rounded-2xl w-full max-w-xl shadow-2xl relative">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#db961f]"></div>
            <span class="text-[#db961f] font-mono mr-5 font-black text-xl tracking-tighter">CMD_</span>
            <Transition name="hero-feature" mode="out-in">
              <div :key="activeHeroFeatureIndex" class="text-sm md:text-lg font-mono text-white/80 tracking-widest w-full text-left flex items-center uppercase">
                {{ heroFeatures[activeHeroFeatureIndex] }}<span class="inline-block w-2 h-5 bg-[#db961f] ml-2 animate-pulse"></span>
              </div>
            </Transition>
          </div>

          <button @click="openRegistrationModal" class="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[#090a0a] bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:bg-[#db961f] hover:shadow-[0_0_60px_rgba(219,150,31,0.5)] transform hover:-translate-y-1">
            <span class="relative z-10 flex items-center gap-4 text-sm md:text-base tracking-[0.3em] uppercase italic"> 
              Initialize Consultation
              <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-white/20 z-10">
        <span class="text-[9px] font-black font-mono uppercase tracking-[0.5em]">Secure_Link</span>
        <div class="relative w-px h-20 bg-white/10 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#db961f] to-transparent animate-scrolldown"></div>
        </div>
      </div>
    </section>

    <!-- ==========================================
      2. THE AXIS (Flaw vs Fix - High Contrast)
    =========================================== -->
    <section class="py-32 bg-[#cdcfd1] relative z-20 -mt-16 rounded-t-[4rem] shadow-[0_-30px_60px_rgba(0,0,0,0.3)] border-t border-white">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-px bg-[#090a0a]/5 rounded-[3rem] overflow-hidden border border-[#090a0a]/10 shadow-2xl">
          
          <!-- THE FLAW -->
          <div class="bg-white p-10 md:p-20 flex flex-col group relative" data-aos="fade-right">
            <div class="inline-flex items-center gap-3 px-4 py-2 mb-10 bg-red-600/10 border border-red-600/20 text-red-600 rounded-lg font-mono text-[10px] uppercase tracking-[0.3em] font-black">
              <span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              Technical_Debt
            </div>
            <h2 class="text-5xl md:text-6xl font-display font-bold text-[#090a0a] leading-[0.9] mb-10 tracking-tighter uppercase">
              The <br/><span class="text-red-600 italic text-black">Structural Problem</span>
            </h2>
            <div class="space-y-8 flex-grow">
              <p class="text-xl font-light text-[#090a0a]/70 border-l-4 border-red-600/20 pl-6 leading-snug">
                <strong class="font-black text-[#090a0a]">It’s not the strategy. It’s the structure  .</strong><br />
                If your system leaks at every stage, no amount of capital will fix it.
              </p>
              <div class="grid gap-3 text-black">
                <div v-for="(item, i) in flawPoints" :key="i" class="flex items-center gap-4 p-4 bg-[#090a0a]/5 rounded-xl border border-transparent hover:border-red-600/20 transition-all group/item">
                  <span class="font-mono text-[10px] text-red-600 font-bold opacity-40">0{{i+1}}</span>
                  <span class="text-[13px] text-[#090a0a]/80 font-bold uppercase tracking-wider">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- THE FIX -->
          <div class="bg-[#090a0a] p-10 md:p-20 flex flex-col relative overflow-hidden group" data-aos="fade-left">
            <div class="absolute right-0 bottom-0 w-96 h-96 bg-[#db961f]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div class="inline-flex items-center gap-3 px-4 py-2 mb-10 bg-[#db961f]/10 border border-[#db961f]/30 text-[#db961f] rounded-lg font-mono text-[10px] uppercase tracking-[0.3em] font-black">
              <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
              Optimized_State
            </div>
            <h2 class="text-5xl md:text-6xl font-display font-bold text-white leading-[0.9] mb-10 tracking-tighter uppercase">
              The  <br/><span class="text-[#db961f] italic">Systemized Solution</span>
            </h2>
            <div class="space-y-8 flex-grow">
              <p class="text-xl font-light text-white/60 border-l-4 border-[#db961f]/30 pl-6 leading-snug">
                <strong class="font-black text-[#db961f]">It’s Not More Signals. It’s a System.</strong> Systemized trading converts ideas into rule-defined processes.
              </p>
              <div class="grid gap-3">
                <div v-for="(item, i) in solutionPoints" :key="i" class="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-transparent hover:border-[#db961f]/30 transition-all">
                  <svg class="w-4 h-4 text-[#db961f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                  <span class="text-[13px] text-white/80 font-medium tracking-wide">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
      3. IMPLEMENTATION NODES (Award-Winning Bento Schematic)
    =========================================== -->
    <section class="py-32 bg-[#090a0a] relative overflow-hidden">
      <!-- Deep Parallax Dots & Grid -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 50px 50px;"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(219,150,31,0.05),transparent_50%)]"></div>

      <div class="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12" data-aos="fade-up">
          <div class="max-w-2xl">
            <div class="font-mono text-[10px] text-[#db961f] font-black uppercase tracking-[0.6em] mb-6">Execution_Blueprint_2026</div>
            <h2 class="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Implementation <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#db961f] to-white font-extrabold italic">Nodes</span>
            </h2>
            <p class="text-white/40 text-lg leading-relaxed font-light">Professional trading architecture is not a product; it is a sequence of validated engineering stages.</p>
          </div>
          <div class="hidden lg:flex flex-col items-end text-right">
            <div class="text-white font-mono text-[9px] uppercase tracking-[0.4em] opacity-30 mb-4 font-bold">Standard Operating Procedure</div>
            <div class="flex gap-4">
              <div v-for="i in 3" :key="i" class="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                <div class="w-full h-full bg-[#db961f] origin-left animate-pulse" :style="{animationDelay: i*0.2+'s'}"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- THE SCHEMATIC GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,_auto)]">
          
          <!-- Node Card Loop -->
          <div 
            v-for="(step, index) in frameworkSteps" 
            :key="index" 
            class="group relative"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Background Glow on Hover -->
            <div class="absolute inset-0 bg-[#db961f] opacity-0 blur-[60px] group-hover:opacity-[0.07] transition-opacity duration-700 rounded-[2.5rem]"></div>
            
            <!-- Main Content Container -->
            <div class="h-full bg-white/[0.02] backdrop-blur-md rounded-[2.5rem] p-10 border border-white/5 hover:border-[#db961f]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden relative shadow-2xl">
              
              <!-- Technical Header -->
              <div class="relative z-10">
                <div class="flex items-center justify-between mb-12">
                  <span class="font-mono text-[10px] font-black text-[#db961f] uppercase tracking-[0.3em]">NODE_0{{ index + 1 }}</span>
                  <div class="w-1.5 h-1.5 rounded-full bg-[#db961f] shadow-[0_0_10px_#db961f]"></div>
                </div>
                
                <h3 class="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter leading-none group-hover:text-[#db961f] transition-colors">
                  {{ step.title }}
                </h3>
                <p class="text-white/30 text-[9px] font-mono uppercase tracking-[0.2em] mb-6 font-black italic">{{ step.subtitle }}</p>
                
                <p class="text-white/60 text-sm leading-relaxed mb-8 font-light">
                  {{ step.desc }}
                </p>
              </div>

              <!-- Technical Tags Footer -->
              <div class="relative z-10 flex flex-wrap gap-2 mt-auto">
                <span v-for="tag in step.tags" :key="tag" class="px-3 py-1 bg-white/5 text-[#db961f] text-[8px] font-mono font-bold uppercase tracking-widest rounded border border-white/5 shadow-inner">
                  {{ tag }}
                </span>
              </div>

              <!-- Decorative Large Index Number (Ghosted) -->
              <div class="absolute -bottom-10 -right-4 font-display font-black text-[12rem] leading-none text-white/[0.02] select-none group-hover:text-[#db961f]/[0.03] transition-colors duration-700 pointer-events-none">
                0{{ index + 1 }}
              </div>
              
              <!-- Blueprint Corner Accent -->
              <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-8 h-8 text-[#db961f]/20" viewBox="0 0 100 100">
                  <path d="M0 1 L100 1 M100 0 L100 100" fill="none" stroke="currentColor" stroke-width="0.5" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-28 flex flex-col items-center" data-aos="zoom-in">
          <p class="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] mb-10 font-bold">End of Framework // Sequence Complete</p>
          <button @click="openRegistrationModal" class="group relative inline-flex items-center justify-center px-12 py-5 font-black text-white bg-transparent border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#db961f] hover:shadow-[0_20px_50px_rgba(219,150,31,0.2)]">
            <span class="absolute inset-0 bg-[#db961f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span class="relative z-10 uppercase tracking-[0.4em] italic text-sm group-hover:text-[#090a0a] transition-colors">Start Building Protocol</span>
          </button>
        </div>

      </div>
    </section>

    <!-- ==========================================
      4. AUDIENCE PORTAL (Access Control)
    =========================================== -->
    <section class="py-32 px-6 bg-[#cdcfd1]">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-12 gap-16 items-center">
                <div class="lg:col-span-5" data-aos="fade-right">
                    <h2 class="text-5xl md:text-7xl font-display font-black text-[#090a0a] mb-10 uppercase tracking-tighter leading-[0.85]">Target<br/><span class="text-[#db961f] italic text-black">Qualification</span></h2>
                    <p class="text-lg text-[#090a0a]/60 leading-relaxed mb-10 font-medium">
                        Yuktrix maintains a strict engagement criteria to ensure alignment with our high-integrity implementation methodology.
                    </p>
                    <div class="p-6 bg-[#090a0a] rounded-2xl flex items-center gap-6 shadow-2xl group cursor-help transition-all hover:scale-[1.02]">
                        <div class="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0 border border-red-600/20">
                           <svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                        </div>
                        <span class="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em] leading-relaxed">System Note: Yuktrix strictly operates as a consulting firm. No signal distribution under any circumstances.</span>
                    </div>
                </div>
                
                <div class="lg:col-span-7 grid md:grid-cols-2 gap-6" data-aos="fade-left">
                    <!-- FOR -->
                    <div class="p-10 bg-white rounded-[3rem] border border-black/5 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-green-500/5 blur-3xl rounded-full"></div>
                        <div class="text-[9px] font-mono font-black text-green-600 uppercase tracking-[0.4em] mb-8 group-hover:tracking-[0.6em] transition-all">Access_Granted</div>
                        <h4 class="text-2xl font-display font-bold text-[#090a0a] mb-8 uppercase tracking-widest text-black">Designed For:</h4>
                        <ul class="space-y-4 text-sm text-[#090a0a]/70 font-bold uppercase tracking-tight text-black">
                            <li v-for="item in ['HNI Market Participants', 'Proprietary Trading Desks', 'Fund Management Entities', 'Serious Independent Quants']" :key="item" class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span> {{ item }}
                            </li>
                        </ul>
                    </div>
                    <!-- NOT FOR -->
                    <div class="p-10 bg-[#090a0a] rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/5 group hover:-translate-y-2 transition-all">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-red-600/10 blur-3xl rounded-full"></div>
                        <div class="text-[9px] font-mono font-black text-red-600 uppercase tracking-[0.4em] mb-8 group-hover:tracking-[0.6em] transition-all text-white">Access_Denied</div>
                        <h4 class="text-2xl font-display font-bold text-white mb-8 uppercase tracking-widest text-white">Not For:</h4>
                        <ul class="space-y-4 text-sm text-white/40 font-light italic text-white">
                            <li v-for="item in ['Signal seekers', 'Copy-trading requests', 'Guaranteed ROI seekers', 'Casual experimenters']" :key="item" class="flex items-center gap-3 text-white">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span> {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
      5. TECH LOGIC (Capability Matrix)
    =========================================== -->
    <section class="py-32 px-6 bg-[#090a0a] relative overflow-hidden border-t border-white/5">
        <div class="container max-w-7xl mx-auto relative z-10" data-aos="fade-up">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div class="font-mono text-[10px] text-[#db961f] font-black uppercase tracking-[0.5em] mb-8">Capability_Stack</div>
                    <h2 class="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-[0.9] tracking-tighter uppercase">Full-Stack <br/><span class="text-[#db961f] italic font-extrabold text-white">System, Data & AI</span></h2>
                    <p class="text-xl text-white/50 leading-relaxed mb-12 font-light max-w-lg text-white">
                        Yuktrix bridges the gap between raw data engineering and quantitative strategy design. We build infrastructure that treats alpha as a systems engineering problem.
                    </p>
                    <div class="p-8 border-l-4 border-[#db961f] bg-white/[0.03] rounded-r-3xl backdrop-blur-lg">
                        <p class="text-white/80 text-lg italic leading-relaxed font-light text-white">
                          "We replace opaque 'black-box' assumptions with transparent, mathematically absolute rule sets."
                        </p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="cap in ['Data Architecture', 'Quantitative Analytics', 'ML & AI Enhancements', 'Systems Design']" :key="cap" class="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#db961f]/50 hover:bg-white/10 transition-all group flex flex-col justify-between aspect-square overflow-hidden relative">
                        <div class="absolute -right-4 -bottom-4 w-20 h-20 bg-[#db961f]/5 blur-2xl rounded-full"></div>
                        <div class="text-[9px] font-mono text-[#db961f] opacity-50 uppercase tracking-[0.3em] font-black relative z-10">{{ cap.split(' ')[0] }}_MOD</div>
                        <span class="text-white font-bold text-lg leading-tight uppercase group-hover:text-[#db961f] transition-colors relative z-10 text-white">{{ cap }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==========================================
      6. ENGAGEMENT PORTAL (Closing)
    =========================================== -->
    <section class="relative py-48 px-6 bg-[#cdcfd1] text-center overflow-hidden border-t border-white">
        <!-- Abstract Tech Background -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.08]" style="background-image: radial-gradient(#090a0a 2px, transparent 2px); background-size: 40px 40px;"></div>

        <div class="max-w-5xl mx-auto relative z-10" data-aos="zoom-in">
            <h2 class="text-6xl md:text-9xl font-display font-extrabold text-[#090a0a] mb-14 tracking-tighter uppercase leading-none text-black">Ready to <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#090a0a] via-[#db961f] to-[#090a0a]">Architect?</span></h2>
            
            <div class="grid md:grid-cols-2 gap-px bg-[#090a0a]/10 rounded-[3rem] border border-[#090a0a]/10 overflow-hidden shadow-2xl mb-24">
                <div class="p-12 md:p-16 text-left bg-white/80 backdrop-blur-xl hover:bg-white transition-colors flex flex-col justify-between group text-black">
                    <div>
                      <h4 class="text-[#db961f] font-mono text-[10px] font-black tracking-[0.4em] mb-10 uppercase">Phase_01 // Assessment</h4>
                      <ul class="space-y-6 text-sm text-[#090a0a]/80 font-bold uppercase tracking-wider text-black">
                          <li class="flex items-center gap-4"><span class="w-2 h-2 rounded-full bg-[#db961f] group-hover:scale-125 transition-transform text-black"></span> Strategy Review</li>
                          <li class="flex items-center gap-4"><span class="w-2 h-2 rounded-full bg-[#db961f] group-hover:scale-125 transition-transform text-black"></span> Risk Modeling</li>
                          <li class="flex items-center gap-4"><span class="w-2 h-2 rounded-full bg-[#db961f] group-hover:scale-125 transition-transform text-black"></span> Capital Audit</li>
                      </ul>
                    </div>
                </div>
                <div class="p-12 md:p-16 text-left bg-[#090a0a] flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute right-0 top-0 w-32 h-32 bg-[#db961f]/10 blur-3xl rounded-full"></div>
                    <div>
                      <h4 class="text-[#db961f] font-mono text-[10px] font-black tracking-[0.4em] mb-10 uppercase relative z-10 text-white">Phase_02 // Deployment</h4>
                      <p class="text-white/60 text-lg leading-relaxed font-light relative z-10 text-white">
                          Qualified entities proceed to structured technical assessment and technical implementation roadmap design.
                      </p>
                    </div>
                </div>
            </div>

            <button @click="openRegistrationModal" class="group relative inline-flex items-center justify-center px-16 py-8 font-black text-white bg-[#090a0a] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95">
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#db961f] rounded-full group-hover:w-[50rem] group-hover:h-[50rem]"></span>
                <span class="relative group-hover:text-[#090a0a] transition-colors tracking-[0.5em] uppercase italic text-lg md:text-xl font-black">Open Assessment Gateway</span>
            </button>
            <p class="mt-14 font-mono text-[11px] font-black text-[#090a0a]/40 tracking-[0.6em] uppercase text-black">
              Security protocol enabled<br />
              technical assessment strictly subject to qualification
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


// --- CONTENT DATA ---


const heroFeatures = ["Structured Strategy Design", "Statistical Validation", "Controlled Automation", "Capital Risk Engineering", "Execution Infrastructure", "Performance Governance"];
const flawPoints = ["Undefined rule logic", "Inconsistent risk boundaries", "Over-optimized backtests", "Execution variability", "Lack of statistical robustness", "Black Box Trading Bots", "Uncontrolled execution environments"];
const solutionPoints = ["Clear entry and exit rules — no ambiguity.", "Measurable risk parameters — position size, drawdown.", "Statistical validation — edge proven, not assumed.", "Backtesting integrity — realistic, unbiased testing.", "Structured execution — discipline through process.", "Ongoing performance governance — monitored, refined.", "Automation is the final layer — not the starting point."];


const frameworkSteps = [
  {
    title: "Strategy Structuring",
    subtitle: "Formalize Intuition",
    desc: "We convert discretionary trading ideas into mathematically absolute, rule-based systems ready for technical assessment.",
    tags: ["Rule Formalization", "Logic Blueprint"],
    image: "/home/Strategy Structuring.png"
  },
  {
    title: "Quant Validation",
    subtitle: "Measurable Edge",
    desc: "Every system undergoes rigorous statistical testing to ensure expectancy is structural, not accidental.",
    tags: ["Probabilistic Audit", "Robustness Test"],
    image: "/home/Data Validation.png"
  },
  {
    title: "Backtesting & Stress",
    subtitle: "Survivability Test",
    desc: "Historical performance is measured across multiple market regimes and extreme stress scenarios to ensure durability.",
    tags: ["Regime Testing", "Stress Logic"],
    image: "/home/backtest.png"
  },
  {
    title: "Execution Design",
    subtitle: "Engineered Orders",
    desc: "Custom execution frameworks designed with low-latency API integration and hardened OMS logic.",
    tags: ["API Integration", "OMS Engineering"],
    image: "/home/Execution.png"
  },
  {
    title: "Risk Engineering",
    subtitle: "Capital Governance",
    desc: "Automated risk circuit breakers and position sizing models are integrated directly into the core engine.",
    tags: ["Drawdown Control", "Safety Logic"],
    image: "/home/Risk.png"
  },
  {
    title: "Monitoring/Governance",
    subtitle: "Continuous Oversight",
    desc: "Post-deployment monitoring for drift detection and periodic optimization to ensure structural integrity.",
    tags: ["Drift Analysis", "Health Audit"],
    image: "/home/Monitoring.png"
  }
];


// --- ANIMATION LOGIC ---


const activeHeroFeatureIndex = ref(0);
let heroFeatureTimer;


onMounted(() => {
  if ($gsap) {
    $gsap.to(".gsap-hero-text", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.1 });
  }
  heroFeatureTimer = setInterval(() => {
    activeHeroFeatureIndex.value = (activeHeroFeatureIndex.value + 1) % heroFeatures.length;
  }, 2200);
});


onBeforeUnmount(() => { if (heroFeatureTimer) clearInterval(heroFeatureTimer); });
</script>


<style scoped>
.hero-feature-enter-active, .hero-feature-leave-active { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.hero-feature-enter-from { opacity: 0; transform: translateY(15px); }
.hero-feature-leave-to { opacity: 0; transform: translateY(-15px); }
@keyframes scrolldown { 0% { transform: translateY(-100%); } 50% { transform: translateY(100%); } 100% { transform: translateY(100%); } }
.animate-scrolldown { animation: scrolldown 2s ease-in-out infinite; }
</style>
