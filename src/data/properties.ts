import prop3bhk from "@/assets/prop-3bhk.webp";
import prop2bhk from "@/assets/prop-2bhk.webp";
import propPg from "@/assets/prop-pg.webp";
import propShop from "@/assets/prop-shop.webp";

import galleryBedroom from "@/assets/gallery-bedroom.webp";
import galleryKitchen from "@/assets/gallery-kitchen.webp";
import galleryLiving from "@/assets/gallery-living.webp";

import propSingleGirls1 from "@/assets/prop-single-girls-1.jpg";
import propSingleGirls2 from "@/assets/prop-single-girls-2.jpg";
import propSingleGirls3 from "@/assets/prop-single-girls-3.jpg";
import propSingleGirls4 from "@/assets/prop-single-girls-4.jpg";
import propSingleGirls5 from "@/assets/prop-single-girls-5.jpg";

import girlsDoubleBalcony1 from "@/assets/girls-double-balcony-1.jpg";
import girlsDoubleBalcony2 from "@/assets/girls-double-balcony-2.jpg";
import girlsDoubleBalcony3 from "@/assets/girls-double-balcony-3.jpg";
import girlsDoubleBalcony4 from "@/assets/girls-double-balcony-4.jpg";

import boysSingleBalcony1 from "@/assets/boys-single-balcony-1.jpg";
import boysSingleBalcony2 from "@/assets/boys-single-balcony-2.jpg";
import boysSingleBalcony3 from "@/assets/boys-single-balcony-3.jpg";

import boysSawanSchool1 from "@/assets/boys-sawan-school-1.jpg";
import boysSawanSchool2 from "@/assets/boys-sawan-school-2.jpg";
import boysSawanSchool3 from "@/assets/boys-sawan-school-3.jpg";
import boysSawanSchool4 from "@/assets/boys-sawan-school-4.jpg";
import boysSawanSchool5 from "@/assets/boys-sawan-school-5.jpg";

import boysTopfloor1 from "@/assets/boys-topfloor-1.jpg";
import boysTopfloor2 from "@/assets/boys-topfloor-2.jpg";
import boysTopfloor3 from "@/assets/boys-topfloor-3.jpg";
import boysTopfloor4 from "@/assets/boys-topfloor-4.jpg";

import boysIndependent1 from "@/assets/boys-independent-1.png";
import boysIndependent2 from "@/assets/boys-independent-2.png";
import boysIndependent3 from "@/assets/boys-independent-3.png";
import boysIndependent4 from "@/assets/boys-independent-4.png";
import boysIndependent5 from "@/assets/boys-independent-5.png";

import girlsPremium1 from "@/assets/girls-premium-1.png";
import girlsPremium2 from "@/assets/girls-premium-2.png";
import girlsPremium3 from "@/assets/girls-premium-3.png";
import girlsPremium4 from "@/assets/girls-premium-4.png";
import girlsPremium5 from "@/assets/girls-premium-5.png";

export type PriceBreakupItem = {
  label: string;
  value: string;
  isTotal?: boolean;
};

export type DetailedFeature = {
  label: string;
  value: string;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  badge: "FOR SALE" | "FOR RENT" | "PG / HOSTEL";
  category: "buy" | "rent" | "pg" | "commercial";
  image: string;
  features: string[];
  description?: string;
  gallery?: string[];
  priceBreakup?: PriceBreakupItem[];
  detailedFeatures?: DetailedFeature[];
};

