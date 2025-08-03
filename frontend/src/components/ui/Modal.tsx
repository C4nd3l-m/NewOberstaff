"use client";
import { ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-brand-dark text-white rounded-2xl p-4 w-full max-w-md shadow-2xl relative border border-brand-secondary/30">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-brand-light hover:text-brand-pink transition"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>
            <div className="space-y-3">{children}</div>
        </div>
    </div>
    );
};

export default Modal;
