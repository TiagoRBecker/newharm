import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import nodemailer from "nodemailer";
import {  maskEmail } from 'react-email-mask'
import 'react-email-mask/dist/index.css'
export async function POST(req: any) {
  const { id } = await req.json();



  try {
    if (id) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Basic ${process.env.GAT}`,
        },
      };
      const requeste = await fetch(
        `https://api.pagar.me/core/v5/orders/${id}`,
        options
      );
      const response = await requeste.json();
      
       
      
    
      if (response.status === "paid") {
         const maskEmailInput = await maskEmail(response.customer?.email)
        const dynamicLink = `https://www.documentosparaharmonizacao.com.br/api/download?id=${id}`;
        const transporter = await nodemailer.createTransport({
          service: "SMTP",
          host: "mail.xn--advogadosdaharmonizao-21b5g.com.br",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
          },
        });
        const info = await transporter.sendMail({
          from: process.env.EMAIL,
          to:response.customer?.email,
          subject: "Harmonização Prontuários ",
         

          html: `
      <html>
        <head>
          <style>
            /* Adicione seus estilos CSS aqui */
            body{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 10;
            }
            p {
              font-size: 19px;
              color: #333;
              margin-bottom: 20px;
            }
            a {
              
              color: black;
             
              text-transform: uppercase!important;
              font-size: 88% !important;
              font-weight: bold;
             
             
            }
            span {
              font-size: 19px;
              color:red;
            }
            img{
              width: 250px;
              height: 250px;
              object-fit: cover;
            }

          </style>
        </head>
        <body>
        <img src="https://res.cloudinary.com/tiagobecker/image/upload/v1699906778/logo_ufbhpl.ico" alt="Logo"/>
          <p>Obrigado por escolher a nossa empresa.</p>
          <p>Clique no link abaixo para fazer o download</p>
          <a href="${dynamicLink}">Baixar Arquivo</a> <br/>
          <span>Este link será expirado em 3 horas</span>   
        </body>
      </html>
      `,
        });

        return NextResponse.json({ message: `Obrigado por sua compra! Agradecemos por escolher nossos produtos.
        Estamos trabalhando diligentemente para processar seu pedido, dentro de até  5 minutos
        você poderá fazer o download dos seus itens adquiridos. Fique atento
        para mais atualizações em breve! Enviado com sucesso! Atualize  verifique seu email e caixa de spam , email enviado para ${maskEmailInput}` });
      }
      else{
        const options = {
          method: 'PATCH',
          headers: {
            accept: "application/json",
            authorization: `Basic ${process.env.GAT}`,
          },
        };
        const requeste = await fetch(
          `https://api.pagar.me/core/v5/orders/${id}/closed`,
          options
        );
        const response = await requeste.json();
        
         return NextResponse.json({message:"Erro ao processar o pagamento. Seu pedido será finalizado por motivos de segurança. "},{status:500})

      }
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Tente novamente mais tarde!" },
      { status: 500 }
    );
  }
 finally{
   await prisma.$disconnect()

 }
  
}
