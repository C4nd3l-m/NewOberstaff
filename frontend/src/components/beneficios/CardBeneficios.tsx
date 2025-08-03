"use client";
import React from "react";
import { beneficios } from "@/helpers/beneficios";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const CardBeneficios = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
      {beneficios.map((ben, index) => (
        <motion.div
          key={ben.id}
          className="relative flex flex-col justify-between rounded-2xl bg-brand-dark p-6 shadow-brand-lg border border-brand-secondary hover:border-pink-200 hover:shadow-[0_0_15px_#f472b6] transition-all duration-300 cursor-pointer hover:scale-[1.03]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={index}
          variants={fadeInUp}
        >
          <div className="absolute -inset-12 bg-pink-200 blur-[80px] opacity-20 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-5 text-4xl text-pink-400">{ben.icon}</div>
            <h3 className="mb-3 text-xl font-display font-semibold text-brand-light">
              {ben.title}
            </h3>
            <p className="text-sm font-sans text-brand-gray leading-relaxed">
              {ben.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardBeneficios;
