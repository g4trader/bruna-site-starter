
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PracticeAreaCard from "@/components/PracticeAreaCard";

export const metadata = {
  title: "Áreas de Atuação",
  description: "Defesa especializada em Direito Penal e Processo Penal. Experiência em casos complexos e todas as fases do processo.",
};

const practiceAreas = [
  {
    title: "Defesa em Inquérito e Ação Penal",
    description: "Atuação técnica e estratégica em todas as fases do processo penal, desde a fase investigatória até a execução.",
  },
  {
    title: "Audiências de Custódia e Medidas Cautelares",
    description: "Defesa especializada em casos de urgência, audiências de custódia e aplicação de medidas cautelares.",
  },
  {
    title: "Crimes contra a pessoa e o patrimônio",
    description: "Experiência consolidada em crimes dolosos contra a vida, integridade física e patrimônio.",
  },
  {
    title: "Crimes econômicos e empresariais",
    description: "Atuação em delitos econômicos, crimes contra a ordem econômica e criminalidade empresarial.",
  },
  {
    title: "Execução Penal e Direitos Humanos",
    description: "Defesa de direitos fundamentais na execução da pena, com foco em dignidade e ressocialização.",
  },
  {
    title: "Recursos e Tribunais Superiores",
    description: "Recursos e defesa em instâncias superiores, incluindo STJ e STF.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Áreas de atuação</h1>
          <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">
            Atuação especializada em Direito Penal e Processo Penal, com experiência em casos complexos e
            todas as fases do processo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} {...area} />
          ))}
        </div>
        <div className="pt-8 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Tem dúvidas sobre sua situação específica? Entre em contato para uma avaliação personalizada.
          </p>
          <a
            href="/contato"
            className="inline-block rounded-xl bg-brand-dark text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar consulta
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
