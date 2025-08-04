"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const logo = "/logo.png";

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50  shadow-lg border-b border-pink-400/30 backdrop-blur-md"
        >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
            <Link href="#inicio" className="flex items-center">
                <Image
                    title="Oberstaff Logo"
                    src={logo}
                    alt="Oberstaff Logo"
                    width={140}
                    height={140}
                    className="object-contain"
                    priority
                />
            </Link>

        <ul className="hidden md:flex gap-8 font-sans text-sm tracking-wide">
            {[
                { href: "#que-es", label: "¿Qué es Oberstaff?" },
                { href: "#por-que", label: "¿Por qué elegirnos?" },
                { href: "#como-funciona", label: "¿Cómo funciona?" },
                { href: "#areas-servicio", label: "Áreas de Servicio" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#contacto", label: "Contacto" },
            ].map(({ href, label }) => (
            <li key={href}>
                <a
                    href={href}
                    className="hover:text-pink-300 transition-colors duration-300"
                >
                    {label}
                </a>
            </li>
            ))}
        </ul>

        <div className="hidden md:flex gap-6 font-sans text-sm tracking-wide">
            <Link
                href="https://oberstaff.com/blog/"
                className="hover:text-pink-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                Blog
            </Link>
            <Link
                href="https://oberstaff.zohorecruit.com/jobs/Careers"
                className="hover:text-pink-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                ¿Buscas trabajo?
            </Link>
        </div>
        </div>
    </motion.nav>
    );
}
