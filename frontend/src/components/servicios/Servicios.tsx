import ServiciosCard from "@/components/servicios/ServiciosCard";

const Servicios = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-pink mb-12 text-center tracking-tight">
        Áreas de servicio
      </h1>
      <ServiciosCard />
    </section>
  );
};

export default Servicios;
