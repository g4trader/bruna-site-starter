import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { fetchWordPressPosts, formatWordPressPost } from "@/lib/wordpress";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface PageProps {
  searchParams: { page?: string };
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { posts, totalPages, totalPosts } = await fetchWordPressPosts(currentPage, 10);

  const formattedPosts = posts.map(formatWordPressPost);

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
        {formattedPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {formattedPosts.map((p) => (
                <PublicationCard
                  key={p.id}
                  title={p.title}
                  summary={p.summary}
                  href={`/blog/${p.slug}`}
                  date={p.date}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 pt-8">
                {currentPage > 1 ? (
                  <Link
                    href={`/blog${currentPage > 2 ? `?page=${currentPage - 1}` : ""}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-gold/20 bg-white hover:border-brand-gold/40 hover:bg-brand-light transition-all duration-200 text-brand-dark"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-light bg-brand-light text-brand-ink/40 cursor-not-allowed">
                    <ChevronLeft size={16} />
                    Anterior
                  </div>
                )}
                <span className="text-sm text-brand-ink">
                  Página {currentPage} de {totalPages}
                </span>
                {currentPage < totalPages ? (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-gold/20 bg-white hover:border-brand-gold/40 hover:bg-brand-light transition-all duration-200 text-brand-dark"
                  >
                    Próxima
                    <ChevronRight size={16} />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-light bg-brand-light text-brand-ink/40 cursor-not-allowed">
                    Próxima
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            )}
          </>
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
