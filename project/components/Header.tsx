
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ease-in-out ${scrolled ? "shadow-md" : ""}`}>
      <div className="bg-brand-dark text-white">
        <div className={`max-w-6xl mx-auto px-4 flex items-center justify-between transition-all duration-200 ease-in-out ${scrolled ? "h-[72px]" : "h-[84px]"}`}>
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div
              className={`relative transition-all duration-200 ease-in-out ${scrolled ? "h-[52px] w-[150px]" : "h-[68px] w-[170px]"}`}
            >
              <Image
                src="/logo.png"
                alt="Bruna Melgarejo — Advocacia Criminal"
                fill
                sizes="(max-width: 768px) 150px, 170px"
                priority
                className="object-contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/sobre" className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out">Sobre</Link>
            <Link href="/atuacao" className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out">Atuação</Link>
            <Link href="/publicacoes" className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out">Publicações</Link>
            <Link href="/blog" className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out">Blog</Link>
            <Link href="/contato" className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out">Contato</Link>
            <Link href="/contato" className="rounded-xl bg-brand-gold text-brand-dark px-4 py-2 font-semibold shadow-sm hover:bg-brand-gold/90 transition-all duration-200 ease-in-out">
              Agendar consulta
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
