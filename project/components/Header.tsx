
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
    <header className={`sticky top-0 z-50 transition ${scrolled ? "shadow-md" : ""}`}>
      <div className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Bruna Melgarejo — Advocacia Criminal" width={150} height={40} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/sobre" className="hover:text-brand-gold">Sobre</Link>
            <Link href="/atuacao" className="hover:text-brand-gold">Atuação</Link>
            <Link href="/publicacoes" className="hover:text-brand-gold">Publicações</Link>
            <Link href="/blog" className="hover:text-brand-gold">Blog</Link>
            <Link href="/contato" className="hover:text-brand-gold">Contato</Link>
            <Link href="/contato" className="rounded-xl bg-brand-gold text-brand-dark px-4 py-2 font-semibold shadow-sm hover:opacity-90">
              Agendar consulta
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
