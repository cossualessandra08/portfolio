"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type FullscreenSectionProps = {
  id?: string;
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "center" | "left";
};

export function FullscreenSection({
  id,
  image,
  title,
  subtitle,
  children,
  align = "center",
}: FullscreenSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[8%] -bottom-[8%]">
        <Image
          src={image}
          alt=""
          fill
          priority={id === undefined}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        style={{ opacity }}
        className={`relative z-10 mx-auto max-w-4xl px-6 text-white ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-light tracking-tight md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`mt-10 ${align === "center" ? "flex justify-center" : ""}`}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
