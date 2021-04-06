const server = require("express").Router();
const nodemailer = require("nodemailer");
const { User } = require("../db.js");
const { EMAIL_G4, EMAIL_PASSWORD } = process.env;

const transport = {
  //configuración para enviar email

  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_G4,
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  }
});

server.post("/send", (req, res) => {
  const { name, email, message, subject } = req.body;
  transporter
    .sendMail({
      to: email,
      from: EMAIL_G4,
      subject: subject,
      html: `<h3>Hola ${name}, como estas?</h3>
        <p>${message}</p>`,
    })
    .then((resp) => {
      res.json({ resp, message: `Email sent to ${email}.` });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = server;
