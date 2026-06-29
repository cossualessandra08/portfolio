import { Suspense } from "react";
import { ArchiveClient } from "@/components/archive/ArchiveClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
  description: "Browse the demalamutria knit swatch archive.",
};

export default function ArchivePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center pt-32">
          <p className="text-sm tracking-widest text-muted uppercase">
            Loading archive...
          </p>
        </div>
      }
    >
      <ArchiveClient />
    </Suspense>
  );
}
