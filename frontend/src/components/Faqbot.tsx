'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="faq-panel"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-96 bg-white text-brand-dark rounded-3xl shadow-lg border border-brand-gray p-6 space-y-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display text-xl font-semibold">Preguntas Frecuentes</h2>
              <button
                title="Cerrar"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar FAQ"
                className="text-brand-dark hover:text-pink-200 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto pr-2">
              {faqList.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setSelected(selected === i ? null : i)}
                    className="w-full text-left font-semibold text-base text-brand-dark hover:text-pink-300 transition duration-200"
                  >
                    {faq.question}
                  </button>
                  <AnimatePresence>
                    {selected === i && (
                      <motion.p
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-base text-brand-gray leading-relaxed overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <hr className="my-3 border-brand-gray/30" />
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="faq-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            title="Abrir FAQ"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-pink-400 text-black px-4 py-3 rounded-full shadow-lg hover:bg-brand-accent transition font-medium"
            aria-label="Abrir FAQ"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:inline">Preguntas frecuentes</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
