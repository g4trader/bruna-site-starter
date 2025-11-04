import Link from "next/link";

type PracticeAreaCardProps = {
  title: string;
  description?: string;
  href?: string;
};

export default function PracticeAreaCard({ title, description, href = "/contato" }: PracticeAreaCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-brand-gold/20 bg-white hover:border-brand-gold/40 hover:bg-brand-light transition-all duration-200 ease-in-out">
      <h3 className="font-semibold text-brand-dark mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-brand-ink mb-4 leading-relaxed">{description}</p>
      )}
      <Link
        href={href}
        className="inline-block text-sm font-medium text-brand-gold hover:text-brand-dark transition-all duration-200 ease-in-out"
      >
        Fale com a defesa →
      </Link>
    </div>
  );
}

