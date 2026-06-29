import type { Swatch, SwatchFilters } from "@/types/swatch";

export function filterSwatches(
  items: Swatch[],
  filters: SwatchFilters,
  query: string,
): Swatch[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((swatch) => {
    const matchesFilters =
      (filters.season.length === 0 || filters.season.includes(swatch.season)) &&
      (filters.composition.length === 0 ||
        filters.composition.includes(swatch.composition)) &&
      (filters.color.length === 0 || filters.color.includes(swatch.color)) &&
      (filters.yarn.length === 0 || filters.yarn.includes(swatch.yarn)) &&
      (filters.stitch.length === 0 || filters.stitch.includes(swatch.stitch)) &&
      (filters.gauge.length === 0 || filters.gauge.includes(swatch.gauge));

    if (!matchesFilters) return false;
    if (!normalizedQuery) return true;

    const searchable = [
      swatch.name,
      swatch.code,
      swatch.composition,
      swatch.season,
      swatch.stitch,
      swatch.yarn,
      swatch.color,
      swatch.gauge,
      swatch.notes,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}

export const emptyFilters: SwatchFilters = {
  season: [],
  composition: [],
  color: [],
  yarn: [],
  stitch: [],
  gauge: [],
};

export function parseFiltersFromParams(
  params: URLSearchParams,
): SwatchFilters {
  return {
    season: params.getAll("season"),
    composition: params.getAll("composition"),
    color: params.getAll("color"),
    yarn: params.getAll("yarn"),
    stitch: params.getAll("stitch"),
    gauge: params.getAll("gauge"),
  };
}

export function filtersToSearchParams(
  filters: SwatchFilters,
  query: string,
): URLSearchParams {
  const params = new URLSearchParams();
  if (query.trim()) params.set("q", query.trim());

  (Object.keys(filters) as (keyof SwatchFilters)[]).forEach((key) => {
    filters[key].forEach((value) => params.append(key, value));
  });

  return params;
}
