import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as properties } from "./properties-B_DAXTJD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._id-C5lBbc6t.js
var $$splitComponentImporter = () => import("./properties._id-CEDMdQzc.mjs");
var Route = createFileRoute("/properties/$id")({
	head: ({ params }) => {
		const property = properties.find((p) => p.id === params.id);
		return { meta: [
			{ title: `${property?.title || "Property Details"} | Shree Shyam Ji Estate` },
			{
				name: "description",
				content: property?.description || "Detailed overview of the property."
			},
			{
				property: "og:title",
				content: `${property?.title || "Property Details"} | Shree Shyam Ji Estate`
			},
			{
				property: "og:description",
				content: property?.description || "Detailed overview of the property."
			},
			{
				property: "og:url",
				content: `/properties/${params.id}`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
