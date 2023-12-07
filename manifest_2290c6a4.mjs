import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro/server_7f5373cd.mjs';
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

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/galeria","type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/postslayout","type":"page","pattern":"^\\/posts\\/PostsLayout\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"PostsLayout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/PostsLayout.astro","pathname":"/posts/PostsLayout","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_1","type":"page","pattern":"^\\/posts\\/post_1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_1.md","pathname":"/posts/post_1","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_2","type":"page","pattern":"^\\/posts\\/post_2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_2.md","pathname":"/posts/post_2","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_3","type":"page","pattern":"^\\/posts\\/post_3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_3.md","pathname":"/posts/post_3","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_4","type":"page","pattern":"^\\/posts\\/post_4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_4.md","pathname":"/posts/post_4","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_5","type":"page","pattern":"^\\/posts\\/post_5\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_5.md","pathname":"/posts/post_5","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/galeria.50475ce8.css"}],"routeData":{"route":"/posts/post_6","type":"page","pattern":"^\\/posts\\/post_6\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post_6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post_6.md","pathname":"/posts/post_6","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://conocerNoticias.github.io","base":"/","compressHTML":true,"componentMetadata":[["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/PostsLayout.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_5.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_6.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_1.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_2.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_3.md",{"propagation":"none","containsHead":true}],["C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_4.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/posts/PostsLayout@_@astro":"pages/posts/postslayout.astro.mjs","\u0000@astro-page:src/pages/posts/post_1@_@md":"pages/posts/post_1.astro.mjs","\u0000@astro-page:src/pages/posts/post_2@_@md":"pages/posts/post_2.astro.mjs","\u0000@astro-page:src/pages/posts/post_3@_@md":"pages/posts/post_3.astro.mjs","\u0000@astro-page:src/pages/posts/post_4@_@md":"pages/posts/post_4.astro.mjs","\u0000@astro-page:src/pages/posts/post_5@_@md":"pages/posts/post_5.astro.mjs","\u0000@astro-page:src/pages/posts/post_6@_@md":"pages/posts/post_6.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/galeria.astro":"chunks/pages/galeria_491c015b.mjs","/src/pages/index.astro":"chunks/pages/index_9c90820e.mjs","/src/pages/posts/post_1.md":"chunks/pages/post_1_bfe64727.mjs","/src/pages/posts/post_2.md":"chunks/pages/post_2_ec99e661.mjs","/src/pages/posts/post_3.md":"chunks/pages/post_3_7b4864a4.mjs","/src/pages/posts/post_4.md":"chunks/pages/post_4_f10ecade.mjs","/src/pages/posts/post_5.md":"chunks/pages/post_5_bed7763a.mjs","/src/pages/posts/post_6.md":"chunks/pages/post_6_817297f0.mjs","\u0000@astrojs-manifest":"manifest_2290c6a4.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e70cafd2.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
