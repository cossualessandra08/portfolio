"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-white text-black border border-white hover:bg-transparent hover:text-white",
  ghost:
    "bg-transparent text-white border border-white/60 hover:bg-white hover:text-black",
  light:
    "bg-black text-white border border-black hover:bg-transparent hover:text-black",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-sm ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
