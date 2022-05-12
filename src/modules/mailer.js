const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
  // Enviroment variables: MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS
  // If you don't have enviroment variables, you can create in your .env file.
})

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/resources/mail'),
  extName: '.html'
}))

// SMTP protocol is not recommended for production. Use Mailgun, Sendgrid or other instead.
// In this case we are using mailtrap.io as a fake mail server.

module.exports = transport
