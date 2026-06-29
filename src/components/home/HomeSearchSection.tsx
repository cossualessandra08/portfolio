"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HomeSearchSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/archive${params.toString() ? `?${params}` : ""}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by code, yarn, stitch..."
          className="w-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-sm transition-colors duration-300 focus:border-white focus:bg-white/15 focus:outline-none"
        />
        <Button type="submit" variant="ghost" className="shrink-0">
          Search
        </Button>
      </motion.div>
    </form>
  );
}
