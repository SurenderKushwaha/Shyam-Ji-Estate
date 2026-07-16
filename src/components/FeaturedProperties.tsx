import { Link } from "@tanstack/react-router";
import { ArrowRight, RefreshCw, XCircle } from "lucide-react";
import type { Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

export function FeaturedProperties({
  propertiesList,
  isSearched,
  onClear,
}: {
  propertiesList: Property[];
  isSearched: boolean;
  onClear: () => void;
}) {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-primary md:text-3xl">
              {isSearched ? (
                <>
                  SEARCH <span className="text-accent">RESULTS</span>
                </>
              ) : (
                <>
                  FEATURED <span className="text-accent">PROPERTIES</span>
                </>
              )}
            </h2>
            <div className="mt-2 flex items-center gap-2 text-accent">
              <span className="h-px w-10 bg-accent/60" />
              <span>◆</span>
              <span className="h-px w-10 bg-accent/60" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isSearched ? (
              <button
                onClick={onClear}
                className="inline-flex items-center gap-1.5 rounded border border-accent bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Clear Filters
              </button>
            ) : (
              <Link
                to="/buy"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-accent hover:underline"
              >
                View All Properties <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>

        {propertiesList.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {propertiesList.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-lg border-2 border-dashed border-border bg-card p-10 text-center">
            <XCircle className="mx-auto h-12 w-12 text-muted-foreground/60" />
            <h3 className="mt-4 font-display text-lg font-bold text-primary">
              No Properties Found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We couldn't find any properties matching your exact search criteria.
            </p>
            <button
              onClick={onClear}
              className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-bold uppercase text-primary-foreground transition hover:bg-[color:var(--navy-deep)] cursor-pointer"
            >
              Reset Search Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
