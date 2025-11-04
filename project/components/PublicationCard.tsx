import Link from "next/link";

type PublicationCardProps = {
  title: string;
  summary?: string;
  href: string;
  date?: string;
};

export default function PublicationCard({ title, summary, href, date }: PublicationCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-2xl border bg-white hover:border-brand-ink hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-brand-ink group-hover:text-brand-dark transition-colors">
        {title}
      </h3>
      {summary && (
        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{summary}</p>
      )}
      {date && (
        <p className="text-xs text-slate-500 mt-3">
          {new Date(date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
          })}
        </p>
      )}
      <span className="inline-block mt-3 text-sm font-medium text-brand-gold group-hover:underline">
        Ler mais →
      </span>
    </Link>
  );
}

