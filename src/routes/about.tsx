import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { 
  ShieldCheck, 
  Handshake, 
  Target, 
  Clock, 
  Home, 
  ClipboardList, 
  Briefcase, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  Compass, 
  Phone 
} from "lucide-react";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shyam Ji Estate | Top Real Estate Agency in Old Rajinder Nagar" },
      { name: "description", content: "Serving property owners and seekers since 2008, Shyam Ji Estate is the most trusted property dealer & agent in Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh." },
      { name: "keywords", content: "about shyam ji estate, property dealer old rajinder nagar, real estate agent rajinder nagar, top brokers old rajinder nagar, shyam ji estate" },
      { property: "og:title", content: "About Shyam Ji Estate | Real Estate Experts in Old Rajinder Nagar" },
      { property: "og:description", content: "Discover the history and commitment of Shyam Ji Estate, providing transparent property advisory services in ORN for over 15 years." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const achievements = [
    { number: "6+", label: "Years of Experience" },
    { number: "1500+", label: "Happy Clients" },
    { number: "50+", label: "Properties Sold" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const whatWeDo = [
    { icon: Home, title: "Residential Sale & Purchase", desc: "Helping you buy and sell premium builder floors and flats." },
    { icon: ClipboardList, title: "Rental Properties", desc: "Finding verified rental options for families and professionals." },
    { icon: Users, title: "PG & Hostel Accommodation", desc: "Clean and secure student PGs near major coaching institutes." },
    { icon: Briefcase, title: "Commercial Properties", desc: "Prime shops and office spaces in high-footfall locations." },
    { icon: HelpCircle, title: "Property Consultation", desc: "Honest advice on market trends, valuations, and locations." },
    { icon: TrendingUp, title: "Investment Guidance", desc: "Helping you make smart real estate investments for long-term growth." },
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      title: "Local Market Expertise",
      desc: "We possess in-depth knowledge of the Old Rajinder Nagar property market and provide genuine property options based on your requirements and budget.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Dealings",
      desc: "We believe in honesty, transparency, and long-term relationships. Our clients trust us for fair advice and hassle-free transactions.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      desc: "Every client has unique needs. We carefully understand your preferences and offer customized property solutions.",
    },
    {
      icon: Clock,
      title: "Quick Response & Support",
      desc: "From property visits to final documentation, our team ensures complete support throughout the process.",
    },
  ];

  return (
    <>
      <PageHero
        title="About Us"
        crumb="About"
        subtitle="Your trusted property partner in Old Rajinder Nagar | here to help you buy, sell, rent, or find PG accommodation."
      />

      {/* Intro & Achievements Section */}
      <section className="container-x py-12 sm:py-16 md:py-20 grid gap-10 sm:gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-accent">Who We Are</span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] leading-tight">
              Your Trusted Property Partner in <span className="text-accent">Old Rajinder Nagar</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C49545] mt-3"></div>
          </div>
          
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Welcome to <strong className="text-primary">Shyam Ji Estate</strong>, your trusted destination for all real estate needs in <strong className="text-primary">Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh</strong>. With years of local market experience, we specialize in helping clients buy, sell, rent, and find the perfect PG or hostel accommodation.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            At Shyam Ji Estate, we understand that finding the right property is one of life's most important decisions. Whether you are a family searching for your dream home, a professional relocating to Delhi, a student preparing for UPSC, or a business looking for commercial space, our team is committed to providing honest guidance and personalized solutions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {achievements.map((item) => (
            <div key={item.label} className="bg-[#FAF8F5] border border-border/10 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C49545]">
                {item.number}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#0B1528] mt-2 sm:mt-3 leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#FAF8F5] border-t border-b border-border/10 py-12 sm:py-16 md:py-20">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-accent">Our Core Services</span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#0B1528] uppercase tracking-wide">
              What We Do
            </h2>
            <div className="w-12 h-0.5 bg-[#C49545] mx-auto mt-3"></div>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-extrabold text-[#0B1528] uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-x py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-accent">Why Us</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#0B1528] uppercase tracking-wide">
            Why Choose Us?
          </h2>
          <div className="w-12 h-0.5 bg-[#C49545] mx-auto mt-3"></div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center p-5 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#0B1528] mb-4">
                <item.icon className="h-5 w-5 text-[#C49545]" />
              </div>
              <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#0B1528] text-white py-12 sm:py-16 md:py-20">
        <div className="container-x grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[#0B1528] mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-extrabold text-accent uppercase tracking-wider">
              Our Mission
            </h3>
            <p className="mt-4 text-xs md:text-sm text-white/80 leading-relaxed">
              Our mission is to simplify the property search process by providing reliable, transparent, and customer-focused real estate services while building lasting relationships based on trust.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[#0B1528] mb-6">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-extrabold text-accent uppercase tracking-wider">
              Our Vision
            </h3>
            <p className="mt-4 text-xs md:text-sm text-white/80 leading-relaxed">
              To become the most trusted and preferred real estate consultancy in Old Rajinder Nagar by consistently delivering exceptional customer experiences and quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us CTA Section */}
      <section className="container-x py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto rounded-3xl border bg-card p-6 sm:p-8 md:p-12 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-accent">Office Location</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#0B1528] uppercase tracking-wide">
            Visit Us
          </h2>
          <div className="w-12 h-0.5 bg-[#C49545] mx-auto mt-3"></div>

          <p className="mt-6 text-sm md:text-base font-semibold text-[#0B1528]">
            Shyam Ji Estate
          </p>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            {BRAND.address}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-wrap sm:flex-row justify-center gap-3 sm:gap-6">
            {BRAND.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-xs font-bold text-[#0B1528] hover:bg-gray-50 transition shadow-sm"
              >
                <Phone className="h-4 w-4 text-[#C49545]" /> {phone}
              </a>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-xs font-extrabold text-[#C49545] uppercase tracking-widest">
            Helping You Find the Right Property, Every Time.
          </p>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
