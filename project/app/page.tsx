import LeadForm from "@/components/LeadForm";
import SchemaOrg from "@/components/SchemaOrg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import PublicationCard from "@/components/PublicationCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FAQ from "@/components/FAQ";
import { listMDX } from "@/lib/mdx";

export const metadata = {
  title: "Advocacia Criminal estratégica, humana e técnica",
  description: "Atuação dedicada à liberdade, à dignidade humana e ao respeito à verdade de cada história. Bruna Melgarejo Rosa — OAB/RS 115.891",
};

export default async function Page() {
  const publications = await listMDX("publicacoes");
  const featuredPubs = publications.slice(0, 3);

  const practiceAreas = [
    {
      title: "Defesa em Inquérito e Ação Penal",
      description: "Atuação técnica em todas as fases do processo penal.",
    },
    {
      title: "Audiências de Custódia e Medidas Cautelares",
      description: "Defesa especializada em casos de urgência e medidas cautelares.",
    },
    {
      title: "Crimes contra a pessoa e o patrimônio",
      description: "Experiência consolidada em crimes dolosos e contra o patrimônio.",
    },
    {
      title: "Crimes econômicos e empresariais",
      description: "Atuação em delitos econômicos e crimes contra a ordem econômica.",
    },
    {
      title: "Execução Penal e Direitos Humanos",
      description: "Defesa de direitos fundamentais na execução da pena.",
    },
    {
      title: "Recursos e Tribunais Superiores",
      description: "Recursos e defesa em instâncias superiores.",
    },
  ];

  const mediaVideos = [
    {
      url: "https://www.youtube.com/watch?v=nO_IDPhgpSg&t=6120s",
      title: "Entrevista sobre Direito Penal",
      startAt: 6120,
    },
    {
      url: "https://www.youtube.com/watch?v=gIYCJdyq2j0",
      title: "Entrevista Rádio Bandeirantes POA",
      startAt: 289,
    },
    {
      url: "https://www.youtube.com/live/e1HpQCGFZo0?si=MKrWdM2ZVcgYpBzj",
      title: "Participação em debate",
      startAt: 4440,
    },
    {
      url: "https://www.youtube.com/watch?v=pWTzdbZphbI",
      title: "Análise sobre Processo Penal",
    },
  ];

  const faqItems = [
    {
      question: "Como funciona a consulta inicial?",
      answer: "Apresentamos o caso, avaliamos documentos e definimos os próximos passos com transparência. A consulta serve para entender a situação, esclarecer dúvidas e apresentar estratégias possíveis.",
    },
    {
      question: "Atende urgências (audiência de custódia)?",
      answer: "Sim, atendemos casos urgentes como audiências de custódia, conforme disponibilidade e protocolos locais. Entre em contato imediatamente em situações de prisão ou detenção.",
    },
    {
      question: "Como são tratados meus dados (LGPD)?",
      answer: "Seus dados são tratados com base na LGPD, exclusivamente para retorno do contato e prestação de serviços jurídicos. Conforme nossa Política de Privacidade, não compartilhamos dados com terceiros sem seu consentimento.",
    },
  ];

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-4">
              OAB/RS 115.891
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-brand-dark">
              Advocacia Criminal estratégica, humana e técnica
            </h1>
            <p className="text-lg text-brand-ink leading-relaxed max-w-prose">
              Atuação dedicada à liberdade, à dignidade humana e ao respeito à verdade de cada história.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contato"
                className="rounded-xl bg-brand-dark text-white px-6 py-3 font-semibold shadow-sm hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>
              <a
                href="https://wa.me/5551981635522"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-brand-line px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="pt-4 space-y-2 text-sm text-slate-600">
              <p><strong>Telefone:</strong> (51) 98163-5522</p>
              <p><strong>E-mail:</strong> bruna@brunamelgarejo.adv.br</p>
              <p><strong>Site:</strong> brunamelgarejo.adv.br</p>
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-brand-line bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-brand-dark">Contato rápido</h2>
            <LeadForm />
          </div>
        </section>

        {/* ÁREAS */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Áreas de atuação</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.title} {...area} />
            ))}
          </div>
        </section>

        {/* PILARES */}
        <section className="py-16 bg-slate-50 rounded-3xl -mx-4 px-4 md:mx-0 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Por que nos escolher</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Estratégia",
                description: "Planejamento técnico em cada fase do processo, com análise profunda e defesa fundamentada.",
              },
              {
                title: "Ética",
                description: "Atuação responsável, sem promessas de resultado. Transparência e compromisso com a verdade jurídica.",
              },
              {
                title: "Sensibilidade",
                description: "Escuta qualificada e respeito às singularidades. Cada caso é único e merece atenção dedicada.",
              },
            ].map((pilar) => (
              <div key={pilar.title} className="p-6 rounded-2xl border border-brand-line bg-white">
                <h3 className="text-xl font-semibold mb-3 text-brand-dark">{pilar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pilar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICAÇÕES */}
        {featuredPubs.length > 0 && (
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Publicações & Pesquisa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPubs.map((pub) => (
                <PublicationCard
                  key={pub.slug}
                  title={pub.title}
                  summary={pub.summary}
                  href={`/publicacoes/${pub.slug}`}
                  date={pub.date}
                />
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="/publicacoes"
                className="inline-block text-brand-gold font-medium hover:underline"
              >
                Ver todas as publicações →
              </a>
            </div>
          </section>
        )}

        {/* MÍDIA */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Na mídia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaVideos.map((video, idx) => (
              <YouTubeEmbed
                key={idx}
                url={video.url}
                title={video.title}
                startAt={video.startAt}
              />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Perguntas frequentes</h2>
          <FAQ items={faqItems} />
        </section>

        {/* CTA FINAL */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-brand-dark text-white">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              Pronto para defender seus direitos?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato e agende uma consulta. Estamos aqui para ajudar.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/contato"
                className="rounded-xl bg-white text-brand-dark px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>
              <a
                href="https://wa.me/5551981635522"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
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
