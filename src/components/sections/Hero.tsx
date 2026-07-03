"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden">
      {/* Background Image / Overlay para Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image 
          src="/images/CIPRIANI TOWER 2.jpg"
          alt="Cipriani Tower Fachada"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20">
        
        {/* Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center py-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6">
              Viva a experiência de morar em uma das melhores localizações de Blumenau, com duas suítes e acabamento de alto padrão
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-sans mb-10 max-w-xl leading-relaxed">
              Cipriani Tower — apartamentos de 84 a 86 m², 2 suítes, vaga dupla de garagem e lazer completo, no bairro Velha. Últimas unidades, direto com a construtora.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "1 vaga dupla de garagem + opção de depósito",
                "Lazer completo: piscina aquecida, cinema, fitness e mais",
                "Localização nobre no bairro Velha, Blumenau/SC",
                "Últimas unidades — negociação direta com a construtora"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                  className="flex items-start text-gray-200 font-sans"
                >
                  <span className="mt-1 mr-3 flex-shrink-0 bg-[#C4A57A]/20 p-1 rounded-full text-[#C4A57A]">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button size="lg" className="w-full sm:w-auto">
                Agendar minha visita
              </Button>
              <p className="text-sm text-gray-400 font-sans max-w-[200px] text-center sm:text-left">
                Atendimento direto com a equipe de vendas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Right Side (Desktop) */}
        <div className="hidden lg:block lg:col-span-6 relative h-[90vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[85%] radius-mix-1 overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/CIPRIANI TOWER 2.jpg"
              alt="Cipriani Tower Fachada"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[20s] ease-out"
              priority
            />
            {/* Soft inner shadow/gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
