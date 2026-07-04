"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden">

        {/* Background Image - Último terço direito no desktop */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 z-0">
          <Image
            src="/images/VISTA EXTERNA GPT.png"
            alt="Cipriani Tower Fachada"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-30 lg:opacity-100 object-[20%_center]"
            priority
          />
          {/* Gradiente para mesclar a imagem com o fundo preto (esq para dir) */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
          {/* Overlay escuro pro mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 lg:hidden" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-28 pb-12">

          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] tracking-tight mb-8 max-w-3xl">
                Viva a experiência de morar em uma das melhores localizações de Blumenau
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed mb-8 max-w-2xl">
                Cipriani Tower — apartamentos de alto padrão, de 84 a 86 m², 2 suítes, vaga dupla de garagem e lazer completo, no bairro Velha. Últimas unidades, direto com a construtora.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "1 vaga dupla de garagem + opção de depósito",
                  "Lazer completo: piscina aquecida, cinema, fitness e mais",
                  "Localização nobre no bairro Velha, Blumenau/SC",
                  "Últimas unidades — direto com a construtora"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                    className="flex items-start text-gray-200 font-sans text-sm md:text-base"
                  >
                    <span className="mt-0.5 mr-3 flex-shrink-0 bg-[#C4A57A]/20 p-1 rounded-full text-[#C4A57A]">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
                <Button size="lg" className="w-full sm:w-auto">
                  Agendar minha visita
                </Button>
                <p className="text-sm text-gray-400 font-sans max-w-[200px] text-center sm:text-left">
                  Atendimento direto com a equipe de vendas.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
