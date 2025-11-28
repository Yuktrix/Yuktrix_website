<template>
  <div class="bg-black">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="/home/blog.jpg"
        alt="Blog Background"
        class="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />
      <!-- <div
        class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"
      ></div> -->
      <!-- <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e8bb6d]/10 rounded-full blur-[120px] animate-pulse z-0"
      ></div> -->

      <div class="container mx-auto px-6 relative z-10 text-center pt-20">
        <h1
          class="text-5xl md:text-7xl font-display font-bold mb-10 text-white leading-tight"
          data-aos="zoom-in"
        >
          Insights From the <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#e8bb6d] to-white"
            >Intelligence Layer</span
          >
        </h1>

        <!-- Tagline -->
        <div
          class="mb-12 p-6 pt-10 bg-gradient-to-r from-[#e8bb6d]/10 to-transparent rounded-xl border border-[#e8bb6d]/20 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p class="text-2xl md:text-3xl font-bold text-white">
            We Forecast with Intelligence.<br />
            <span class="text-[#e8bb6d]">We Decode for Fun.</span>
          </p>
        </div>

        <!-- Category Pills -->
      </div>
    </section>

    <!-- Category Descriptions -->

    <section id="articles" class="py-20 bg-black relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-display font-bold text-white mb-2">
            Latest Articles
          </h2>
          <p class="text-white/60">
            Recent insights from the Yuktrix Intelligence Layer
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <article
            v-for="(post, index) in filteredPosts"
            :key="index"
            class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#e8bb6d]/30 transition-all group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="post.featuredImage || post.heroImage"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                class="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-[#e8bb6d] text-xs font-bold rounded-full"
              >
                {{ post.category }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3 text-xs text-white/50">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
              <h3
                class="text-xl font-bold text-white mb-3 group-hover:text-[#e8bb6d] transition-colors line-clamp-2"
              >
                {{ post.title }}
              </h3>
              <p class="text-white/60 text-sm mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-[#e8bb6d] text-sm font-bold hover:gap-3 transition-all"
              >
                Read Article
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="text-center mt-16" data-aos="fade-up">
          <button
            class="px-8 py-4 rounded-full border border-white/20 hover:border-[#e8bb6d] hover:text-[#e8bb6d] text-white transition-all font-bold bg-black/20 backdrop-blur-sm"
          >
            Load More Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->

    <!-- Footer Tagline -->
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
import { ref, computed } from "vue";
import { useRegistration } from "~/composables/useRegistration";
const { openRegistrationModal } = useRegistration();

// Use the composable
const { getAllPosts } = useBlogPosts();

const selectedCategory = ref("All");

const categories = [
  { name: "All" },
  { name: "Market Intelligence" },
  { name: "Quant Strategy & Algorithms" },
  { name: "Execution Engineering" },
  { name: "Financial Systems Thinking" },
  { name: "Learning & Behaviour" },
];

const categoryDetails = [
  {
    name: "Market Intelligence",
    subtitle: "Decode what the market is actually doing",
    icon: "📊",
    description:
      "Understand the hidden mechanics behind market movements and price behavior.",
    topics: [
      "Hidden market behaviour",
      "Smart money flow patterns",
      "Trend vs. structure",
      "Volatility anatomy",
      "Risk signals and sentiment shifts",
      "Market microstructure simplified",
    ],
    examples: [
      "Why Markets Move the Way They Move — The Real Story",
      "How to Read Trends Without Indicators",
      "The Psychology Behind Price Levels",
    ],
  },
  {
    name: "Quant Strategy & Algorithms",
    subtitle: "Break down algorithms used by pros — without the heavy math",
    icon: "⚙️",
    description:
      "Learn how professional traders design systematic edges using quantitative methods.",
    topics: [
      "Algorithmic trading logic",
      "Quant reasoning (made simple)",
      "Factor models (momentum, volatility, trend)",
      "Regime detection",
      "Backtesting logic",
      "How pros design edges",
    ],
    examples: [
      "Inside a Trend-Following Model: The Simple Logic Behind a Pro Algorithm",
      "Why Momentum Works — Explained Like a Story",
      "How Backtesting Actually Works (And Where It Goes Wrong)",
    ],
  },
  {
    name: "Execution Engineering",
    subtitle: "What happens after you design a strategy — the real work",
    icon: "🔧",
    description:
      "Master the technical side of turning strategies into executable trades.",
    topics: [
      "Slippage explained simply",
      "How orders really travel",
      "Market execution myths",
      "Event-driven automation",
      "How pros avoid duplicate trades",
      "Why execution is 50% of performance",
    ],
    examples: [
      "What Most Traders Don't Know About Order Execution",
      "Why Slippage Happens — Explained Without Jargon",
      "The Difference Between a Good Strategy and a Tradable One",
    ],
  },
  {
    name: "Financial Systems Thinking",
    subtitle: "Simplifying the big systems behind markets",
    icon: "🌐",
    description:
      "Understand markets as interconnected systems with feedback loops and patterns.",
    topics: [
      "Liquidity ecosystem",
      "Institutions vs. retailers",
      "Option writers vs. buyers",
      "Market cycles",
      "Behavioural feedback loops",
    ],
    examples: [
      "The Market Is a Living System — How to See It Like One",
      "Understanding Option Writers: The Real Market Movers",
      "Retail vs. Institutions — Who Actually Moves the Market?",
    ],
  },
  {
    name: "Learning & Behaviour",
    subtitle: "The mindset + mistakes behind trading outcomes",
    icon: "🧠",
    description:
      "Decode trading psychology and learn to think in probabilities like quants do.",
    topics: [
      "Trading psychology decoded",
      "Why traders repeat mistakes",
      "How to think in probabilities",
      "Understanding risk like a quant",
      "Pattern recognition habits",
      "Behavioural traps explained in 1 minute",
    ],
    examples: [
      "Why Your Brain Hates Stop-Losses",
      "The 4 Mindset Errors That Break Most Traders",
      "How Quants Manage Risk (Without Emotions)",
    ],
  },
];

// Get filtered posts from composable
const filteredPosts = computed(() => {
  const allPosts = getAllPosts();

  if (selectedCategory.value === "All") {
    return allPosts;
  }

  return allPosts.filter((post) => post.category === selectedCategory.value);
});

// Smooth scroll to articles section
const scrollToArticles = () => {
  const element = document.getElementById("articles");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
