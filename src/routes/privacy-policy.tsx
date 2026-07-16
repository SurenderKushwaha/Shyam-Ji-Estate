import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";
import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Cookie,
  Lock,
  Calendar,
  UserCheck,
  ExternalLink,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Shyam Ji Estate" },
      {
        name: "description",
        content:
          "Privacy Policy for Shyam Ji Estate. Learn how we collect, use, protect, and manage your personal and property information.",
      },
      { property: "og:title", content: "Privacy Policy | Shyam Ji Estate" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        crumb="Privacy Policy"
        subtitle="Effective Date: 08 July 2026"
      />

      <div className="bg-white py-12 sm:py-16 md:py-20 border-b border-border/10">
        <div className="container-x">
          {/* Privacy Policy Content */}
          <div className="space-y-12">
            <div className="prose max-w-none">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 font-medium">
                At <strong className="text-primary">{BRAND.name}</strong>, we value your privacy and
                are committed to protecting your personal information. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit{" "}
                <strong className="text-primary">www.shyamjiestate.com</strong> or use our property
                brokerage services.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                By accessing our website or using our services, you agree to the collection and use
                of your information in accordance with this Privacy Policy.
              </p>

              <hr className="border-border/40 my-8" />

              {/* Section 1 */}
              <section id="information-collect" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Database className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    1. Information We Collect
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We may collect the following information when you interact with our website or
                  services:
                </p>

                <div className="grid gap-6 sm:grid-cols-2 mt-4">
                  <div className="bg-[#FAF8F5] border border-border/20 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider mb-3 text-accent">
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Full Name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Mobile Number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Email Address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Residential or Business Address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>
                          Identity Proof details (when required for property booking or
                          documentation)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Occupation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Property preferences and budget</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#FAF8F5] border border-border/20 rounded-2xl p-5 shadow-sm space-y-4">
                    <div>
                      <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider mb-2 text-accent">
                        Property Information
                      </h3>
                      <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Property enquiries
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Property visit requests
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Booking requests
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Rental or purchase preferences
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider mb-2 text-accent">
                        Technical Information
                      </h3>
                      <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> IP Address
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Browser type & Device info
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span> Website usage data & Cookies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 2 */}
              <section id="use-information" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    2. How We Use Your Information
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We use your information to provide a reliable brokerage service and improve your
                  experience. Specifically, we use it to:
                </p>
                <div className="bg-[#FAF8F5] border border-border/20 rounded-2xl p-6 shadow-sm">
                  <ul className="grid gap-3 sm:grid-cols-2 text-xs md:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Respond to your enquiries and recommend suitable properties.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Schedule property visits and process bookings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Prepare rental or brokerage documentation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Verify customer identity where required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Contact you regarding your enquiry or transactions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Improve our website and customer experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Send service-related updates and notifications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>Comply with legal, regulatory obligations and prevent fraud.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 3 */}
              <section id="information-sharing" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Share2 className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    3. Information Sharing
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We may share your information only when necessary to perform our brokerage
                  services, with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>Property owners or landlords</li>
                  <li>Property developers</li>
                  <li>Legal and documentation professionals</li>
                  <li>Payment service providers</li>
                  <li>Government authorities or law enforcement agencies when required by law</li>
                </ul>
                <div className="bg-red-50/50 border border-red-200/50 rounded-2xl p-5 mt-4">
                  <p className="text-xs md:text-sm font-bold text-red-800 flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-red-600 shrink-0"></span>
                    Crucial Policy: We do NOT sell, rent, or trade your personal information to
                    third parties for marketing purposes.
                  </p>
                </div>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 4 */}
              <section id="cookies" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Cookie className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    4. Cookies
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Our website uses cookies and similar technologies to improve website performance,
                  remember your preferences, analyse website traffic, and enhance your browsing
                  experience.
                </p>
                <p className="text-muted-foreground text-xs md:text-sm italic">
                  You may disable cookies through your browser settings. However, please note that
                  some features of the website may not function properly without them.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 5 */}
              <section id="data-security" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    5. Data Security
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We take reasonable administrative, technical, and physical measures to protect
                  your personal information against unauthorized access, disclosure, alteration, or
                  destruction.
                </p>
                <p className="text-muted-foreground text-xs md:text-sm text-amber-800 bg-amber-50/50 border border-amber-200/50 rounded-xl p-4">
                  <strong>Disclaimer:</strong> While we strive to use commercially acceptable
                  security measures to safeguard your information, please note that no method of
                  transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 6 */}
              <section id="data-retention" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    6. Data Retention
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We retain your information only for as long as necessary to provide our services,
                  complete property transactions, comply with legal obligations, resolve disputes,
                  and enforce our agreements.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  When your information is no longer required, it will be securely deleted or
                  anonymized where appropriate.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 7 */}
              <section id="your-rights" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    7. Your Rights
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Subject to applicable laws, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>Access your personal information.</li>
                  <li>Request correction of inaccurate or incomplete information.</li>
                  <li>Request deletion of your personal data where legally permitted.</li>
                  <li>Withdraw your consent where processing is based on consent.</li>
                  <li>Contact us regarding any privacy concerns.</li>
                </ul>
                <p className="text-muted-foreground text-xs md:text-sm italic">
                  To exercise these rights, please contact us using the details provided in Section
                  11 below.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 8 */}
              <section id="third-party-links" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    8. Third-Party Links
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices, content, or security of those external websites. We
                  encourage you to review their privacy policies before providing any personal
                  information.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 9 */}
              <section id="childrens-privacy" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Baby className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    9. Children's Privacy
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Our services are intended for individuals who are 18 years of age or older. We do
                  not knowingly collect personal information from children.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 10 */}
              <section id="changes-policy" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    10. Changes to this Privacy Policy
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our
                  services or legal requirements. Any updates will be posted on this page with a
                  revised effective date.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Your continued use of our website after any changes indicates your acceptance of
                  the updated Privacy Policy.
                </p>
              </section>

              <hr className="border-border/40 my-8" />

              {/* Section 11 */}
              <section id="contact-us" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-[#C49545] border border-border/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1528] uppercase tracking-wide">
                    11. Contact Us
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  If you have any questions, requests, or concerns regarding this Privacy Policy or
                  the handling of your personal information, please reach out to us using any of the
                  methods below:
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
                    acknowledge that you have read, understood, and agreed to this Privacy Policy.
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
