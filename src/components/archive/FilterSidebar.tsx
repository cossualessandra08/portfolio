"use client";

import { motion } from "framer-motion";
import type { SwatchFilters } from "@/types/swatch";
import { filterOptions } from "@/data/swatches";

type FilterSidebarProps = {
  filters: SwatchFilters;
  onChange: (filters: SwatchFilters) => void;
};

const filterGroups: { key: keyof SwatchFilters; label: string }[] = [
  { key: "season", label: "Season" },
  { key: "composition", label: "Composition" },
  { key: "color", label: "Color" },
  { key: "yarn", label: "Yarn" },
  { key: "stitch", label: "Stitch" },
  { key: "gauge", label: "Gauge" },
];

export function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const toggle = (key: keyof SwatchFilters, value: string) => {
    const current = filters[key];
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const clearAll = () => {
    onChange({
      season: [],
      composition: [],
      color: [],
      yarn: [],
      stitch: [],
      gauge: [],
    });
  };

  return (
    <aside className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xs tracking-[0.3em] uppercase">Filters</h2>
        <button
          type="button"
          onClick={clearAll}
          className="text-xs text-muted transition-opacity duration-300 hover:opacity-60"
        >
          Clear
        </button>
      </div>

      {filterGroups.map((group) => (
        <div key={group.key}>
          <h3 className="mb-3 text-xs tracking-widest text-muted uppercase">
            {group.label}
          </h3>
          <div className="space-y-2">
            {filterOptions[group.key].map((option) => {
              const active = filters[group.key].includes(option);
              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => toggle(group.key, option)}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left text-sm transition-opacity duration-300 ${
                    active ? "text-black" : "text-muted hover:opacity-60"
                  }`}
                >
                  <span className="relative">
                    {option}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-black transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
