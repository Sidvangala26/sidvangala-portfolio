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

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["vangalasiddardha@gmail.com"], // <-- change this
      subject: `New Portfolio Message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr />
        <p>This message came from your portfolio contact form.</p>
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