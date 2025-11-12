
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { readMDX } from "@/lib/mdx";
import { siteMetadata, siteUrl } from "@/lib/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const { meta } = await readMDX("blog", params.slug);
    const metaData = meta as any;
    const url = `${siteUrl}/blog/${params.slug}`;
    return {
      title: metaData.title || "Artigo",
      description: metaData.summary || "Artigo sobre Direito Penal e Processo Penal.",
      alternates: {
        canonical: url,
      },
      keywords: metaData.tags,
      openGraph: {
        type: "article",
        url,
        title: metaData.title,
        description: metaData.summary,
        publishedTime: metaData.date,
        authors: [siteMetadata.founder],
      },
      twitter: {
        card: "summary_large_image",
        title: metaData.title,
        description: metaData.summary,
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
    const { meta, content } = await readMDX("blog", params.slug);
    const metaData = meta as any;
    const url = `${siteUrl}/blog/${params.slug}`;
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">{metaData.title}</h1>
            {metaData.summary && (
              <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">{metaData.summary}</p>
            )}
            {metaData.date && (
              <p className="text-sm text-brand-ink/60">
                {new Date(metaData.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <div className="prose prose-slate max-w-none text-brand-ink leading-relaxed">
            {!content?.trim() ? (
              <p className="text-brand-ink">Conteúdo indisponível.</p>
            ) : (
              <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            )}
          </div>
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
          title={metaData.title}
          description={metaData.summary}
          publishedTime={metaData.date}
          keywords={metaData.tags}
          authorName={siteMetadata.founder}
          publisherName={siteMetadata.legalName}
          publisherLogo={siteMetadata.logo}
        />
      </>
    );
  } catch {
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
}
