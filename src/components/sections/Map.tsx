"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Map() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-2xl mx-auto -mt-40 relative z-20 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[#F9F9F9] rounded-full flex items-center justify-center text-[#D96227] mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Onde fica o Cipriani Tower
          </h2>
          <p className="text-gray-500 font-sans text-lg">
            Rua Marechal Deodoro, 527<br />
            Bairro Velha — Blumenau/SC
          </p>
        </div>

      </div>

      <div className="w-full h-[300px] md:h-[350px] mt-12 relative flex items-center justify-center bg-[#1A1A1A]">
        <span className="absolute text-white text-center px-6 z-0 text-sm md:text-base font-sans">
          Caso o mapa não esteja aparecendo aqui, recarregue a página para visualizá-lo.
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.125139932468!2d-49.0883652!3d-26.9059533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1f2bf29a65df%3A0xc6ed4f4949f2b84f!2sR.%20Mal.%20Deodoro%2C%20527%20-%20Velha%2C%20Blumenau%20-%20SC%2C%2089036-001!5e0!3m2!1spt-BR!2sbr!4v1716900000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-10"
        />
      </div>
    </section>
  );
}
