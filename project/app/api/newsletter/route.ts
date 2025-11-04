
import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

// Simple memory store (replace with KV/DB in production)
const NEWS: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const parsed = newsletterSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
    }

    // Honeypot check
    if (parsed.data.honey) {
      return NextResponse.json({ ok: true }); // bot
    }

    const item = { ...parsed.data, ts: Date.now(), ip: req.headers.get("x-forwarded-for") || "" };
    NEWS.push(item);

    // Send confirmation email if configured
    if (process.env.RESEND_API_KEY && process.env.NOTIFY_TO) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.MAIL_FROM || "no-reply@your-domain.dev",
          to: parsed.data.email,
          subject: "Confirmação de inscrição — Bruna Melgarejo Advocacia",
          html: `
            <h2>Obrigado pela sua inscrição!</h2>
            <p>Você foi inscrito(a) na newsletter da Bruna Melgarejo Advocacia Criminal.</p>
            <p>Em breve, você receberá conteúdos sobre Direito Penal, Processo Penal e direitos fundamentais.</p>
            <hr/>
            <p style="font-size: 12px; color: #666;">Se você não solicitou esta inscrição, ignore este e-mail.</p>
          `,
        });
      } catch (emailError) {
        console.error("Newsletter email error:", emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Newsletter API error:", e);
    return new NextResponse(e?.message || "Error", { status: 500 });
  }
}
