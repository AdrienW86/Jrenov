import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      service,
      building,
      surface,
      nom,
      telephone,
      email,
      codePostal,
      description,
    } = body;

    // Validation des champs obligatoires
    if (!service || !nom || !telephone || !codePostal) {
      return NextResponse.json(
        { error: 'Informations obligatoires manquantes' },
        { status: 400 }
      );
    }

    // Traduction lisible des identifiants de services
    const servicesMap: Record<string, string> = {
      couverture: 'Rénovation de Toiture',
      zinguerie: 'Zinguerie & Gouttières',
      isolation: 'Isolation Thermique',
      demoussage: 'Nettoyage & Démoussage',
      urgence: "Urgence / Fuite d'eau",
    };

    const serviceName = servicesMap[service] || service;

    // Envoi de l'e-mail avec les variables d'environnement
    const data = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: [process.env.CONTACT_EMAIL_TO!],
      replyTo: email || undefined,
      subject: `[Demande de Devis] ${serviceName} - ${nom} (${codePostal})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #d97706; margin-top: 0;">Nouvelle demande de devis en ligne</h2>
          <p style="font-size: 14px; color: #64748b;">Reçue depuis le formulaire multi-étapes du site web.</p>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          
          <h3 style="color: #0f172a; font-size: 16px;">1. Service demandé</h3>
          <p><strong>Type de prestation :</strong> ${serviceName}</p>
          
          <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px;">2. Détails du bien & projet</h3>
          <ul>
            <li><strong>Type de bâtiment :</strong> ${building}</li>
            <li><strong>Surface estimée :</strong> ${surface ? `${surface} m²` : 'Non précisée'}</li>
          </ul>
          <p><strong>Précisions / Description :</strong></p>
          <div style="background-color: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 14px;">
            ${description ? description.replace(/\n/g, '<br>') : 'Aucune précision fournie.'}
          </div>

          <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px;">3. Coordonnées du client</h3>
          <ul>
            <li><strong>Nom & Prénom :</strong> ${nom}</li>
            <li><strong>Téléphone :</strong> <a href="tel:${telephone}" style="color: #d97706; font-weight: bold;">${telephone}</a></li>
            <li><strong>E-mail :</strong> ${email || 'Non renseigné'}</li>
            <li><strong>Ville / Code Postal :</strong> ${codePostal}</li>
          </ul>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">Message automatique généré par le site Jrenov.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur API Devis Resend:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la demande de devis" },
      { status: 500 }
    );
  }
}