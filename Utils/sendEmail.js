const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  };

  let transporter = nodeMailer.createTransport(config);

  const mailOptions = {
    from: "hiddentruthvivek@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
