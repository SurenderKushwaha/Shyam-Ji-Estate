import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";
import {
  Info,
  UserCheck,
  Globe,
  List,
  MapPin,
  CreditCard,
  ShieldAlert,
  Bookmark,
  CheckSquare,
  AlertTriangle,
  Copyright,
  Eye,
  ExternalLink,
  RefreshCw,
  Scale,
  Mail,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Shyam Ji Estate" },
      {
        name: "description",
        content:
          "Terms & Conditions for Shyam Ji Estate. Understand your rights and responsibilities when using our website or property brokerage services.",
      },
      { property: "og:title", content: "Terms & Conditions | Shyam Ji Estate" },
      { property: "og:url", content: "/terms-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-conditions" }],
  }),
  component: TermsConditionsPage,
});

function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        crumb="Terms & Conditions"
        subtitle="Effective Date: 08 July 2026"
      />

      <div className="bg-white py-12 sm:py-16 md:py-20 border-b border-border/10">
        <div className="container-x">
          {/* Content Area */}
          <div className="space-y-12">
            <div className="prose max-w-none">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 font-medium">
                Welcome to <strong className="text-primary">{BRAND.name}</strong>. These Terms &
                Conditions (&quot;Terms&quot;) govern your access to and use of{" "}
                <strong className="text-primary">www.shyamjiestate.com</strong> and our property
                brokerage services.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                By accessing or using our website, submitting an enquiry, booking a property visit,
                or using any of our services, you agree to be bound by these Terms. If you do not
                agree with these Terms, please do not use our website or services.
              </p>

              <hr className="border-border/40 my-8" />

              {/* Section 1 */}
              <section id="about-us" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Info className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    1. About Us
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  <strong className="text-primary">{BRAND.name}</strong> is a real estate brokerage
                  firm that connects property owners, landlords, buyers, tenants, and businesses. We
                  act solely as an intermediary and facilitate property transactions between the
                  parties.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 2 */}
              <section id="eligibility" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    2. Eligibility
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  By using our website, you confirm that:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li>You are at least 18 years of age.</li>
                  <li>The information you provide is true, accurate, and complete.</li>
                  <li>You are legally capable of entering into binding agreements.</li>
                </ul>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 3 */}
              <section id="website-use" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    3. Website Use
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  You agree to use this website only for lawful purposes. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li>Use the website for fraudulent or illegal activities.</li>
                  <li>Upload or transmit viruses, malware, or harmful code.</li>
                  <li>Attempt unauthorized access to our systems or data.</li>
                  <li>Interfere with the operation or security of the website.</li>
                  <li>
                    Copy, reproduce, distribute, or scrape website content without our prior written
                    permission.
                  </li>
                </ul>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 4 */}
              <section id="property-listings" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <List className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    4. Property Listings
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Property information, photographs, rental amounts, availability, and descriptions
                  are provided by property owners or other reliable sources.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  While we make reasonable efforts to keep listings accurate and up to date, we do
                  not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li>Every listing is available at all times.</li>
                  <li>Rental prices or property details will remain unchanged.</li>
                  <li>Property descriptions are complete or free from errors.</li>
                </ul>
                <p className="text-xs text-muted-foreground italic bg-gray-50 border border-border/40 rounded-xl p-3 mt-2">
                  Note: Property owners may modify, withdraw, or rent their properties without prior
                  notice.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 5 */}
              <section id="property-visits" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    5. Property Visits
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  If a property is introduced or shown to you by{" "}
                  <strong className="text-primary">{BRAND.name}</strong>, we shall be considered the
                  introducing broker for that property.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-semibold text-accent">
                  You acknowledge that property details, owner information, and viewing arrangements
                  provided by us are confidential and intended solely for your personal use.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 6 */}
              <section id="brokerage-charges" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    6. Brokerage Charges
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Brokerage becomes payable when you confirm the booking of a property, execute a
                  rental/lease/sale agreement, take possession, or otherwise finalize the
                  transaction.
                </p>

                <div className="bg-[#FAF8F5] border border-border/20 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                  <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider text-accent border-b pb-2">
                    Standard Fees (Unless agreed otherwise in writing)
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs md:text-sm text-[#0B1528]">
                    <div className="border border-border/40 rounded-xl p-4 bg-white">
                      <span className="block font-bold text-accent uppercase tracking-wider text-[10px] mb-1">
                        Residential Rentals
                      </span>
                      <p className="font-display font-extrabold text-base">
                        Equivalent to 1 Month's Rent
                      </p>
                    </div>
                    <div className="border border-border/40 rounded-xl p-4 bg-white">
                      <span className="block font-bold text-accent uppercase tracking-wider text-[10px] mb-1">
                        Commercial Properties
                      </span>
                      <p className="font-display font-extrabold text-base">
                        As mutually agreed beforehand
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground italic leading-relaxed pt-2">
                    Brokerage is a professional service fee and is <strong>non-refundable</strong>{" "}
                    once the brokerage service has been successfully rendered and the transaction
                    has been finalized.
                  </p>
                </div>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 7 */}
              <section id="non-circumvention" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    7. Non-Circumvention
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  If you visit or are introduced to a property through{" "}
                  <strong className="text-primary">{BRAND.name}</strong>, and within{" "}
                  <strong className="text-[#0B1528]">90 days</strong> you rent, lease, purchase,
                  occupy, or otherwise complete a transaction for that property:
                </p>

                <div className="bg-red-50/40 border border-red-200/50 rounded-2xl p-5 grid gap-3 sm:grid-cols-2 text-xs md:text-sm text-red-950 font-medium">
                  <div className="space-y-1.5">
                    <p className="font-bold flex items-center gap-2 text-red-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-700"></span> Direct
                      Transactions
                    </p>
                    <p className="text-xs text-red-900/80">
                      Directly with the owner bypassing the agency.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-bold flex items-center gap-2 text-red-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-700"></span> Other Channels
                    </p>
                    <p className="text-xs text-red-900/80">
                      Through another broker, representative, relative or employee.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-semibold">
                  You agree that the agreed brokerage remains fully payable to{" "}
                  <strong className="text-primary">{BRAND.name}</strong>, and you agree not to
                  bypass or attempt to avoid the brokerage services after receiving property
                  information through us.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 8 */}
              <section id="property-booking" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    8. Property Booking
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Any booking amount paid shall be governed by the mutually agreed terms between the
                  customer and the property owner unless otherwise expressly agreed in writing.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Refunds, if any, shall be subject to the applicable booking or rental agreement.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 9 */}
              <section id="customer-responsibilities" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    9. Customer Responsibilities
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li>Provide accurate and complete information.</li>
                  <li>Submit valid identification when requested.</li>
                  <li>Pay brokerage and other agreed charges on time.</li>
                  <li>Inspect the property thoroughly before confirming any transaction.</li>
                  <li>Read and understand all lease/sale agreements before signing.</li>
                </ul>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 10 */}
              <section id="limitation-liability" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    10. Limitation of Liability
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Shyam Ji Estate acts solely as a property broker and intermediary. We do not
                  guarantee property condition, future tenancy or business success, owner approvals,
                  rental renewals, or legal ownership beyond documents provided by the owner.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  To the fullest extent permitted by law, we shall not be liable for disputes
                  between owners and tenants, property defects, changes in rental amounts, property
                  availability, business losses, or indirect or consequential damages.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 11 */}
              <section id="intellectual-property" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Copyright className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    11. Intellectual Property
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  All content on this website, including but not limited to logos, text, images,
                  graphics, designs, property photographs owned or licensed by us, documents, and
                  website layout, is the intellectual property of{" "}
                  <strong className="text-primary">{BRAND.name}</strong> unless otherwise stated.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  No content may be copied, reproduced, modified, distributed, or used without our
                  prior written permission.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 12 */}
              <section id="privacy" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    12. Privacy
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Your use of this website is also governed by our <strong>Privacy Policy</strong>,
                  which explains how we collect, use, and protect your personal information.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 13 */}
              <section id="third-party-links" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    13. Third-Party Links
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Our website may contain links to third-party websites. These links are provided
                  for convenience only. We are not responsible for the content, privacy practices,
                  or services offered by those websites.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 14 */}
              <section id="changes-terms" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    14. Changes to These Terms
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We reserve the right to modify these Terms & Conditions at any time without prior
                  notice. Updated Terms will become effective immediately upon publication on this
                  website. Continued use of our website after any changes constitutes acceptance of
                  the revised Terms.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 15 */}
              <section id="governing-law" className="scroll-mt-24 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    15. Governing Law
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  These Terms & Conditions shall be governed by and interpreted in accordance with
                  the laws of India.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Any disputes arising out of or relating to these Terms or the use of our services
                  shall be subject to the exclusive jurisdiction of the competent courts in{" "}
                  <strong className="text-primary">New Delhi, India</strong>, unless otherwise
                  required by applicable law.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 16 */}
              <section id="contact-us" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    16. Contact Us
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  If you have any questions regarding these Terms & Conditions, please contact us:
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="border border-border/60 rounded-2xl p-5 shadow-sm space-y-3">
                    <h4 className="font-display text-[#0B1528] font-bold text-sm uppercase tracking-wider">
                      Direct Contact
                    </h4>
                    <div className="space-y-2 text-xs md:text-sm text-muted-foreground font-medium">
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="flex items-center gap-2.5 hover:text-accent transition"
                      >
                        <Mail className="h-4 w-4 text-accent shrink-0" />
                        <span>{BRAND.email}</span>
                      </a>
                      <a
                        href={`tel:+91${BRAND.phones[0]}`}
                        className="flex items-center gap-2.5 hover:text-accent transition"
                      >
                        <Phone className="h-4 w-4 text-accent shrink-0" />
                        <span>+91 85957 77428</span>
                      </a>
                      <a
                        href="https://wa.me/919311510866"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 hover:text-accent transition"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500 text-white font-bold text-[8px] shrink-0 font-sans">
                          WA
                        </span>
                        <span>+91 93115 10866 (WhatsApp)</span>
                      </a>
                      <a
                        href={`https://wa.me/${BRAND.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 hover:text-accent transition"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500 text-white font-bold text-[8px] shrink-0 font-sans">
                          WA
                        </span>
                        <span>+91 85957 77428 (WhatsApp)</span>
                      </a>
                    </div>
                  </div>

                  <div className="border border-border/60 rounded-2xl p-5 shadow-sm space-y-3">
                    <h4 className="font-display text-[#0B1528] font-bold text-sm uppercase tracking-wider">
                      Office Details
                    </h4>
                    <div className="space-y-2 text-xs md:text-sm text-muted-foreground font-medium">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">
                          Shop No. 56, Near Batra Medical, Old Rajinder Nagar, New Delhi – 110060
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Monday – Sunday: 10:00 AM – 7:00 PM (Open every day)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#FAF8F5] border border-border/40 rounded-2xl p-6 text-center">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    By using <strong className="text-primary">www.shyamjiestate.com</strong>, you
                    confirm that you have read, understood, and agreed to these Terms & Conditions.
                  </p>
                  <a
                    href={waLink("Hello Shyam Ji Estate, I have an enquiry regarding a property.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0B1528] text-white hover:bg-accent hover:text-[#0B1528] transition duration-300 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider mt-4"
                  >
                    Enquire via WhatsApp
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
