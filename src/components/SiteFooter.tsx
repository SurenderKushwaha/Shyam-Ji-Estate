import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Instagram } from "lucide-react";
import { BRAND } from "@/lib/brand";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-border/40 text-foreground py-10 sm:py-12">
      <div className="container-x flex flex-col items-center">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center max-w-md">
          <Link to="/" className="inline-block">
            <img
              src={logoImg}
              alt="Shyam Ji Estate Logo"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
          </Link>
          <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
            Your Trusted Property Partner in Old Rajinder Nagar
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-7 sm:mt-8 text-xs font-semibold uppercase tracking-wider text-primary/80">
          <Link to="/" className="hover:text-accent transition py-1">Home</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/contact" className="hover:text-accent transition py-1">Contact</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/blog" className="hover:text-accent transition py-1">Blog</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/about" className="hover:text-accent transition py-1">About</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/privacy-policy" className="hover:text-accent transition py-1">Privacy Policy</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/terms-conditions" className="hover:text-accent transition py-1">Terms & Conditions</Link>
          <span className="text-border/60 hidden sm:inline">|</span>
          <Link to="/refund-policy" className="hover:text-accent transition py-1">Refund Policy</Link>
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href={BRAND.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-xs font-semibold text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow us on Instagram</span>
          </a>
        </div>

        {/* Contact Summary / Address */}
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-y-3 gap-x-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/40 w-full text-xs text-muted-foreground font-semibold">
          <a href={`mailto:${BRAND.email}`} className="flex items-center justify-center gap-1.5 hover:text-accent transition font-medium break-all">
            <Mail className="h-3.5 w-3.5 text-accent shrink-0" /> {BRAND.email}
          </a>
          <span className="text-border/60 hidden md:inline">•</span>
          <span className="flex items-center justify-center gap-1.5 text-center">
            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" /> {BRAND.address}
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground/80 mt-5 sm:mt-6 font-medium">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
