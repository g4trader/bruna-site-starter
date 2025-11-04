
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/sobre", label: "Sobre" },
    { href: "/atuacao", label: "Atuação" },
    { href: "/publicacoes", label: "Publicações" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-white border-b border-brand-light transition-all duration-200 ease-in-out ${
        scrolled ? "shadow-md h-14" : "h-16"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="font-serif text-lg md:text-xl hover:opacity-80 transition-all duration-200 ease-in-out">
          <span className="font-semibold text-brand-dark">Bruna Melgarejo</span>{" "}
          <span className="text-brand-ink">Advocacia Criminal</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-ink hover:text-brand-gold transition-all duration-200 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-xl bg-brand-dark text-white px-4 py-2 font-semibold shadow-sm hover:bg-brand-dark/90 transition-all duration-200 ease-in-out"
          >
            Agendar consulta
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-brand-dark hover:text-brand-gold transition-colors duration-200 ease-in-out"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-brand-light bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-ink hover:text-brand-gold transition-all duration-200 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="block rounded-xl bg-brand-dark text-white px-4 py-2 font-semibold text-center hover:bg-brand-dark/90 transition-all duration-200 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar consulta
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
