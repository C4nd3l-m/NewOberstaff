"use client";

import { postForm } from "@/actions/postForm";
import { IContactForm } from "@/interfaces/IContactForm";
import { useState } from "react";
import toast from "react-hot-toast";

const FormContacto = () => {
  const [formData, setFormData] = useState<IContactForm>({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = () => {
    if (!formData.nombre.trim()) {
      toast.error("El nombre es obligatorio.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("El email no es válido.");
      return false;
    }
    if (formData.telefono.trim().length < 6) {
      toast.error("El teléfono debe tener al menos 6 dígitos.");
      return false;
    }
    if (!formData.comentarios.trim()) {
      toast.error("Los comentarios son obligatorios.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    const loadingToast = toast.loading("Enviando formulario...");
    try {
      const response = await postForm(formData);
      if (response?.ok) {
        toast.success("¡Formulario enviado con éxito!", { id: loadingToast });
        setFormData({ nombre: "", email: "", telefono: "", comentarios: "" });
      } else {
        toast.error("Error al enviar el formulario", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Ocurrió un error inesperado", { id: loadingToast });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full mx-auto space-y-6 p-6 bg-brand-dark rounded-2xl shadow-[0_4px_20px_rgba(107,114,128,0.3)]"
    >
      <h2 className="text-2xl font-display text-brand-light text-center">
        Contáctanos
      </h2>

      <div className="flex flex-col">
        <label className="text-brand-light mb-1 font-medium">Nombre y apellido</label>
        <input
          title="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          type="text"
          className="p-3 rounded-xl bg-brand-pink/20 text-brand-light placeholder:text-brand-gray border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-pink transition"
          placeholder="Tu nombre completo"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-brand-light mb-1 font-medium">Email</label>
        <input
          title="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="p-3 rounded-xl bg-brand-pink/20 text-brand-light placeholder:text-brand-gray border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-pink transition"
          placeholder="tu@email.com"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-brand-light mb-1 font-medium">Teléfono</label>
        <input
          title="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          type="text"
          className="p-3 rounded-xl bg-brand-pink/20 text-brand-light placeholder:text-brand-gray border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-pink transition"
          placeholder="Ej: +54 9 11 1234-5678"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-brand-light mb-1 font-medium">Comentarios</label>
        <textarea
          title="comentarios"
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          rows={4}
          className="p-3 rounded-xl bg-brand-pink/20 text-brand-light placeholder:text-brand-gray resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-pink transition"
          placeholder="Escribe aquí tus comentarios..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-xl bg-pink-400 text-white font-semibold hover:bg-pink-500 transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormContacto;
