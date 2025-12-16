
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { fetchWordPressPost, formatWordPressPost } from "@/lib/wordpress";
import { siteMetadata, siteUrl } from "@/lib/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const post = await fetchWordPressPost(params.slug);
    if (!post) {
      return {
        title: "Artigo",
      };
    }

    const formattedPost = formatWordPressPost(post);
    const url = `${siteUrl}/blog/${params.slug}`;
    
    // Extrai o texto do excerpt removendo tags HTML
    const excerptText = post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();

    return {
      title: formattedPost.title || "Artigo",
      description: excerptText || "Artigo sobre Direito Penal e Processo Penal.",
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "article",
        url,
        title: formattedPost.title,
        description: excerptText,
        publishedTime: formattedPost.date,
        authors: [siteMetadata.founder],
      },
      twitter: {
        card: "summary_large_image",
        title: formattedPost.title,
        description: excerptText,
      },
    };
  } catch {
    return {
      title: "Artigo",
    };
  }
}

export default async function Page({ params }: Params) {
  try {
    const post = await fetchWordPressPost(params.slug);
    
    if (!post) {
      return (
        <>
          <Header />
          <main className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-brand-ink">Artigo não encontrado.</p>
            <Link href="/blog" className="text-brand-gold hover:underline">
              Voltar para Blog
            </Link>
          </main>
          <Footer />
        </>
      );
    }

    const formattedPost = formatWordPressPost(post);
    const url = `${siteUrl}/blog/${params.slug}`;

    // Extrai o texto do excerpt removendo tags HTML
    const excerptText = post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();

    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-ink hover:text-brand-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para Blog
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">{formattedPost.title}</h1>
            {excerptText && (
              <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">{excerptText}</p>
            )}
            {formattedPost.date && (
              <p className="text-sm text-brand-ink/60">
                {new Date(formattedPost.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <div 
            className="prose prose-slate max-w-none text-brand-ink leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedPost.content }}
          />
          <div className="pt-8 border-t border-brand-light">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-medium"
            >
              <ArrowLeft size={16} />
              Ver todos os artigos
            </Link>
          </div>
        </main>
        <Footer />
        <ArticleJsonLd
          type="BlogPosting"
          url={url}
          title={formattedPost.title}
          description={excerptText}
          publishedTime={formattedPost.date}
          authorName={siteMetadata.founder}
          publisherName={siteMetadata.legalName}
          publisherLogo={siteMetadata.logo}
        />
      </>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-brand-ink">Erro ao carregar o artigo.</p>
          <Link href="/blog" className="text-brand-gold hover:underline">
            Voltar para Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}
