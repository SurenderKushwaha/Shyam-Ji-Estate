import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as BLOG_POSTS } from "./blog-DdhXeNK9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-D-AAqZyv.js
var $$splitComponentImporter = () => import("./blog._slug-BxyFH4xa.mjs");
var Route = createFileRoute("/blog/$slug")({
	head: ({ params }) => {
		const post = BLOG_POSTS.find((p) => p.slug === params.slug);
		if (!post) return { meta: [] };
		return {
			meta: [
				{ title: post.seoTitle },
				{
					name: "description",
					content: post.seoDescription
				},
				{
					property: "og:title",
					content: post.seoTitle
				},
				{
					property: "og:description",
					content: post.seoDescription
				},
				{
					property: "og:url",
					content: `/blog/${post.slug}`
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${post.slug}`
			}]
		};
	},
	loader: ({ params }) => {
		const post = BLOG_POSTS.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return post;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
