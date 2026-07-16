import { Link } from "@tanstack/react-router";
import { Users, Handshake, Building, Award, ArrowRight } from "lucide-react";

const stats = [
  { Icon: Users, value: "6+", label: "Years of Experience" },
  { Icon: Handshake, value: "1500+", label: "Happy Clients" },
  { Icon: Building, value: "50+", label: "Properties Sold" },
  { Icon: Award, value: "100%", label: "Client Satisfaction" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[color:var(--navy-deep)] text-primary-foreground py-14">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
            Why Choose
            <br />
            <span className="text-accent">SHYAM JI ESTATE?</span>
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/75 max-w-md mx-auto lg:mx-0">
            We are committed to providing honest, transparent and result oriented property solutions
            in Old Rajinder Nagar.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-gold transition hover:brightness-110"
          >
            Know More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-accent" />
              <div className="mt-3 font-display text-2xl sm:text-3xl font-bold text-accent">
                {value}
              </div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/80 leading-tight mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
