/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_7f5373cd.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_20ed6e85.mjs';

const html = "";

				const frontmatter = {"layout":"../../layouts/PostsLayout.astro","etiqueta":"26 de Noviembre del 2023","titulo":"🚧CIERRE DE CIRCULACIÓN 🚧 🚛","descripcion":"Aut. Acayucan - Cosoleacaque, km 1, dirección Acayucan. Cierre de circulación por atención a incidente (tracto camión siniestrado). #Minatitlan #Cosoleacaque #Acayucan","imagen":"/404658806_262028086867233_4599410566007550730_n.jpg","link":"https://www.facebook.com/TlacuacheNoticias/posts/262027213533987?ref=embed_post","redireccion":"/posts/post_1"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_1.md";
				const url = "/posts/post_1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
