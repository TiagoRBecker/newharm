import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = await nodemailer.createTransport({
    service: "SMTP",
    host: "mail.xn--advogadosdaharmonizao-21b5g.com.br",
    port: 465,
    secure:true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      replyTo: email,
      to: process.env.EMAIL,
      subject: "CONTATO ATRAVES DO SITE ",
      text: `Email enviado de ${email} Nome: ${name} Telefone: ${phone} mensagem:${message}`,
      html: 
      ` <p> Email enviado de ${email} </p>
            <br/>
        <p>Nome: ${name}</p>
            <br/>
        <p>Telefone :${phone}</p>
            <br/>
        <p>Mensagem: ${message}</p>`,
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
