
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { listMDX } from "@/lib/mdx";

export const metadata = {
  title: "Publicações & Pesquisa",
  description: "Publicações acadêmicas e pesquisas sobre Direito Penal, Processo Penal e Direitos Humanos.",
};

export default async function Page() {
  const posts = await listMDX("publicacoes");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Publicações & Pesquisa</h1>
          <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">
            Artigos acadêmicos, pesquisas e análises sobre Direito Penal, Processo Penal e Direitos Humanos.
          </p>
        </div>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <PublicationCard
                key={p.slug}
                title={p.title}
                summary={p.summary}
                href={`/publicacoes/${p.slug}`}
                date={p.date}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl border border-brand-line bg-slate-50 text-center">
            <p className="text-slate-600">Em breve, novas publicações.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
