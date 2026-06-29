"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterSidebar } from "@/components/archive/FilterSidebar";
import { SwatchCard } from "@/components/archive/SwatchCard";
import { swatches } from "@/data/swatches";
import {
  filterSwatches,
  filtersToSearchParams,
  parseFiltersFromParams,
} from "@/lib/filters";
import type { SwatchFilters } from "@/types/swatch";

export function ArchiveClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const filters = useMemo(
    () => parseFiltersFromParams(searchParams),
    [searchParams],
  );

  const updateUrl = useCallback(
    (nextFilters: SwatchFilters, nextQuery: string) => {
      const params = filtersToSearchParams(nextFilters, nextQuery);
      const queryString = params.toString();
      router.replace(`/archive${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [router],
  );

  const handleQueryChange = (value: string) => {
    updateUrl(filters, value);
  };

  const handleFiltersChange = (nextFilters: SwatchFilters) => {
    updateUrl(nextFilters, query);
  };

  const results = useMemo(
    () => filterSwatches(swatches, filters, query),
    [filters, query],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-muted uppercase">
          demalamutria
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight md:text-5xl">
          Archive
        </h1>
        <p className="mt-4 text-muted">
          A curated selection of knit swatches — texture, composition, and
          craft in every sample.
        </p>
      </div>

      <div className="mb-10">
        <input
          type="search"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Search by code, yarn, stitch, color..."
          className="w-full max-w-xl border-b border-black/15 bg-transparent py-3 text-sm transition-colors duration-300 placeholder:text-muted focus:border-black focus:outline-none"
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <FilterSidebar filters={filters} onChange={handleFiltersChange} />

        <div>
          <p className="mb-8 text-xs tracking-widest text-muted uppercase">
            {results.length} swatch{results.length === 1 ? "" : "es"}
          </p>

          <motion.div layout className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {results.map((swatch, index) => (
                <SwatchCard key={swatch.id} swatch={swatch} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {results.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-muted"
            >
              No swatches match your search. Try adjusting the filters.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
