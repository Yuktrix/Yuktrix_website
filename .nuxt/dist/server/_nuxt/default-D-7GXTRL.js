import { _ as __nuxt_component_0 } from "./nuxt-link-D8twAAnL.js";
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext, h, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRoute } from "vue-router";
import { u as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import "D:/yuktrix/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "D:/yuktrix/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "D:/yuktrix/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Tools", path: "/tools" },
      { name: "Blog", path: "/blog" }
      // { name: "Contact", path: "/contact" },
    ];
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const $route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed w-full top-0 z-50 transition-all duration-300",
          mobileMenuOpen.value ? "bg-yuktrix-black/96 backdrop-blur-xl border-b border-white/10" : isScrolled.value ? "bg-yuktrix-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        ]
      }, _attrs))}><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="md:w-[102px] md:h-[102px] w-[72px] h-[72px] rounded-full flex items-center justify-center overflow-hidden bg-black border border-[#FEE337] shadow-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Yuktrix Logo" class="w-full h-full bg-white object-contain"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "md:w-[102px] md:h-[102px] w-[72px] h-[72px] rounded-full flex items-center justify-center overflow-hidden bg-black border border-[#FEE337] shadow-lg" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Yuktrix Logo",
                  class: "w-full h-full bg-white object-contain",
                  onError: ($event) => $event.target.style.display = "none"
                }, null, 40, ["onError"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center space-x-8"><nav class="hidden md:flex gap-7 items-center"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.path,
          to: link.path,
          class: "text-base font-medium text-gray-300 hover:text-[#FEE337] transition-colors relative px-1 py-0.5",
          "active-class": "text-[#FEE337]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)} `);
              if (unref($route).path === link.path) {
                _push2(`<span class="block mx-auto mt-1 h-1 w-5 rounded bg-[#FEE337]"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(link.name) + " ", 1),
                unref($route).path === link.path ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "block mx-auto mt-1 h-1 w-5 rounded bg-[#FEE337]"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><button class="bg-[#FEE337] text-black px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#FEE337]Hover transition-all hover:scale-105 whitespace-nowrap shadow-md hidden md:block"> Get Early Access </button><button class="md:hidden text-white hover:text-[#FEE337] transition-colors p-2"><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden absolute w-full bg-white border-t border-white/10"><nav class="flex flex-col p-8 gap-4"><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.path,
            to: link.path,
            class: "text-black text-lg font-medium hover:text-[#FEE337] transition-colors py-2",
            "active-class": "text-[#FEE337]",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><button class="bg-[#FEE337] text-black px-4 py-3 rounded-full font-bold text-base hover:bg-[#FEE337]Hover transition-all w-full mt-2 shadow"> Get Early Access </button></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap } = useNuxtApp();
    ref(null);
    const footerLinks = [
      {
        title: "Product",
        links: ["Features", "Pricing", "Roadmap", "Changelog", "Status"]
      },
      {
        title: "Resources",
        links: [
          "Documentation",
          "API Reference",
          "Blog",
          "Help Center",
          "Community"
        ]
      },
      {
        title: "Company",
        links: ["About Us", "Careers", "Press", "Contact", "Legal"]
      }
    ];
    const TwitterIcon = h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
      [
        h("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
      ]
    );
    const LinkedInIcon = h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
      [
        h("path", {
          d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
        })
      ]
    );
    const DiscordIcon = h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
      [
        h("path", {
          d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037 13.459 13.459 0 00-.59 1.227 18.356 18.356 0 00-8.726 0 13.62 13.62 0 00-.592-1.227.074.074 0 00-.08-.037 19.736 19.736 0 00-4.885 1.515.071.071 0 00-.035.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        })
      ]
    );
    const GitHubIcon = h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", class: "w-5 h-5" },
      [
        h("path", {
          d: "M12 2C6.475 2 2 6.475 2 12a10 10 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.362 1.087 2.937.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
        })
      ]
    );
    const socialLinks = [
      { name: "Twitter", icon: TwitterIcon },
      { name: "LinkedIn", icon: LinkedInIcon },
      { name: "Discord", icon: DiscordIcon },
      { name: "GitHub", icon: GitHubIcon }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black border-t border-white/10 py-16" }, _attrs))}><div class="container mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"><div class="lg:col-span-2"><div class="flex items-center gap-3 mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="md:w-[102px] md:h-[102px] w-[72px] h-[72px] rounded-full flex items-center justify-center overflow-hidden bg-black border border-[#FEE337] shadow-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Yuktrix Logo" class="w-full h-full bg-white object-contain"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "md:w-[102px] md:h-[102px] w-[72px] h-[72px] rounded-full flex items-center justify-center overflow-hidden bg-black border border-[#FEE337] shadow-lg" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Yuktrix Logo",
                  class: "w-full h-full bg-white object-contain",
                  onError: ($event) => $event.target.style.display = "none"
                }, null, 40, ["onError"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-white/70 mb-6 max-w-sm"> India&#39;s first AI Financial Operating System. Powered by data, guided by AI, automated for speed. </p><div class="flex gap-4"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FEE337] hover:border-[#FEE337] transition-all">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.icon), { class: "w-5 h-5" }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><!--[-->`);
      ssrRenderList(footerLinks, (section) => {
        _push(`<div><h4 class="text-white font-bold mb-4">${ssrInterpolate(section.title)}</h4><ul class="space-y-2"><!--[-->`);
        ssrRenderList(section.links, (link) => {
          _push(`<li><a href="#" class="text-white/70 hover:text-[#FEE337] transition-all text-sm">${ssrInterpolate(link)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-white/60 text-sm"> © 2025 Yuktrix. All rights reserved. </p><div class="flex gap-6 text-sm"><a href="#" class="text-white/60 hover:text-[#FEE337] transition-all">Privacy Policy</a><a href="#" class="text-white/60 hover:text-[#FEE337] transition-all">Terms of Service</a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$2;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-D-7GXTRL.js.map
