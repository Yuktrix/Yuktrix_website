import { _ as __nuxt_component_0 } from './nuxt-link-D8twAAnL.mjs';
import { computed, mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const { getPostBySlug, getAllPosts } = useBlogPosts();
    const post = computed(() => getPostBySlug(slug));
    const relatedPosts = computed(() => {
      return getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (post.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><section class="relative pt-32 overflow-hidden"><img${ssrRenderAttr("src", post.value.heroImage)}${ssrRenderAttr("alt", post.value.title)} class="absolute inset-0 w-full h-full object-cover opacity-20 z-0"><div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black z-0"></div><div class="container mx-auto px-4 relative z-10 max-w-[1200px]">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center gap-2 text-white/70 hover:text-[#FEE337] transition-colors mb-8 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg> Back to Blog `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 group-hover:-translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createTextVNode(" Back to Blog ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-3 mb-6 text-sm"><span class="px-3 py-1 bg-[#FEE337] text-black text-xs font-bold rounded-full uppercase">${ssrInterpolate(post.value.category)}</span><span class="text-white/60">${ssrInterpolate(post.value.date)}</span><span class="text-white/60">\u2022</span><span class="text-white/60">${ssrInterpolate(post.value.readTime)}</span></div><h1 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">${ssrInterpolate(post.value.title)}</h1><p class="text-xl text-white/70 mb-8 leading-relaxed">${ssrInterpolate(post.value.excerpt)}</p><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#FEE337] to-[#FEE337]/60 flex items-center justify-center text-black font-bold text-lg">${ssrInterpolate(post.value.author.initials)}</div><div><p class="text-white font-bold">${ssrInterpolate(post.value.author.name)}</p><p class="text-white/60 text-sm">${ssrInterpolate(post.value.author.role)}</p></div></div></div></section><article class="py-16 bg-black"><div class="container mx-auto px-4 max-w-[1200px]"><div class="mb-12 rounded-2xl overflow-hidden border border-white/10" data-aos="zoom-in"><img${ssrRenderAttr("src", post.value.featuredImage)}${ssrRenderAttr("alt", post.value.title)} class="w-full h-auto"></div><div class="prose prose-invert prose-lg max-w-[1200px]"><!--[-->`);
        ssrRenderList(post.value.content, (section, index) => {
          _push(`<div${ssrRenderAttr("data-aos", "fade-up")}${ssrRenderAttr("data-aos-delay", index * 50)}>`);
          if (section.type === "paragraph") {
            _push(`<p class="text-white/80 text-lg leading-relaxed mb-6">${ssrInterpolate(section.text)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (section.type === "heading") {
            _push(`<h2 class="text-3xl font-display font-bold text-white mt-12 mb-6">${ssrInterpolate(section.text)}</h2>`);
          } else {
            _push(`<!---->`);
          }
          if (section.type === "list") {
            _push(`<ul class="space-y-3 mb-8 text-white/80"><!--[-->`);
            ssrRenderList(section.items, (item, i) => {
              _push(`<li class="flex items-start gap-3"><span class="text-[#FEE337] mt-1">\u2022</span><span>${ssrInterpolate(item)}</span></li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          if (section.type === "callout") {
            _push(`<div class="p-8 bg-white/5 border border-[#FEE337]/20 rounded-xl my-8"><h3 class="text-2xl font-bold text-[#FEE337] mb-4">${ssrInterpolate(section.title)}</h3><p class="text-white/80 text-lg leading-relaxed">${ssrInterpolate(section.text)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (section.type === "image") {
            _push(`<div class="my-10 rounded-xl overflow-hidden border border-white/10"><img${ssrRenderAttr("src", section.url)}${ssrRenderAttr("alt", section.caption)} class="w-full h-auto">`);
            if (section.caption) {
              _push(`<p class="text-center text-white/50 text-sm mt-2">${ssrInterpolate(section.caption)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="p-8 bg-gradient-to-br from-[#FEE337]/10 to-transparent border border-[#FEE337]/30 rounded-2xl my-12" data-aos="zoom-in"><h3 class="text-2xl font-bold text-white mb-4"> Ready to experience AI-powered research? </h3><p class="text-white/70 mb-6"> Join thousands of Indian investors who&#39;ve upgraded their research workflow with Yuktrix. Start free today. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-block bg-[#FEE337] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Try Yuktrix Free `);
            } else {
              return [
                createTextVNode(" Try Yuktrix Free ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></article><section class="py-20 bg-black border-t border-white/10"><div class="container mx-auto px-4"><h2 class="text-3xl font-display font-bold text-white mb-12 text-center" data-aos="fade-up"> Continue Reading </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto"><!--[-->`);
        ssrRenderList(relatedPosts.value, (relatedPost) => {
          _push(`<article class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#FEE337]/30 transition-all group" data-aos="fade-up"><div class="relative h-48 overflow-hidden"><img${ssrRenderAttr("src", relatedPost.image)}${ssrRenderAttr("alt", relatedPost.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"></div><div class="p-6"><h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#FEE337] transition-colors line-clamp-2">${ssrInterpolate(relatedPost.title)}</h3><p class="text-white/60 text-sm mb-4 line-clamp-2">${ssrInterpolate(relatedPost.excerpt)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${relatedPost.slug}`,
            class: "inline-flex items-center gap-2 text-[#FEE337] text-sm font-bold"
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
        _push(`<!--]--></div></div></section></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black flex items-center justify-center" }, _attrs))}><div class="text-center"><h1 class="text-4xl font-bold text-white mb-4">Post Not Found</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "text-[#FEE337] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Blog`);
            } else {
              return [
                createTextVNode("Back to Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BV8CXeSb.mjs.map
