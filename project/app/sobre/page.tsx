
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata = {
  title: "Sobre",
  description:
    "Bruna Melgarejo é advogada criminalista e professora de Direito Penal e Processo Penal, aliando prática e ensino com integridade, responsabilidade, humanidade e discrição.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Sobre</h1>
        </div>

        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-light">
            <Image
              src="/bruna-melgarejo.jpg"
              alt="Bruna Melgarejo"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              priority
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-brand-ink leading-relaxed">
            <p className="text-lg">
              Bruna Melgarejo é advogada criminalista e professora de Direito Penal e Processo Penal, unindo prática e
              ensino com o mesmo propósito: atuar com integridade, responsabilidade, humanidade e discrição.
            </p>
            <p>
              À frente do escritório <span className="font-semibold text-brand-dark">Bruna Melgarejo Advocacia Criminal</span>, Bruna
              construiu sua trajetória pautada pela estratégia, ética e sensibilidade.
            </p>
            <p>
              Ao longo dos anos, consolidou experiência em casos complexos da área criminal, aliando rigor técnico à
              escuta atenta e empática de cada cliente.
            </p>
            <p>
              Sua atuação reflete a crença de que o exercício da advocacia criminal é, antes de tudo, um compromisso com a
              liberdade, com a dignidade humana e com o respeito e a verdade de cada história contada.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-brand-light bg-brand-light">
          <h2 className="text-xl font-semibold mb-4 text-brand-dark">Contato</h2>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-brand-dark">OAB/RS:</strong> 115.891
            </p>
            <p>
              <strong className="text-brand-dark">Telefone/WhatsApp:</strong> (51) 98163-5522
            </p>
            <p>
              <strong className="text-brand-dark">E-mail:</strong>{" "}
              <a href="mailto:bruna@brunamelgarejo.adv.br" className="text-brand-gold hover:underline">
                bruna@brunamelgarejo.adv.br
              </a>
            </p>
            <p>
              <strong className="text-brand-dark">Site:</strong>{" "}
              <a href="https://brunamelgarejo.adv.br" className="text-brand-gold hover:underline">
                brunamelgarejo.adv.br
              </a>
            </p>
            <p>
              <strong className="text-brand-dark">Localização:</strong> Porto Alegre • RS
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
