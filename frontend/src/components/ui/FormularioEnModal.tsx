"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import FormContacto from "@/components/FormContacto";
import { Mail } from "lucide-react";

const FormModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-pink-400 text-white font-semibold rounded-xl hover:bg-brand-accent transition shadow"
            >
                <Mail size={18} />
                Contáctanos
            </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <FormContacto />
        </Modal>
        </>
    );
};

export default FormModal;
