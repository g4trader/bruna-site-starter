
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Informe um telefone/WhatsApp"),
  message: z.string().min(10, "Conte brevemente seu caso"),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário consentir com a LGPD" }) }),
  honey: z.string().optional()
});

export const contactSchema = leadSchema.extend({
  timePref: z.string().optional()
});

export const newsletterSchema = z.object({
  email: z.string().email("E-mail inválido"),
  consent: z.literal(true, { errorMap: () => ({ message: "Confirme o consentimento" }) }),
  honey: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
