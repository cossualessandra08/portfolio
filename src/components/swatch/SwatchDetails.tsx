import type { Swatch } from "@/types/swatch";

type SwatchDetailsProps = {
  swatch: Swatch;
};

const fields: { key: keyof Swatch; label: string }[] = [
  { key: "code", label: "Code" },
  { key: "yarn", label: "Yarn" },
  { key: "composition", label: "Composition" },
  { key: "weight", label: "Weight" },
  { key: "gauge", label: "Gauge" },
  { key: "stitch", label: "Stitch" },
  { key: "season", label: "Season" },
];

export function SwatchDetails({ swatch }: SwatchDetailsProps) {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs tracking-[0.35em] text-muted uppercase">
          {swatch.code}
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight md:text-5xl">
          {swatch.name}
        </h1>
      </div>

      <dl className="space-y-5 border-t border-black/10 pt-8">
        {fields.map(({ key, label }) => (
          <div
            key={key}
            className="grid grid-cols-[120px_1fr] gap-4 border-b border-black/5 pb-5 last:border-0"
          >
            <dt className="text-xs tracking-widest text-muted uppercase">
              {label}
            </dt>
            <dd className="text-sm leading-relaxed">{swatch[key] as string}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-black/10 pt-8">
        <h2 className="text-xs tracking-widest text-muted uppercase">Notes</h2>
        <p className="mt-4 text-sm leading-relaxed text-anthracite">
          {swatch.notes}
        </p>
      </div>
    </div>
  );
}
