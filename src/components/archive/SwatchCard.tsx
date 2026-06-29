"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Swatch } from "@/types/swatch";

type SwatchCardProps = {
  swatch: Swatch;
  index: number;
};

export function SwatchCard({ swatch, index }: SwatchCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/swatch/${swatch.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-light-gray shadow-sm transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
          <Image
            src={swatch.image}
            alt={swatch.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="border border-white px-6 py-2 text-xs tracking-[0.25em] uppercase text-white">
              View
            </span>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-light tracking-tight">{swatch.name}</h3>
            <span className="text-xs tracking-widest text-muted uppercase">
              {swatch.code}
            </span>
          </div>
          <p className="text-sm text-muted">{swatch.composition}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-wide text-anthracite uppercase">
            <span>{swatch.season}</span>
            <span>{swatch.stitch}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
