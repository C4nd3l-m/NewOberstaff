import HeroSection from "@/components/HeroSection";
import Funciona from "@/components/funciona/Funciona";
import Beneficios from "@/components/beneficios/Beneficios";
import Servicios from "@/components/servicios/Servicios";
import Testimonios from "@/components/testimonios/Testimonios";
import FormContacto from "@/components/FormContacto";
import ButtonAgenda from "@/components/ButtonAgenda";
import { Users2Icon } from "lucide-react";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen bg-brand-bgLight text-brand-dark px-6 md:px-12 scroll-smooth selection:bg-brand-pink selection:text-brand-dark">
      
      <HeroSection />

      <section
        id="que-es"
        className="mt-24 container mx-auto bg-brand-pink/30 px-6 py-16 md:px-12 md:py-24 rounded-3xl shadow-lg border-2 border-brand-pink/60 text-center space-y-8 relative overflow-hidden"
      >
        <Users2Icon
          size={120}
          className="absolute top-6 right-6 text-pink-400/20 pointer-events-none select-none"
        />

        <h2 className="text-4xl md:text-5xl font-display text-brand-pink font-bold tracking-tight flex items-center justify-center gap-4">
          <Users2Icon size={40} className="inline-block text-pink-400" />
          ¿Qué es Oberstaff?
        </h2>

        <p className="text-lg md:text-xl font-sans text-brand-dark max-w-3xl mx-auto leading-relaxed">
          Somos una plataforma que conecta empresas con profesionales altamente
          calificados de América Latina, listos para trabajar 100% en remoto.
          Ofrecemos soluciones integrales de outsourcing que simplifican todo el
          proceso: búsqueda, selección y contratación.
        </p>
      </section>

      <section id="por-que" className="py-24 container mx-auto">
        <Beneficios />
      </section>

      <section id="como-funciona" className="py-24 container mx-auto">
        <Funciona />
        <div className="mt-14 flex justify-center">
          <ButtonAgenda />
        </div>
      </section>

      <section id="areas-servicio" className="py-24 container mx-auto">
        <Servicios />
      </section>

      <section id="testimonios" className="py-24 container mx-auto">
        <Testimonios />
      </section>

      <section id="contacto" className="py-24 container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-pink mb-12 text-center tracking-tight">
          Contáctanos
        </h1>

        <FormContacto />
      </section>
    </main>
  );
}
