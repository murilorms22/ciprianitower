"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center overflow-hidden bg-[#1A1A1A]">

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagem-hero2.png"
          alt="Cipriani Tower Fachada"
          fill
          quality={100}
          className="object-cover"
          priority
          loading="eager"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-black/30 md:hidden" /> {/* Extra darkening for mobile */}
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col space-y-6 mt-16 md:mt-20"
        >
          {/* Eyebrow */}
          <span className="text-[#C4A57A] uppercase tracking-[0.2em] text-xs md:text-sm font-extrabold">
            Últimas unidades — direto com a construtora
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
            Viva a experiência de morar em uma das <span className="text-[#C4A57A]">melhores localizações</span> de Blumenau
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-xl text-gray-200 font-semibold leading-relaxed max-w-2xl">
            Cipriani Tower — apartamentos de <span className="text-white font-bold">alto padrão</span>, de 84 a 86 m², 2 suítes, vaga dupla de garagem e lazer completo, no bairro Velha.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 w-full">
            {[
              "1 vaga dupla de garagem + opção de depósito",
              "Lazer completo: piscina aquecida, cinema e mais",
              "Localização nobre no bairro Velha, Blumenau/SC",
              "Últimas unidades — direto com a construtora"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                className="flex items-center space-x-3 bg-black/40 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10"
              >
                <div className="flex-shrink-0 bg-[#C4A57A] p-1 md:p-1.5 rounded-full text-white shadow-lg">
                  <Check className="w-3 h-3 md:w-4 md:h-4" strokeWidth={4} />
                </div>
                <span className="text-white font-bold text-xs md:text-sm leading-tight">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-sm md:text-base font-extrabold tracking-widest uppercase bg-[#C4A57A] hover:bg-[#b0936a] text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-1">
              Agendar minha visita
            </Button>
            <p className="text-xs md:text-sm font-bold text-gray-300 tracking-wider uppercase text-center sm:text-left">
              Atendimento direto<br />com a equipe de vendas
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
