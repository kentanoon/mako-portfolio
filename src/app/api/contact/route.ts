import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("Contact form submission (no Resend key configured):", {
        name,
        email,
        type,
        message,
      });
      return NextResponse.json({ ok: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const typeLabels: Record<string, string> = {
      portrait: "ポートレート撮影",
      commercial: "商業撮影",
      other: "その他",
    };

    await resend.emails.send({
      from: "お問い合わせフォーム <noreply@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? email,
      subject: `【お問い合わせ】${typeLabels[type] ?? type} — ${name}`,
      text: `お名前: ${name}\nメール: ${email}\n種類: ${typeLabels[type] ?? type}\n\nメッセージ:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
