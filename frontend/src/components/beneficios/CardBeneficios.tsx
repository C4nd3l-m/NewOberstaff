import React from "react";
import { beneficios } from "@/helpers/beneficios";

const CardBeneficios = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
      {beneficios.map((ben) => (
        <div
          key={ben.id}
          className="relative flex flex-col justify-between rounded-2xl bg-brand-dark p-6 shadow-brand-lg border border-brand-secondary hover:border-brand-pink hover:shadow-[0_0_15px_#f472b6] transition-all duration-300 cursor-pointer"
        >
          {/* Fondo difuminado rosa */}
          <div className="absolute -inset-12 bg-brand-pink blur-[80px] opacity-20 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-5 text-4xl text-brand-pink">{ben.icon}</div>
            <h3 className="mb-3 text-xl font-display font-semibold text-brand-light">
              {ben.title}
            </h3>
            <p className="text-sm font-sans text-brand-gray leading-relaxed">
              {ben.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBeneficios;
