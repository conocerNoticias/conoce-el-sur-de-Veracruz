/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_7f5373cd.mjs';
import 'clsx';
import { f as $$PostsLayout } from './PostsLayout_20ed6e85.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🤼Todo un ejemplo bro🥋","imagen":"https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/401502585_224589217314365_208272078873219149_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmZjY8bKkkV0bogI9OQcnLo1TxkHOGQxmjVPGQc4ZDGYhAAMzMcEMZqc7VkN75Tjgb-LaS0tq1Ciy1b5izCxY1&_nc_ohc=z9cELVXkPvgAX9ZkmDs&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfBVw-YUtOhFN6HBSlyqlHkrA0rrQjRcsPYLZJRlRNZRVQ&oe=6559F045","descripcion":"👏🏼 🥇 Orgullo Minatitleco, joven gana medalla de oro en campeonato panamericano.  .- Gilberto Moreno puso en alto a #Minatitlán y a #México al ganar medalla de oro en la categoría Jiu Jitsu en “Campeonato Panamericano” en Argentina.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid0cUE8a1mGo42wFp1kcqQwBxK5PEQtcurpTYqBpCWAqMTnrBcKRhHo27gtZwsWAxAgl&id=100092898635950","redireccion":"/posts/post_5"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/posts/post_5.md";
				const url = "/posts/post_5";
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
