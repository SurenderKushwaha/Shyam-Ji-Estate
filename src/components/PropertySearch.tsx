import { Search, MapPin, Building2, ArrowUpDown, Wallet, ShieldCheck, IndianRupee, Headphones, Home } from "lucide-react";

export type SearchFilters = {
  location: string;
  type: string;
  transaction: string;
  budget: string;
};

const selects = [
  { 
    key: "location" as const, 
    label: "Location", 
    options: ["Old Rajinder Nagar", "New Rajinder Nagar", "Karol Bagh"], 
    placeholder: "Select Location",
    Icon: MapPin
  },
  { 
    key: "type" as const, 
    label: "Property Type", 
    options: ["Apartment", "Builder Floor", "PG", "Commercial Shop", "Office"], 
    placeholder: "Select Type",
    Icon: Building2
  },
  { 
    key: "transaction" as const, 
    label: "Transaction", 
    options: ["Buy", "Sell", "Rent"], 
    placeholder: "Buy / Sell / Rent",
    Icon: ArrowUpDown
  },
  { 
    key: "budget" as const, 
    label: "Budget", 
    options: ["Under ₹25k", "₹25k - ₹50k", "₹50k - ₹1L", "₹1Cr+"], 
    placeholder: "Select Budget",
    Icon: Wallet
  },
];

export function PropertySearch({
  filters = { location: "", type: "", transaction: "", budget: "" },
  onChange = () => {},
  onSearch = () => {},
}: {
  filters?: SearchFilters;
  onChange?: (key: keyof SearchFilters, value: string) => void;
  onSearch?: () => void;
}) {
  return (
    <section className="container-x relative z-40 -mt-8 px-4 sm:px-6">
      <div className="rounded-2xl bg-white p-6 shadow-luxe border border-[#C49545]/10 md:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Home className="h-5 w-5 text-[#C49545]" />
          <h2 className="text-base md:text-lg font-extrabold uppercase tracking-wider text-[#0B1528] text-center">
            Find Your <span className="text-[#C49545]">Perfect Property</span>
          </h2>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3 md:gap-4">
          {selects.map((s) => {
            const IconComponent = s.Icon;
            return (
              <label key={s.label} className="block">
                <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
                <div className="relative">
                  <IconComponent className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
                  <select
                    value={filters[s.key]}
                    onChange={(e) => onChange(s.key, e.target.value)}
                    className="w-full rounded border border-input bg-background pl-9 pr-3 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer"
                  >
                    <option value="">{s.placeholder}</option>
                    {s.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </label>
            );
          })}
          
          <button
            type="button"
            onClick={onSearch}
            className="col-span-1 sm:col-span-2 md:col-span-1 self-end inline-flex items-center justify-center gap-2 rounded bg-[#C49545] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(196,149,69,0.3)] transition hover:brightness-110 cursor-pointer h-[42px] w-full"
          >
            Search Property <Search className="h-4 w-4" />
          </button>
        </div>



      </div>
    </section>
  );
}
