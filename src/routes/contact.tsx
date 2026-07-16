import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/InquiryForm";
import { BRAND, waLink } from "@/lib/brand";
import { Phone, Mail, MapPin, Globe, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shyam Ji Estate | Phone, Address & Map | Property Dealer ORN" },
      {
        name: "description",
        content:
          "Contact Shyam Ji Estate, the #1 property consultant in Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh. Call us at +91-8595777428 or visit our office near Batra Medical.",
      },
      {
        name: "keywords",
        content:
          "shyam ji estate contact number, property dealer old rajinder nagar office address, real estate agent phone number old rajinder nagar, shyam ji estate",
      },
      {
        property: "og:title",
        content: "Contact Shyam Ji Estate | Best Real Estate Broker in Old Rajinder Nagar",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

/* ─── FAQ Data ─────────────────────────────────────── */
const FAQS = [
  {
    q: "What areas do you cover?",
    a: "We primarily serve Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh. We also handle select properties in Patel Nagar, Rajouri Garden, and other West Delhi localities.",
  },
  {
    q: "How quickly will you respond to my inquiry?",
    a: "We typically respond within one hour during business hours (10 AM – 7 PM, 7 days a week). For urgent matters, please call or WhatsApp us directly.",
  },
  {
    q: "Do you charge a consultation fee?",
    a: "Our initial consultation is completely free. For PG / Hostel and rental properties, a standard brokerage fee equivalent to 21 days of rent is applicable upon agreement finalization. We maintain full transparency regarding all charges before you proceed.",
  },
  {
    q: "Can I visit the office without an appointment?",
    a: "Yes! Walk-ins are welcome at our office - Shop No 56, Near Batra Medical, Old Rajinder Nagar - from 10:00 AM to 7:00 PM, Monday through Sunday.",
  },
  {
    q: "How do I list my property with you?",
    a: "Simply fill in the inquiry form, WhatsApp us, or visit our office. Share the property details and we'll evaluate it, suggest a fair price, and begin marketing it to our buyer/tenant network immediately.",
  },
];

/* ─── Social Icon SVGs ────────────────────────────── */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── FAQ Accordion Item ──────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border/40 rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#fdf8f0] transition-colors group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0B1528] text-sm md:text-base group-hover:text-[#C49545] transition-colors">
          {q}
        </span>
        <span className="shrink-0 h-8 w-8 rounded-full bg-[#C49545]/10 flex items-center justify-center text-[#C49545] transition-transform duration-200">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <p className="px-6 py-4 text-sm text-muted-foreground leading-relaxed border-t border-border/30 bg-[#fdfaf5]">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────── */
function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.112801817546!2d77.1848967!3d28.6411729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03001c12a76b%3A0x62cd09576b0c535a!2sShyam%20Ji%20Estate!5e1!3m2!1sen!2sin!4v1782491412547!5m2!1sen!2sin";

  const waMessage = waLink("Hi! I'd like to inquire about a property.");

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1528 0%, #15243d 50%, #0B1528 100%)",
        }}
      >
        {/* Decorative golden glow */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }}
        />

        <div className="container-x py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              We're here to help you
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed">
              Let's Connect &amp; Find the{" "}
              <span className="text-[#C49545] font-semibold">Right Property</span> for You.
            </p>
            <p className="mt-2 text-white/50 text-sm">
              Have questions or need assistance?Our team is here to help you find the perfect
              property that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Details + Form ── */}
      <section className="container-x py-12 sm:py-16 grid gap-10 lg:grid-cols-[1fr_1.25fr] items-start">
        {/* Left: Contact Info */}
        <div>
          <p className="text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Get in touch
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1528] leading-tight">
            We're Here to <span className="text-[#C49545]">Help You</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our team is available 7 days a week. Drop by the office, call, or send us a message?we
            usually respond within an hour.
          </p>

          {/* Contact cards */}
          <div className="mt-8 space-y-3">
            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all group">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  Phone
                </div>
                {BRAND.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="block text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors"
                  >
                    +91 {p.slice(0, 5)} {p.slice(5)}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-green-400/50 transition-all group">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-green-500 flex items-center justify-center text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  WhatsApp
                </div>
                {BRAND.whatsapps.map((w) => (
                  <a
                    key={w}
                    href={`https://wa.me/${w}?text=${encodeURIComponent("Hi! I'd like to inquire about a property.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-[#0B1528] hover:text-green-600 transition-colors"
                  >
                    +91 {w.slice(2, 7)} {w.slice(7)}
                  </a>
                ))}
                <div className="text-xs text-muted-foreground mt-1">Chat with us instantly</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all group">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  Website
                </div>
                <a
                  href={`https://${BRAND.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors"
                >
                  {BRAND.website}
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  Office
                </div>
                <div className="text-sm font-semibold text-[#0B1528]">{BRAND.address}</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                  Office Hours
                </div>
                <div className="text-sm font-semibold text-[#0B1528]">
                  Mon – Sun: 10:00 AM – 7:00 PM
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Open every day of the week
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div>
          <InquiryForm subject="Website Contact Inquiry" />
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="container-x pb-12 sm:pb-16">
        <div className="mb-6">
          <p className="text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Find Us
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B1528]">
            Visit Our <span className="text-[#C49545]">Office</span>
          </h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border/40 shadow-xl">
          <iframe
            title="Shyam Ji Estate | Office Location"
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full sm:h-[380px] md:h-[450px]"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground text-center">📍 {BRAND.address}</p>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f9f6f0] py-16">
        <div className="container-x">
          <div className="text-center mb-10">
            <p className="text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Got Questions?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1528]">
              Frequently Asked <span className="text-[#C49545]">Questions</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              Quick answers to the questions we hear most often. Still not sure?Just ask us
              directly.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, #C49545 0%, #d4a84b 50%, #C49545 100%)" }}
      >
        <div className="container-x text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
            Ready to Find Your Dream Property?
          </h2>
          <p className="mt-2 text-white/80 text-sm md:text-base max-w-md mx-auto">
            Let our experts guide you?zero pressure, just genuine advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:+91${BRAND.phones[0]}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-white px-6 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-[#0B1528] shadow-xl hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              Call Now: +91 {BRAND.phones[0].slice(0, 5)} {BRAND.phones[0].slice(5)}
            </a>
            <a
              href={waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 hover:scale-105 transition-all"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
