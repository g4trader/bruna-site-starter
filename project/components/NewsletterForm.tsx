"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/validators";
import { useState } from "react";

type NewsletterFormData = {
  email: string;
  consent: boolean;
  honey?: string;
};

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      consent: false,
      honey: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    if (data.honey) {
      // Honeypot triggered - ignore
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, consent: data.consent }),
      });

      const json = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Inscrição realizada com sucesso!" });
        reset();
      } else {
        setMessage({ type: "error", text: json.error || "Erro ao se inscrever. Tente novamente." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Erro ao se inscrever. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="block space-y-1">
          <span className="text-xs font-medium text-white/90">Seu e-mail</span>
          <input
            {...register("email")}
            type="email"
            placeholder="email@exemplo.com"
            className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out"
          />
        </label>
        {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
      </div>
      {/* Honeypot */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <label className="flex items-start gap-2 text-xs text-white/80">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-brand-gold" />
        <span>Concordo em receber comunicações e com o tratamento de dados conforme a Política de Privacidade.</span>
      </label>
      {errors.consent && <span className="text-xs text-red-400">{errors.consent.message}</span>}
      {message && (
        <p className={`text-xs ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
          {message.text}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto rounded-xl bg-brand-gold text-brand-dark px-4 py-2 text-sm font-semibold hover:bg-brand-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
      >
        {isSubmitting ? "Enviando..." : "Assinar"}
      </button>
    </form>
  );
}

