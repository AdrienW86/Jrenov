import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, telephone, email, ville, sujet, message } = body;

    // Validation des champs obligatoires
    if (!nom || !telephone || !sujet || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Envoi du mail via Resend
    const data = await resend.emails.send({
      from: 'Jrenov Site <contact@jrenov.com>', // Ton domaine validé sur Resend
      to: ['contact@jrenov.com'], // Ton adresse Zoho
      replyTo: email || undefined, // Permet de répondre directement au client s'il a renseigné son mail
      subject: `[Formulaire Site] Nouvelle demande : ${sujet} - ${nom}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d97706;">Nouvelle demande de contact (Jrenov)</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nom complet :</strong> ${nom}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Email :</strong> ${email || 'Non renseigné'}</p>
          <p><strong>Ville / CP :</strong> ${ville || 'Non renseigné'}</p>
          <p><strong>Type d'intervention :</strong> ${sujet}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message / Description :</strong></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur d\'envoi Resend:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}