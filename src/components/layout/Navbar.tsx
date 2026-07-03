"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glassmorphism py-4 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className={`font-semibold tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-[#1A1A1A] text-xl" : "text-white text-2xl"
            }`}>
            Cipriani <span className="font-light">Tower</span>
          </h1>
        </div>

        <div>
          <Button
            variant={scrolled ? "primary" : "outline"}
            size="sm"
            className={!scrolled ? "text-white border-white hover:bg-white hover:text-black" : ""}
          >
            Agendar Visita
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
