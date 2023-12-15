import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT ||4001;
app.get('/fichiers', (req, res)=>{
    const fondEcran =  fs.readdirSync('./src/lib/images/fond-ecran').map(file => path.basename(file, path.extname(file)));
    console.log(fondEcran);
    res.send({req:fondEcran});
})

// mails
// Route pour gérer l'envoi du formulaire de contact
app.post('/contact', (req, res) => {
    const { object, email, message } = req.body;
  
    // Configuration du transporteur SMTP pour nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user:process.env.ADMIN_EMAIL,
        pass:process.env.ADMIN_MOT_PASSE_APP,
      },
    });
  
    // Configuration du message à envoyer
    const mailOptions = {
      from: ` <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: object,
      text: message,
    };
  
    // Envoi du message
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Erreur lors de l\'envoi du message.');
      } else {
        console.log('Message envoyé : %s', info.messageId);
        res.send('Message envoyé avec succès.');
      }
    });
  });
  
app.listen(port, ()=> console.log('le serveur est lancé sur le port ' + port));