import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Regalado Group | Bienes Raíces en Venezuela",
  description:
    "Agencia inmobiliaria líder en Venezuela con 26+ años de experiencia. Compra, venta y alquiler de propiedades residenciales y comerciales en Maracaibo, Caracas y Falcón.",
  keywords: "inmobiliaria, bienes raíces, Venezuela, Maracaibo, Caracas, propiedades, casas, apartamentos, alquiler, venta",
  openGraph: {
    title: "Regalado Group | Bienes Raíces en Venezuela",
    description: "Tu hogar ideal está más cerca. 26+ años de experiencia inmobiliaria.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
