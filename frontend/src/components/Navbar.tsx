import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const logo = "/logo.png"
  return (
    <nav className="w-full bg-brand-pink py-4 px-8 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Image
            title="logo"
            src={logo}
            alt="Oberstaff Logo"
            width={150}
            height={150}
        />
        <Link href="/hacemos">¿Qué hacemos?</Link>
        <Link href="/funciona">¿Cómo funciona?</Link>
        <Link href="https://oberstaff.com/blog/">Blog</Link>
        <Link href="https://oberstaff.zohorecruit.com/jobs/Careers">¿Buscas trabajo?</Link>
        
      </div>
    </nav>
  );
}