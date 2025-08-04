import { Users2Icon } from "lucide-react";

const QueEs = () => {
  return (
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
  );
};

export default QueEs;
