import HeroSection from "@/components/HeroSection";
import Funciona from "@/components/funciona/Funciona";
import Beneficios from "@/components/beneficios/Beneficios";
import Servicios from "@/components/servicios/Servicios";
import Testimonios from "@/components/testimonios/Testimonios";
import FormContacto from "@/components/FormContacto";
import ButtonAgenda from "@/components/ButtonAgenda";
import FormModal from "@/components/ui/FormModal";
import QueEs from "@/components/QueEs";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen bg-brand-bgLight text-brand-dark px-6 md:px-12 scroll-smooth selection:bg-brand-pink selection:text-brand-dark">
      <HeroSection />

      <section id="que-es">
        <QueEs />
      </section>
      <section
        id="por-que"
        className="py-24 container mx-auto flex flex-col items-center gap-12"
      >
        <Beneficios />
        <div className="w-full flex justify-center -mt-20">
          <FormModal />
        </div>
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
