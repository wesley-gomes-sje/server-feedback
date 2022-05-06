import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adpter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8ea0549e5a002c",
      pass: "688f8c9aa7cd46"
    }
  });

export class NodemailerMailAdpter implements MailAdapter{
   async  sendMail({subject, body}: SendMailData){
        transport.sendMail({
        from: 'Equipe Feedget <email@feedget.com',
        to:'Wesley Gomes <tutoriabancodedados@gmail.com>',
        subject,
        html: body,
    });
   };
}