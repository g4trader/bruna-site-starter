import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <h4 className="font-serif text-lg font-semibold text-white">
            Bruna Melgarejo Advocacia Criminal
          </h4>
          <p className="text-sm text-white/80">OAB/RS 115.891</p>
          <p className="text-sm text-white/80">Porto Alegre • RS</p>
          <div className="pt-4 space-y-1 text-sm text-white/80">
            <p><strong className="text-white">WhatsApp:</strong> (51) 98163-5522</p>
            <p><strong className="text-white">E-mail:</strong> bruna@brunamelgarejo.adv.br</p>
            <p><strong className="text-white">Site:</strong> brunamelgarejo.adv.br</p>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-brand-gold">Institucional</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>
              <Link href="/sobre" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/atuacao" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link href="/publicacoes" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Publicações
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-brand-gold">Legal</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-brand-gold transition-all duration-200 ease-in-out">
                Política de Privacidade
              </Link>
            </li>
          </ul>
          <div className="pt-4">
            <h4 className="font-semibold text-brand-gold mb-3">Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Bruna Melgarejo Advocacia Criminal. Todos os direitos reservados.
      </div>
    </footer>
  );
}

