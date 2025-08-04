import CardBeneficios from "@/components/beneficios/CardBeneficios";

const Beneficios = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-4xl md:text-5xl font-display font-extrabold text-center mb-12 tracking-tight ">
        ¿Por qué elegirnos?
      </h1>
      <CardBeneficios />
    </section>
  );
};

export default Beneficios;

