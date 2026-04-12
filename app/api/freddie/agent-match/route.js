export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, market, strategy } = body;

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'dan@hssvirginia.com' }] }],
        from: { email: 'info@freedealcalc.com', name: 'FreeDealCalc' },
        subject: `Agent Match Request — ${market}`,
        content: [{
          type: 'text/plain',
          value: `New agent match request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMarket: ${market}\nStrategy: ${strategy}`
        }]
      })
    });

    return Response.json({ success: true });
  } catch(e) {
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}