
"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5551981635522"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full shadow-lg bg-[#25D366] text-white px-5 py-3 font-semibold hover:bg-[#20BA5A] transition-colors"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
