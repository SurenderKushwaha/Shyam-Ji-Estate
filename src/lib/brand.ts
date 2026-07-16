export const BRAND = {
  name: "Shyam Ji Estate",
  tagline: "Your Trusted Property Partner in Old Rajinder Nagar",
  phones: ["8595777428"],
  whatsapp: "918595777428", // E.164 without +
  whatsapps: ["918595777428", "919311510866"],
  email: "info@shyamjiestate.com",
  website: "shyamjiestate.com",
  address: "Shop No 56, Near Batra Medical, Old Rajinder Nagar, New Delhi - 110060",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/shyamji_estate",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/918595777428",
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
