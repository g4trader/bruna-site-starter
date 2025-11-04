
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validators";
import { Field, TextArea, Button } from "./ui";

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", consent: false, honey: "" }
  });

  const onSubmit = async (data: LeadInput) => {
    const res = await fetch("/api/lead", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) {
      alert("Obrigado! Em breve entraremos em contato.");
      reset();
    } else {
      const t = await res.text();
      alert("Não foi possível enviar agora. Tente novamente.\n" + t);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field label="Nome completo" placeholder="Seu nome" {...register("name")} error={errors.name?.message} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="E-mail" placeholder="email@exemplo.com" {...register("email")} error={errors.email?.message} />
        <Field label="Telefone/WhatsApp" placeholder="(51) 9...." {...register("phone")} error={errors.phone?.message} />
      </div>
      <TextArea label="Conte brevemente seu caso" placeholder="Descreva em poucas linhas..." {...register("message")} error={errors.message?.message} />
      {/* Honeypot */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" {...register("consent")} className="mt-1" />
        <span>Concordo em ser contatado(a) e com o tratamento de dados conforme a Política de Privacidade.</span>
      </label>
      {errors.consent && <span className="text-xs text-red-600">{errors.consent.message}</span>}
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</Button>
    </form>
  );
}
