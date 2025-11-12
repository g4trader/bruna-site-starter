
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { listMDX } from "@/lib/mdx";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos e conteúdos sobre Direito Penal, Processo Penal e direitos fundamentais.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    title: "Blog | Conteúdo de Direito Penal",
    description: "Artigos e conteúdos sobre Direito Penal, Processo Penal e direitos fundamentais.",
  },
  twitter: {
    title: "Blog | Conteúdo de Direito Penal",
    description: "Artigos e conteúdos sobre Direito Penal, Processo Penal e direitos fundamentais.",
  },
};

export default async function Page() {
  const posts = await listMDX("blog");
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Blog</h1>
          <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">
            Artigos e conteúdos sobre Direito Penal, Processo Penal e direitos fundamentais, em linguagem acessível.
          </p>
        </div>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <PublicationCard
                key={p.slug}
                title={p.title}
                summary={p.summary}
                href={`/blog/${p.slug}`}
                date={p.date}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl border border-brand-light bg-brand-light text-center">
            <p className="text-brand-ink">Em breve, novos artigos.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
