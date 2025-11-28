import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/about/bg.png");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const visionItems = [
      {
        title: "Financial data becomes simple",
        desc: "Complex market information distilled into actionable insights you can understand at a glance."
      },
      {
        title: "Insights are instant",
        desc: "Real-time AI analysis delivers opportunities as they emerge, not after they've passed."
      },
      {
        title: "Decisions are confident",
        desc: "Every recommendation comes with transparent reasoning backed by institutional-grade data."
      },
      {
        title: "Automation reduces effort",
        desc: "Let AI handle the heavy lifting of research, monitoring, and analysis while you focus on strategy."
      },
      {
        title: "AI elevates human judgment",
        desc: "Technology amplifies your instincts with data-driven validation, creating a powerful partnership."
      }
    ];
    const dnaItems = [
      {
        icon: "🔬",
        title: "Data Engineering Precision",
        desc: "Institutional-grade data pipelines ensure accuracy, speed, and reliability at scale."
      },
      {
        icon: "🤖",
        title: "AI-Powered Simplicity",
        desc: "Complex algorithms deliver simple, actionable insights that anyone can understand."
      },
      {
        icon: "📊",
        title: "Quant-Grade Research",
        desc: "Hedge fund-level analytics made accessible to retail investors and traders."
      },
      {
        icon: "🎨",
        title: "Retail-Friendly Design",
        desc: "Institutional power wrapped in intuitive interfaces that don't require a PhD."
      },
      {
        icon: "⚡",
        title: "Automation-First Workflows",
        desc: "Every feature designed to reduce manual work and amplify decision-making capacity."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><section class="relative h-screen flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Financial Technology Background" class="absolute inset-0 w-full h-full object-cover opacity-35 z-0"><div class="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-[#FEE337]/5 z-0"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEE337]/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse"></div><div class="container mx-auto px-4 relative z-10 text-center pt-20"><div data-aos="fade-up"><span class="inline-block py-2 px-5 rounded-full bg-white/5 border border-[#FEE337]/30 text-[#FEE337] text-xs font-bold tracking-widest mb-8 backdrop-blur-sm uppercase">About Yuktrix</span><h1 class="text-5xl md:text-7xl font-display font-bold mb-6 text-white drop-shadow-lg leading-tight"> Built for India. <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE337] to-white">Designed for the Future.</span></h1><p class="text-2xl text-[#FEE337] font-semibold tracking-wide mb-8"> Powered by Data </p></div></div></section><div class="container mx-auto px-4 max-w-[1400px] py-24"><div class="mb-16" data-aos="fade-up"><div class="p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#FEE337]/30 transition-all"><p class="text-xl text-white/70 text-center mb-6"> Markets today move faster than human attention. Information is scattered across news apps, screener tools, PDF research, charting platforms, broker terminals, and social media noise. </p><p class="font-bold text-white text-3xl text-center"><span class="text-[#FEE337]">Yuktrix unifies it all</span> — into one intelligent, AI-assisted financial OS. </p></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20" data-aos="fade-right"><div><div class="text-6xl mb-4">🎯</div><h3 class="text-3xl font-bold text-[#FEE337] mb-4">Our Mission</h3><p class="text-white/70 text-lg leading-relaxed"> To give every Indian — from first-time investor to seasoned trader — a clean, calm, intelligent way to build wealth with data-driven confidence. </p></div><div class="relative"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Mission" class="w-full rounded-xl border border-white/10 opacity-70 hover:opacity-90 transition-opacity"></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20" data-aos="fade-right"><div class="relative lg:order-1"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Vision" class="w-full rounded-xl border border-white/10 opacity-70 hover:opacity-90 transition-opacity"></div><div class="lg:order-2"><div class="text-6xl mb-4">🌐</div><h3 class="text-3xl font-bold text-[#FEE337] mb-4">Our Vision</h3><p class="text-white/70 text-lg leading-relaxed"> Building India&#39;s AI Financial Operating System. Bloomberg + Wealth Manager + AI Brain + Quant Engine — all in one place. </p></div></div><div class="p-12 bg-white/5 rounded-2xl border border-white/10 mb-16" data-aos="fade-up"><h2 class="text-4xl font-bold text-center mb-10 text-white"> A world where <span class="text-[#FEE337]">intelligence meets clarity</span></h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(visionItems, (item, i) => {
        _push(`<div class="flex items-start gap-4 group"><div class="w-10 h-10 rounded-full bg-[#FEE337]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FEE337]/30 transition-colors"><span class="text-[#FEE337] font-bold text-lg">${ssrInterpolate(i + 1)}</span></div><div><h4 class="text-white font-bold mb-2 text-lg">${ssrInterpolate(item.title)}</h4><p class="text-white/70">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mb-16" data-aos="fade-up"><h2 class="text-4xl font-bold text-center mb-10 text-white"> Our <span class="text-[#FEE337]">DNA</span></h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(dnaItems, (item, i) => {
        _push(`<div class="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-[#FEE337]/40 transition-all group hover:bg-white/[7%]"><div class="text-4xl mb-4 group-hover:scale-110 transition-transform">${ssrInterpolate(item.icon)}</div><h4 class="text-[#FEE337] font-bold mb-3 text-xl">${ssrInterpolate(item.title)}</h4><p class="text-white/70">${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="mb-20" data-aos="fade-up"><h2 class="text-4xl font-bold text-center mb-4 text-white"> Meet the <span class="text-[#FEE337]">Team</span></h2><p class="text-white/70 text-center mb-12 max-w-2xl mx-auto"> The minds building India&#39;s AI Financial Operating System — a blend of data scientists, engineers, and finance experts. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="group text-center"><div class="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FEE337]/50 transition-all"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop" alt="Team Member" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div><h4 class="text-white font-bold text-lg mb-1">Ankit Sharma</h4><p class="text-[#FEE337] text-sm font-medium mb-3"> CEO &amp; Co-Founder </p><p class="text-white/60 text-sm leading-relaxed"> Ex-Quant at Goldman Sachs. IIT Bombay alumnus. Passionate about democratizing institutional finance. </p></div><div class="group text-center"><div class="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FEE337]/50 transition-all"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=300&amp;auto=format&amp;fit=crop" alt="Team Member" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div><h4 class="text-white font-bold text-lg mb-1">Priya Patel</h4><p class="text-[#FEE337] text-sm font-medium mb-3"> CTO &amp; Co-Founder </p><p class="text-white/60 text-sm leading-relaxed"> Former ML Lead at Microsoft. Expert in building scalable AI systems for financial markets. </p></div><div class="group text-center"><div class="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FEE337]/50 transition-all"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=300&amp;auto=format&amp;fit=crop" alt="Team Member" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div><h4 class="text-white font-bold text-lg mb-1">Rohit Menon</h4><p class="text-[#FEE337] text-sm font-medium mb-3"> Head of Product </p><p class="text-white/60 text-sm leading-relaxed"> Ex-Product Lead at Zerodha. 10+ years crafting user-centric fintech experiences for Indian investors. </p></div><div class="group text-center"><div class="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FEE337]/50 transition-all"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=300&amp;auto=format&amp;fit=crop" alt="Team Member" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></div><h4 class="text-white font-bold text-lg mb-1">Neha Gupta</h4><p class="text-[#FEE337] text-sm font-medium mb-3"> Head of Data Science </p><p class="text-white/60 text-sm leading-relaxed"> PhD in Quantitative Finance. Previously built risk models for SEBI-regulated hedge funds. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-DLWS206s.js.map
