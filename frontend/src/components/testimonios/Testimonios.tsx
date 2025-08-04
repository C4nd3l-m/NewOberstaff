import CardTestimonio from "./CardTestimonio";

const Testimonios = () => {
  return (
    <section className="text-center ">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-black tracking-tight">
        Casos de éxito
      </h2>
      <p className="text-lg md:text-xl font-sans leading-relaxed">
        En Oberstaff creemos que nuestros resultados hablan más que las palabras.  
        <br />
        ¿Querés ser parte de la lista de clientes satisfechos con nuestro servicio?
      </p>
      <CardTestimonio />
    </section>
  );
};

export default Testimonios;
