import { Button } from "@/components/ui/Button";
import { FullscreenSection } from "@/components/home/FullscreenSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeSearchSection } from "@/components/home/HomeSearchSection";

const sections = {
  archive:
    "https://images.unsplash.com/photo-1576871337620-3d9d19fd1a1c?w=1600&q=80",
  yarns:
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1600&q=80",
  collections:
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1600&q=80",
  search:
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80",
  contact:
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1600&q=80",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FullscreenSection
        image={sections.archive}
        title="The Archive"
        subtitle="Every swatch documented with precision — from yarn selection to final hand-feel."
      >
        <Button href="/archive" variant="ghost">
          View Archive
        </Button>
      </FullscreenSection>

      <FullscreenSection
        id="yarns"
        image={sections.yarns}
        title="Yarns"
        subtitle="Raw materials at the heart of every sample. Fiber, spin, and character."
        align="left"
      >
        <Button href="/archive?yarn=Merino+Cashmere+2%2F28" variant="ghost">
          Browse Yarns
        </Button>
      </FullscreenSection>

      <FullscreenSection
        id="collections"
        image={sections.collections}
        title="Collections"
        subtitle="Curated groupings by season, texture, and intention."
      >
        <Button href="/archive?season=AW25" variant="ghost">
          View Collections
        </Button>
      </FullscreenSection>

      <FullscreenSection
        id="search"
        image={sections.search}
        title="Search"
        subtitle="Find any swatch by code, composition, stitch, or season."
      >
        <HomeSearchSection />
      </FullscreenSection>

      <FullscreenSection
        id="contact"
        image={sections.contact}
        title="Contact"
        subtitle="For collaborations, inquiries, or archive access."
      >
        <div className="space-y-3 text-sm text-white/80">
          <p>
            <a
              href="mailto:hello@demalamutria.com"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              hello@demalamutria.com
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/demalamutria"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Instagram
            </a>
          </p>
        </div>
      </FullscreenSection>
    </>
  );
}
