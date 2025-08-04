import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FaqBot from "@/components/ui/Faqbot";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oberstaff - Talento de Sudamérica para tu empresa",
  description: "Talento de Sudamerica para tu empresa",
  icons: {
    icon: "/NewOberstaff.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Navbar />
        <Toaster richColors position="top-center" />
        <FaqBot />
        {children}
        <Footer />
      </body>
    </html>
  );
}
