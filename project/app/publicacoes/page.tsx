
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { listMDX } from "@/lib/mdx";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const pageUrl = `${siteUrl}/publicacoes`;

export const metadata: Metadata = {
  title: "Publicações & Pesquisa",
  description: "Publicações acadêmicas e pesquisas sobre Direito Penal, Processo Penal e Direitos Humanos.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    title: "Publicações & Pesquisa | Bruna Melgarejo",
    description: "Publicações acadêmicas e pesquisas sobre Direito Penal, Processo Penal e Direitos Humanos.",
  },
  twitter: {
    title: "Publicações & Pesquisa | Bruna Melgarejo",
    description: "Publicações acadêmicas e pesquisas sobre Direito Penal, Processo Penal e Direitos Humanos.",
  },
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
          <div className="p-8 rounded-2xl border border-brand-light bg-brand-light text-center">
            <p className="text-brand-ink">Em breve, novas publicações.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
