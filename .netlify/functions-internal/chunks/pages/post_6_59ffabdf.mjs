/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_e4291359.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🍋Un limón y pal jale","imagen":"https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/401838343_224482697325017_2930123087335812444_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEEvSZVH3ag4n060dfPTbUmMed6LnoVbxwx53ouehVvHMjVaDN2gzLQ0okBegNL5Ov1rv-xU8jpE6lXMHM175MJ&_nc_ohc=OwfpfyGe91UAX8h4949&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfBKzvTnf8E77NsPgq2tIZJ5eHRu3Y_fG0iy-_Crk2JMpw&oe=655966DC","descripcion":" No habrá agua en la ciudad Serranos nuevamente cierran la presa Yuribia  Coatzacoalcos Ver. .- Tras el bloqueo que mantuvieron ejidatarios de Tatahuicapan en la presa Yuribia presuntamente liderados por el Presidente municipal Eusebio González, ha trascendido que se encuentran a punto de cerrar las válvulas del suministro para dejar al sur de Veracruz sin agua potable. Dicho movimiento derivó de exigir radicalmente al ayuntamiento de Coatzacoalcos el desarrollo de obras en la ciudad serrana, entre los que destacan tramos carreteros. Este bloqueo afectará a más de medio millón de usuarios entre los municipios de Coatzacoalcos, Minatitlán y Cosoleacaque, los cuales ya habían llegado a un acuerdo este año con los manifestantes para omitir estos movimientos, quienes reprueban el supuesto incumplimiento.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid02PNZUK2vodFWDkK5PdDyRue5bWJgYdrCwiUqGUV4CqWE9PXeCn2YrJSq7VW8WJFF7l&id=100092898635950","redireccion":"/posts/post_6"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_6.md";
				const url = "/posts/post_6";
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
