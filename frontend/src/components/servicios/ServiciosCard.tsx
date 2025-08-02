import { servicios } from "@/helpers/servicios";
import {
  Settings,
  PenTool,
  BarChart2,
  UserCheck,
  Megaphone,
  FileText,
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  "Gestión de Redes": <Settings size={24} className="text-brand-pink" />,
  "Diseño Gráfico": <PenTool size={24} className="text-brand-pink" />,
  "Estrategia Comercial": <BarChart2 size={24} className="text-brand-pink" />,
  "Soporte Ejecutivo": <UserCheck size={24} className="text-brand-pink" />,
  "Marketing Digital": <Megaphone size={24} className="text-brand-pink" />,
  "Redacción Profesional": <FileText size={24} className="text-brand-pink" />,
};

const ServiciosCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
      {servicios.map((ser) => (
        <div
          key={ser.id}
          className="relative bg-brand-dark bg-opacity-90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform cursor-pointer"
        >
          <div className="flex flex-col h-full text-black">
            <div className="flex items-center gap-3 mb-3">
              {iconMap[ser.categoria]}
              <span className="text-brand-pink text-sm font-semibold tracking-wide uppercase">
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
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-pink mt-1" />
                  {punto}
                </li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-none absolute -left-1/3 -top-1/3 w-60 h-52 bg-brand-pink blur-[60px] opacity-20 rounded-full" />
        </div>
      ))}
    </div>
  );
};

export default ServiciosCard;
