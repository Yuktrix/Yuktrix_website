<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black flex flex-col">

    <!-- ==========================================
      1. HEADER / HERO (Dark)
    =========================================== -->
    <header class="relative pt-32 pb-32 overflow-hidden bg-[#090a0a]">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="/blog/image.png"
          alt="Research Builder Background"
          class="w-full h-full object-cover object-center opacity-75"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/90 via-[#090a0a]/75 to-[#090a0a]"></div>
      </div>

      <!-- Ambient Background -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_50%_0%,_rgba(219,150,31,0.15),transparent_70%)]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-down">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#db961f]/10 border border-[#db961f]/20 text-[#db961f] rounded-full font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse shadow-[0_0_8px_rgba(219,150,31,0.8)]"></span>
            Yuktrix Blog
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-2">
            Research <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Architecture</span>
          </h1>
          <p class="text-sm text-white/50 font-mono tracking-widest uppercase">Systemized Trading & Quantitative Intelligence Explorer</p>
        </div>
        
        <button @click="isModalOpen = true" class="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white/80 transition-colors flex items-center gap-2 shadow-lg">
          <svg class="w-4 h-4 text-[#db961f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          About Dashboard
        </button>
      </div>
    </header>

    <!-- ==========================================
      2. MAIN DASHBOARD CONTENT (Silver Base)
    =========================================== -->
    <main class="flex-grow max-w-7xl mx-auto px-6 py-16 w-full space-y-12 relative z-20 bg-[#cdcfd1] -mt-16 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">

      <!-- Philosophy Context Block -->
      <section class="bg-white/50 backdrop-blur-md rounded-2xl p-8 border-l-4 border-[#db961f] shadow-lg border-y border-r border-white/40" data-aos="fade-up">
        <h2 class="text-xl font-bold text-[#090a0a] mb-3">Philosophy: Systems Over Signals</h2>
        <p class="text-[#090a0a]/70 leading-relaxed font-light text-lg">
          The Yuktrix Blog is not a standard publication; it is a repository of structured research. 
          Use this dashboard to explore how we partition our insights into three core pillars: 
          <strong class="text-[#090a0a] font-medium">Systemized Trading</strong>, <strong class="text-[#090a0a] font-medium">Data & AI</strong>, and <strong class="text-[#090a0a] font-medium">Market Structure</strong>.
          Interact with the sections below to access our published articles and understand our rigorous editorial standards.
        </p>
      </section>

      <!-- Top Row: Navigation & Dynamic Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
        <!-- LEFT: Research Pillars (Navigation) - Light Panel -->
        <div class="lg:col-span-4 flex flex-col space-y-6" data-aos="fade-right">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold text-[#090a0a]">Research Pillars</h3>
            <span class="text-[10px] bg-[#090a0a]/5 border border-[#090a0a]/10 text-[#090a0a]/60 px-3 py-1 rounded-full font-mono uppercase tracking-widest">Select Node</span>
          </div>
          
          <div class="space-y-3 flex-grow">
            <button 
              v-for="(cat, index) in blogData.categories" 
              :key="cat.id"
              @click="activeCategoryIndex = index"
              :class="[
                'w-full text-left p-5 rounded-2xl border transition-all duration-300 flex justify-between items-center group',
                activeCategoryIndex === index 
                  ? 'border-[#db961f] bg-[#db961f]/10 shadow-[0_0_20px_rgba(219,150,31,0.15)]' 
                  : 'border-white/50 bg-white/40 hover:bg-white hover:border-white/80 hover:shadow-md'
              ]"
            >
              <div class="flex items-center">
                <span class="text-2xl mr-4 opacity-90 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0" :class="{'grayscale-0 drop-shadow-[0_0_8px_rgba(219,150,31,0.8)]': activeCategoryIndex === index}">{{ cat.icon }}</span>
                <div>
                  <h4 class="font-bold text-sm md:text-base text-[#090a0a] transition-colors">{{ cat.title }}</h4>
                  <p class="text-xs mt-1 font-mono uppercase" :class="activeCategoryIndex === index ? 'text-[#db961f]' : 'text-[#090a0a]/50'">{{ cat.articles.length }} Research Topics</p>
                </div>
              </div>
              <span class="text-[#db961f] font-bold" :class="{'opacity-100 translate-x-1': activeCategoryIndex === index, 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all': activeCategoryIndex !== index}">→</span>
            </button>
          </div>

          <!-- SEO Keywords Cloud -->
          <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
            <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#db961f] mb-4">Index Parameters</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="kw in blogData.metadata.keywords" :key="kw" class="text-xs px-3 py-1.5 bg-[#090a0a] rounded-lg text-white font-medium hover:bg-[#db961f] hover:text-[#090a0a] transition-colors cursor-default shadow-md">
                {{ kw }}
              </span>
            </div>
          </div>
        </div>

        <!-- CENTER: Deep Dive View - Dark Panel -->
        <div class="lg:col-span-5 h-full" data-aos="fade-up">
          <div class="bg-[#090a0a] rounded-3xl border border-[#090a0a]/20 h-full p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-300 shadow-2xl group">
            
            <div class="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.05]">
              <span class="text-9xl font-display font-bold text-white">{{ activeCategory.icon }}</span>
            </div>
            
            <div class="relative z-10 flex flex-col h-full">
              <span class="text-[11px] font-bold text-[#db961f] uppercase tracking-[0.2em] mb-3 font-mono">Pillar 0{{ activeCategoryIndex + 1 }}</span>
              <h2 class="text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">{{ activeCategory.title }}</h2>
              <p class="text-white/60 mb-8 leading-relaxed font-light">{{ activeCategory.desc }}</p>
              
              <!-- Core Research Areas -->
              <div>
                <h4 class="text-sm font-bold text-white/90 border-b border-white/10 pb-3 mb-5 uppercase tracking-widest">Core Topics</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(topic, i) in activeCategory.topics" :key="i" class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70">
                    {{ topic.name }}
                  </span>
                </div>
              </div>

              <!-- Published Articles Links to [slug].vue -->
              <div class="mt-8 pt-8 border-t border-white/10 flex-grow">
                <h4 class="text-sm font-bold text-[#db961f] mb-4 uppercase tracking-widest flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  Published & Upcoming Research
                </h4>
                
                <TransitionGroup name="list" tag="div" class="space-y-4">
                  <template v-for="(article, i) in activeCategory.articles" :key="article.slug || i">
                    
                    <!-- If Published: Render a working NuxtLink -->
                    <NuxtLink 
                      v-if="article.status === 'published'"
                      :to="`/blog/${article.slug}`"
                      class="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#db961f]/50 hover:bg-white/10 transition-all duration-300 group/article relative overflow-hidden"
                    >
                      <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#db961f] opacity-0 group-hover/article:opacity-100 transition-opacity"></div>
                      <div class="flex items-start gap-4">
                        <span class="text-[#db961f] font-mono font-bold text-xs mt-0.5">0{{ i+1 }}</span>
                        <div class="flex-grow">
                          <h5 class="text-white font-medium mb-1 leading-snug group-hover/article:text-[#db961f] transition-colors pr-4">
                            {{ article.title }}
                          </h5>
                          <p class="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">{{ article.desc }}</p>
                          <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-3 mt-2">
                            <span class="text-[#db961f] group-hover/article:translate-x-1 transition-transform flex items-center gap-1">Read Article <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                            <span class="text-white/30">{{ article.readTime }}</span>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>

                    <!-- If Upcoming: Render unclickable div -->
                    <div 
                      v-else
                      class="block p-5 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 opacity-60 cursor-not-allowed"
                    >
                      <div class="flex items-start gap-4">
                        <span class="text-white/40 font-mono font-bold text-xs mt-0.5">0{{ i+1 }}</span>
                        <div class="flex-grow">
                          <h5 class="text-white/70 font-medium mb-1 leading-snug pr-4">
                            {{ article.title }}
                          </h5>
                          <p class="text-white/40 text-xs leading-relaxed mb-3 line-clamp-2">{{ article.desc }}</p>
                          <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-3 mt-2">
                            <span class="text-white/50 flex items-center gap-2">
                              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                              In Peer Review
                            </span>
                            <span class="text-white/30">{{ article.readTime }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </template>
                </TransitionGroup>
              </div>

              <div class="mt-8 pt-6 border-t border-white/10">
                <p class="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-2">Target Implementation</p>
                <a href="#consultation" class="inline-flex items-center gap-2 text-sm font-bold text-[#cdcfd1] hover:text-[#db961f] transition-colors group/link">
                  {{ activeCategory.linkTarget }}
                  <span class="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Editorial Standards - Light Panel -->
        <div class="lg:col-span-3 h-full" data-aos="fade-left">
          <div class="bg-white/60 text-[#090a0a] rounded-3xl shadow-xl border border-white/50 p-8 h-full flex flex-col justify-between relative overflow-hidden">
            <!-- Decorative accent -->
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#db961f]/20 blur-[40px] rounded-full pointer-events-none"></div>

            <div class="relative z-10">
              <h3 class="text-2xl font-display font-bold mb-2 text-[#090a0a]">Editorial Standards</h3>
              <p class="text-xs text-[#090a0a]/60 mb-8 font-mono uppercase tracking-widest">Institutional Ethos Protocol</p>
              
              <div class="space-y-6">
                <!-- We Publish -->
                <div class="bg-white p-5 rounded-2xl border border-black/5 shadow-sm">
                  <h4 class="text-[11px] font-bold text-green-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    We Publish
                  </h4>
                  <ul class="text-sm space-y-2 text-[#090a0a]/80 font-medium">
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-green-500 rounded-full"></span> Structured Analysis</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-green-500 rounded-full"></span> Measurable Logic</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-green-500 rounded-full"></span> Risk-Aware Evaluation</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-green-500 rounded-full"></span> Engineering First</li>
                  </ul>
                </div>

                <!-- We Do NOT Publish -->
                <div class="bg-[#090a0a] text-white p-5 rounded-2xl border border-red-500/20 shadow-lg">
                  <h4 class="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    We Do NOT Publish
                  </h4>
                  <ul class="text-sm space-y-2 text-white/70 font-light">
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-red-500 rounded-full"></span> Trading Signals</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-red-500 rounded-full"></span> Stock Tips</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-red-500 rounded-full"></span> "Get Rich" Claims</li>
                    <li class="flex items-center gap-2"><span class="w-1 h-1 bg-red-500 rounded-full"></span> Hype Content</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-[#090a0a]/10 relative z-10">
              <p class="text-center font-bold uppercase tracking-[0.2em] text-[#db961f] text-sm">"Systems over Signals"</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Row: Pure CSS Custom Analytics & Visualization (Dark Panels) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          
        <!-- Chart 1: Topic Distribution (Pure CSS SVG Donut) -->
        <div class="bg-[#090a0a] border border-[#090a0a]/20 shadow-xl p-8 rounded-3xl" data-aos="fade-up">
          <div class="mb-8">
            <h3 class="text-xl font-bold text-white mb-1">Content Domain Balance</h3>
            <p class="text-sm text-white/50 font-light">Relative weight of research focus areas.</p>
          </div>
          
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <!-- SVG Donut Chart -->
            <div class="relative w-48 h-48">
              <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                <!-- Background track -->
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1f1e1e" stroke-width="15" />
                
                <!-- Dynamic Segments -->
                <circle v-for="(segment, index) in donutSegments" :key="index"
                  cx="50" cy="50" r="40" fill="none" 
                  :stroke="segment.color" 
                  stroke-width="15" 
                  :stroke-dasharray="`${segment.length} ${circumference}`"
                  :stroke-dashoffset="segment.offset"
                  class="transition-all duration-1000 ease-out"
                  :class="{'opacity-100': activeCategoryIndex === index, 'opacity-30': activeCategoryIndex !== index}"
                />
              </svg>
              <!-- Center Text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-2xl font-bold text-white">{{ totalArticles }}</span>
                <span class="text-[10px] font-mono text-white/50 uppercase">Articles</span>
              </div>
            </div>

            <!-- Legend -->
            <div class="space-y-4">
              <div v-for="(cat, index) in blogData.categories" :key="index" class="flex items-center gap-3 cursor-pointer" @click="activeCategoryIndex = index">
                <div class="w-3 h-3 rounded-full transition-transform" :class="{'scale-125': activeCategoryIndex === index}" :style="{ backgroundColor: cat.color }"></div>
                <span class="text-sm font-medium transition-colors" :class="activeCategoryIndex === index ? 'text-white' : 'text-white/50'">{{ cat.title.split(' ')[0] }} Research</span>
                <span class="text-xs font-mono text-white/30 ml-auto">{{ cat.articles.length }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Chart 2: Complexity vs Utility (Pure CSS Bar Chart) -->
        <div class="bg-[#090a0a] border border-[#090a0a]/20 shadow-xl p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="100">
          <div class="mb-8 flex justify-between items-end">
            <div>
              <h3 class="text-xl font-bold text-white mb-1">Implementation Complexity</h3>
              <p class="text-sm text-white/50 font-light">Technical difficulty vs. Structural Impact.</p>
            </div>
            <!-- Dynamic Legend -->
            <div class="flex gap-4 text-[10px] font-mono uppercase">
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-[#cdcfd1]"></span> Complexity</div>
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-[#db961f]"></span> Impact</div>
            </div>
          </div>
          
          <!-- CSS Grid Bar Chart -->
          <div class="h-48 flex items-end justify-between gap-2 md:gap-4 relative border-b border-white/10 pb-2">
            <!-- Y Axis Lines -->
            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
              <div v-for="i in 5" :key="i" class="border-b border-white/5 w-full h-0"></div>
            </div>

            <!-- Bars -->
            <div v-for="article in activeCategory.articles" :key="article.shortName" class="flex-1 flex justify-center items-end gap-1 h-full relative z-10 group">
              <!-- Tooltip -->
              <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#cdcfd1] text-[#090a0a] text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {{ article.shortName }}
              </div>
              
              <!-- Complexity Bar -->
              <div class="w-1/2 max-w-[12px] bg-[#cdcfd1] rounded-t-sm transition-all duration-700 ease-out" :style="{ height: `${article.complexity * 10}%` }"></div>
              <!-- Impact Bar -->
              <div class="w-1/2 max-w-[12px] bg-[#db961f] rounded-t-sm transition-all duration-700 ease-out shadow-[0_0_8px_rgba(219,150,31,0.5)]" :style="{ height: `${article.impact * 10}%` }"></div>
            </div>
          </div>
          
          <!-- X Axis Labels -->
          <div class="flex justify-between mt-3 px-1">
            <div v-for="(article, i) in activeCategory.articles" :key="i" class="flex-1 text-center text-[9px] text-white/40 font-mono rotate-[-45deg] origin-top-left mt-2 whitespace-nowrap truncate w-10">
              {{ article.shortName.substring(0, 10) }}
            </div>
          </div>
        </div>

      </div>
      
      <!-- Call to Action Footer (Dark Theme) -->
      <section class="mt-16 bg-[#090a0a] rounded-3xl p-10 md:p-14 text-center border border-[#090a0a]/20 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
        <div class="absolute right-0 top-0 w-64 h-64 bg-[#db961f]/10 blur-[60px] rounded-full pointer-events-none"></div>
        
        <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">Ready to Build?</h2>
        <p class="text-white/70 mb-8 max-w-2xl mx-auto text-lg relative z-10">If you are seeking structured trading implementation beyond research reading.</p>
        <button @click="openRegistrationModal" class="bg-[#db961f] text-[#090a0a] px-10 py-4 rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(219,150,31,0.3)] font-bold tracking-widest uppercase text-sm relative z-10">
          Book a Strategy Consultation
        </button>
      </section>

    </main>

    <!-- Modal for About -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-[#cdcfd1] rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-white/50">
          <button @click="isModalOpen = false" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#090a0a]/5 text-[#090a0a]/60 hover:text-[#090a0a] hover:bg-[#090a0a]/10 transition-colors">✕</button>
          
          <div class="w-12 h-12 bg-[#090a0a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <svg class="w-6 h-6 text-[#db961f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-[#090a0a] mb-4">About this Dashboard</h3>
          <p class="text-sm text-[#090a0a]/70 mb-6 leading-relaxed">
            This interface visualizes the information architecture of the Yuktrix Blog. It transforms static research into an interactive "Explorer," allowing users to navigate the three core pillars of quantitative trading research mathematically.
          </p>
          <div class="p-4 bg-white/50 rounded-xl border border-white">
            <p class="text-[11px] font-mono text-[#090a0a]/60 mb-2 uppercase tracking-widest">System Specifications</p>
            <p class="text-sm font-medium text-[#090a0a]">Engine: <span class="font-normal text-[#090a0a]/70">Vue 3 / Nuxt</span></p>
            <p class="text-sm font-medium text-[#090a0a]">Visuals: <span class="font-normal text-[#090a0a]/70">Native CSS Matrix</span></p>
          </div>
          
          <button @click="isModalOpen = false" class="mt-8 w-full py-3 bg-[#090a0a] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#db961f] hover:text-[#090a0a] transition-colors">
            Acknowledge
          </button>
        </div>
      </div>
    </Transition>

    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRegistration } from "~/composables/useRegistration";
const { openRegistrationModal } = useRegistration();

// --- STATE ---
const isModalOpen = ref(false);
const activeCategoryIndex = ref(0);

// --- UNIFIED DATA STORE (Merged your [slug].vue posts into the interactive dashboard) ---
const blogData = {
  metadata: {
    title: "Trading Research Blog | Systemized Trading & Quant Insights | Yuktrix",
    keywords: ["Systemized trading research", "Quantitative validation", "Trading automation", "Quant research", "Market structure"]
  },
  categories: [
    {
      id: "systemized",
      title: "Systemized Trading Research",
      desc: "Insights focused on building and validating structured trading systems. Transitioning from 'ideas' to institutional-grade execution.",
      color: "#db961f", // Brand Gold
      icon: "⚙️",
      topics: [
        { name: "Strategy Structuring", desc: "Logic and hierarchy of entry/exit rules.", complexity: 4, impact: 9 },
        { name: "Quant Validation", desc: "The math behind proving an edge exists.", complexity: 8, impact: 10 },
        { name: "Backtest Integrity", desc: "Avoiding look-ahead bias and overfitting.", complexity: 7, impact: 10 },
        { name: "Expectancy Models", desc: "Probabilistic outcome analysis.", complexity: 6, impact: 8 },
        { name: "Risk-Reward", desc: "Structuring trade sizes for longevity.", complexity: 5, impact: 9 },
        { name: "Parameter Testing", desc: "Testing robustness to input changes.", complexity: 7, impact: 8 }
      ],
      articles: [
        { 
          title: "Inside a Trend-Following Model — The Simple Logic Behind a Pro Algorithm", 
          shortName: "Trend Models",
          slug: "trend-following-model", 
          desc: "Trend-following feels complicated. It isn't. Here's how a professional trend model actually works.",
          complexity: 6, impact: 9, readTime: "10 min read", status: "published" 
        },
        { 
          title: "What Most Traders Don't Know About Order Execution", 
          shortName: "Execution",
          slug: "order-execution-secrets", 
          desc: "Your chart doesn't decide your profit. Your execution does. The hidden cost of market orders.",
          complexity: 5, impact: 10, readTime: "9 min read", status: "published" 
        },
        { 
          title: "Expectancy Modeling in Volatile Regimes", 
          shortName: "Expectancy",
          slug: "", 
          desc: "Probabilistic outcome analysis for high-volatility environments.",
          complexity: 8, impact: 8, readTime: "Est. 12 min", status: "upcoming" 
        }
      ],
      linkTarget: "Disciplined Trading Automation"
    },
    {
      id: "quant",
      title: "Data, AI & Quant Research",
      desc: "Exploring the analytical foundations behind systematic trading development. The technical frameworks powering modern analysis.",
      color: "#cdcfd1", // Brand Silver
      icon: "🧠",
      topics: [
        { name: "Quant Modeling", desc: "Building the statistical 'engine'.", complexity: 9, impact: 9 },
        { name: "Feature Engineering", desc: "Extracting signals from raw data.", complexity: 8, impact: 7 },
        { name: "Multi-Factor", desc: "Combining disparate data points.", complexity: 7, impact: 8 },
        { name: "Regime Detection", desc: "Identifying market environment shifts.", complexity: 9, impact: 10 },
        { name: "Volatility Models", desc: "Volatility as an asset class/filter.", complexity: 8, impact: 8 },
        { name: "AI Enhancements", desc: "ML for optimization, not just prediction.", complexity: 10, impact: 6 }
      ],
      articles: [
        { 
          title: "Why Your Brain Hates Stop-Losses", 
          shortName: "Psychology",
          slug: "brain-hates-stop-losses", 
          desc: "Your brain is designed to avoid pain — not manage risk. How quants solve emotional trading.",
          complexity: 4, impact: 10, readTime: "6 min read", status: "published" 
        },
        { 
          title: "Regime Detection Models & Volatility Filtering", 
          shortName: "Regime Det.",
          slug: "", 
          desc: "Identifying market environment shifts before they destroy an active edge.",
          complexity: 9, impact: 10, readTime: "Est. 14 min", status: "upcoming" 
        },
        { 
          title: "Feature Engineering for Price Action Data", 
          shortName: "Feature Eng.",
          slug: "", 
          desc: "Extracting mathematical signals from raw open/high/low/close data.",
          complexity: 8, impact: 7, readTime: "Est. 15 min", status: "upcoming" 
        }
      ],
      linkTarget: "Quantitative Trading Solutions"
    },
    {
      id: "market",
      title: "Market Structure & Intelligence",
      desc: "Understanding the broader forces influencing system behavior. Accounting for the environment in which systems operate.",
      color: "#ffffff", // Pure White
      icon: "🌐",
      topics: [
        { name: "Regime Shifts", desc: "Transitions from trending to mean-reverting.", complexity: 6, impact: 10 },
        { name: "Vol Clustering", desc: "Persistence of high-volatility periods.", complexity: 5, impact: 8 },
        { name: "Sector Behavior", desc: "Inter-market relationships.", complexity: 4, impact: 6 },
        { name: "Macro Impact", desc: "Global shifts affecting local logic.", complexity: 5, impact: 9 },
        { name: "Liquidity Flow", desc: "Hidden costs of execution.", complexity: 7, impact: 9 }
      ],
      articles: [
        { 
          title: "Why Markets Move the Way They Move — The Real Story", 
          shortName: "Market Flow",
          slug: "why-markets-move", 
          desc: "Most traders think markets move because of news or indicators. Reality is simpler — and far more structured.",
          complexity: 5, impact: 9, readTime: "8 min read", status: "published" 
        },
        { 
          title: "The Market Is a Living System — Learn to See It Like One", 
          shortName: "Systems",
          slug: "market-living-system", 
          desc: "Most traders see charts. Quants see systems. How liquidity and institutions shape price.",
          complexity: 7, impact: 8, readTime: "7 min read", status: "published" 
        },
        { 
          title: "Volatility Clustering & Tail Risk", 
          shortName: "Vol Clusters",
          slug: "", 
          desc: "Understanding the persistence of high-volatility periods in modern markets.",
          complexity: 6, impact: 9, readTime: "Est. 10 min", status: "upcoming" 
        }
      ],
      linkTarget: "Market Intelligence Services"
    }
  ]
};

// --- COMPUTED PROPERTIES ---
const activeCategory = computed(() => blogData.categories[activeCategoryIndex.value]);
const totalArticles = computed(() => blogData.categories.reduce((acc, cat) => acc + cat.articles.length, 0));
const circumference = 2 * Math.PI * 40; // r=40

// Calculate Donut Segments for pure CSS SVG drawing
const donutSegments = computed(() => {
  let currentOffset = 0;
  return blogData.categories.map(cat => {
    const fraction = cat.articles.length / totalArticles.value;
    const length = fraction * circumference;
    const segment = {
      length: length - 2, // -2 for small gap between segments
      offset: -currentOffset,
      color: cat.color
    };
    currentOffset += length;
    return segment;
  });
});
</script>

<style scoped>
/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Modal Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
