import Image from "next/image";
import Link from "next/link";
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaTiktok,
} from "react-icons/fa";

export default function Footer() {
    const best = "/best.png";
    const oneplanet = "/oneplanet.png";

    return (
        <footer className="w-full bg-brand-dark text-white py-10 mt-16 font-sans">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
                <Image
                    src={oneplanet}
                    alt="One Planet"
                    width={150}
                    height={150}
                    className="rounded-md"
                />
                <Image
                    src={best}
                    alt="Best"
                    width={150}
                    height={150}
                    className="rounded-md"
                />
            </div>

        <div className="flex gap-6">
            <Link
                href="https://www.linkedin.com/company/oberstaff"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className="text-2xl hover:text-brand-pink transition" />
            </Link>
            <Link
                href="https://www.instagram.com/oberstaff"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram className="text-2xl hover:text-brand-pink transition" />
            </Link>
            <Link
                href="https://www.facebook.com/oberstaff/?locale=hi_IN"
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaFacebook className="text-2xl hover:text-brand-pink transition" />
            </Link>
            <Link
                href="https://www.tiktok.com/@oberstaff"
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaTiktok className="text-2xl hover:text-brand-pink transition" />
            </Link>
        </div>

        <div className="text-center text-sm space-y-2 mt-4">
            <Link
                href="https://oberstaff.com/politica-de-privacidad-y-cookies-de-oberstaff-com/"
                className="text-brand-pink hover:underline transition"
                target="_blank"
                rel="noopener noreferrer"
            >
                Privacy Policy and Use of Cookies
            </Link>
            <p className="text-gray-300">
                © {new Date().getFullYear()} Oberstaff. Todos los derechos
                reservados.
            </p>
            <p className="text-gray-400">
                Comprometidos con la calidad y la excelencia en el servicio.
            </p>
            </div>
        </div>
        </footer>
    );
}
