
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prose from "@/components/Prose";
import { readMDX } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const { meta } = await readMDX("blog", params.slug);
    return {
      title: (meta as any).title || "Artigo",
      description: (meta as any).summary || "Artigo sobre Direito Penal e Processo Penal.",
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">{meta.title}</h1>
            {meta.summary && (
              <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">{meta.summary}</p>
            )}
            {meta.date && (
              <p className="text-sm text-slate-500">
                {new Date(meta.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <div className="prose prose-slate max-w-none text-brand-ink leading-relaxed">
            {/* @ts-expect-error Async Server Component */}
            <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
          <div className="pt-8 border-t border-brand-line">
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
      </>
    );
  } catch {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-slate-600">Artigo não encontrado.</p>
          <Link href="/blog" className="text-brand-gold hover:underline">
            Voltar para Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}
