import Link from "next/link";
import { notFound } from "next/navigation";
import { SwatchDetails } from "@/components/swatch/SwatchDetails";
import { SwatchGallery } from "@/components/swatch/SwatchGallery";
import { getSwatchById, swatches } from "@/data/swatches";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return swatches.map((swatch) => ({ id: swatch.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const swatch = getSwatchById(id);
  if (!swatch) return { title: "Swatch not found" };

  return {
    title: swatch.name,
    description: swatch.notes,
  };
}

export default async function SwatchPage({ params }: PageProps) {
  const { id } = await params;
  const swatch = getSwatchById(id);
  if (!swatch) notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <Link
        href="/archive"
        className="mb-10 inline-block text-xs tracking-widest text-muted uppercase transition-opacity duration-300 hover:opacity-60"
      >
        ← Back to Archive
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SwatchGallery images={swatch.gallery} name={swatch.name} />
        <SwatchDetails swatch={swatch} />
      </div>
    </div>
  );
}
