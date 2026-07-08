import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";
import { 
  CreditCard,
  Calendar,
  Bookmark,
  UserX,
  Home,
  Lock,
  Globe,
  AlertTriangle,
  Mail,
  RefreshCw,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | Shyam Ji Estate" },
      { name: "description", content: "Refund & Cancellation Policy for Shyam Ji Estate. Read about cancellation policies, booking refunds, and brokerage fee guidelines." },
      { property: "og:title", content: "Refund & Cancellation Policy | Shyam Ji Estate" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund & Cancellation Policy"
        crumb="Refund Policy"
        subtitle="Effective Date: 08 July 2026"
      />

      <div className="bg-white py-12 sm:py-16 md:py-20 border-b border-border/10">
        <div className="container-x">
          {/* Content Area */}
          <div className="space-y-12">
              <div className="prose max-w-none">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 font-medium">
                  This Refund & Cancellation Policy explains the terms governing cancellations, refunds, booking amounts, and brokerage fees for services provided by <strong className="text-primary">{BRAND.name}</strong> through <strong className="text-primary">www.shyamjiestate.com</strong>.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                  By using our website or engaging our brokerage services, you agree to this Policy.
                </p>

                <hr className="border-border/40 my-8" />

                {/* Section 1 */}
                <section id="brokerage-fees" className="scroll-mt-24 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      1. Brokerage Fees
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Brokerage is a professional service fee charged for introducing, arranging, negotiating, and facilitating a property transaction between the customer and the property owner.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Brokerage becomes payable when a property is confirmed or booked, a rental/lease/sale agreement is executed, possession is taken, or the transaction is otherwise finalized.
                  </p>

                  <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-5 mt-4">
                    <p className="text-xs md:text-sm font-bold text-amber-900 flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-amber-600 shrink-0"></span>
                      Important: Once the brokerage service has been successfully provided and the transaction is finalized, the brokerage fee is non-refundable.
                    </p>
                  </div>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 2 */}
                <section id="visit-cancellation" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      2. Property Visit Cancellation
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Customers may cancel or reschedule a property visit by contacting us before the scheduled visit.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    No cancellation charges apply for property visit requests unless otherwise agreed in writing.
                  </p>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 3 */}
                <section id="booking-amount" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Bookmark className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      3. Booking Amount
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Where a booking amount is paid:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    <li>The terms of refund or adjustment will depend on the agreement between the customer and the property owner.</li>
                    <li>Shyam Ji Estate acts only as a brokerage intermediary and is not responsible for refund decisions made by the property owner unless we have expressly agreed otherwise in writing.</li>
                    <li>Any refund processed by us, if applicable, will be subject to the terms agreed at the time of booking.</li>
                  </ul>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 4 */}
                <section id="cancellation-customer" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <UserX className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      4. Cancellation by the Customer
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    If you cancel a property booking after confirmation:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    <li>Brokerage already earned for completed brokerage services may remain payable.</li>
                    <li>Any refund of rent advance, security deposit, or booking amount will be governed by the agreement between you and the property owner.</li>
                  </ul>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 5 */}
                <section id="cancellation-owner" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Home className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      5. Cancellation by the Property Owner
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    If the property owner cancels a booking before execution of the rental, lease, or sale agreement:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    <li>Any refund due will be handled according to the agreement between the customer and the property owner.</li>
                    <li>Where Shyam Ji Estate has received funds on behalf of the owner, we will facilitate the refund process in accordance with the applicable agreement and our legal obligations.</li>
                  </ul>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 6 */}
                <section id="security-deposit" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      6. Security Deposit
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Security deposits are generally held and managed by the property owner unless otherwise agreed. Refund of the security deposit is subject to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    <li>The rental or lease agreement.</li>
                    <li>Adjustment of unpaid rent, utility charges, damages, or other lawful deductions.</li>
                    <li>Inspection of the property at the time of vacating.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic bg-gray-50 border border-border/40 rounded-xl p-3 mt-2">
                    Shyam Ji Estate is not responsible for disputes regarding the refund of security deposits unless specifically agreed in writing.
                  </p>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 7 */}
                <section id="online-payments" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      7. Online Payments
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    If online payments are available through our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    <li>Payments are processed through secure third-party payment gateways.</li>
                    <li>Any applicable refunds will be credited to the original payment method whenever possible.</li>
                    <li>Refund processing times may vary depending on the payment provider or bank.</li>
                  </ul>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 8 */}
                <section id="exceptional-circumstances" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      8. Exceptional Circumstances
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Refunds may be considered where required by law or in exceptional circumstances, including duplicate payments, incorrect payment amounts due to a technical error, or other situations where a refund is legally required or approved by Shyam Ji Estate.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Any approved refund will be processed within a reasonable period after verification.
                  </p>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 9 */}
                <section id="how-to-request" className="scroll-mt-24 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      9. How to Request a Refund or Cancellation
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    To request a cancellation or enquire about a refund, please contact us with your booking details:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="border border-border/60 rounded-2xl p-5 shadow-sm space-y-3">
                      <h4 className="font-display text-[#0B1528] font-bold text-sm uppercase tracking-wider">
                        Direct Contact
                      </h4>
                      <div className="space-y-2 text-xs md:text-sm text-muted-foreground font-medium">
                        <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 hover:text-accent transition">
                          <Mail className="h-4 w-4 text-accent shrink-0" />
                          <span>{BRAND.email}</span>
                        </a>
                        <a href={`tel:+91${BRAND.phones[0]}`} className="flex items-center gap-2.5 hover:text-accent transition">
                          <Phone className="h-4 w-4 text-accent shrink-0" />
                          <span>+91 85957 77428</span>
                        </a>
                        <a href="https://wa.me/919311510866" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-accent transition">
                          <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500 text-white font-bold text-[8px] shrink-0 font-sans">WA</span>
                          <span>+91 93115 10866 (WhatsApp)</span>
                        </a>
                        <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-accent transition">
                          <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500 text-white font-bold text-[8px] shrink-0 font-sans">WA</span>
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
                      By using <strong className="text-primary">www.shyamjiestate.com</strong> and our brokerage services, you acknowledge that you have read, understood, and agreed to this Refund & Cancellation Policy.
                    </p>
                    <a
                      href={waLink("Hello Shyam Ji Estate, I have an enquiry regarding refunds or cancellations.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0B1528] text-white hover:bg-accent hover:text-[#0B1528] transition duration-300 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider mt-4"
                    >
                      Enquire via WhatsApp
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </section>

                <hr className="border-border/40 my-8" />

                {/* Section 10 */}
                <section id="changes-policy" className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                      10. Changes to this Policy
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Shyam Ji Estate reserves the right to update or modify this Refund & Cancellation Policy at any time. Any changes will be posted on this page with a revised effective date.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Your continued use of our website or services after such changes constitutes your acceptance of the updated Policy.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
