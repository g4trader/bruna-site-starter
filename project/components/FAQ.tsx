"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border bg-white overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold pr-4">{item.question}</span>
              <ChevronDown
                className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                size={20}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

