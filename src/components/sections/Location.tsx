"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, BookOpen, Coffee, ShoppingBag, MapPin } from "lucide-react";

export function Location() {
  const points = [
    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Saúde",
      desc: "Hospital Unimed e Hospital Santa Isabel"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Educação",
      desc: "FURB (Universidade Regional de Blumenau) e UFSC (Universidade Federal de Santa Catarina)"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Lazer e Cultura",
      desc: "Parque Vila Germânica (Oktoberfest), Parque Ramiro e Teatro Carlos Gomes"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Compras e Serviços",
      desc: "Shopping Neumarkt, Angeloni Supermercado, Sam’s Club e Terminal Proeb (transporte público)"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Infographic Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 text-[#C4A57A] mb-4 font-medium tracking-wide text-sm uppercase">
              <MapPin className="w-5 h-5" />
              <span>Localização</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              No bairro Velha,<br /> perto de tudo o que importa
            </h2>
            <p className="text-gray-500 font-sans text-lg mb-6 max-w-lg">
              O Cipriani Tower fica na Rua Marechal Deodoro, 527, no bairro Velha — uma das regiões mais valorizadas de Blumenau, com fácil acesso ao centro, comércio, escolas e serviços.
            </p>
            <p className="text-gray-600 font-sans font-medium mb-10 max-w-lg">
              Estar no bairro Velha significa viver a poucos minutos dos principais pontos de Blumenau:
            </p>

            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 hidden md:block" />

              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-6 relative z-10 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 shadow-sm group-hover:border-[#C4A57A] group-hover:text-[#C4A57A] transition-colors shrink-0">
                    {point.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-medium text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none radius-mix-2 overflow-hidden shadow-xl">
              <Image
                src="/images/vista externa quadra gpt.png"
                alt="Localização Cipriani Tower"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
