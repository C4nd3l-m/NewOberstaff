"use client";
import { pasos } from "@/helpers/pasos";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], 
    },
    }),
};

const Timeline = () => {
    return (
        <section className="w-full py-10 px-4 bg-brand-dark text-black font-sans">
            <motion.h2
                    className="text-3xl font-display text-center mb-10 text-brand-light"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
            >
            ¿Cómo Funciona?
            </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
            {pasos.map((paso, index) => (
            <motion.div
                key={paso.id}
                className="relative group flex flex-col items-center text-center max-w-xs"
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
            <div className="bg-brand-accent p-4 rounded-full text-black mb-4">
                {paso.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-brand-light">{paso.title}</h3>
            <p className="text-sm text-brand-gray group-hover:opacity-100 opacity-70 transition-opacity">
                {paso.description}
            </p>
            {index < pasos.length - 1 && (
                <div className="hidden md:block absolute top-6 right-[-60px] w-10 border-t-2 border-brand-secondary" />
            )}
            </motion.div>
        ))}
        </div>
    </section>
    );
};

export default Timeline;
