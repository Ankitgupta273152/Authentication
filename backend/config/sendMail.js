import { createTransport } from "nodemailer";

const sendMail = async ({ email, subject, html }) => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.warn("SMTP credentials not configured - skipping sendMail for:", email);
    return null;
  }

  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: { user, pass },
  });

  try {
    await transport.sendMail({ from: user, to: email, subject, html });
  } catch (err) {
    console.error("sendMail error:", err?.message || err);
    return null;
  }
};

export default sendMail;
