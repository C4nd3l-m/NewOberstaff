"use client";

import { postForm } from "@/actions/postForm";
import { IContactForm } from "@/interfaces/IContactForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

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
      toast.dismiss(loadingToast);
      if (response?.ok) {
        toast.success("¡Formulario enviado con éxito!");
        setFormData({ nombre: "", email: "", telefono: "", comentarios: "" });
      } else {
        toast.error("Error al enviar el formulario");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Ocurrió un error inesperado");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto space-y-4 p-5 bg-brand-dark rounded-2xl shadow-lg text-black bg-pink-400"
    >
      {["nombre", "email", "telefono", "comentarios"].map((campo, idx) => (
        <motion.div
          key={campo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
          className="flex flex-col"
        >
          <label className="text-white text-sm mb-1 font-medium">
            {campo === "nombre"
              ? "Nombre y apellido"
              : campo === "email"
              ? "Email"
              : campo === "telefono"
              ? "Teléfono"
              : "Comentarios"}
          </label>

          {campo === "comentarios" ? (
            <textarea
              name={campo}
              value={formData[campo as keyof IContactForm]}
              onChange={handleChange}
              rows={3}
              className="p-2.5 rounded-xl bg-pink-300/20 text-white placeholder:text-brand-gray resize-none border border-brand-secondary/40 focus:outline-none focus:ring-2 focus:ring-brand-pink transition hover:scale-[1.01] duration-150"
              placeholder="Escribe aquí tus comentarios..."
            />
          ) : (
            <input
              name={campo}
              value={formData[campo as keyof IContactForm]}
              onChange={handleChange}
              type={campo === "email" ? "email" : "text"}
              className="p-2.5 rounded-xl bg-pink-300/20 text-white placeholder:text-brand-gray border border-brand-secondary/40 focus:outline-none focus:ring-2 focus:ring-brand-pink transition hover:scale-[1.01] duration-150"
              placeholder={
                campo === "telefono"
                  ? "Ej: +54 9 11 1234-5678"
                  : campo === "email"
                  ? "tu@email.com"
                  : "Tu nombre completo"
              }
            />
          )}
        </motion.div>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-2.5 rounded-xl bg-brand-pink text-white font-semibold hover:bg-pink-500 transition"
      >
        Enviar
      </motion.button>
    </motion.form>
  );
};

export default FormContacto;
