//#region node_modules/.nitro/vite/services/ssr/assets/brand-B9a_wQAu.js
var BRAND = {
	name: "Shree Shyam Ji Estate",
	tagline: "Your Trusted Property Partner in Old Rajinder Nagar",
	phones: ["8595777428", "9311510866"],
	whatsapp: "919311510866",
	email: "info@shreeshyamjiestate.com",
	website: "shreeshyamjiestate.com",
	address: "Shop No 56, Near Batra Medical, Old Rajinder Nagar, New Delhi - 110060",
	socials: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
		youtube: "https://youtube.com",
		whatsapp: "https://wa.me/919311510866"
	}
};
var waLink = (text) => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
//#endregion
export { waLink as n, BRAND as t };
