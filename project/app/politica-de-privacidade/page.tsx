
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e tratamento de dados pessoais conforme a LGPD.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Política de Privacidade</h1>
          <p className="text-lg text-brand-ink leading-relaxed">
            Esta página descreve como tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de
            Dados (LGPD).
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-brand-ink leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">1. Controladora</h2>
            <p>
              <strong className="text-brand-dark">Bruna Melgarejo Advocacia Criminal</strong>
              <br />
              OAB/RS 115.891
              <br />
              E-mail:{" "}
              <a href="mailto:bruna@brunamelgarejo.adv.br" className="text-brand-gold hover:underline">
                bruna@brunamelgarejo.adv.br
              </a>
              <br />
              Telefone: (51) 98163-5522
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">2. Dados coletados e finalidades</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-brand-dark">Formulários de contato/lead:</strong> nome, e-mail, telefone e
                mensagem — finalidade: retornar o contato e agendamento.
              </li>
              <li>
                <strong className="text-brand-dark">Newsletter:</strong> e-mail — finalidade: envio de comunicações com
                consentimento.
              </li>
              <li>Logs técnicos mínimos para segurança e funcionamento do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">3. Bases legais</h2>
            <p>Consentimento e/ou execução de procedimentos preliminares a contrato.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">4. Compartilhamento</h2>
            <p>
              Prestadores estritamente necessários (e-mail transacional, hospedagem). Não vendemos dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">5. Direitos do titular</h2>
            <p>
              Acesso, correção, exclusão, revogação do consentimento e portabilidade quando aplicável. Solicite por
              e-mail:{" "}
              <a href="mailto:bruna@brunamelgarejo.adv.br" className="text-brand-gold hover:underline">
                bruna@brunamelgarejo.adv.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">6. Retenção</h2>
            <p>
              Somente pelo tempo necessário para a finalidade, observadas obrigações legais e éticas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">7. Segurança</h2>
            <p>
              Medidas técnicas e administrativas proporcionais ao risco, com melhoria contínua.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">8. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato:
              <br />
              E-mail:{" "}
              <a href="mailto:bruna@brunamelgarejo.adv.br" className="text-brand-gold hover:underline">
                bruna@brunamelgarejo.adv.br
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
