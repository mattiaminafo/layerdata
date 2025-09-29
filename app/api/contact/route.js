import { Resend } from 'resend';

// Initialize Resend only if API key is present
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Debug: check if API key is present
if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set in environment variables - contact form will not work');
}

export async function POST(request) {
  try {
    const { nome, email, azienda, ruolo, richiesta } = await request.json();

    // Debug: log the received data
    console.log('Received form data:', { nome, email, azienda, ruolo, richiesta });

    // Validate required fields (trim whitespace and check for empty strings)
    if (!nome?.trim() || !email?.trim() || !richiesta?.trim()) {
      console.log('Validation failed:', { 
        nome: nome?.trim(), 
        email: email?.trim(), 
        richiesta: richiesta?.trim() 
      });
      return Response.json(
        { error: 'Nome, email e richiesta sono obbligatori' },
        { status: 400 }
      );
    }

    // Check if Resend is available
    if (!resend) {
      console.error('Resend is not initialized - missing API key');
      return Response.json(
        { error: 'Servizio email non disponibile' },
        { status: 503 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'LayerData Contact <noreply@layerdata.eu>', // Using your verified domain
      to: ['info@layerdata.eu', 'info.layerdata@gmail.com','mattia@mattiaminafo.io', 'enrico@enricochiolo.it'], // Both email addresses
      subject: `Nuova richiesta di contatto da ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            Nuova richiesta di contatto
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Dettagli del contatto:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${azienda ? `<p><strong>Azienda:</strong> ${azienda}</p>` : ''}
            ${ruolo ? `<p><strong>Ruolo:</strong> ${ruolo}</p>` : ''}
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Richiesta:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${richiesta}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Questo messaggio è stato inviato tramite il form di contatto del sito LayerData.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Errore nell\'invio dell\'email' },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Email inviata con successo', id: data.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
}
