
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata = {
  title: "Sobre",
  description: "Bruna Melgarejo Rosa é advogada criminalista e professora de Direito Penal e Processo Penal, unindo prática e ensino para promover justiça.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Sobre</h1>
          <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium">
            OAB/RS 115.891
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-brand-ink leading-relaxed">
          <p className="text-lg">
            <strong className="text-brand-dark">Bruna Melgarejo Rosa</strong> é advogada criminalista e professora de
            Direito Penal e Processo Penal, unindo prática e ensino com o mesmo propósito: promover justiça, garantir
            direitos e transformar realidades.
          </p>
          <p>
            À frente do escritório <strong className="text-brand-dark">Bruna Melgarejo Advocacia Criminal</strong>, sua
            trajetória é pautada por estratégia, ética e sensibilidade. Ao longo dos anos, consolidou experiência em
            casos complexos, aliando rigor técnico à escuta atenta e empática. A atuação reflete a crença de que a
            advocacia criminal é, antes de tudo, um compromisso com a liberdade, a dignidade humana e a verdade de cada
            história.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-brand-line bg-slate-50">
          <h2 className="text-xl font-semibold mb-4 text-brand-dark">Contato</h2>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-brand-ink">OAB/RS:</strong> 115.891
            </p>
            <p>
              <strong className="text-brand-ink">Telefone/WhatsApp:</strong> (51) 98163-5522
            </p>
            <p>
              <strong className="text-brand-ink">E-mail:</strong> bruna@brunamelgarejo.adv.br
            </p>
            <p>
              <strong className="text-brand-ink">Site:</strong> brunamelgarejo.adv.br
            </p>
            <p>
              <strong className="text-brand-ink">Localização:</strong> Porto Alegre • RS
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <SchemaOrg
        name="Bruna Melgarejo Advocacia Criminal"
        url="https://brunamelgarejo.adv.br"
        email="bruna@brunamelgarejo.adv.br"
        telephone="+55-51-98163-5522"
        oab="OAB/RS 115.891"
      />
    </>
  );
}
