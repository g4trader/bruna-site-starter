
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validators";
import { Field, TextArea, Button } from "./ui";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", timePref: "", consent: false, honey: "" }
  });

  const onSubmit = async (data: ContactInput) => {
    const res = await fetch("/api/lead", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) { alert("Mensagem enviada!"); reset(); }
    else { alert("Falha ao enviar, tente novamente."); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field label="Nome" placeholder="Seu nome" {...register("name")} error={errors.name?.message} />
      <Field label="E-mail" placeholder="email@exemplo.com" {...register("email")} error={errors.email?.message} />
      <Field label="Telefone/WhatsApp" placeholder="(51) 9...." {...register("phone")} error={errors.phone?.message} />
      <Field label="Preferência de horário (opcional)" placeholder="Manhã/Tarde/Noite" {...register("timePref")} error={errors.timePref as any} />
      <TextArea label="Mensagem" placeholder="Como podemos ajudar?" {...register("message")} error={errors.message?.message} />
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" {...register("consent")} className="mt-1" />
        <span>Concordo com o tratamento de dados para resposta ao contato.</span>
      </label>
      {errors.consent && <span className="text-xs text-red-600">{errors.consent.message}</span>}
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</Button>
    </form>
  );
}
