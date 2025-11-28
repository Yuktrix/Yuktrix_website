import { _ as __nuxt_component_0 } from './nuxt-link-D8twAAnL.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useBlogPosts } from './useBlogPosts-CFLDVSI_.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getAllPosts } = useBlogPosts();
    const selectedCategory = ref("All");
    const categories = [
      "All",
      "AI Investing",
      "Trading Strategies",
      "Market Analysis",
      "Portfolio Management",
      "Wealth Psychology",
      "Beginner's Guide"
    ];
    const blogPosts = computed(() => {
      const allPosts = getAllPosts();
      if (selectedCategory.value === "All") {
        return allPosts;
      }
      return allPosts.filter((post) => post.category === selectedCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><section class="relative h-screen flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Blog Background" class="absolute inset-0 w-full h-full object-cover opacity-25 z-0"><div class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div><div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FEE337]/10 rounded-full blur-[120px] animate-pulse z-0"></div><div class="container mx-auto px-4 relative z-10 text-center pt-20"><span class="inline-block py-2 px-5 rounded-full bg-white/5 border border-[#FEE337]/30 text-[#FEE337] text-xs font-bold tracking-widest mb-8 backdrop-blur-sm uppercase" data-aos="fade-up"> The Yuktrix Journal </span><h1 class="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight" data-aos="zoom-in"> Daily Intelligence for <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE337] to-white">Smarter Wealth</span></h1><p class="text-xl text-white/70 max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100"> Designed for busy Indians who want smarter money habits. Deep dives, frameworks, and actionable insights for investors and traders. </p><div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([
          selectedCategory.value === category ? "bg-[#FEE337] text-black" : "bg-white/5 text-gray-300 hover:bg-white/10",
          "px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 transition-all"
        ])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 px-4 bg-black relative"><div class="container mx-auto"><div class="text-center mb-12" data-aos="fade-up"><h2 class="text-3xl font-display font-bold text-white mb-2"> Featured This Week </h2><p class="text-white/60">Must-read insights from our editors</p></div><div class="max-w-[1400px] mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#FEE337]/30 transition-all group" data-aos="zoom-in"><div class="grid grid-cols-1 lg:grid-cols-2 gap-0"><div class="relative h-80 lg:h-auto overflow-hidden"><img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Featured Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"><div class="absolute top-4 left-4 px-3 py-1 bg-[#FEE337] text-black text-xs font-bold rounded-full"> FEATURED </div></div><div class="p-10 flex flex-col justify-center"><div class="flex items-center gap-3 mb-4 text-sm text-white/60"><span>AI Investing</span><span>\u2022</span><span>8 min read</span><span>\u2022</span><span>Nov 24, 2025</span></div><h3 class="text-3xl font-display font-bold text-white mb-4 group-hover:text-[#FEE337] transition-colors"> How AI is Revolutionizing Stock Research in India </h3><p class="text-white/70 mb-6 leading-relaxed"> Discover how artificial intelligence is democratizing institutional-grade research for retail investors. Learn the frameworks top traders are using to leverage AI for better returns. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog/ai-revolutionizing-stock-research",
        class: "inline-flex items-center gap-2 text-[#FEE337] font-bold hover:gap-3 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read Full Article <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Read Full Article "),
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="py-20 bg-black relative"><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(blogPosts.value, (post, index) => {
        _push(`<article class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#FEE337]/30 transition-all group" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="relative h-48 overflow-hidden"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"><div class="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-[#FEE337] text-xs font-bold rounded-full">${ssrInterpolate(post.category)}</div></div><div class="p-6"><div class="flex items-center gap-2 mb-3 text-xs text-white/50"><span>${ssrInterpolate(post.date)}</span><span>\u2022</span><span>${ssrInterpolate(post.readTime)}</span></div><h3 class="text-xl font-bold text-white mb-3 group-hover:text-[#FEE337] transition-colors line-clamp-2">${ssrInterpolate(post.title)}</h3><p class="text-white/60 text-sm mb-4 line-clamp-3">${ssrInterpolate(post.excerpt)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${post.slug}`,
          class: "inline-flex items-center gap-2 text-[#FEE337] text-sm font-bold hover:gap-3 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Read More "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div><div class="text-center mt-16" data-aos="fade-up"><button class="px-8 py-4 rounded-full border border-white/20 hover:border-[#FEE337] hover:text-[#FEE337] text-white transition-all font-bold bg-black/20 backdrop-blur-sm"> Load More Articles </button></div></div></section><section class="py-24 bg-black relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-[#FEE337]/10 to-transparent"></div><div class="container mx-auto px-4 relative z-10"><div class="max-w-3xl mx-auto text-center p-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm" data-aos="zoom-in"><h2 class="text-3xl md:text-4xl font-display font-bold mb-4 text-white"> Never Miss an Insight </h2><p class="text-white/70 mb-8 text-lg"> Get weekly market intelligence, AI tips, and trading strategies delivered to your inbox every Monday. </p><div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#FEE337] focus:outline-none"><button class="bg-[#FEE337] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all whitespace-nowrap"> Subscribe Free </button></div><p class="text-white/50 text-xs mt-4"> Join 10,000+ investors. Unsubscribe anytime. </p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CwS1857q.mjs.map
