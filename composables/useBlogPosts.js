export const useBlogPosts = () => {
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

  // Get all posts as array
  const getAllPosts = () => {
    return Object.keys(blogPosts).map((key) => ({
      ...blogPosts[key],
      slug: key,
    }));
  };

  // Get single post by slug
  const getPostBySlug = (slug) => {
    return blogPosts[slug] || null;
  };

  return {
    blogPosts,
    getAllPosts,
    getPostBySlug,
  };
};
