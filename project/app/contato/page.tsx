
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Contato",
  description: "Entre em contato para agendar uma consulta ou esclarecer dúvidas sobre sua situação.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Contato</h1>
          <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">
            Preencha o formulário e retornaremos o quanto antes. Seus dados são tratados com base na LGPD.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-brand-light bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-brand-dark">Envie sua mensagem</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-brand-light bg-brand-light">
              <h2 className="font-semibold mb-4 text-brand-dark">Outros canais</h2>
              <div className="space-y-3 text-sm">
                <p>
                  <strong className="text-brand-dark">WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/5551981635522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    (51) 98163-5522
                  </a>
                </p>
                <p>
                  <strong className="text-brand-dark">E-mail:</strong>{" "}
                  <a
                    href="mailto:bruna@brunamelgarejo.adv.br"
                    className="text-brand-gold hover:underline"
                  >
                    bruna@brunamelgarejo.adv.br
                  </a>
                </p>
                <p>
                  <strong className="text-brand-dark">OAB/RS:</strong> 115.891
                </p>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-brand-light bg-brand-dark text-white">
              <h2 className="font-semibold mb-3">Atendimento</h2>
              <p className="text-sm opacity-90 leading-relaxed">
                Atendemos casos de urgência, incluindo audiências de custódia. Entre em contato imediatamente em
                situações de prisão ou detenção.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
