import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cipriani Tower | Empreendimento de Luxo no bairro Velha, Blumenau/SC",
  description: "Cipriani Tower — apartamentos de 84 a 86 m², 2 suítes, vaga dupla de garagem e lazer completo. Últimas unidades, direto com a construtora.",
  icons: {
    icon: "/logo-oma.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
