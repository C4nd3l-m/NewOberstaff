const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { IContactForm } from "@/interfaces/IContactForm";

export const postForm = async (formData: IContactForm) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.nombre,     
        email: formData.email,
        phone: formData.telefono,
        message: formData.comentarios,
      }),
    });

    return response;
  } catch (error) {
    console.error("Error al enviar:", error);
    return null;
  }
};
