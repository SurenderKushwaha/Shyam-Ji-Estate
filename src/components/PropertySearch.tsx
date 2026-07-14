import { Search, Building2, Wallet, BedDouble } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { CustomSelect } from "./CustomSelect";

export type SearchFilters = {
  location: string;
  type: string;
  transaction: string;
  budget: string;
  roomType?: string; // Optional room type filter for PG/Hostel
};

const locations = ["Old Rajinder Nagar", "New Rajinder Nagar", "Karol Bagh"];

export function PropertySearch({
  filters = { location: "", type: "", transaction: "", budget: "" },
  onChange = () => {},
  onSearch = () => {},
  showTabs = true,
}: {
  filters?: SearchFilters;
  onChange?: (key: keyof SearchFilters, value: string) => void;
  onSearch?: () => void;
  showTabs?: boolean;
}) {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHomepage = routerState.location.pathname === "/";

  // Determine active tab based on route pathname first, falling back to filters
  let activeTab = "Buy";
  const path = routerState.location.pathname;
  if (path === "/buy") {
    activeTab = "Buy";
  } else if (path === "/rent") {
    activeTab = "Rent";
  } else if (path === "/pg-hostel") {
    activeTab = "PG & Hostel";
  } else if (path === "/commercial") {
    activeTab = "Commercial";
  } else {
    if (filters.transaction === "Rent") {
      if (filters.type === "PG") {
        activeTab = "PG & Hostel";
      } else if (filters.type === "Commercial Shop" || filters.type === "Office" || filters.type === "Commercial") {
        activeTab = "Commercial";
      } else {
        activeTab = "Rent";
      }
    } else if (filters.transaction === "Buy") {
      activeTab = "Buy";
    }
  }

  const handleTabClick = (tab: string) => {
    if (isHomepage) {
      // In-place filtering on homepage
      if (tab === "Buy") {
        onChange("transaction", "Buy");
        if (filters.type === "PG" || filters.type === "Commercial Shop" || filters.type === "Office") {
          onChange("type", "");
        }
      } else if (tab === "Rent") {
        onChange("transaction", "Rent");
        if (filters.type === "PG" || filters.type === "Commercial Shop" || filters.type === "Office") {
          onChange("type", "");
        }
      } else if (tab === "PG & Hostel") {
        onChange("transaction", "Rent");
        onChange("type", "PG");
      } else if (tab === "Commercial") {
        onChange("transaction", "Rent");
        onChange("type", "Commercial Shop");
      }
    } else {
      // Global routing when on individual pages
      if (tab === "Buy") navigate({ to: "/buy" });
      else if (tab === "Rent") navigate({ to: "/rent" });
      else if (tab === "PG & Hostel") navigate({ to: "/pg-hostel" });
      else if (tab === "Commercial") navigate({ to: "/commercial" });
    }
  };

  const tabs = ["Buy", "Rent", "Commercial", "PG & Hostel"] as const;

  // Dynamic dropdown options based on active tab
  let propertyTypes = ["Apartment", "Builder Floor"];
  if (activeTab === "Rent") {
    propertyTypes = ["Apartment", "Builder Floor", "PG"];
  } else if (activeTab === "Commercial") {
    propertyTypes = ["Office", "Shop"];
  }

  let budgets = ["Under ₹25k", "₹25k - ₹50k", "₹50k - ₹1L", "₹1L+"];
  if (activeTab === "Buy") {
    budgets = ["Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹2Cr", "₹2Cr+"];
  } else if (activeTab === "PG & Hostel") {
    budgets = ["Under ₹12k", "₹12k - ₹15k", "₹15k+"];
  } else if (activeTab === "Commercial") {
    budgets = ["Under ₹50k", "₹50k - ₹1L", "₹1L+"];
  }

  return (
    <div className="w-full text-left">
      <div className="rounded-3xl bg-white p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-border/40">
        
        {/* Tab Pills */}
        {showTabs && (
          <div className="inline-flex bg-[#FAF9F6] p-1 rounded-full mb-5 gap-1 overflow-x-auto max-w-full no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#C49545] text-white shadow-[0_4px_12px_rgba(196,149,69,0.3)]"
                      : "text-[#0B1528]/70 hover:text-[#C49545]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        )}

        {/* Inputs Stack */}
        <div className="flex flex-col gap-3.5 md:flex-row md:items-center md:gap-4">
          
          {/* Location Input */}
          <CustomSelect
            value={filters.location}
            onChange={(val) => onChange("location", val)}
            options={locations}
            placeholder="Search Location"
            icon={<Search className="h-4.5 w-4.5" />}
            className="w-full md:flex-[1.2]"
          />

          {/* Dynamic Inputs: PG vs Standard Property Type */}
          {activeTab === "PG & Hostel" ? (
            <>
              {/* PG Type Dropdown */}
              <CustomSelect
                value={filters.type}
                onChange={(val) => onChange("type", val)}
                options={["Boys", "Girls"]}
                placeholder="Select PG Type"
                icon={<Building2 className="h-4.5 w-4.5" />}
                className="w-full md:flex-[1]"
              />

              {/* Room Type Dropdown */}
              <CustomSelect
                value={filters.roomType || ""}
                onChange={(val) => onChange("roomType" as any, val)}
                options={["Single Room", "Double Sharing", "Independent", "Attached Washroom", "Attached Balcony"]}
                placeholder="Select Room Type"
                icon={<BedDouble className="h-4.5 w-4.5" />}
                className="w-full md:flex-[1]"
              />
            </>
          ) : (
            /* Standard Property Type Dropdown */
            <CustomSelect
              value={filters.type}
              onChange={(val) => onChange("type", val)}
              options={propertyTypes}
              placeholder="Property Type"
              icon={<Building2 className="h-4.5 w-4.5" />}
              className="w-full md:flex-[1]"
            />
          )}

          {/* Budget Dropdown */}
          <CustomSelect
            value={filters.budget}
            onChange={(val) => onChange("budget", val)}
            options={budgets}
            placeholder="Budget"
            icon={<Wallet className="h-4.5 w-4.5" />}
            className="w-full md:flex-[1]"
          />

          {/* Search Button */}
          <button
            type="button"
            onClick={onSearch}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C49545] px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(196,149,69,0.3)] transition hover:brightness-110 cursor-pointer h-[50px] md:h-[52px] active:scale-[0.99] duration-100 shrink-0 md:px-10"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
}
