"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validators";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  timePref?: string;
  consent: boolean;
  honey?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      timePref: "",
      consent: false,
      honey: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honey) {
      // Honeypot triggered - ignore
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          timePref: data.timePref || undefined,
          consent: data.consent,
        }),
      });

      const json = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Mensagem enviada com sucesso! Retornaremos em breve." });
        reset();
      } else {
        setMessage({ type: "error", text: json.error || "Erro ao enviar mensagem. Tente novamente." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Erro ao enviar mensagem. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-brand-ink">Nome completo</span>
          <input
            {...register("name")}
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-xl border border-brand-light px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out"
          />
        </label>
        {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
      </div>
      <div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-brand-ink">E-mail</span>
          <input
            {...register("email")}
            type="email"
            placeholder="seu@email.com"
            className="w-full rounded-xl border border-brand-light px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out"
          />
        </label>
        {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-brand-ink">Telefone/WhatsApp</span>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(51) 99999-9999"
            className="w-full rounded-xl border border-brand-light px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out"
          />
        </label>
        {errors.phone && <span className="text-xs text-red-600">{errors.phone.message}</span>}
      </div>
      <div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-brand-ink">Mensagem</span>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Conte brevemente seu caso..."
            className="w-full rounded-xl border border-brand-light px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out resize-none"
          />
        </label>
        {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
      </div>
      <div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-brand-ink">Preferência de horário (opcional)</span>
          <input
            {...register("timePref")}
            type="text"
            placeholder="Ex: Manhã, Tarde, Noite"
            className="w-full rounded-xl border border-brand-light px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out"
          />
        </label>
        {errors.timePref && <span className="text-xs text-red-600">{errors.timePref.message}</span>}
      </div>
      {/* Honeypot */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <label className="flex items-start gap-2 text-xs text-brand-ink">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-brand-gold" />
        <span>Concordo com o tratamento de dados conforme a Política de Privacidade.</span>
      </label>
      {errors.consent && <span className="text-xs text-red-600">{errors.consent.message}</span>}
      {message && (
        <p className={`text-xs ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-dark text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}

