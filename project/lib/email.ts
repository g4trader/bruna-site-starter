
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(data: Record<string, any>) {
  if (!process.env.NOTIFY_TO) return;
  const subject = `Novo lead — Site Bruna: ${data.name}`;
  const html = `
    <h2>Novo lead</h2>
    <p><b>Nome:</b> ${data.name}</p>
    <p><b>E-mail:</b> ${data.email}</p>
    <p><b>Telefone:</b> ${data.phone}</p>
    <p><b>Mensagem:</b> ${data.message}</p>
    <p><i>Consentimento LGPD: ${data.consent ? "Sim" : "Não"}</i></p>
  `;
  try {
    await resend.emails.send({
      from: process.env.MAIL_FROM || "no-reply@your-domain.dev",
      to: process.env.NOTIFY_TO!,
      subject,
      html
    });
  } catch (e) {
    console.error("Resend error", e);
  }
}
