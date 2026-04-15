import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, market, strategy, timeline } = await req.json();

    if (!name || !email || !market) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sgMail.send({
      to: 'dan@hssvirginia.com',
      from: 'info@freedealcalc.com',
      subject: `New Agent Match Request — ${market}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; padding: 24px; color: #1a1a1a;">
          <h2 style="color: #00C27C;">New Agent Match Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Market:</strong> ${market}</p>
          <p><strong>Strategy:</strong> ${strategy || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <hr style="margin-top: 24px; border-color: #e2e8e4;">
          <p style="font-size: 11px; color: #888888;">Sent from FreeDealCalc.com agent match form</p>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Agent match email error:', error);
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}