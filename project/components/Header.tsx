
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = useMemo(
    () => [
      { href: "/sobre", label: "Sobre" },
      { href: "/atuacao", label: "Atuação" },
      { href: "/publicacoes", label: "Publicações" },
      { href: "/blog", label: "Blog" },
      { href: "/contato", label: "Contato" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-brand-gold transition-all duration-200 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="rounded-xl bg-brand-gold text-brand-dark px-4 py-2 font-semibold shadow-sm hover:bg-brand-gold/90 transition-all duration-200 ease-in-out"
            >
              Agendar consulta
            </Link>
          </nav>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:border-brand-gold/60 hover:text-brand-gold transition-all duration-200 ease-in-out"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden bg-brand-dark/95 border-t border-white/10 transition-[max-height] duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-2 rounded-xl bg-brand-gold text-brand-dark px-4 py-3 font-semibold shadow-sm hover:bg-brand-gold/90 transition-all duration-200 ease-in-out"
            >
              Agendar consulta
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
