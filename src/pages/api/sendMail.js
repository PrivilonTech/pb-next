import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { to, subject, content } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL_ID,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
  });

  // Define email content
  const mailOptions = {
    from: process.env.ADMIN_EMAIL_ID,
    to,
    subject,
    html: content,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending mail" });
  }
}
