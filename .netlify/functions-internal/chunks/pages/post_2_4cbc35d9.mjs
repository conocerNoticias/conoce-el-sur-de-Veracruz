/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_e4291359.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"Al bote🚓","imagen":"https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/401499955_223978987375388_7598998042059241658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuLGaKaMJSrHe-JM-eyrimV2PZXZjmzAZXY9ldmObMBvIwXaLGTThSFAuLsij8GDx44cuFWDVLJ5CHn48qsRjb&_nc_ohc=ev_SYCJ-LAgAX8-Pglo&_nc_oc=AQk5L25Yd93Qia3RTaUpYGZPyTLpCMUA8UOKAgtMoVgv_DhtxwvkWQ6jbl7hKOD65uY&_nc_ht=scontent.fmid1-4.fna&oh=00_AfBkBwQBPsblO4_T0s8xVky3Zl-NfM1faU9d8Bs_Ateq9Q&oe=65588AB6","descripcion":"🔴Vinculado a proceso como presunto responsable del delito de homicidio doloso calificado Coatzacoalcos, Ver., 13 de noviembre de 2023.- La Fiscalía Regional Coatzacoalcos obtuvo vinculación a proceso en contra de Josué “N” como presunto responsable del delito de homicidio doloso calificado cometido en agravio de la víctima L.A.D.L.S.R. El Juez dictó como medida cautelar prisión preventiva justificada por un año, dentro del proceso penal 922/2023.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid024cAwr1bmer2KhvwWgFUtQUcHxkQ49rkJP2tF7CEgY37vEtrGgprzGvrcjdX1v7mfl&id=100092898635950","redireccion":"/posts/post_2"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_2.md";
				const url = "/posts/post_2";
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
