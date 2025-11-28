<template>
  <div class="bg-black" v-if="post">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <img
        :src="post.heroImage"
        :alt="post.title"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black z-0"
      ></div>

      <div class="container mx-auto px-6 relative z-10 max-w-4xl">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-white/70 hover:text-[#e8bb6d] transition-colors mb-8 group"
        >
          <svg
            class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </NuxtLink>

        <div class="flex items-center gap-3 mb-6 text-sm">
          <span
            class="px-3 py-1 bg-[#e8bb6d] text-black text-xs font-bold rounded-full uppercase"
            >{{ post.category }}</span
          >
          <span class="text-white/60">{{ post.date }}</span>
          <span class="text-white/60">•</span>
          <span class="text-white/60">{{ post.readTime }}</span>
        </div>

        <h1
          class="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
        >
          {{ post.title }}
        </h1>

        <p class="text-xl text-white/70 mb-8 leading-relaxed">
          {{ post.excerpt }}
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8bb6d] to-[#e8bb6d]/60 flex items-center justify-center text-black font-bold text-lg"
          >
            {{ post.author.initials }}
          </div>
          <div>
            <p class="text-white font-bold">{{ post.author.name }}</p>
            <p class="text-white/60 text-sm">{{ post.author.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-16 bg-black">
      <div class="container mx-auto px-6 max-w-4xl">
        <!-- Featured Image -->
        <div
          class="mb-12 rounded-2xl overflow-hidden border border-white/10"
          data-aos="zoom-in"
        >
          <img
            :src="post.featuredImage"
            :alt="post.title"
            class="w-full h-auto"
          />
        </div>

        <!-- Article Body -->
        <div class="prose prose-invert prose-lg max-w-none">
          <!-- Loop through content sections -->
          <div
            v-for="(section, index) in post.content"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <!-- Paragraph -->
            <p
              v-if="section.type === 'paragraph'"
              class="text-white/80 text-lg leading-relaxed mb-6"
            >
              {{ section.text }}
            </p>

            <!-- Heading -->
            <h2
              v-if="section.type === 'heading'"
              class="text-3xl font-display font-bold text-white mt-12 mb-6"
            >
              {{ section.text }}
            </h2>

            <!-- Subheading -->
            <h3
              v-if="section.type === 'subheading'"
              class="text-2xl font-bold text-[#e8bb6d] mt-8 mb-4"
            >
              {{ section.text }}
            </h3>

            <!-- List -->
            <ul
              v-if="section.type === 'list'"
              class="space-y-4 mb-8 text-white/80"
            >
              <li
                v-for="(item, i) in section.items"
                :key="i"
                class="flex items-start gap-3"
              >
                <span class="text-[#e8bb6d] mt-1 font-bold">•</span>
                <span class="text-lg leading-relaxed">{{ item }}</span>
              </li>
            </ul>

            <!-- Numbered List -->
            <ol v-if="section.type === 'numbered'" class="space-y-6 mb-8">
              <li
                v-for="(item, i) in section.items"
                :key="i"
                class="flex items-start gap-4"
              >
                <span
                  class="flex-shrink-0 w-8 h-8 rounded-full bg-[#e8bb6d]/10 border border-[#e8bb6d]/30 flex items-center justify-center text-[#e8bb6d] font-bold text-sm"
                  >{{ i + 1 }}</span
                >
                <div class="flex-1">
                  <h4 class="text-white font-bold text-xl mb-2">
                    {{ item.title }}
                  </h4>
                  <p class="text-white/80 text-lg leading-relaxed">
                    {{ item.text }}
                  </p>
                </div>
              </li>
            </ol>

            <!-- Callout Box -->
            <div
              v-if="section.type === 'callout'"
              class="p-8 bg-gradient-to-br from-[#e8bb6d]/10 to-transparent border border-[#e8bb6d]/20 rounded-xl my-8"
            >
              <h3 class="text-2xl font-bold text-[#e8bb6d] mb-4">
                {{ section.title }}
              </h3>
              <p class="text-white/80 text-lg leading-relaxed">
                {{ section.text }}
              </p>
            </div>

            <!-- Quote -->
            <blockquote
              v-if="section.type === 'quote'"
              class="border-l-4 border-[#e8bb6d] pl-6 py-4 my-8 bg-white/5 rounded-r-xl"
            >
              <p class="text-white text-xl font-medium italic leading-relaxed">
                "{{ section.text }}"
              </p>
            </blockquote>

            <!-- Image -->
            <div
              v-if="section.type === 'image'"
              class="my-10 rounded-xl overflow-hidden border border-white/10"
            >
              <img
                :src="section.url"
                :alt="section.caption"
                class="w-full h-auto"
              />
              <p
                v-if="section.caption"
                class="text-center text-white/50 text-sm mt-2 px-4 pb-4"
              >
                {{ section.caption }}
              </p>
            </div>
          </div>

          <!-- CTA Box -->
          <div
            class="p-8 bg-gradient-to-br from-[#e8bb6d]/10 to-transparent border border-[#e8bb6d]/30 rounded-2xl my-12"
            data-aos="zoom-in"
          >
            <h3 class="text-2xl font-bold text-white mb-4">
              Ready to experience AI-powered market intelligence?
            </h3>
            <p class="text-white/70 mb-6 text-lg">
              Join thousands of Indian traders who've upgraded their
              understanding with Yuktrix. Start decoding markets today.
            </p>
            <NuxtLink
              to="/"
              class="inline-block bg-[#e8bb6d] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
            >
              Try Yuktrix Free
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Posts -->
    <section class="py-20 bg-black border-t border-white/10">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl font-display font-bold text-white mb-12 text-center"
          data-aos="fade-up"
        >
          Continue Reading
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <article
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.slug"
            class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#e8bb6d]/30 transition-all group"
            data-aos="fade-up"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="relatedPost.image"
                :alt="relatedPost.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-lg font-bold text-white mb-2 group-hover:text-[#e8bb6d] transition-colors line-clamp-2"
              >
                {{ relatedPost.title }}
              </h3>
              <p class="text-white/60 text-sm mb-4 line-clamp-2">
                {{ relatedPost.excerpt }}
              </p>
              <NuxtLink
                :to="`/blog/${relatedPost.slug}`"
                class="inline-flex items-center gap-2 text-[#e8bb6d] text-sm font-bold hover:gap-3 transition-all"
              >
                Read More
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
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen bg-black flex items-center justify-center">
    <div class="text-center px-6">
      <h1 class="text-4xl font-bold text-white mb-4">Post Not Found</h1>
      <p class="text-white/60 mb-6">
        The article you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/blog"
        class="inline-block bg-[#e8bb6d] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
      >
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

// Sample blog posts data with full content
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

// Get the current post
const post = computed(() => blogPosts[slug]);

// Get related posts (exclude current, limit to 3)
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
