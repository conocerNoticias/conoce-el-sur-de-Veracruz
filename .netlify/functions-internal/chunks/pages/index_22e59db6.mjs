/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as addAttribute, f as renderComponent } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, d as $$Menu, b as $$Footer, c as $$Layout } from './PostsLayout_776749b9.mjs';

const $$Astro$4 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg mb-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Title.astro", void 0);

const $$Astro$3 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Posts;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Posts.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { etiqueta = "", titulo = "", descripcion = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"><a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"><svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"></path></svg>${etiqueta}</a><h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">${titulo}</h2><p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">${descripcion}</p><a${addAttribute(link, "href")} class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Leer mas
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Jumbotron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Jumbotron;
  const { titulo = "", descripcion = "", link = "", imagen: Imagen = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["bg-center bg-no-repeat bg-gray-700 bg-blend-multiply rounded-lg", Imagen], "class:list")}><div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">${titulo}</h1><p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">${descripcion}</p><div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a${addAttribute(link, "href")} target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Visita facebook
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div></section>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Jumbotron.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const imagen = "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/350975952_514236867474399_3146924486109421848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi34o-gocXgFSLl6nWts7HKcCXB6pDowUpwJcHqkOjBTY3PY_GgStCShzt2_SLQsPt0b34_wP9Agioj0-2XfLj&_nc_ohc=0lCe9bQHQWIAX9-mE6m&_nc_ht=scontent.fmid1-3.fna&oh=00_AfDHHwzLPnoAiEBgFguo6oQom62zuFR8c_QFYCnoJfhv8A&oe=6557D9E8", link = "https://www.facebook.com/profile.php?id=100092898635950", nombre = "Conoce el sur de veracruz";
  const articulos = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post_1.md": () => import('./post_1_67e96268.mjs'),"./posts/post_2.md": () => import('./post_2_58910a51.mjs'),"./posts/post_3.md": () => import('./post_3_85d7a247.mjs'),"./posts/post_4.md": () => import('./post_4_b6507fea.mjs')}), () => "./posts/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": imagen, "link": "/", "nombre": nombre }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Title", $$Title, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Jumbotron", $$Jumbotron, { "titulo": "Veracruz ", "descripcion": "Yo nac\xED con la luna de plata Nac\xED con alma de pirata He nacido rumbero y jarocho Trovador de veras Y me fui lejos de veracruz", "link": "https://www.facebook.com/profile.php?id=100092898635950", "imagen": "bg-[url('https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/350946429_657243876222210_4503630071008048962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSP-N_A8UHZlPRJpEwkuIEVzy2huwnM8JXPLaG7CczwvPFcfHYunb9o1vEqlElXNAmHWsEBEimYNaHUOaBT8h4&_nc_ohc=iLN1G4IHPMAAX8Q8S-1&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfBXCqvutz-C2-tWRxJpfs4vJ8f_9G2CaJpWwPfSWXYImw&oe=65597F7E')]" })}` })}${renderComponent($$result3, "Posts", $$Posts, {}, { "default": ($$result4) => renderTemplate`${articulos.toReversed().map((x) => renderTemplate`${renderComponent($$result4, "Card", $$Card, { "etiqueta": x.frontmatter.etiqueta, "titulo": x.frontmatter.titulo, "descripcion": x.frontmatter.descripcion, "link": x.frontmatter.redireccion })}`)}` })}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": link, "nombre": nombre })}` })}`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro", void 0);

const $$file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