export const properties: Property[] = [
  {
    id: "girls-premium-balcony-orn",
    title: "Premium Single Room PG for Girls",
    location: "Old Rajinder Nagar",
    price: "₹24,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: girlsPremium2,
    features: ["Single Room", "Attached Washroom", "Attached Balcony"],
    description: "Ultra-premium single occupancy room PG for girls located in a highly secure and peaceful street of Old Rajinder Nagar. The room is fully furnished with a double bed with a brown tufted headboard, elegant wallpaper, split AC, study table with drawer unit, and a brown leather office chair. It features a private attached washroom with modern wall-hung commode and geyser, plus an attached balcony. Monthly rent is fully inclusive of Wi-Fi, garbage collection, daily professional cleaning, and housekeeping services.",
    gallery: [girlsPremium2, girlsPremium1, girlsPremium3, girlsPremium4, girlsPremium5],
    priceBreakup: [
      { label: "Monthly Rent (Asking)", value: "₹24,000" },
      { label: "Security Deposit (1 Month)", value: "₹24,000" },
      { label: "Wi-Fi Service", value: "Included" },
      { label: "Garbage & Cleaning", value: "Included" },
      { label: "Daily Housekeeping", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹48,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Occupancy Room" },
      { label: "Washroom", value: "Attached (Wall-hung commode & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Inclusions", value: "Wi-Fi, garbage, cleaning & housekeeping" },
      { label: "Gender Preference", value: "Girls Only" },
      { label: "Furnishing State", value: "Fully Furnished (Premium Fittings)" },
      { label: "Safety & Security", value: "High Security & Safe Locality" }
    ]
  },
  {
    id: "boys-independent-balcony-orn",
    title: "Premium Independent Boys Room / PG",
    location: "Old Rajinder Nagar",
    price: "₹19,500 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: boysIndependent1,
    features: ["Single Room", "Independent", "Attached Washroom", "Attached Balcony"],
    description: "Fully furnished, highly premium independent single occupancy room for boys in Old Rajinder Nagar. The room is styled with elegant wallpapers, a comfortable bed, split AC, study desk, and black revolving chair. It comes with a modern modular U-shaped kitchen with premium gloss cabinetry, an attached washroom styled with custom tiles, modern sanitaryware, vanity basin, and water geyser, plus an attached balcony. Zero maintenance fee applies. Superb choice for students and UPSC aspirants desiring maximum privacy.",
    gallery: [boysIndependent1, boysIndependent2, boysIndependent3, boysIndependent4, boysIndependent5],
    priceBreakup: [
      { label: "Monthly Rent (Single Occupancy)", value: "₹19,500" },
      { label: "Security Deposit (1 Month)", value: "₹19,500" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Water Charges & Maintenance", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹39,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Independent Single Occupancy" },
      { label: "Independence", value: "Fully Independent Entry" },
      { label: "Washroom", value: "Attached (High-end fittings & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Kitchen", value: "Shared/Private U-shaped Modular Kitchen" },
      { label: "Gender Preference", value: "Boys Only" },
      { label: "Furnishing State", value: "Fully Furnished" },
      { label: "Safety & Security", value: "Secure Entry & Safe Neighborhood" }
    ]
  },
  {
    id: "boys-topfloor-newly-orn",
    title: "Newly Constructed Top Floor Boys PG",
    location: "Old Rajinder Nagar",
    price: "₹18,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: boysTopfloor1,
    features: ["Top Floor", "Newly Constructed", "Attached Washroom", "Attached Balcony"],
    description: "Stunning newly constructed single room PG for boys located on the top floor in the highly popular area of Old Rajinder Nagar. The room features high-quality premium flooring, a false ceiling with beautiful cove lighting, a brand new window AC, and dual study desks with chairs. It comes with a modern modular kitchen featuring pristine white cabinets and a Samsung refrigerator, plus a luxurious attached washroom with white marble tiles, vanity, and a geyser. ZERO maintenance charges apply.",
    gallery: [boysTopfloor1, boysTopfloor2, boysTopfloor3, boysTopfloor4],
    priceBreakup: [
      { label: "Monthly Rent (Single Occupancy)", value: "₹18,000" },
      { label: "Security Deposit (1 Month)", value: "₹18,000" },
      { label: "Maintenance Charges", value: "₹0 (Zero Maintenance)" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹36,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Occupancy Room" },
      { label: "Floor", value: "Top Floor" },
      { label: "Construction Status", value: "Newly Constructed (Brand New)" },
      { label: "Maintenance Fee", value: "₹0 (Zero Maintenance)" },
      { label: "Washroom", value: "Attached (Modern fittings & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Kitchen", value: "Private/Shared Modular Kitchen" },
      { label: "Gender Preference", value: "Boys Only" },
      { label: "Furnishing State", value: "Fully Furnished (Brand New Mattresses)" }
    ]
  },
  {
    id: "boys-sawan-school-orn",
    title: "Boys PG Room Near Sawan School",
    location: "Old Rajinder Nagar",
    price: "₹21,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: boysSawanSchool1,
    features: ["Near Sawan School", "Attached Washroom", "Attached Balcony"],
    description: "Spacious and modern single occupancy room for boys, ideally located near Sawan School in Old Rajinder Nagar. The room is fully furnished featuring a premium double-sized mattress bed, a large metal almirah/wardrobe, window air conditioner, and elegant false ceiling lighting. It comes with a private attached washroom finished in high-quality marble tiles and modern sanitary fittings, plus an attached balcony. Perfect for students and UPSC coaching candidates seeking a premium, quiet, and secure environment near educational landmarks.",
    gallery: [boysSawanSchool1, boysSawanSchool2, boysSawanSchool4, boysSawanSchool5, boysSawanSchool3],
    priceBreakup: [
      { label: "Monthly Rent (Single Occupancy)", value: "₹21,000" },
      { label: "Security Deposit (1 Month)", value: "₹21,000" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Water Charges & Maintenance", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹42,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Occupancy Room" },
      { label: "Washroom", value: "Attached (High-end fittings & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Location Advantage", value: "Near Sawan School" },
      { label: "Gender Preference", value: "Boys Only" },
      { label: "Furnishing State", value: "Fully Furnished" },
      { label: "Safety & Security", value: "Secure Entry & Safe Neighborhood" }
    ]
  },
  {
    id: "boys-single-balcony-orn",
    title: "Boys PG Room (Single Occupancy)",
    location: "Old Rajinder Nagar",
    price: "₹18,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: boysSingleBalcony1,
    features: ["Single Room", "Attached Washroom", "Attached Balcony"],
    description: "Premium single occupancy room for boys available in the prime locality of Old Rajinder Nagar. The room is fully furnished with a comfortable single bed, a spacious wooden wardrobe with mirror, study side table, Split AC, and high-speed Wi-Fi router. It features a modern attached washroom with premium pebble-design tilework, an attached balcony for fresh air, and access to a modern parallel kitchen with water filter and chimney. A perfect study environment for UPSC aspirants and students, located close to key coaching centres.",
    gallery: [boysSingleBalcony1, boysSingleBalcony2, boysSingleBalcony3],
    priceBreakup: [
      { label: "Monthly Rent (Single Occupancy)", value: "₹18,000" },
      { label: "Security Deposit (1 Month)", value: "₹18,000" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Water Charges & Maintenance", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹36,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Occupancy" },
      { label: "Washroom", value: "Attached (Modern fittings & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Kitchen Access", value: "Shared Modular Kitchen" },
      { label: "Gender Preference", value: "Boys Only" },
      { label: "Furnishing State", value: "Fully Furnished" },
      { label: "Safety & Security", value: "Secure Entry & CCTV" }
    ]
  },
  {
    id: "girls-double-balcony-orn",
    title: "Girls PG Room (Single/Double Sharing)",
    location: "Old Rajinder Nagar",
    price: "₹20,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: girlsDoubleBalcony2,
    features: ["Single or Double", "Attached Washroom", "Attached Balcony"],
    description: "Well-furnished single or double occupancy PG room for girls located in a prime and secure area of Old Rajinder Nagar. The room comes with comfortable bedding, clean wallpaper design, split AC, study desk, and chair. It features a private attached modern washroom, an attached balcony for fresh air/ventilation, and access to a modular kitchen. Ideal for students and UPSC candidates who want a quiet, safe, and study-friendly atmosphere close to coaching institutes.",
    gallery: [girlsDoubleBalcony2, girlsDoubleBalcony1, girlsDoubleBalcony3, girlsDoubleBalcony4],
    priceBreakup: [
      { label: "Monthly Rent (Single/Double Occupancy)", value: "₹20,000" },
      { label: "Security Deposit (1 Month)", value: "₹20,000" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Water Charges & Maintenance", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹40,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single or Double Sharing" },
      { label: "Washroom", value: "Attached (Modern fittings & geyser)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Kitchen Access", value: "Shared Modular Kitchen" },
      { label: "Gender Preference", value: "Girls Only" },
      { label: "Furnishing State", value: "Fully Furnished" },
      { label: "Safety & Security", value: "Highly Secure Entry & Safe Neighborhood" }
    ]
  },
  {
    id: "girls-single-balcony-orn",
    title: "Premium Single Room PG for Girls",
    location: "Old Rajinder Nagar",
    price: "₹18,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: propSingleGirls4,
    features: ["Single Room", "Attached Washroom", "Attached Balcony"],
    description: "Spacious and premium single room paying guest accommodation exclusively for girls, located in the safe and peaceful locality of Old Rajinder Nagar. The room comes fully furnished with a comfortable bed, wardrobe, study table, and chair. It features an attached modern washroom, an attached private balcony for fresh air, and access to a clean common kitchen. Perfect for UPSC aspirants and students looking for a quiet, study-friendly, and secure environment close to major coaching institutes.",
    gallery: [propSingleGirls4, propSingleGirls1, propSingleGirls2, propSingleGirls3, propSingleGirls5],
    priceBreakup: [
      { label: "Monthly Rent (Single Occupancy)", value: "₹18,000" },
      { label: "Security Deposit (1 Month)", value: "₹18,000" },
      { label: "Common Kitchen Maintenance", value: "Included" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Electricity Charges", value: "As per submeter usage" },
      { label: "Total First Month Cost", value: "₹36,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Room" },
      { label: "Washroom", value: "Attached (Modern fittings)" },
      { label: "Balcony", value: "Attached Private Balcony" },
      { label: "Kitchen Access", value: "Common Kitchen (Self-Cooking)" },
      { label: "Gender Preference", value: "Girls Only" },
      { label: "Furnishing State", value: "Fully Furnished" },
      { label: "Security", value: "Secure Entry & Safe Neighborhood" }
    ]
  },
  {
    id: "3bhk-builder-floor",
    title: "3 BHK Builder Floor",
    location: "Old Rajinder Nagar",
    price: "₹2.25 Cr.",
    badge: "FOR SALE",
    category: "buy",
    image: prop3bhk,
    features: ["3 BHK", "1600 Sq.Ft.", "2 Baths"],
    description: "Premium independent builder floor situated in the heart of Old Rajinder Nagar. This spacious home features modular kitchen cabinets, premium marble flooring, excellent natural light, and individual water storage tanks. Centrally located with close proximity to Karol Bagh Metro Station and major IAS coaching centers (Vajiram & Ravi, Drishti IAS). Ideal for families or students seeking a premium, quiet, and convenient living space.",
    gallery: [prop3bhk, galleryBedroom, galleryKitchen, galleryLiving],
    priceBreakup: [
      { label: "Base Selling Price", value: "₹2,20,00,000" },
      { label: "Stamp Duty & Registration", value: "₹13,50,000" },
      { label: "GST (if applicable)", value: "NIL" },
      { label: "Maintenance Deposit", value: "₹1,50,000" },
      { label: "Brokerage Charges (1%)", value: "₹2,20,000" },
      { label: "Total Price (Estimated)", value: "₹2,37,20,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "1600 Sq.Ft." },
      { label: "Furnishing State", value: "Semi-Furnished" },
      { label: "Facing", value: "North-East" },
      { label: "Floor", value: "2nd Floor (of 4)" },
      { label: "Water Availability", value: "24 Hours Available" },
      { label: "Electricity Status", value: "No Power Cut" }
    ]
  },
  {
    id: "pg-for-boys",
    title: "PG for Boys",
    location: "Old Rajinder Nagar",
    price: "₹12,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: propPg,
    features: ["Twin Sharing", "Wi-Fi", "Food"],
    description: "Well-managed boys paying guest accommodation in Old Rajinder Nagar. The PG offers clean sharing rooms with air conditioning, high-speed Wi-Fi, laundry service, and healthy home-cooked meals three times a day. Located just a 2-minute walk from major UPSC coachings, making it a peaceful study environment for students.",
    gallery: [propPg, galleryBedroom, galleryKitchen],
    priceBreakup: [
      { label: "Monthly Rent (Twin Sharing)", value: "₹12,000" },
      { label: "Security Deposit (1 Month)", value: "₹12,000" },
      { label: "Food & Mess Charges", value: "Included" },
      { label: "Wi-Fi & Housekeeping", value: "Included" },
      { label: "Electricity Charges", value: "₹10 per Unit" },
      { label: "Total First Month Cost", value: "₹24,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Twin Sharing" },
      { label: "Food Quality", value: "Veg (3 meals/day)" },
      { label: "AC", value: "Available" },
      { label: "Wi-Fi Speed", value: "Up to 100 Mbps" },
      { label: "Housekeeping", value: "Daily cleaning" },
      { label: "Laundry", value: "2 times a week" },
      { label: "Security", value: "CCTV & Warden" }
    ]
  },
  {
    id: "commercial-shop",
    title: "Commercial Shop",
    location: "Old Rajinder Nagar",
    price: "₹85,000 / Month",
    badge: "FOR RENT",
    category: "commercial",
    image: propShop,
    features: ["450 Sq.Ft.", "Ground Floor", "24x7"],
    description: "Highly visible retail commercial shop available for rent on the busy streets of Old Rajinder Nagar. Positioned on the ground floor with a wide front glass facade, this space attracts excellent footfall. Suitable for stationery stores, pharmacy, boutiques, coffee shops, or coaching office desks.",
    gallery: [propShop, galleryLiving],
    priceBreakup: [
      { label: "Monthly Rent", value: "₹85,000" },
      { label: "Security Deposit (3 Months)", value: "₹2,55,000" },
      { label: "Monthly Maintenance Charges", value: "₹3,000" },
      { label: "Electricity Charges", value: "Commercial Rates" },
      { label: "Brokerage Charges", value: "₹85,000" },
      { label: "Total First Month Cost", value: "₹4,28,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Super Area", value: "450 Sq.Ft." },
      { label: "Floor", value: "Ground Floor" },
      { label: "Usage", value: "Retail / Office" },
      { label: "Washroom", value: "1 Private Washroom" },
      { label: "Road Width", value: "40 Feet Frontage" },
      { label: "Power Backup", value: "Provision Available" }
    ]
  },
  {
    id: "4bhk-luxury",
    title: "4 BHK Luxury Apartment",
    location: "New Rajinder Nagar",
    price: "₹3.95 Cr.",
    badge: "FOR SALE",
    category: "buy",
    image: prop3bhk,
    features: ["4 BHK", "2400 Sq.Ft.", "3 Baths"],
    description: "Ultra-luxury 4 BHK apartment with high-end designer fittings, modular Italian kitchen, premium false ceilings, and wooden flooring in master bedrooms. Located in a posh street of New Rajinder Nagar with double stilt parking space and lift access. Excellent privacy and highly secure environment.",
    gallery: [prop3bhk, galleryBedroom, galleryKitchen, galleryLiving],
    priceBreakup: [
      { label: "Base Selling Price", value: "₹3,95,00,000" },
      { label: "Stamp Duty & Registration", value: "₹24,00,000" },
      { label: "GST (if applicable)", value: "NIL" },
      { label: "Maintenance Deposit", value: "₹2,00,000" },
      { label: "Brokerage Charges (1%)", value: "₹3,95,000" },
      { label: "Total Price (Estimated)", value: "₹4,24,95,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Configuration", value: "4 BHK" },
      { label: "Super Area", value: "2400 Sq.Ft." },
      { label: "Furnishing State", value: "Semi-Furnished" },
      { label: "Parking", value: "2 Covered Spaces" },
      { label: "Facing", value: "South-West" },
      { label: "Floor", value: "3rd Floor with Lift" },
      { label: "Construction Age", value: "Newly Built" }
    ]
  },
  {
    id: "pg-girls",
    title: "PG for Girls",
    location: "Old Rajinder Nagar",
    price: "₹14,000 / Month",
    badge: "PG / HOSTEL",
    category: "pg",
    image: propPg,
    features: ["Single Room", "Meals", "Wi-Fi"],
    description: "Safe and secure single-occupancy girls PG in Old Rajinder Nagar. The property offers CCTV cameras, a biometric entry lock, clean daily meals (breakfast, lunch, dinner), and an in-house warden. Situated in a highly residential neighborhood safe for girls, very close to coaching classes.",
    gallery: [propPg, galleryBedroom, galleryKitchen],
    priceBreakup: [
      { label: "Monthly Rent (Single Room)", value: "₹14,000" },
      { label: "Security Deposit (1 Month)", value: "₹14,000" },
      { label: "Food & Mess Charges", value: "Included" },
      { label: "Biometric & CCTV Services", value: "Included" },
      { label: "Electricity Charges", value: "₹10 per Unit" },
      { label: "Total First Month Cost", value: "₹28,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Room Type", value: "Single Room" },
      { label: "Food Quality", value: "Veg (3 meals/day)" },
      { label: "CCTV Cameras", value: "Yes, 24x7 recording" },
      { label: "AC", value: "Available" },
      { label: "Laundry", value: "Included" },
      { label: "Safety Rating", value: "Excellent" }
    ]
  },
  {
    id: "office-space",
    title: "Office Space",
    location: "Karol Bagh",
    price: "₹1,20,000 / Month",
    badge: "FOR RENT",
    category: "commercial",
    image: propShop,
    features: ["900 Sq.Ft.", "1st Floor", "Furnished"],
    description: "Ready-to-move-in commercial office space located on a main road in Karol Bagh. This property is fully furnished with 12 workstations, 2 private director cabins, a small pantry, and a washroom. Located within walking distance of Karol Bagh Metro Station, making it ideal for startup teams, CA firms, or coaching centers.",
    gallery: [propShop, galleryLiving, galleryKitchen],
    priceBreakup: [
      { label: "Monthly Rent", value: "₹1,20,000" },
      { label: "Security Deposit (3 Months)", value: "₹3,60,000" },
      { label: "Monthly Maintenance Charges", value: "₹5,000" },
      { label: "Electricity Charges", value: "Commercial Rates" },
      { label: "Brokerage Charges", value: "₹1,20,000" },
      { label: "Total First Month Cost", value: "₹6,05,000", isTotal: true }
    ],
    detailedFeatures: [
      { label: "Super Area", value: "900 Sq.Ft." },
      { label: "Floor", value: "1st Floor" },
      { label: "Workstations", value: "12 Seats" },
      { label: "Cabins", value: "2 Cabins" },
      { label: "Pantry", value: "Available" },
      { label: "Metro Distance", value: "3 mins walk" },
      { label: "Power Backup", value: "100% DG Backed" }
    ]
  }
];
