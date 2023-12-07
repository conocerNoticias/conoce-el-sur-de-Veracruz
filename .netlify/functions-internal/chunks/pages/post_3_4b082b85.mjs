/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_e4291359.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🏗️Benito se va a poner guapo🗽","imagen":"https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/401848945_224558873984066_6163828149503638304_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGs7Tc-yJphf7YAhe3Z63Ko0Q7kqjPU2sfRDuSqM9TaxxQRpSOCEiI0cHfUMh4Zsd-RJrDOvUAIS4QktqfyExPz&_nc_ohc=zCJ-rMV-Xg4AX-oavMS&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfDhxP8MlwR5U4QHoTyFwj3d3FQ970wdGvTjKde4ADSSaQ&oe=65589EC0","descripcion":"PARQUE REFORMA TENDRÁ UNA NUEVA IMAGEN! Autoridades municipales encabezadas por la Dra. Carmen Medel Palma darán el banderazo de arranque de la rehabilitación del parque Reforma mejor conocido como Los Dos Leones. Ya le hacia falta, o ¿usted que opina?","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid0MuGXoyNyzrJbx5y6GiA2mG3quj9xU6DLMH8xMocMQCSFAdou33567tJ6r1kNZeYYl&id=100092898635950","redireccion":"/posts/post_3"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_3.md";
				const url = "/posts/post_3";
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
