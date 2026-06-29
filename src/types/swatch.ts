export type Swatch = {
  id: string;
  code: string;
  name: string;
  composition: string;
  season: string;
  stitch: string;
  yarn: string;
  color: string;
  gauge: string;
  weight: string;
  notes: string;
  image: string;
  gallery: string[];
};

export type SwatchFilters = {
  season: string[];
  composition: string[];
  color: string[];
  yarn: string[];
  stitch: string[];
  gauge: string[];
};
