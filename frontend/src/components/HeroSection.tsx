'use client';

import { motion } from 'framer-motion';
import ButtonAgenda from './ButtonAgenda';

const HeroSection = () => {
    return (
        <section className="pt-24 container mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
                className="flex-1 text-center md:text-left space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight">
            Contrata diferente.
        </h1>
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight">
            Crece sin límites.
        </h1>
        <p className="text-base md:text-lg font-sans text-brand-gray max-w-3xl mx-auto md:mx-0 leading-relaxed">
            Accede a talento remoto de alto nivel en Sudamérica y ahorra hasta un 70% en comparación con la contratación tradicional. 🎯 Más de 5000 empresas ya confían en nosotros.
        </p>
        <ButtonAgenda />
        </motion.div>

        <motion.div
            className="flex-1 max-w-xl rounded-xl overflow-hidden shadow-lg border border-brand-secondary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
        <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/HPx5IsSYI8Q?controls=0&modestbranding=1&rel=0&showinfo=0"
            title="Video de Oberstaff"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
        />
        </motion.div>
    </section>
    );
};

export default HeroSection;
