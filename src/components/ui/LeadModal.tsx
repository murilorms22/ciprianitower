"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { useState } from "react";

export function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    momento: "Apenas pesquisando",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mensagem pre-formatada para o WhatsApp
    const mensagem = `Olá! Gostaria de agendar uma visita para o Cipriani Tower. Meu nome é ${formData.nome}.`;
    const whatsappUrl = `https://wa.me/5547996744444?text=${encodeURIComponent(mensagem)}`;
    
    // Redireciona imediatamente
    window.location.href = whatsappUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="bg-white rounded-[24px] p-8 shadow-2xl relative overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Agende sua visita
                </h3>
                <p className="text-gray-500">
                  Preencha os dados abaixo para falar diretamente com a construtora.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A57A] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A57A] focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A57A] focus:border-transparent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Momento de compra
                  </label>
                  <select
                    value={formData.momento}
                    onChange={(e) => setFormData({ ...formData, momento: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A57A] focus:border-transparent transition-all bg-white"
                  >
                    <option>Apenas pesquisando</option>
                    <option>Pretendo decidir nos próximos 30 dias</option>
                    <option>Pretendo decidir nos próximos 90 dias</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white rounded-xl py-4 font-medium hover:bg-[#333333] transition-colors mt-4 shadow-lg"
                >
                  Continuar para o WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
