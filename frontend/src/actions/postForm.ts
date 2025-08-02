const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { IContactForm } from "@/interfaces/IContactForm";

export const postForm = async (formData: IContactForm) => {
  try {
    const data = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};
