import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-16">
          <div className="text-center md:text-left space-y-4 max-w-sm">
            <h2 className="font-semibold tracking-widest uppercase text-white text-3xl">
              Cipriani <span className="font-light">Tower</span>
            </h2>
            <p className="text-gray-400 font-sans">
              Rua Marechal Deodoro, 527<br />
              Bairro Velha — Blumenau/SC
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-6 font-sans">
              Últimas unidades direto com a construtora.
            </p>
            <Button variant="primary" size="lg">
              Agendar Visita
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} Cipriani Tower. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <span>desenvolvido por</span>
            <a
              href="https://bystepdigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0077bc] hover:opacity-80 transition-opacity"
            >
              ByStep Digital
            </a>
            <span>e</span>
            <a
              href="https://muxstudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold bg-gradient-to-r from-[#fc5916] to-[#fc5916] text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              MUXStudio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
