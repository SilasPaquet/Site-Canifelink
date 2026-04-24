import nodemailer from "nodemailer";

const recipientEmail = "canifelink@gmail.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return Response.json(
        {
          error:
            "Le serveur email n'est pas configure. Ajoutez SMTP_USER et SMTP_PASS.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Site Canifelink <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Demande de RDV - ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Une erreur est survenue pendant l'envoi du message." },
      { status: 500 },
    );
  }
}
