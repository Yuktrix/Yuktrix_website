<template>
  <div class="bg-[#cdcfd1] min-h-screen font-sans selection:bg-[#db961f] selection:text-black overflow-x-hidden">

    <!-- Hero -->
    <section class="relative pt-20 pb-20 flex items-center justify-center bg-[#090a0a] overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_50%_0%,_rgba(219,150,31,0.12),transparent_65%)] pointer-events-none"></div>
      <div class="container mx-auto px-6 text-center relative z-10 pt-10" data-aos="zoom-in">
        <div class="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#db961f]/10 border border-[#db961f]/20 rounded-full text-[#db961f] text-xs font-semibold uppercase tracking-[0.3em]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#db961f] animate-pulse"></span>
          FAQ
        </div>
        <h1 class="text-5xl md:text-6xl font-display font-bold text-white mb-5 leading-tight tracking-tight">
          Questions That Matter,<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#db961f] to-[#FEE337]">Answered Directly.</span>
        </h1>
        <p class="text-lg text-white/45 max-w-2xl mx-auto font-light leading-relaxed">
          No fluff, no jargon. Straight answers about what YuktriX is, how it works, and whether it's right for you.
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="relative z-20 -mt-10 bg-[#cdcfd1] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] py-20 px-6">
      <div class="container mx-auto max-w-3xl">

        <div class="space-y-3" data-aos="fade-up">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white rounded-2xl border border-[#090a0a]/5 overflow-hidden shadow-sm"
          >
            <button
              @click="toggle(i)"
              class="w-full flex items-center justify-between gap-4 p-7 text-left group"
            >
              <span class="font-bold text-[#090a0a] text-base leading-snug group-hover:text-[#db961f] transition-colors pr-4">{{ faq.q }}</span>
              <span
                class="shrink-0 w-8 h-8 rounded-full border border-[#090a0a]/10 flex items-center justify-center text-[#090a0a]/40 group-hover:border-[#db961f]/40 group-hover:text-[#db961f] transition-all"
                :class="openIndex === i ? 'bg-[#db961f] border-[#db961f] text-white rotate-45' : ''"
              >
                <svg class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
              </span>
            </button>
            <div v-if="openIndex === i" class="px-7 pb-7">
              <div class="h-px bg-[#090a0a]/5 mb-5"></div>
              <p class="text-[#090a0a]/65 leading-relaxed text-sm font-light" v-html="faq.a"></p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center" data-aos="zoom-in">
          <div class="bg-[#090a0a] rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-[#db961f]/8 blur-[100px] rounded-full pointer-events-none"></div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight relative z-10">
              Still have questions?
            </h2>
            <p class="text-white/45 mb-8 font-light relative z-10">
              The strategy assessment is a conversation — not a sales pitch. Ask us anything.
            </p>
            <button
              @click="openRegistrationModal"
              class="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#db961f] text-[#090a0a] font-bold rounded-xl hover:bg-[#FEE337] transition-all relative z-10"
            >
              Schedule a Free Assessment Call
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
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
const openIndex = ref(null);

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i;
};

const faqs = [
  {
    q: "What exactly is YuktriX?",
    a: "YuktriX is a Trading ERP — a complete operating system covering capital planning, strategy R&D, validation, execution, journaling, review, and improvement. It's self-hosted on your server, purchased once. Not a subscription. Not a cloud platform. A system you own permanently.",
  },
  {
    q: "Is YuktriX a signal provider?",
    a: "<strong>No.</strong> We help you build, validate, and execute <em>your</em> strategies. Alpha generation is entirely your responsibility. YuktriX does not provide trading signals, tips, or trade recommendations under any circumstances.",
  },
  {
    q: "Why self-hosted instead of a cloud platform like Streak or Tradetron?",
    a: "Your strategies are your edge. On cloud platforms, your logic lives on their servers — and if they shut down, so does your system. With YuktriX, everything runs on a VPS you control (typically ₹500–1,500/mo). We could shut down tomorrow and your system keeps running. Your data never leaves your infrastructure.",
  },
  {
    q: "Which brokers does YuktriX support?",
    a: "Upstox, AngelOne, and Groww are supported via a unified API layer. Adding a new broker doesn't require rebuilding your strategies — the execution layer is broker-agnostic.",
  },
  {
    q: "What is the ICT engine?",
    a: "YuktriX includes automated detection of ICT (Inner Circle Trader) concepts: order blocks, fair value gaps, liquidity sweeps, and market structure shifts — across multiple timeframes. This is built into the strategy builder and backtester natively.",
  },
  {
    q: "Is YuktriX only for algorithmic traders?",
    a: "No. Discretionary traders benefit from the trade journal, pre-trade checklist, daily debrief, and board review modules. Systematic traders use the strategy builder, backtester, and execution engine. The platform is structured around trading as a business — regardless of methodology.",
  },
  {
    q: "What does the built-in AI do?",
    a: "YuktriX uses a local LLM (Ollama) that runs entirely on your machine. It analyzes your trade journal, spots behavioral patterns (e.g., overtrading on certain days, FOMO-tagged losses), and suggests rule-based adjustments. No cloud API costs. No data leaves your machine. Fully private.",
  },
  {
    q: "How much does it cost?",
    a: "YuktriX is a one-time purchase plus ₹500–1,500/mo for a VPS you own. Over 2 years, this is typically 5–10x cheaper than monthly subscription tools — and unlike subscriptions, you own the system permanently after purchase.",
  },
  {
    q: "What does the consulting engagement include?",
    a: "Each engagement covers a specific stage of trading-system development. The Foundation Build, for example, includes full rule formalization, 3–5 year backtesting with regime testing, single-broker live integration, journal and monitoring setup, and 60-day stabilization support. See the <a href='/services' class='text-[#db961f] font-semibold hover:underline'>Services page</a> for all engagement types.",
  },
  {
    q: "How do I know which engagement is right for me?",
    a: "Start with a free 15-minute assessment call. We'll ask about your current setup, strategies, and goals — and tell you exactly where to start. No commitment required. The assessment is a conversation, not a pitch.",
  },
  {
    q: "I'm not sure if this is for me. What should I do?",
    a: "If you manage meaningful capital and feel your trading lacks structure — it probably is for you. Schedule the assessment call (30–45 min). We'll tell you honestly whether we can help and what the right starting point is. There's no pressure to proceed.",
  },
];
</script>
