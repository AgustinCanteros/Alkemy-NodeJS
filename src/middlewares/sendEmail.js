import sgMail from "@sendgrid/mail";

export async function sendEmail(usuarioEmail) {
  try {
    const SENDGRID_API_KEY = //INGRESE UNA APIKEY DE SENDGRID
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: usuarioEmail,
      from: "", //INGRESE EL EMAIL VERIFICADO EN SENDGRID 
      subject: "Registro API Disney Alkemy",
      text: "Bienvenido",
    };
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
}
