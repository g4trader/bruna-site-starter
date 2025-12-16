import Link from "next/link";
import Image from "next/image";

interface PublicationCardProps {
  title: string;
  summary?: string;
  href: string;
  date?: string;
  featuredImage?: string;
}

export default function PublicationCard({ title, summary, href, date, featuredImage }: PublicationCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-brand-gold/20 bg-white hover:border-brand-gold/40 hover:bg-brand-light transition-all duration-200 ease-in-out overflow-hidden"
    >
      {featuredImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-semibold text-brand-dark group-hover:text-brand-gold transition-colors duration-200 ease-in-out">
          {title}
        </h3>
        {summary && (
          <p className="text-sm text-brand-ink mt-2 line-clamp-2 leading-relaxed">{summary}</p>
        )}
        {date && (
          <p className="text-xs text-brand-ink/60 mt-3">
            {new Date(date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
            })}
          </p>
        )}
        <span className="inline-block mt-3 text-sm font-medium text-brand-gold group-hover:text-brand-dark transition-colors duration-200 ease-in-out">
          Ler mais →
        </span>
      </div>
    </Link>
  );
}

