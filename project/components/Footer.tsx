
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-line bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <h4 className="font-serif text-lg font-semibold text-brand-dark">
            Bruna Melgarejo Advocacia Criminal
          </h4>
          <p className="text-sm text-slate-600">OAB/RS 115.891</p>
          <p className="text-sm text-slate-600">Porto Alegre • RS</p>
          <div className="pt-4 space-y-1 text-sm">
            <p><strong className="text-brand-ink">WhatsApp:</strong> (51) 98163-5522</p>
            <p><strong className="text-brand-ink">E-mail:</strong> bruna@brunamelgarejo.adv.br</p>
            <p><strong className="text-brand-ink">Site:</strong> brunamelgarejo.adv.br</p>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-brand-dark">Institucional</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/sobre" className="text-slate-600 hover:text-brand-dark transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/atuacao" className="text-slate-600 hover:text-brand-dark transition-colors">
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link href="/publicacoes" className="text-slate-600 hover:text-brand-dark transition-colors">
                Publicações
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-slate-600 hover:text-brand-dark transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-brand-dark">Legal</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/politica-de-privacidade" className="text-slate-600 hover:text-brand-dark transition-colors">
                Política de Privacidade
              </Link>
            </li>
          </ul>
          <div className="pt-4">
            <h4 className="font-semibold text-brand-dark mb-3">Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-brand-line py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Bruna Melgarejo Advocacia Criminal. Todos os direitos reservados.
      </div>
    </footer>
  );
}
