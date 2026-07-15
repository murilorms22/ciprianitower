"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Amenities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Um lazer completo, para todos os momentos da sua família
            </h2>
            <p className="text-gray-500 font-sans text-lg">
              Mais do que um apartamento: um estilo de vida. O Cipriani Tower reúne infraestrutura de lazer completa dentro de casa.
            </p>
          </div>
          <div>
            <Button variant="outline" className="hidden md:inline-flex">
              Saiba mais
            </Button>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {/* Bento Item 1: Piscina (Large, width 2, height 1) */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 relative group overflow-hidden radius-mix-1">
            <Image 
              src="/images/PISCINA_NOTURNA_NOVA.jpg" 
              alt="Piscina Aquecida" 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-medium text-white mb-2">Piscina Aquecida</h3>
              <p className="text-gray-200 font-sans text-sm">Infantil e Adulto</p>
            </div>
          </motion.div>

          {/* Bento Item 2: Cinema (width 1, height 1) */}
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl">
            <Image 
              src="/images/CINEMA 2.jpg" 
              alt="Cinema" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Cinema</h3>
            </div>
          </motion.div>

          {/* Bento Item 3: List of Features (Infraestrutura, width 1, height 2) */}
          <motion.div variants={itemVariants} className="bg-[#F9F9F9] p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col justify-center row-span-2">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Infraestrutura</h3>
            <ul className="space-y-3 font-sans text-gray-600 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Piscina adulto e infantil aquecida</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Bar molhado</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Quadra Poliesportiva</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Playground</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Praça do fogo</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Espaço pet</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Cinema</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />2 salões de festas</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Academia</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Sala de Jogos</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Brinquedoteca</li>
            </ul>
          </motion.div>

          {/* Bento Item 4: Academia (width 1, height 1) */}
          <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-3xl">
            <Image 
              src="/images/ACADEMIA_NOVA.jpg" 
              alt="Espaço Fitness" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Espaço Fitness</h3>
            </div>
          </motion.div>

          {/* Bento Item 5: Text Block (Diferenciais, width 1, height 1) */}
          <motion.div variants={itemVariants} className="bg-[#1A1A1A] p-8 md:p-10 flex flex-col justify-center radius-mix-2 text-white">
            <h3 className="text-xl font-medium mb-4">Diferenciais do apartamento</h3>
            <ul className="space-y-3 font-sans text-gray-400 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Vaga dupla de garagem</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Sacada gourmet</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Acabamento em porcelanato</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A57A] mr-3 shrink-0" />Andares altos, com vista para Blumenau</li>
            </ul>
          </motion.div>

          {/* Bento Item 6: Salão de Festas (width md:2, lg:1, height 1) */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 relative group overflow-hidden rounded-3xl">
            <Image 
              src="/images/SALÃO DE FESTAS 2.jpg" 
              alt="Salão de Festas" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium text-white">Salão de Festas</h3>
            </div>
          </motion.div>

        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Saiba mais
          </Button>
        </div>

      </div>
    </section>
  );
}
