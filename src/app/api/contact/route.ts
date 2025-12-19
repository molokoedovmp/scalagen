import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.NEXT_PUBLIC_NODEMAILER_USER;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD;

const transporter =
  user && pass
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user,
          pass,
        },
      })
    : null;

export async function POST(request: Request) {
  if (!transporter) {
    return NextResponse.json({ error: "Mailer is not configured" }, { status: 500 });
  }

  let payload: { name?: string; contact?: string; message?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const contact = (payload.contact ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !contact) {
    return NextResponse.json({ error: "Заполните имя и контакт" }, { status: 400 });
  }

  const mailText = [
    "Новая заявка с сайта СКАЛАГЕН-НейроТех",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    message ? `Сообщение: ${message}` : "Сообщение: (не заполнено)",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Заявка с сайта" <${user}>`,
      to: ["molokoedovmp@gmail.com"],
      subject: "Новая заявка с сайта СКАЛАГЕН-НейроТех",
      text: mailText,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailer error", error);
    return NextResponse.json({ error: "Не удалось отправить сообщение" }, { status: 500 });
  }
}
