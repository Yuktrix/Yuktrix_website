<template>
  <div class="bg-[#090a0a] min-h-screen font-sans selection:bg-[#db961f] selection:text-black flex flex-col">
    
    <template v-if="post">
      <!-- ==========================================
        1. ARTICLE HERO (Dark/Terminal Vibe)
      =========================================== -->
      <section class="relative pt-32 pb-40 overflow-hidden bg-[#090a0a]">
        <!-- Background Image & Overlays -->
        <div class="absolute inset-0 z-0">
          <img
            :src="post.heroImage"
            :alt="post.title"
            class="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-[#090a0a]/90 via-[#090a0a]/80 to-[#090a0a]"></div>
        </div>

        <!-- Ambient Glow -->
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#db961f]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-6 relative z-10 max-w-4xl" data-aos="fade-down">
          
          <!-- Back Navigation -->
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 text-white/50 hover:text-[#db961f] transition-colors mb-10 group font-mono text-xs uppercase tracking-widest"
          >
            <span class="transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Research Index
          </NuxtLink>

          <!-- Meta Data -->
          <div class="flex flex-wrap items-center gap-4 mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span class="px-3 py-1.5 bg-[#db961f]/10 border border-[#db961f]/30 text-[#db961f] rounded-lg font-bold flex items-center gap-2 shadow-[0_0_10px_rgba(219,150,31,0.1)]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
              {{ post.category }}
            </span>
            <span>{{ post.date }}</span>
            <span class="text-white/20">||</span>
            <span>{{ post.readTime }}</span>
          </div>

          <!-- Title & Excerpt -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {{ post.title }}
          </h1>
          <p class="text-xl text-white/60 mb-10 leading-relaxed font-light max-w-3xl border-l-2 border-[#db961f] pl-6">
            {{ post.excerpt }}
          </p>

          <!-- Author Info -->
          <div class="flex items-center gap-4 pt-8 border-t border-white/10">
            <div class="w-12 h-12 rounded-full bg-[#db961f]/10 border border-[#db961f]/30 flex items-center justify-center text-[#db961f] font-mono font-bold text-lg shadow-inner">
              {{ post.author.initials }}
            </div>
            <div>
              <p class="text-white font-bold tracking-wide">{{ post.author.name }}</p>
              <p class="text-white/40 text-xs font-mono uppercase tracking-widest mt-0.5">{{ post.author.role }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
        2. ARTICLE CONTENT (Silver Base for Readability)
      =========================================== -->
      <article class="relative z-20 bg-[#cdcfd1] py-20 -mt-20 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] flex-grow">
        <div class="container mx-auto px-6 max-w-3xl">
          
          <!-- Featured Image (If different from hero or prominent) -->
          <div class="mb-16 rounded-[2rem] overflow-hidden border border-[#090a0a]/10 shadow-2xl relative group" data-aos="fade-up">
            <div class="absolute inset-0 bg-[#090a0a]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
              :src="post.featuredImage"
              :alt="post.title"
              class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>

          <!-- Dynamic Content Renderer -->
          <div class="prose prose-lg max-w-none text-[#090a0a]/80">
            <div
              v-for="(section, index) in post.content"
              :key="index"
              data-aos="fade-up"
            >
              <!-- Paragraph -->
              <p v-if="section.type === 'paragraph'" class="text-lg leading-relaxed mb-8 font-medium">
                {{ section.text }}
              </p>

              <!-- Main Heading -->
              <h2 v-if="section.type === 'heading'" class="text-3xl font-display font-bold text-[#090a0a] mt-16 mb-8 border-b border-[#090a0a]/10 pb-4">
                {{ section.text }}
              </h2>

              <!-- Subheading -->
              <h3 v-if="section.type === 'subheading'" class="text-2xl font-bold text-[#db961f] mt-10 mb-4 flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-[#db961f]"></span>
                {{ section.text }}
              </h3>

              <!-- Bullet List -->
              <ul v-if="section.type === 'list'" class="space-y-4 mb-10 pl-4">
                <li v-for="(item, i) in section.items" :key="i" class="flex items-start gap-4">
                  <svg class="w-5 h-5 text-[#db961f] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span class="text-lg leading-relaxed">{{ item }}</span>
                </li>
              </ul>

              <!-- Numbered/Structural List -->
              <div v-if="section.type === 'numbered'" class="space-y-6 mb-12">
                <div v-for="(item, i) in section.items" :key="i" class="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white/50 border border-white/60 shadow-sm hover:shadow-md hover:bg-white transition-all">
                  <div class="shrink-0">
                    <div class="font-mono text-3xl font-bold text-[#db961f] opacity-80">
                      0{{ i + 1 }}
                    </div>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-[#090a0a] mb-2">{{ item.title }}</h4>
                    <p class="text-lg leading-relaxed text-[#090a0a]/70">{{ item.text }}</p>
                  </div>
                </div>
              </div>

              <!-- Callout Box (Dark High-Contrast Box) -->
              <div v-if="section.type === 'callout'" class="p-8 md:p-10 bg-[#090a0a] rounded-3xl shadow-2xl my-14 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#db961f]/20 blur-[50px] rounded-full pointer-events-none"></div>
                <div class="relative z-10 flex items-start gap-6">
                  <div class="w-12 h-12 rounded-xl bg-[#db961f]/10 flex items-center justify-center shrink-0 border border-[#db961f]/30">
                    <svg class="w-6 h-6 text-[#db961f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-wide">{{ section.title }}</h3>
                    <p class="text-white/80 text-lg leading-relaxed font-light">{{ section.text }}</p>
                  </div>
                </div>
              </div>

              <!-- Quote (Editorial Style) -->
              <blockquote v-if="section.type === 'quote'" class="my-12 px-8 py-6 border-l-4 border-[#db961f] bg-white/40 rounded-r-2xl italic">
                <p class="text-2xl font-serif text-[#090a0a] leading-relaxed">
                  "{{ section.text }}"
                </p>
              </blockquote>

              <!-- Inline Image -->
              <div v-if="section.type === 'image'" class="my-14">
                <div class="rounded-2xl overflow-hidden border border-[#090a0a]/10 shadow-lg">
                  <img :src="section.url" :alt="section.caption" class="w-full h-auto" />
                </div>
                <p v-if="section.caption" class="text-center text-[#090a0a]/50 text-sm mt-4 font-mono tracking-wide uppercase">
                  ▲ {{ section.caption }}
                </p>
              </div>
            </div>

            <!-- Bottom CTA Box -->
            <div class="mt-20 p-10 md:p-12 bg-gradient-to-br from-white to-[#cdcfd1] border border-white rounded-3xl shadow-xl text-center relative overflow-hidden" data-aos="zoom-in">
              <h3 class="text-3xl font-display font-bold text-[#090a0a] mb-4">
                Ready to engineer your trading system?
              </h3>
              <p class="text-[#090a0a]/70 mb-8 text-lg max-w-xl mx-auto">
                Transition from discretionary ideas to structured quantitative validation with Yuktrix.
              </p>
              <button @click="openRegistrationModal" class="inline-flex items-center gap-3 bg-[#090a0a] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_10px_20px_rgba(9,10,10,0.2)] transition-all">
                Book a Consultation
                <span class="text-[#db961f]">→</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- ==========================================
        3. RELATED POSTS (Dark Theme Match Footer)
      =========================================== -->
      <section class="py-24 bg-[#090a0a] border-t border-white/5 relative z-10">
        <div class="container mx-auto px-6">
          <div class="mb-16" data-aos="fade-up">
            <h2 class="text-sm font-mono text-[#db961f] uppercase tracking-[0.2em] mb-2">Continue Exploring</h2>
            <h3 class="text-3xl md:text-4xl font-display font-bold text-white">Related Research</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <NuxtLink
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.slug"
              :to="`/blog/${relatedPost.slug}`"
              class="bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-[#db961f]/50 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full"
              data-aos="fade-up"
            >
              <div class="relative h-48 overflow-hidden">
                <div class="absolute inset-0 bg-[#090a0a]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  :src="relatedPost.image"
                  :alt="relatedPost.title"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div class="p-8 flex flex-col flex-grow">
                <h4 class="text-xl font-bold text-white mb-3 group-hover:text-[#db961f] transition-colors line-clamp-2 leading-snug">
                  {{ relatedPost.title }}
                </h4>
                <p class="text-white/50 text-sm mb-6 line-clamp-3 font-light leading-relaxed flex-grow">
                  {{ relatedPost.excerpt }}
                </p>
                <div class="inline-flex items-center gap-2 text-[#db961f] text-xs font-mono font-bold uppercase tracking-widest group-hover:gap-3 transition-all mt-auto">
                  Read Article
                  <span>→</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>

    <!-- ==========================================
      4. 404 / NOT FOUND STATE (Dark Theme)
    =========================================== -->
    <div v-else class="flex-grow bg-[#090a0a] flex items-center justify-center py-32 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[100px] rounded-full"></div>
      
      <div class="text-center px-6 relative z-10">
        <div class="text-[#db961f] font-mono text-6xl font-bold mb-6">404</div>
        <h1 class="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Record Not Found</h1>
        <p class="text-white/50 mb-10 text-lg font-mono uppercase tracking-widest">
          The requested research article does not exist in the index.
        </p>
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#090a0a] transition-all uppercase tracking-widest text-sm"
        >
          <span>←</span> Return to Dashboard
        </NuxtLink>
      </div>
    </div>

    <!-- Modals -->
    <RegistrationModal />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRegistration } from "~/composables/useRegistration";

const route = useRoute();
const slug = route.params.slug;
const { openRegistrationModal } = useRegistration();

// --- SAMPLE DATA STORE (Self-Contained) ---
const blogPosts = {
  "why-markets-move": {
    slug: "why-markets-move",
    title: "Why Markets Move the Way They Move — The Real Story",
    excerpt:
      "Most traders think markets move because of news or indicators. Reality is simpler — and far more structured.",
    category: "Market Intelligence",
    date: "Nov 24, 2025",
    readTime: "8 min read",
    heroImage: "/blog/1.png",
    featuredImage: "/blog/1.png",
    author: {
      name: "Yuktrix Research",
      role: "Market Intelligence Team",
      initials: "YR",
    },
    content: [
      {
        type: "paragraph",
        text: 'Most traders think markets move because of news, indicators, or "big players hitting buy." Reality is simpler — and far more structured.',
      },
      {
        type: "paragraph",
        text: "Every price movement has three forces behind it:",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Liquidity (The Fuel)",
            text: 'Price moves where liquidity is thin. Not because buyers are stronger, but because sellers are absent — or vice versa. Most "breakouts" are simply liquidity pockets being hit, not real momentum.',
          },
          {
            title: "Positioning (The Pressure)",
            text: "When too many traders are on one side, the market finds the opposite direction. Why? Because tight positioning creates forced exits — stop-loss triggers → cascading moves.",
          },
          {
            title: "Volatility Regimes (The Mood)",
            text: 'Markets behave differently under different "regimes": Calm regime → trends work. Choppy regime → mean reversion works. Panic regime → volatility explosions. Most traders lose because they use the wrong strategy in the wrong regime.',
          },
        ],
      },
      {
        type: "callout",
        title: "The Takeaway",
        text: "Price is not random. It's a living system responding to liquidity, positioning, and volatility — not your indicators. Understand the system → understand the market.",
      },
    ],
  },
  "trend-following-model": {
    slug: "trend-following-model",
    title:
      "Inside a Trend-Following Model — The Simple Logic Behind a Pro Algorithm",
    excerpt:
      "Trend-following feels complicated. It isn't. Here's how a professional trend model actually works.",
    category: "Quant Strategy & Algorithms",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    heroImage: "/blog/2.png",
    featuredImage: "/blog/2.png",
    author: {
      name: "Yuktrix Quant Team",
      role: "Algorithmic Strategy",
      initials: "YQ",
    },
    content: [
      {
        type: "paragraph",
        text: "Trend-following feels complicated. It isn't. Here's how a professional trend model actually works:",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Identify Direction",
            text: "Pros don't guess trends. They quantify them using: Slope of moving averages, Higher highs / higher lows, Trend strength indicators (like ADX). The goal isn't prediction — it's confirmation.",
          },
          {
            title: "Enter on Pullbacks",
            text: "Professionals don't chase green candles. They wait for the market to breathe, then enter during weakness in an uptrend (or strength in a downtrend). Simple logic: Buy strength at a discount.",
          },
          {
            title: "Cut Risk Fast",
            text: "Trend strategies survive because they exit losers quickly. One bad trend wipeout kills retail traders — quants avoid this by being ruthless with stop-losses.",
          },
          {
            title: "Ride Winners Slowly",
            text: "The edge is in long tails — small losses, occasional big wins.",
          },
        ],
      },
      {
        type: "quote",
        text: "Cut losses fast, let winners breathe.",
      },
      {
        type: "paragraph",
        text: "This is why trend-following has worked for 50+ years across markets.",
      },
    ],
  },
  "order-execution-secrets": {
    slug: "order-execution-secrets",
    title: "What Most Traders Don't Know About Order Execution",
    excerpt: "Your chart doesn't decide your profit. Your execution does.",
    category: "Execution Engineering",
    date: "Nov 20, 2025",
    readTime: "9 min read",
    heroImage: "/blog/3.png",
    featuredImage: "/blog/3.png",
    author: {
      name: "Yuktrix Execution",
      role: "Trading Infrastructure",
      initials: "YE",
    },
    content: [
      {
        type: "paragraph",
        text: "Your chart doesn't decide your profit. Your execution does.",
      },
      {
        type: "paragraph",
        text: "Here's what traders rarely understand:",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Your order becomes information",
            text: "The moment you place a large market order, the system knows it. Liquidity providers adjust spreads, algorithms react, and slippage happens.",
          },
          {
            title: "Market orders are the most expensive orders",
            text: "They cross the spread → instantly pay a hidden tax. Retail traders underestimate this cost — but quants design entire systems to avoid it.",
          },
          {
            title: "Volatility amplifies execution errors",
            text: "During high volatility, spreads widen, order books thin, fills become chaotic, duplicate trades slip in. This is why automation with risk guards massively outperforms manual execution.",
          },
          {
            title: "A good strategy is useless without good execution",
            text: "Pros say: \"Half the edge is execution.\" And they're right. If your strategy is good but your execution is sloppy, you've already lost.",
          },
        ],
      },
    ],
  },
  "market-living-system": {
    slug: "market-living-system",
    title: "The Market Is a Living System — Learn to See It Like One",
    excerpt: "Most traders see charts. Quants see systems.",
    category: "Financial Systems Thinking",
    date: "Nov 18, 2025",
    readTime: "7 min read",
    heroImage: "/blog/4.png",
    featuredImage: "/blog/4.png",
    author: {
      name: "Yuktrix Systems",
      role: "Market Structure Analysis",
      initials: "YS",
    },
    content: [
      {
        type: "paragraph",
        text: "Most traders see charts. Quants see systems.",
      },
      {
        type: "paragraph",
        text: "Here's the truth: The market behaves like a living organism — with structure, reactions, and feedback loops.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Liquidity is the bloodstream",
            text: "Everything depends on it. When liquidity dries up → price jumps violently. When liquidity floods → volatility collapses.",
          },
          {
            title: "Institutions are the organs",
            text: "Mutual funds, banks, option writers — each plays a functional role. They create structure, resistance, absorption, and mean reversion.",
          },
          {
            title: "Retail is the nervous system",
            text: "Fast, emotional, reactive. Retail behaviour often triggers short-term volatility spikes.",
          },
          {
            title: "Options writers are the skeleton",
            text: "They create the structure of the market: Strikes, hedges, open interest — all determine where price can move easily.",
          },
        ],
      },
      {
        type: "callout",
        title: "The Big Idea",
        text: "If you understand how the system communicates, you can read the market even without indicators.",
      },
    ],
  },
  "brain-hates-stop-losses": {
    slug: "brain-hates-stop-losses",
    title: "Why Your Brain Hates Stop-Losses",
    excerpt: "Your brain is designed to avoid pain — not manage risk.",
    category: "Learning & Behaviour",
    date: "Nov 15, 2025",
    readTime: "6 min read",
    heroImage: "/blog/5.png",
    featuredImage: "/blog/5.png",
    author: {
      name: "Yuktrix Psychology",
      role: "Behavioral Finance",
      initials: "YP",
    },
    content: [
      {
        type: "paragraph",
        text: "This one's simple: Your brain is designed to avoid pain — not manage risk.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Loss aversion",
            text: 'A ₹500 loss feels twice as painful as a ₹500 gain feels good. So traders hold losers, waiting for "just a small bounce."',
          },
          {
            title: "Survival wiring",
            text: "Your brain treats losses as threats → triggering fight, flight, or freeze. Most traders freeze.",
          },
          {
            title: "The illusion of control",
            text: "Closing a losing trade feels like admitting defeat. So traders avoid the decision, even when the price clearly invalidates the trade.",
          },
          {
            title: "Quants solve this by using rules, not emotions",
            text: 'Quants don\'t "feel" losses. They predefine exits, automate them, and never negotiate with the market.',
          },
        ],
      },
      {
        type: "callout",
        title: "The Truth",
        text: "Stop-losses don't hurt. Ego does. Discipline protects you from your own biology.",
      },
    ],
  },
};

// --- COMPUTED STATE ---
const post = computed(() => blogPosts[slug]);

const relatedPosts = computed(() => {
  return Object.values(blogPosts)
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      image: p.heroImage,
    }));
});
</script>