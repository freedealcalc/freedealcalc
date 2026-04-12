export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'info@freedealcalc.com' }] }],
        from: { email: 'info@freedealcalc.com', name: 'FreeDealCalc' },
        reply_to: { email: email, name: name },
        subject: `Contact Form: ${subject || 'General Inquiry'} — ${name}`,
        content: [{
          type: 'text/plain',
          value: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
        }]
      })
    });

    return Response.json({ success: true });
  } catch(e) {
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}