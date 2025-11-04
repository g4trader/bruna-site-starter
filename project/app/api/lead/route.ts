
import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators";
import { sendLeadNotification } from "@/lib/email";

export const runtime = "edge";

// Simple memory store fallback (replace with KV/DB in project)
const STORE: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
    }
    if (parsed.data.honey) {
      return NextResponse.json({ ok: true }); // bot
    }
    const item = { ...parsed.data, ts: Date.now(), ip: req.headers.get("x-forwarded-for") || "" };
    STORE.push(item);

    await sendLeadNotification(item);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return new NextResponse(e?.message || "Error", { status: 500 });
  }
}
