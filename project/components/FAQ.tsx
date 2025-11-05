interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <details key={idx} className="rounded-2xl border border-brand-light p-4 bg-white">
          <summary className="font-medium cursor-pointer text-brand-dark hover:text-brand-gold transition-colors duration-200 ease-in-out">
            {item.question}
          </summary>
          <p className="text-sm text-brand-ink mt-2 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

