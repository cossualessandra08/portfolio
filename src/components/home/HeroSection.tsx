"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1600&q=80";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Knit texture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-xs tracking-[0.4em] uppercase text-white/70"
        >
          demalamutria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl"
        >
          Swatch Archive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          A digital archive to organize, consult, and celebrate every knit
          swatch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex justify-center"
        >
          <Button href="/archive" variant="ghost">
            Explore
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
