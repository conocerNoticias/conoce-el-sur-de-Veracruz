import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro/server_d07ed82c.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/galeria","type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/postslayout","type":"page","pattern":"^\\/posts\\/PostsLayout\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"PostsLayout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/PostsLayout.astro","pathname":"/posts/PostsLayout","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_1","type":"page","pattern":"^\\/posts\\/post_1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_1.md","pathname":"/posts/post_1","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_2","type":"page","pattern":"^\\/posts\\/post_2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_2.md","pathname":"/posts/post_2","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_3","type":"page","pattern":"^\\/posts\\/post_3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_3.md","pathname":"/posts/post_3","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_4","type":"page","pattern":"^\\/posts\\/post_4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_4.md","pathname":"/posts/post_4","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_5","type":"page","pattern":"^\\/posts\\/post_5\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_5.md","pathname":"/posts/post_5","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.31813368.css"}],"routeData":{"route":"/posts/post_6","type":"page","pattern":"^\\/posts\\/post_6\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_6.md","pathname":"/posts/post_6","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/PostsLayout.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_1.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_2.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_3.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_4.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_5.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_6.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/galeria.astro":"chunks/pages/galeria_081eb9a1.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_44f8ffc2.mjs","/src/pages/index.astro":"chunks/pages/index_61cf6165.mjs","/src/pages/posts/post_1.md":"chunks/pages/post_1_e6ea89dc.mjs","/src/pages/posts/post_2.md":"chunks/pages/post_2_4cbc35d9.mjs","/src/pages/posts/post_3.md":"chunks/pages/post_3_4b082b85.mjs","/src/pages/posts/post_4.md":"chunks/pages/post_4_ed3eb7c4.mjs","/src/pages/posts/post_5.md":"chunks/pages/post_5_dcfddfa5.mjs","/src/pages/posts/post_6.md":"chunks/pages/post_6_59ffabdf.mjs","\u0000@astrojs-manifest":"manifest_52c36578.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_9397d4dd.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a43a6ad4.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"chunks/galeria_8507cb82.mjs","\u0000@astro-page:src/pages/posts/PostsLayout@_@astro":"chunks/PostsLayout_c70f46cb.mjs","\u0000@astro-page:src/pages/posts/post_1@_@md":"chunks/post_1_d771142d.mjs","\u0000@astro-page:src/pages/posts/post_2@_@md":"chunks/post_2_3d5e60cb.mjs","\u0000@astro-page:src/pages/posts/post_3@_@md":"chunks/post_3_c2a6a2b7.mjs","\u0000@astro-page:src/pages/posts/post_4@_@md":"chunks/post_4_9d73ec24.mjs","\u0000@astro-page:src/pages/posts/post_5@_@md":"chunks/post_5_da28a2b8.mjs","\u0000@astro-page:src/pages/posts/post_6@_@md":"chunks/post_6_d619e24f.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/galeria.31813368.css","/favicon.svg"]});

export { manifest };
