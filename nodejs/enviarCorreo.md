# Enviar correo de Gmail con Nodejs

index.js
```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'correo@gmail.com',
    pass: 'contraseña'
  }
});

const mailOptions = {
  from: 'correo@gmail.com',
  to: 'correo@dominio.com',
  subject: 'titulo',
  text: 'contenido'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
```