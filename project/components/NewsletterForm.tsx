
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterInput } from "@/lib/validators";
import { Field, Button } from "./ui";

export default function NewsletterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", consent: false, honey: "" }
  });

  const onSubmit = async (data: NewsletterInput) => {
    const res = await fetch("/api/newsletter", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) { alert("Inscrição confirmada!"); reset(); }
    else { alert("Não foi possível inscrever agora."); }
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
