<template>
  <div class="font-futura">
    <!-- Hero Section -->
    <section
      class="relative md:h-screen pt-10 flex items-center justify-center overflow-hidden"
    >
      <!-- 1. Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <!-- Image: Abstract Financial Data / Tech Network -->
        <img
          src="/home/bg.jpg"
          alt="Financial Intelligence Background"
          class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay: Fades from black (bottom) to transparent (top) to ensure text readability -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"
        ></div>
      </div>

      <!-- 2. Animated Glow Effects -->
      <div
        class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e8bb6d]/10 rounded-full blur-[50px] animate-pulse z-0"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[50px] animate-pulse delay-1000 z-0"
      ></div>

      <!-- 3. Main Content -->
      <div class="container mx-auto px-4 relative z-10 text-end pt-20">
        <div class="gsap-hero-text opacity-0 translate-y-10">
          <!-- Tagline Pill -->
          <!-- <span
            class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[#e8bb6d] text-xs font-bold tracking-widest mb-8 uppercase"
          >
            <span
              class="w-2 h-2 rounded-full bg-[#e8bb6d] animate-pulse"
            ></span>
            Yuktrix
          </span> -->

          <!-- Main Heading -->
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e8bb6d] to-white"
            >
              It Reads. <br />
              It Reasons. <br />
              It Trades.
            </span>
          </h1>

          <!-- Subheading -->

          <!-- Feature Pills (Glassmorphism) -->
          <div
            class="flex flex-col md:flex-row justify-end gap-3 mb-12 max-w-[1440px] mx-auto"
          >
            <div
              data-aos="fade-left"
              v-for="item in heroFeatures"
              :key="item"
              class="flex justify-end md:justify-center md:items-center text-sm font-medium text-gray-200"
            >
              <p class="text-4xl font-bold -mt-5">.</p>
              &nbsp;&nbsp;
              {{ item }}
            </div>
          </div>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button
              @click="openRegistrationModal"
              class="group relative bg-[#e8bb6d] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 w-full sm:w-auto overflow-hidden"
            >
              <span class="relative z-10"> Get Early Access </span>
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              ></div>
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 animate-bounce"
      >
        <span class="text-xs uppercase tracking-widest opacity-70">Scroll</span>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Platform Features -->
    <div class="pt-10 pb-24 bg-black">
      <!-- Header Section -->

      <section class="py-20 bg-black relative overflow-hidden">
        <!-- Background Effects -->
        <div
          class="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#e8bb6d]/5 rounded-full blur-[120px] animate-pulse"
        ></div>
        <div
          class="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#e8bb6d]/5 rounded-full blur-[120px] animate-pulse"
        ></div>

        <div class="container mx-auto px-6 relative z-10">
          <!-- Section Header -->
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Path to <span class="text-[#e8bb6d]">Smarter Trading</span>
            </h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">
              From learning to execution, our AI-powered platform guides you
              through every step of your trading journey.
            </p>
          </div>

          <!-- Timeline -->
          <div class="max-w-6xl mx-auto relative">
            <!-- Vertical Line (Hidden on mobile) -->
            <div
              class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e8bb6d]/20 via-[#e8bb6d]/50 to-[#e8bb6d]/20 -translate-x-1/2"
            ></div>

            <!-- Step 1 - Left -->
            <div
              class="relative mb-16 md:mb-24"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
                <!-- Content - Left Side -->
                <div class="md:text-right mb-8 md:mb-0">
                  <div
                    class="inline-block md:block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#e8bb6d]/50 transition-all group"
                  >
                    <h3
                      class="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#e8bb6d] transition-colors"
                    >
                      Learn the Market
                    </h3>
                    <p class="text-gray-400 text-base leading-relaxed mb-4">
                      Master trading fundamentals with our AI Tutor. Get
                      personalized lessons, real-time explanations, and
                      interactive learning experiences tailored to your pace.
                    </p>
                    <div class="flex md:justify-end gap-2 flex-wrap">
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        AI Tutor
                      </span>
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        Interactive Learning
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Timeline Marker - Center -->
                <div
                  class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-gradient-to-br from-[#e8bb6d] to-[#e8bb6d]/70 flex items-center justify-center shadow-lg shadow-[#e8bb6d]/50 ring-4 ring-black"
                  >
                    <span class="text-black font-bold text-xl">1</span>
                  </div>
                </div>

                <!-- Image - Right Side -->
                <div class="md:block">
                  <div
                    class="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                  >
                    <img
                      src="/home/1.jpg"
                      alt="Learn the Market"
                      class="w-full h-[500px] object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 - Right -->
            <div
              class="relative mb-16 md:mb-24"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
                <!-- Image - Left Side -->

                <!-- Timeline Marker - Center -->
                <div
                  class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-gradient-to-br from-[#e8bb6d] to-[#e8bb6d]/70 flex items-center justify-center shadow-lg shadow-[#e8bb6d]/50 ring-4 ring-black"
                  >
                    <span class="text-black font-bold text-xl">2</span>
                  </div>
                </div>

                <!-- Content - Right Side -->
                <div class="md:text-left order-1 mb-8 md:mb-0 md:order-2">
                  <div
                    class="inline-block md:block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#e8bb6d]/50 transition-all group"
                  >
                    <h3
                      class="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#e8bb6d] transition-colors"
                    >
                      Build Your Strategy
                    </h3>
                    <p class="text-gray-400 text-base leading-relaxed mb-4">
                      Design winning strategies with our AI Strategy Builder. No
                      coding required—just describe your idea and let AI create,
                      optimize, and refine your trading logic.
                    </p>
                    <div class="flex gap-2 flex-wrap">
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        AI Strategy Builder
                      </span>
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        No Code
                      </span>
                    </div>
                  </div>
                </div>
                <div class="order-2 md:order-1">
                  <div
                    class="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                      alt="Build Your Strategy"
                      class="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3 - Left -->
            <div
              class="relative mb-16 md:mb-24"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
                <!-- Content - Left Side -->
                <div class="md:text-right mb-8 md:mb-0 order-2 md:order-1">
                  <div
                    class="inline-block md:block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#e8bb6d]/50 transition-all group"
                  >
                    <h3
                      class="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#e8bb6d] transition-colors"
                    >
                      Test in Seconds
                    </h3>
                    <p class="text-gray-400 text-base leading-relaxed mb-4">
                      Validate your strategy instantly with our lightning-fast
                      Backtesting Engine. Analyze years of historical data in
                      seconds and get comprehensive performance metrics.
                    </p>
                    <div class="flex md:justify-end gap-2 flex-wrap">
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        Backtesting Engine
                      </span>
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        Real-time Analysis
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Timeline Marker - Center -->
                <div
                  class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-gradient-to-br from-[#e8bb6d] to-[#e8bb6d]/70 flex items-center justify-center shadow-lg shadow-[#e8bb6d]/50 ring-4 ring-black"
                  >
                    <span class="text-black font-bold text-xl">3</span>
                  </div>
                </div>

                <!-- Image - Right Side -->
                <div class="md:block order-1 md:order-2">
                  <div
                    class="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                      alt="Test in Seconds"
                      class="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 4 - Right -->
            <div class="relative" data-aos="fade-left" data-aos-delay="400">
              <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
                <!-- Image - Left Side -->
                <div class="md:block order-2 md:order-1 mb-8 md:mb-0">
                  <div
                    class="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                  >
                    <img
                      src="/home/2.jpg"
                      alt="Automate With Precision"
                      class="w-full h-[500px] object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
                    ></div>
                  </div>
                </div>

                <!-- Timeline Marker - Center -->
                <div
                  class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-gradient-to-br from-[#e8bb6d] to-[#e8bb6d]/70 flex items-center justify-center shadow-lg shadow-[#e8bb6d]/50 ring-4 ring-black"
                  >
                    <span class="text-black font-bold text-xl">4</span>
                  </div>
                </div>

                <!-- Content - Right Side -->
                <div class="md:text-left order-1 md:order-2">
                  <div
                    class="inline-block md:block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#e8bb6d]/50 transition-all group"
                  >
                    <h3
                      class="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#e8bb6d] transition-colors"
                    >
                      Automate With Precision
                    </h3>
                    <p class="text-gray-400 text-base leading-relaxed mb-4">
                      Deploy your strategies seamlessly with our Execution
                      Engine. Automate trades with institutional-grade
                      precision, risk management, and real-time monitoring.
                    </p>
                    <div class="flex gap-2 flex-wrap">
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        Execution Engine
                      </span>
                      <span
                        class="px-3 py-1 rounded-full bg-[#e8bb6d]/5 text-[#e8bb6d] text-xs border border-[#e8bb6d]/20"
                      >
                        Auto-trading
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div
            class="text-center mt-20"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button
              class="bg-[#e8bb6d] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e8bb6d]/90 transition-all hover:scale-105 shadow-lg shadow-[#e8bb6d]/30"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
      <!-- Process Flow Visualization -->
    </div>

    <!-- How It Works -->
    <section class="py-24 bg-black relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2
            class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Why People Choose <span class="text-[#e8bb6d]">Yuktrix</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Because it turns complexity into clarity — and clarity into action.
          </p>
        </div>

        <div
          class="flex gap-10 flex-col justify-center items-center md:flex-row"
        >
          <div
            class="flex justify-center items-center gap-6 max-w-[1400px] mx-auto"
          >
            <!-- Card 1 -->
            <div
              class="flex flex-col justify-start items-start transition-all group"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                class="flex items-center gap-4 mb-6"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#e8bb6d]/10 flex items-center justify-center text-[#e8bb6d] group-hover:scale-110 transition-transform"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-white text-sm md:text-3xl font-bold">
                  Intelligence That Explains, Not Confuses
                </h3>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="0"
                class="flex items-center gap-4 mb-6"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#e8bb6d]/10 flex items-center justify-center text-[#e8bb6d] group-hover:scale-110 transition-transform"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-white text-sm md:text-3xl font-bold">
                  One Platform for the Entire Trading Journey
                </h3>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                class="flex items-center gap-4 mb-6"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#e8bb6d]/10 flex items-center justify-center text-[#e8bb6d] group-hover:scale-110 transition-transform"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-white text-sm md:text-3xl font-bold">
                  Decisions Backed by Real Data, Not Guesswork
                </h3>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                class="flex items-center gap-4 mb-6"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#e8bb6d]/10 flex items-center justify-center text-[#e8bb6d] group-hover:scale-110 transition-transform"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-white text-sm md:text-3xl font-bold">
                  Execution You Can Trust
                </h3>
              </div>
            </div>
            <!-- Card 1 -->
          </div>
          <div>
            <img src="/how.png" class="rounded-3xl w-[600px]" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- "A Smarter Way" Section -->
    <section class="py-24 bg-black relative overflow-hidden">
      <!-- Diagonal Background Shape -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#e8bb6d]/5 to-transparent transform -skew-y-3"
      ></div>

      <div class="px-4 relative z-10">
        <div class="gap-12 items-start">
          <!-- Left: Engine Components Grid -->

          <!-- Right: Content + New Image -->
          <div
            class="flex flex-col gap-8 justify-center items-center"
            data-aos="fade-right"
          >
            <!-- Text Content -->
            <div>
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                class="text-3xl md:text-6xl text-center font-display font-bold mb-6 leading-tight text-white"
              >
                The
                <span class="text-[#e8bb6d]">Yuktrix Intelligence Layer</span>
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                class="space-y-5 text-center text-2xl text-white/70 leading-relaxed"
              >
                <p class="text-white font-medium pt-2">
                  Everything works together — making markets simple, powerful,
                  and actionable.
                </p>
              </div>
            </div>

            <!-- New Image: Dashboard Mockup -->
            <div
              class="relative mt-4 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#e8bb6d]/10 group"
            >
              <!-- Image -->
              <img
                src="/market.png"
                alt="Yuktrix Intelligence Layer Interface"
                class="w-full"
              />

              <!-- Floating Badge -->
              <div
                class="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-20 flex items-center gap-2"
              >
                <span
                  class="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                ></span>
                <span class="text-xs font-mono text-white"
                  >Intelligence Layer Active</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <div class="py-10 md:pb-24 bg-black">
      <!-- Header -->
      <section
        class="container mx-auto px-4 md:py-20 py-4 text-center"
        data-aos="fade-up"
      >
        <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
          Built for <TypingEffect />
        </h1>
        <p class="text-xl text-white/70 max-w-3xl mx-auto">
          Optimized for volatility patterns, liquidity behavior, and the Indian
          broker ecosystem.
        </p>
      </section>
    </div>

    <!-- Testimonials -->
    <!-- Trust, Safety & Clarity Section -->
    <section class="md:py-24 bg-black relative">
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2
            class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Trust, Safety & <span class="text-[#e8bb6d]">Clarity</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Yuktrix is a financial analytics and automation platform.<br />
            <span class="text-[#e8bb6d]">
              It does not provide personalized investment advice or guaranteed
              returns.
            </span>
          </p>
        </div>

        <div class="">
          <div class="">
            <!-- Left: Content -->

            <!-- Right: Image -->
            <div
              class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#e8bb6d]/10 group"
              data-aos="data-right"
            >
              <!-- Overlay for hover effect -->

              <!-- Image -->
              <img
                src="/slide.png"
                alt="Trust and Safety - Secure Platform"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <!-- Floating Badge -->
              <div
                class="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-20 flex items-center gap-2"
              >
                <span
                  class="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                ></span>
                <span class="text-xs font-mono text-white"
                  >Secure & Transparent</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing Statement -->
    <section
      class="relative py-32 bg-black text-center border-t border-white/10 overflow-hidden"
    >
      <!-- 1. Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="AI Technology Background"
          class="w-full h-full object-cover opacity-40"
        />
        <!-- Gradient Overlay for Readability -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"
        ></div>
      </div>

      <!-- 2. Glowing Orb Effect (Preserved & Enhanced) -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8bb6d]/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse"
      ></div>

      <!-- 3. Content Container -->
      <div class="container mx-auto px-4 relative z-10" data-aos="zoom-in">
        <!-- Small Badge -->
        <div class="mb-8 flex justify-center">
          <span
            class="px-4 py-1.5 rounded-full border border-[#e8bb6d]/30 bg-[#e8bb6d]/10 text-[#e8bb6d] text-4xl md:text-6xl font-semibold tracking-wide uppercase backdrop-blur-sm"
          >
            Yuktrix
          </span>
        </div>

        <!-- Main Heading -->
        <h3
          class="text-4xl md:text-6xl font-display font-bold max-w-[1440px] mx-auto leading-tight mb-8 text-white drop-shadow-lg"
        >
          Where Data Awakens <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#e8bb6d] to-white"
            >Intelligence</span
          >
        </h3>

        <!-- Subtext -->
        <p
          class="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          <strong class="text-white font-medium">Yuktrix</strong> — Your AI
          companion for smarter trading and investing.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            @click="openRegistrationModal"
            class="group relative bg-[#e8bb6d] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden"
          >
            <span class="relative z-10"> Get Started For Free </span>
            <div
              class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>
    <RegistrationModal />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { openRegistrationModal } = useRegistration();
import { onMounted } from "vue";
import {
  ChartBarIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  BoltIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  CpuChipIcon,
  SignalIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  FingerPrintIcon,
} from "@heroicons/vue/24/outline";

const { $gsap } = useNuxtApp();
const activeFAQ = ref(null);

const heroFeatures = [
  "Wealth Management",
  "Equity & Options Trading",
  "Personalised AI Trader",
  "Advanced Risk Management",
  "Algorithmic Trading",
  "Quantitative Finance",
];

const userPersonas = [
  { title: "Long-term Investors", icon: BriefcaseIcon },
  { title: "Intraday & Swing Traders", icon: BoltIcon },
  { title: "F&O Traders", icon: ChartBarIcon },
  { title: "Index Investors", icon: CurrencyRupeeIcon },
  { title: "Wealth Builders", icon: UserGroupIcon },
  { title: "Analysts & Researchers", icon: AcademicCapIcon },
];

const platformFeatures = [
  {
    title: "AI Market Intelligence",
    icon: CpuChipIcon,
    description:
      "Real-time AI analysis of market trends, sentiment, and opportunities across asset classes.",
    items: [
      "News sentiment analysis",
      "Technical pattern recognition",
      "Fundamental scorecards",
    ],
  },
  {
    title: "Smart Portfolio Management",
    icon: BriefcaseIcon,
    description:
      "Dynamic portfolio optimization with risk-adjusted recommendations tailored to your goals.",
    items: [
      "Asset allocation models",
      "Rebalancing alerts",
      "Performance analytics",
    ],
  },
  {
    title: "Automated Research",
    icon: AcademicCapIcon,
    description:
      "AI-powered research reports that compile data from 100+ sources in seconds.",
    items: ["Company deep dives", "Sector analysis", "Earnings summaries"],
  },
  {
    title: "Risk Management",
    icon: ShieldCheckIcon,
    description:
      "Advanced risk metrics and drawdown protection strategies for capital preservation.",
    items: [
      "VaR calculations",
      "Stop-loss optimization",
      "Correlation analysis",
    ],
  },
  {
    title: "Trade Execution",
    icon: RocketLaunchIcon,
    description:
      "Seamless integration with major brokers for one-click execution of AI-suggested trades.",
    items: ["Multi-broker support", "Order automation", "Execution tracking"],
  },
  {
    title: "Real-time Monitoring",
    icon: SignalIcon,
    description:
      "Live dashboard with custom alerts for market movements, news, and portfolio changes.",
    items: ["Price alerts", "News alerts", "Portfolio drift alerts"],
  },
];

const howItWorks = [
  {
    title: "Connect & Analyze",
    description:
      "Link your portfolios and trading accounts. Our AI analyzes your historical behavior, risk appetite, and investment patterns.",
  },
  {
    title: "AI Generates Insights",
    description:
      "Yuktrix processes terabytes of market data to generate personalized investment ideas and timing recommendations.",
  },
  {
    title: "You Decide & Execute",
    description:
      "Review AI suggestions with full transparency into the rationale. Execute with confidence through your preferred broker.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹0",
    description: "Perfect for beginners exploring AI-powered investing",
    button: "Get Started",
    features: [
      "Basic AI insights",
      "1 portfolio tracking",
      "Limited research reports",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹1,999",
    description: "For serious investors ready to leverage AI",
    button: "Start Free Trial",
    features: [
      "Advanced AI engine",
      "Unlimited portfolios",
      "Full research access",
      "Real-time alerts",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    description: "Enterprise-grade solutions for teams",
    button: "Contact Sales",
    features: [
      "Custom AI models",
      "Team collaboration",
      "API access",
      "Dedicated manager",
      "White-label options",
    ],
  },
];

const testimonials = [
  {
    name: "Vishal",
    role: "Investor",
    initials: "V",
    quote: "I used to check 5 apps. Now I check Yuktrix.",
  },
  {
    name: "Smitha",
    role: "Long-term Investor",
    initials: "S",
    quote:
      "AI breaking down fundamentals is genius. I finally understand what I'm buying.",
  },
  {
    name: "Amaan",
    role: "Trader",
    initials: "A",
    quote: "Strategy building takes me 2 minutes now.",
  },
  {
    name: "Rashmi",
    role: "Working Professional",
    initials: "R",
    quote:
      "My portfolio's weaknesses were invisible. Yuktrix showed me everything clearly.",
  },
];

const faqs = [
  {
    question: "Can I use Yuktrix for both investing and trading?",
    answer:
      "Absolutely. Yuktrix is designed for both worlds — whether you're making short-term trading decisions or building long-term wealth. Our AI adapts to your strategy and time horizon.",
  },
  {
    question: "Do I need financial knowledge to use Yuktrix?",
    answer:
      "No. Our AI explains everything in simple language. You don't need to be a market expert — Yuktrix breaks down complex data into actionable insights anyone can understand.",
  },
  {
    question: "Will I get stock recommendations?",
    answer:
      "No. You get data-backed interpretations, not tips. Yuktrix provides context, analysis, and insights to help you make informed decisions — the final call is always yours.",
  },
  {
    question: "Does Yuktrix automate investing and trading?",
    answer:
      "Yes — using your broker's authorized APIs. You can automate execution of strategies while maintaining full control. All trades require your approval unless you enable auto-execution.",
  },
  {
    question: "Does it support mutual funds and SIPs?",
    answer:
      "Yes — our portfolio insights include mutual fund and SIP intelligence. Track, analyze, and optimize your entire investment portfolio in one place, including equity, debt, and hybrid funds.",
  },
];

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Roadmap", "Changelog", "Status"],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Blog",
      "Help Center",
      "Community",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact", "Legal"],
  },
];

const socialLinks = [
  { name: "Twitter", icon: "svg-twitter" },
  { name: "LinkedIn", icon: "svg-linkedin" },
  { name: "Discord", icon: "svg-discord" },
  { name: "GitHub", icon: "svg-github" },
];

function toggleFAQ(index) {
  activeFAQ.value = activeFAQ.value === index ? null : index;
}

onMounted(() => {
  $gsap.to(".gsap-hero-text", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.1,
  });
});
const instruments = [
  {
    id: 1,
    name: "NIFTY 50",
    category: "Index Trading",
    icon: "📊",
    features: ["Real-time alerts", "AI signals", "Momentum tracking"],
    status: "24/5 Monitoring",
  },
  {
    id: 2,
    name: "BankNIFTY",
    category: "Sector Index",
    icon: "🏦",
    features: ["Volatility insights", "Swing setups", "Banking correlations"],
    status: "High Volatility",
  },
  {
    id: 3,
    name: "Futures",
    category: "F&O Trading",
    icon: "📈",
    features: ["Leverage strategies", "Expiry alerts", "Risk automation"],
    status: "Advanced Tools",
  },
  {
    id: 4,
    name: "Options",
    category: "IV & Greeks",
    icon: "⚙️",
    features: ["IV rank tracking", "Greeks calculator", "Chain analysis"],
    status: "Pro Strategies",
  },
  {
    id: 5,
    name: "Stocks",
    category: "Individual Securities",
    icon: "📱",
    features: ["Company research", "Fundamentals AI", "SIP optimization"],
    status: "Long-Term Growth",
  },
  {
    id: 6,
    name: "Intraday",
    category: "Day Trading",
    icon: "⚡",
    features: ["1-min signals", "Quick exits", "Scalping tools"],
    status: "Real-time Data",
  },
  {
    id: 7,
    name: "Swing",
    category: "Multi-Day Trades",
    icon: "🌊",
    features: [
      "Pattern recognition",
      "Support & resistance",
      "Weekly consolidations",
    ],
    status: "Balanced Hold",
  },
  {
    id: 8,
    name: "Long-Term",
    category: "Wealth Building",
    icon: "🏔️",
    features: ["Portfolio analysis", "Annual reviews", "Rebalancing"],
    status: "Peace of Mind",
  },
];

// Duplicate instruments for infinite scroll effect
const instrumentsInfinite = ref([
  ...instruments,
  ...instruments,
  ...instruments,
]);

onMounted(() => {
  const container = document.getElementById("scrollContainer");
  if (container) {
    // Clone items for seamless infinite scroll
    const items = container.querySelectorAll(".flex-shrink-0");
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });
  }
});
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
  width: max-content;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

/* Smooth pause on hover */
.animate-scroll:hover {
  animation-duration: 60s;
}
.future-text {
  font-family: "Future", sans-serif;
}
</style>
