import { Link } from "@tanstack/react-router";
import { Home, BedDouble, Key, Building2, Phone } from "lucide-react";

export function BottomNav() {
  const tabs = [
    { to: "/", label: "Home", Icon: Home },
    { to: "/pg-hostel", label: "PG/Hostel", Icon: BedDouble },
    { to: "/rent", label: "Rent", Icon: Key },
    { to: "/buy", label: "Buy", Icon: Building2 },
    { to: "/contact", label: "Contact", Icon: Phone },
  ] as const;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center gap-1 w-full h-full py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-all duration-200 active:scale-95 touch-manipulation"
            activeProps={{ className: "text-[#C49545]" }}
            activeOptions={{ exact: to === "/" }}
          >
            <Icon className="h-5 w-5 transition-transform duration-200" />
            <span className="text-[9px] sm:text-[10px] tracking-wide mt-0.5">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
