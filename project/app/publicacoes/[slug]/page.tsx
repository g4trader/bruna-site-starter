
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
    const { meta } = await readMDX("publicacoes", params.slug);
    return {
      title: (meta as any).title || "Publicação",
      description: (meta as any).summary || "Publicação acadêmica sobre Direito Penal e Processo Penal.",
    };
  } catch {
    return {
      title: "Publicação",
    };
  }
}

export default async function Page({ params }: Params) {
  try {
    const { meta, content } = await readMDX("publicacoes", params.slug);
    const metaData = meta as any;
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <Link
            href="/publicacoes"
            className="inline-flex items-center gap-2 text-sm text-brand-ink hover:text-brand-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para Publicações
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">{metaData.title}</h1>
            {metaData.summary && (
              <p className="text-lg text-brand-ink leading-relaxed max-w-2xl">{metaData.summary}</p>
            )}
            {metaData.date && (
              <p className="text-sm text-slate-500">
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
              href="/publicacoes"
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-medium"
            >
              <ArrowLeft size={16} />
              Ver todas as publicações
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
          <p className="text-brand-ink">Publicação não encontrada.</p>
          <Link href="/publicacoes" className="text-brand-gold hover:underline">
            Voltar para Publicações
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}
