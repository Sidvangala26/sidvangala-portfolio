import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
  from: "Sid Portfolio <contact@sidvangala.com>",
  to: ["vangalasiddardha@gmail.com"],
  subject: `New Portfolio Message from ${name}`,
  replyTo: email,
  html: `
    <h2>New Portfolio Contact</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p>${message}</p>
  `,
});

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}