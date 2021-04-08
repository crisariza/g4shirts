const server = require("express").Router();
const nodemailer = require("nodemailer");
const { EMAIL_G4, EMAIL_PASSWORD, PORT_CLIENT } = process.env;

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

let passwordReset = (user = {}) => {
    transporter
      .sendMail({
        to: user.email,
        from: EMAIL_G4,
        subject: "Restablece tu contraseña en G4Shirts",
        html: `<h3>Hola ${user.name} ${user.surname}, como estas?</h3>
        <p>Click <a href="${PORT_CLIENT}/password_reset_form/${user.id}">aquí</a> para restablecer tu contraseña</p>`,
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
    passwordReset,
    };