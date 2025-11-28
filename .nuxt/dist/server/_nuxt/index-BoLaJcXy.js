import { ref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { CpuChipIcon, BriefcaseIcon, AcademicCapIcon, ShieldCheckIcon, RocketLaunchIcon, SignalIcon, BoltIcon, ChartBarIcon, CurrencyRupeeIcon, UserGroupIcon } from "@heroicons/vue/24/outline";
import { u as useNuxtApp } from "../server.mjs";
import "D:/yuktrix/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/yuktrix/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/yuktrix/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "D:/yuktrix/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap } = useNuxtApp();
    const activeFAQ = ref(null);
    const heroFeatures = [
      "Investing",
      "Trading",
      "Fundamental Research",
      "Portfolio Tracking",
      "Asset Allocation",
      "Market Analytics",
      "Strategy Automation"
    ];
    const userPersonas = [
      { title: "Long-term Investors", icon: BriefcaseIcon },
      { title: "Intraday & Swing Traders", icon: BoltIcon },
      { title: "F&O Traders", icon: ChartBarIcon },
      { title: "Index Investors", icon: CurrencyRupeeIcon },
      { title: "Wealth Builders", icon: UserGroupIcon },
      { title: "Analysts & Researchers", icon: AcademicCapIcon }
    ];
    const platformFeatures = [
      {
        title: "AI Market Intelligence",
        icon: CpuChipIcon,
        description: "Real-time AI analysis of market trends, sentiment, and opportunities across asset classes.",
        items: [
          "News sentiment analysis",
          "Technical pattern recognition",
          "Fundamental scorecards"
        ]
      },
      {
        title: "Smart Portfolio Management",
        icon: BriefcaseIcon,
        description: "Dynamic portfolio optimization with risk-adjusted recommendations tailored to your goals.",
        items: [
          "Asset allocation models",
          "Rebalancing alerts",
          "Performance analytics"
        ]
      },
      {
        title: "Automated Research",
        icon: AcademicCapIcon,
        description: "AI-powered research reports that compile data from 100+ sources in seconds.",
        items: ["Company deep dives", "Sector analysis", "Earnings summaries"]
      },
      {
        title: "Risk Management",
        icon: ShieldCheckIcon,
        description: "Advanced risk metrics and drawdown protection strategies for capital preservation.",
        items: [
          "VaR calculations",
          "Stop-loss optimization",
          "Correlation analysis"
        ]
      },
      {
        title: "Trade Execution",
        icon: RocketLaunchIcon,
        description: "Seamless integration with major brokers for one-click execution of AI-suggested trades.",
        items: ["Multi-broker support", "Order automation", "Execution tracking"]
      },
      {
        title: "Real-time Monitoring",
        icon: SignalIcon,
        description: "Live dashboard with custom alerts for market movements, news, and portfolio changes.",
        items: ["Price alerts", "News alerts", "Portfolio drift alerts"]
      }
    ];
    const howItWorks = [
      {
        title: "Connect & Analyze",
        description: "Link your portfolios and trading accounts. Our AI analyzes your historical behavior, risk appetite, and investment patterns."
      },
      {
        title: "AI Generates Insights",
        description: "Yuktrix processes terabytes of market data to generate personalized investment ideas and timing recommendations."
      },
      {
        title: "You Decide & Execute",
        description: "Review AI suggestions with full transparency into the rationale. Execute with confidence through your preferred broker."
      }
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
          "Email support"
        ]
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
          "Priority support"
        ],
        popular: true
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
          "White-label options"
        ]
      }
    ];
    const testimonials = [
      {
        name: "Rohit Sharma",
        role: "Professional Trader",
        initials: "RS",
        quote: "Yuktrix's AI pattern recognition helped me identify breakout stocks before the market reacted. My win rate improved by 35% in the first quarter."
      },
      {
        name: "Priya Patel",
        role: "Wealth Manager",
        initials: "PP",
        quote: "The automated research saves me 10+ hours weekly. I can now focus on client relationships while Yuktrix handles the data crunching."
      },
      {
        name: "Amit Desai",
        role: "Long-term Investor",
        initials: "AD",
        quote: "Finally, an app that explains the 'why' behind recommendations. The transparency gives me confidence in every investment decision."
      }
    ];
    const faqs = [
      {
        question: "How does Yuktrix AI differ from traditional stock screeners?",
        answer: "Traditional screeners rely on static filters. Yuktrix AI continuously learns from market patterns, your behavior, and 100+ data sources to deliver dynamic, personalized insights that evolve with market conditions."
      },
      {
        question: "Which brokers are supported for trade execution?",
        answer: "Yuktrix integrates with all major Indian brokers including Zerodha, Upstox, Angel Broking, ICICI Direct, and HDFC Securities. We execute via official APIs with bank-grade security."
      },
      {
        question: "Is my financial data secure?",
        answer: "Yes. We use 256-bit encryption, never store your brokerage credentials, and are SEBI-compliant. All data processing occurs on encrypted servers within India."
      },
      {
        question: "Can Yuktrix replace my financial advisor?",
        answer: "Yuktrix augments your decision-making with AI insights but doesn't replace human judgment. Many advisors use Yuktrix to enhance their research capabilities for clients."
      },
      {
        question: "What's the minimum investment required?",
        answer: "There's no minimum. Yuktrix works with portfolios of any size. Our AI scales insights from ₹10,000 to ₹10 crores, adapting recommendations to your capital base."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative md:h-screen pt-10 flex items-center justify-center overflow-hidden bg-black"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2232&amp;auto=format&amp;fit=crop" alt="Financial Intelligence Background" class="w-full h-full object-cover opacity-30"><div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div></div><div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FEE337]/10 rounded-full blur-[100px] animate-pulse z-0"></div><div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000 z-0"></div><div class="container mx-auto px-4 relative z-10 text-center pt-20"><div class="gsap-hero-text opacity-0 translate-y-10"><span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[#FEE337] text-xs font-bold tracking-widest mb-8 uppercase"><span class="w-2 h-2 rounded-full bg-[#FEE337] animate-pulse"></span> AI Financial Intelligence Platform </span><h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight"> Your AI Financial <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FEE337] to-white">Intelligence Layer</span></h1><p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"> Not just a trading tool. Not just an analytics app. Not just an AI bot.<br><strong class="text-white font-semibold">Yuktrix is powered by data, guided by AI, automated for speed.</strong></p><div class="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(heroFeatures, (item) => {
        _push(`<span class="px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-gray-200 border border-white/10 transition-all hover:border-[#FEE337]/50 cursor-default">${ssrInterpolate(item)}</span>`);
      });
      _push(`<!--]--></div><div class="flex flex-col sm:flex-row gap-5 justify-center items-center"><button class="group relative bg-[#FEE337] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 w-full sm:w-auto overflow-hidden"><span class="relative z-10">Decide with Confidence</span><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div></button><button class="group px-8 py-4 rounded-full border border-white/20 hover:border-[#FEE337] hover:text-[#FEE337] text-white transition-all w-full sm:w-auto bg-black/20 backdrop-blur-sm"><span class="flex items-center gap-2"> Explore Features <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></span></button></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce"><span class="text-xs uppercase tracking-widest opacity-70">Scroll</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></section><section class="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden"><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E5005B]/5 via-transparent to-transparent"></div><div class="container mx-auto px-4 relative z-10"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"> Everything you need in <span class="text-[#FEE337]">one platform</span></h2><p class="text-xl text-white/70 max-w-3xl mx-auto"> From research to execution, Yuktrix covers the entire investment lifecycle with AI-powered insights. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(platformFeatures, (feature, index) => {
        _push(`<div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FEE337]/30 hover:bg-white/10 transition-all group" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="w-14 h-14 rounded-xl bg-[#FEE337]/10 flex items-center justify-center text-[#FEE337] mb-6 group-hover:scale-110 transition-transform">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><h3 class="text-white text-xl font-bold mb-3">${ssrInterpolate(feature.title)}</h3><p class="text-white/70 leading-relaxed mb-4">${ssrInterpolate(feature.description)}</p><ul class="mt-4 space-y-2"><!--[-->`);
        ssrRenderList(feature.items, (item) => {
          _push(`<li class="text-sm text-white/60 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#FEE337]"></span> ${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-24 bg-black relative"><div class="container mx-auto px-4"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"> How <span class="text-[#FEE337]">Yuktrix Works</span></h2><p class="text-xl text-white/70 max-w-3xl mx-auto"> Our AI engine processes market data, learns your behavior, and delivers personalized insights in three simple steps. </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(howItWorks, (step, index) => {
        _push(`<div class="text-center relative" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 150)}><div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FEE337] to-[#FEE337]/60 flex items-center justify-center text-black font-bold text-2xl shadow-lg shadow-[#FEE337]/20">${ssrInterpolate(index + 1)}</div><h3 class="text-white text-xl font-bold mb-4">${ssrInterpolate(step.title)}</h3><p class="text-white/70 leading-relaxed">${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-24 bg-black relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-[#FEE337]/5 to-transparent transform -skew-y-3"></div><div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"><div class="lg:col-span-2 order-2 lg:order-1" data-aos="fade-right"><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(userPersonas, (persona, index) => {
        _push(`<div class="aspect-square p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#FEE337]/50 hover:bg-[#FEE337]/5 transition-all group flex flex-col items-center justify-center text-center"><div class="w-12 h-12 rounded-full bg-[#FEE337]/10 flex items-center justify-center text-[#FEE337] mb-3 group-hover:scale-110 transition-transform">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(persona.icon), { class: "w-6 h-6" }, null), _parent);
        _push(`</div><h3 class="text-white font-bold text-sm leading-tight">${ssrInterpolate(persona.title)}</h3></div>`);
      });
      _push(`<!--]--></div><p class="text-center text-xs text-[#FEE337] uppercase tracking-wider font-bold mt-4"> Yuktrix makes it intelligent </p></div><div class="lg:col-span-3 order-1 lg:order-2 flex flex-col gap-8" data-aos="fade-right"><div><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight text-white"> ✨ A Smarter Way to <br><span class="text-[#FEE337]">Build Wealth</span></h2><div class="space-y-5 text-base text-white/70 leading-relaxed"><p> Most apps help you buy stocks. Most tools help you track charts. Most brokers help you execute trades. </p><blockquote class="text-white text-lg font-medium border-l-4 border-[#FEE337] pl-4 py-2 bg-[#FEE337]/5 rounded-r"> Yuktrix helps you understand. And understanding is everything. </blockquote><p> Our system learns with you, adapts to you, and gives insights tailored to your unique style. Data gathers. AI interprets. You decide. </p></div></div><div class="relative mt-4 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#FEE337]/10 group"><div class="absolute inset-0 bg-[#FEE337]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div><img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" alt="Yuktrix Dashboard Interface" class="w-full md:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"><div class="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-20 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span><span class="text-xs font-mono text-white">AI Analysis Active</span></div></div></div></div></div></section><section class="py-24 bg-black relative"><div class="container mx-auto px-4"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"> Choose your <span class="text-[#FEE337]">intelligence level</span></h2><p class="text-xl text-white/70 max-w-3xl mx-auto"> Start free, upgrade as you grow. All plans include core AI insights. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(pricingPlans, (plan, index) => {
        _push(`<div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FEE337]/30 transition-all relative" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}>`);
        if (plan.popular) {
          _push(`<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FEE337] text-black text-xs font-bold rounded-full"> POPULAR </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="text-white text-2xl font-bold mb-2">${ssrInterpolate(plan.name)}</h3><div class="mb-6"><span class="text-4xl font-bold text-white">${ssrInterpolate(plan.price)}</span><span class="text-white/60">/month</span></div><p class="text-white/70 mb-6">${ssrInterpolate(plan.description)}</p><button class="w-full bg-[#FEE337] text-black py-3 rounded-full font-bold hover:bg-white transition-all mb-6">${ssrInterpolate(plan.button)}</button><ul class="space-y-3"><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<li class="text-white/80 flex items-start gap-2"><svg class="w-5 h-5 text-[#FEE337] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-24 bg-black relative"><div class="absolute inset-0 bg-[url(&#39;https://grainy-gradients.vercel.app/noise.svg&#39;)] opacity-10"></div><div class="container mx-auto px-4 relative z-10"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"> Trusted by <span class="text-[#FEE337]">smart investors</span></h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FEE337]/30 transition-all" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#FEE337] to-[#FEE337]/60 flex items-center justify-center text-black font-bold">${ssrInterpolate(testimonial.initials)}</div><div><h4 class="text-white font-bold">${ssrInterpolate(testimonial.name)}</h4><p class="text-white/60 text-sm">${ssrInterpolate(testimonial.role)}</p></div></div><p class="text-white/70 leading-relaxed italic"> &quot;${ssrInterpolate(testimonial.quote)}&quot; </p><div class="flex gap-1 mt-4"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg class="w-5 h-5 text-[#FEE337]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-24 bg-black relative"><div class="container mx-auto px-4"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-white"> Frequently Asked <span class="text-[#FEE337]">Questions</span></h2></div><div class="max-w-4xl mx-auto space-y-4"><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#FEE337]/30 transition-all" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 50)}><button class="w-full p-6 text-left flex items-center justify-between text-white hover:bg-white/5 transition-all"><span class="font-medium">${ssrInterpolate(faq.question)}</span><svg class="${ssrRenderClass([{ "rotate-180": activeFAQ.value === index }, "w-6 h-6 text-[#FEE337] transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="px-4 pb-6 text-white/70 leading-relaxed" style="${ssrRenderStyle(activeFAQ.value === index ? null : { display: "none" })}">${ssrInterpolate(faq.answer)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="relative py-32 bg-black text-center border-t border-white/10 overflow-hidden"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="AI Technology Background" class="w-full h-full object-cover opacity-40"><div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEE337]/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse"></div><div class="container mx-auto px-4 relative z-10" data-aos="zoom-in"><div class="mb-8 flex justify-center"><span class="px-4 py-1.5 rounded-full border border-[#FEE337]/30 bg-[#FEE337]/10 text-[#FEE337] text-sm font-semibold tracking-wide uppercase backdrop-blur-sm"> Ready to upgrade? </span></div><h3 class="text-4xl md:text-6xl font-display font-bold max-w-5xl mx-auto leading-tight mb-8 text-white drop-shadow-lg"> Whatever your style — <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE337] to-white">Yuktrix makes it intelligent.</span></h3><p class="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"> Join thousands of investors and traders who have upgraded to India&#39;s first <strong class="text-white font-medium">AI Financial Operating System.</strong></p><div class="flex flex-col sm:flex-row items-center justify-center gap-6"><button class="group relative bg-[#FEE337] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden"><span class="relative z-10">Start Your Free Trial</span><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div></button><button class="flex items-center gap-2 text-white/90 hover:text-[#FEE337] font-medium border-b border-transparent hover:border-[#FEE337] transition-all pb-1 group"> View Pricing Plans <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></button></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BoLaJcXy.js.map
