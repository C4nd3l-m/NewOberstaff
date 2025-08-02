'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const faqList = [
  { question: '¿La persona trabajará solo para mí?', answer: 'Sí, 100% para ti a jornada completa.' },
  { question: '¿Puedo prescindir de la persona cuando quiera?', answer: 'Sí. Solamente requerimos un preaviso de 30 días.' },
  { question: '¿Qué coste tiene prescindir de sus servicios?', answer: '$0. No te penalizamos por prescindir del servicio.' },
  { question: '¿Tengo que pagar beneficios como la seguridad social?', answer: 'No. Se te factura como un servicio profesional externo.' },
  { question: '¿Puedo entrevistar a la persona antes de que comience a trabajar para mí?', answer: 'Claro que sí. Te enviaremos de 3 a 5 perfiles para entrevistar.' },
  { question: '¿Cómo controlas al equipo a distancia?', answer: 'Te recomendaremos herramientas y servicios VOIP con número local.' },
  { question: '¿Cuánto tiempo tarda desde la contratación hasta la selección?', answer: 'Por lo general entre 2 semanas y 1 mes.' },
  { question: '¿Qué hacemos con la diferencia horaria?', answer: 'Los perfiles trabajan en tu horario de preferencia.' },
  { question: '¿Cómo me hacen el cobro?', answer: 'Mediante cobro automático mensual a tarjeta de débito o crédito.' },
  { question: '¿Cuánto cuesta?', answer: 'El costo mensual varía según el perfil. Te damos un único precio total, sin cargos ocultos.' },
];

export default function FaqBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="w-96 bg-brand-dark text-brand-light rounded-3xl shadow-lg border border-brand-gray p-6 space-y-4 opacity-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-xl">Preguntas Frecuentes</h2>
            <button
              title="Cerrar"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar FAQ"
              className="text-brand-light hover:text-brand-pink transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto pr-2">
            {faqList.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setSelected(selected === i ? null : i)}
                  className="w-full text-left font-semibold text-base text-brand-secondary hover:text-brand-pink transition duration-200"
                >
                  {faq.question}
                </button>
                {selected === i && (
                  <p className="mt-2 text-base text-brand-gray leading-relaxed">{faq.answer}</p>
                )}
                <hr className="my-3 border-brand-gray/30" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button
          title="Abrir FAQ"
          onClick={() => setIsOpen(true)}
          className="bg-brand-pink text-black p-5 rounded-full shadow-lg hover:bg-brand-accent transition"
          aria-label="Abrir FAQ"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
