
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
        <Field label="Seu e-mail" placeholder="email@exemplo.com" {...register("email")} error={errors.email?.message} />
      </div>
      {/* Honeypot */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <label className="flex items-start gap-2 text-xs">
        <input type="checkbox" {...register("consent")} className="mt-1" />
        <span>Concordo em receber comunicações e com o tratamento de dados conforme a Política de Privacidade.</span>
      </label>
      {errors.consent && <span className="text-xs text-red-600">{errors.consent.message}</span>}
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Enviando..." : "Assinar"}
      </Button>
    </form>
  );
}
