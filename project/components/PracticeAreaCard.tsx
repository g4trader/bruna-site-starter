import Link from "next/link";

type PracticeAreaCardProps = {
  title: string;
  description?: string;
  href?: string;
};

export default function PracticeAreaCard({ title, description, href = "/contato" }: PracticeAreaCardProps) {
  return (
    <div className="p-6 rounded-2xl border bg-white hover:border-brand-ink hover:shadow-md transition-all">
      <h3 className="font-semibold text-brand-ink mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-600 mb-4">{description}</p>
      )}
      <Link
        href={href}
        className="inline-block text-sm font-medium text-brand-gold hover:underline"
      >
        Fale com a defesa →
      </Link>
    </div>
  );
}

