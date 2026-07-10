import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { PropertySearch, type SearchFilters } from "@/components/PropertySearch";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { useState } from "react";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyam Ji Estate | Best Property Dealer in Old Rajinder Nagar, ORN" },
      { name: "description", content: "Shyam Ji Estate is the #1 rated real estate agency & property dealer in Old Rajinder Nagar (ORN), New Rajinder Nagar & Karol Bagh. Find premium PGs, flats, builder floors & commercial office spaces." },
      { name: "keywords", content: "property dealer in old rajinder nagar, real estate agent in old rajinder nagar, best pg in old rajinder nagar, flats for rent in old rajinder nagar, builder floors in old rajinder nagar, shyam ji estate" },
      { property: "og:title", content: "Shyam Ji Estate | Best Property Dealer & PG Agent in Old Rajinder Nagar" },
      { property: "og:description", content: "The #1 real estate agent in Old Rajinder Nagar for premium builder floors, apartments, PGs, and commercial spaces. Verified direct owner listings." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function getPropertyNumericPrice(priceStr: string): { amount: number; isMonthly: boolean } {
  const clean = priceStr.replace(/[₹,]/g, "").trim();
  if (clean.includes("Cr")) {
    const num = parseFloat(clean.replace("Cr.", "").trim());
    return { amount: num * 10000000, isMonthly: false };
  }
  if (clean.includes("Month")) {
    const num = parseInt(clean.replace("/ Month", "").trim(), 10);
    return { amount: num, isMonthly: true };
  }
  return { amount: 0, isMonthly: false };
}

const initialFilters: SearchFilters = {
  location: "",
  type: "",
  transaction: "",
  budget: "",
};

function Index() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [isSearched, setIsSearched] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties.slice(0, 4));

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const hasActiveFilters = Object.values(filters).some((val) => val !== "");
    
    if (!hasActiveFilters) {
      setFilteredProperties(properties.slice(0, 4));
      setIsSearched(false);
      return;
    }

    const filtered = properties.filter((p) => {
      // Location
      if (filters.location && p.location.toLowerCase() !== filters.location.toLowerCase()) {
        return false;
      }

      // Type
      if (filters.type) {
        const titleLower = p.title.toLowerCase();
        const typeLower = filters.type.toLowerCase();
        if (typeLower === "apartment") {
          if (!titleLower.includes("apartment") && !titleLower.includes("flat")) return false;
        } else if (typeLower === "builder floor") {
          if (!titleLower.includes("builder floor")) return false;
        } else if (typeLower === "pg") {
          if (p.category !== "pg" && !titleLower.includes("pg")) return false;
        } else if (typeLower === "commercial shop") {
          if (!titleLower.includes("shop") && !titleLower.includes("commercial")) return false;
        } else if (typeLower === "office") {
          if (!titleLower.includes("office")) return false;
        }
      }

      // Transaction
      if (filters.transaction) {
        const txLower = filters.transaction.toLowerCase();
        if (txLower === "buy" || txLower === "sell") {
          if (p.category !== "buy") return false;
        } else if (txLower === "rent") {
          if (p.category !== "rent" && p.category !== "pg" && p.category !== "commercial") return false;
        }
      }

      // Budget
      if (filters.budget) {
        const { amount, isMonthly } = getPropertyNumericPrice(p.price);
        if (filters.budget === "Under ₹25k") {
          if (!isMonthly || amount >= 25000) return false;
        } else if (filters.budget === "₹25k - ₹50k") {
          if (!isMonthly || amount < 25000 || amount > 50000) return false;
        } else if (filters.budget === "₹50k - ₹1L") {
          if (!isMonthly || amount < 50000 || amount > 100000) return false;
        } else if (filters.budget === "₹1Cr+") {
          if (isMonthly || amount < 10000000) return false;
        }
      }

      return true;
    });

    setFilteredProperties(filtered);
    setIsSearched(true);
  };

  const handleClear = () => {
    setFilters(initialFilters);
    setFilteredProperties(properties.slice(0, 4));
    setIsSearched(false);
  };

  return (
    <>
      <Hero />
      <PropertySearch
        filters={filters}
        onChange={handleFilterChange}
        onSearch={handleSearch}
      />
      <ServicesGrid />
      <FeaturedProperties
        propertiesList={filteredProperties}
        isSearched={isSearched}
        onClear={handleClear}
      />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
