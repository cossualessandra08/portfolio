"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: string;
  light?: boolean;
};

export function NavLink({ href, children, light = false }: NavLinkProps) {
  return (
    <Link href={href} className="group relative py-1">
      <span
        className={`text-sm tracking-wide transition-opacity duration-300 group-hover:opacity-60 ${
          light ? "text-white" : "text-black"
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
          light ? "bg-white" : "bg-black"
        }`}
      />
    </Link>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group">
      <motion.span
        className={`text-sm font-medium tracking-[0.35em] uppercase transition-opacity duration-300 group-hover:opacity-60 ${
          light ? "text-white" : "text-black"
        }`}
        whileHover={{ opacity: 0.6 }}
      >
        demalamutria
      </motion.span>
    </Link>
  );
}
