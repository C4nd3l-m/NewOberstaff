"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

const ButtonAgenda = () => {
  return (
    <Link
  href="https://oberstaff.com/llamada"
  className="
    flex items-center gap-3
    px-6 py-3
    
    rounded-full
    shadow-lg
    hover:bg-brand-accent hover:text-grey
    transition
    duration-300
    active:scale-95
    select-none
    bg-pink-400 text-white font-semibold hover:bg-pink-500 transition
  "
>
  <Calendar size={28} />
  <span>Programa una llamada</span>
</Link>

  );
};

export default ButtonAgenda;
