import Funciona from "@/components/funciona/Funciona";
import Beneficios from "@/components/beneficios/Beneficios";
import Servicios from "@/components/servicios/Servicios";
import Testimonios from "@/components/testimonios/Testimonios";
import FormContacto from "@/components/FormContacto";
import ButtonAgenda from "@/components/ButtonAgenda";
import FormModal from "@/components/ui/FormularioEnModal";

export default function Home() {
  return (
    <main className="pt-15 min-h-screen bg-brand-bgLight text-brand-dark px-6 md:px-12 lg:px-24 scroll-smooth selection:bg-brand-pink selection:text-brand-dark">
      <section
  id="inicio"
  className="py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6"
>
  <div className="flex-1 text-center md:text-left space-y-8" >
    <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight">
      Contrata diferente.
    </h1>
    <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight">
      Crece sin límites.
    </h1>
    <p className="text-base md:text-lg font-sans text-brand-gray max-w-3xl mx-auto md:mx-0 leading-relaxed">
      Accede a talento remoto de alto nivel en Sudamérica y ahorra hasta un
      70% en comparación con la contratación tradicional. 🎯 Más de 5000
      empresas ya confían en nosotros.
    </p>
    <ButtonAgenda/>
  </div>

  <div className="flex-1 max-w-xl rounded-xl overflow-hidden shadow-lg border border-brand-secondary">
    <iframe
      className="w-full aspect-video"
      src="https://www.youtube.com/embed/HPx5IsSYI8Q?controls=0&modestbranding=1&rel=0&showinfo=0"
      title="Video de Oberstaff"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
</section>


      <section
        id="que-es"
        className="mt-24 max-w-4xl mx-auto bg-brand-pink/20 p-12 rounded-3xl shadow-lg border border-brand-pink/40"
      >
        <h2 className="text-3xl font-display text-brand-pink font-semibold text-center mb-6 tracking-tight">
          ¿Qué es Oberstaff?
        </h2>
        <p className="text-brand-dark text-base md:text-lg text-center leading-relaxed font-sans max-w-xl mx-auto">
          Somos una plataforma que conecta empresas con profesionales altamente
          calificados de América Latina, listos para trabajar 100% en remoto.
          Ofrecemos soluciones integrales de outsourcing que simplifican todo el
          proceso: búsqueda, selección y contratación.
        </p>
      </section>

      <section id="por-que" className="py-24">
        <Beneficios />
      </section>

      <section id="como-funciona" className="py-24 max-w-5xl mx-auto px-6">
        <Funciona />
        <div className="mt-14 flex justify-center ">
          <ButtonAgenda />
        </div>
      </section>

      <section id="areas-servicio" className="py-24">
        <Servicios />
        <FormModal/>
      </section>

      <section id="testimonios" className="py-24">
        <Testimonios />
        <FormModal/>
      </section>

      <section id="contacto" className="py-24 max-w-3xl mx-auto px-6">
        <FormContacto />
        <FormModal/>
      </section>
    </main>
  );
}
