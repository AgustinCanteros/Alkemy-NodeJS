import sgMail from "@sendgrid/mail";

export async function sendEmail(usuarioEmail) {
  try {
    const SENDGRID_API_KEY =
      "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";
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: usuarioEmail,
      from: "canterosagustin10@gmail.com", // Use the email address or domain you verified above
      subject: "Registro API Disney Alkemy",
      text: "Bienvenido",
    };
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
}
