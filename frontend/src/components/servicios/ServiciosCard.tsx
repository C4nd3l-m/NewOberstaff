"use client";
import { servicios } from "@/helpers/servicios";
import {
  Settings,
  PenTool,
  BarChart2,
  UserCheck,
  Megaphone,
  FileText,
} from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  "Gestión de Redes": <Settings size={24} className="text-brand-pink" />,
  "Diseño Gráfico": <PenTool size={24} className="text-brand-pink" />,
  "Estrategia Comercial": <BarChart2 size={24} className="text-brand-pink" />,
  "Soporte Ejecutivo": <UserCheck size={24} className="text-brand-pink" />,
  "Marketing Digital": <Megaphone size={24} className="text-brand-pink" />,
  "Redacción Profesional": <FileText size={24} className="text-brand-pink" />,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServiciosCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
      {servicios.map((ser, i) => (
        <motion.div
          key={ser.id}
          className="relative bg-brand-dark bg-opacity-90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.03] cursor-pointer"
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col h-full text-black">
            <div className="flex items-center gap-3 mb-3">
              {iconMap[ser.categoria]}
              <span className="text-pink-400 text-sm font-semibold tracking-wide uppercase">
                {ser.categoria}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold mb-4 text-brand-light leading-snug">
              {ser.descripcion}
            </h3>

            <ul className="space-y-2 flex-grow">
              {[ser.punto1, ser.punto2, ser.punto3].map((punto, i) => (
                <li
                  key={i}
                  className="text-sm text-brand-gray font-sans flex items-center gap-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-1" />
                  {punto}
                </li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-none absolute -left-1/3 -top-1/3 w-60 h-52 bg-pink-300 blur-[60px] opacity-20 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiciosCard;
