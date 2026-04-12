export async function POST(request) {
  try {
    const body = await request.json();
    const { address, askingPrice, arv, rehabEstimate, emd, closeBy, condition, description, extras, userName, userPhone, userCompany, userEmail } = body;

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'dan@hssvirginia.com' }] }],
        from: { email: 'info@freedealcalc.com', name: 'FreeDealCalc' },
        subject: `🔥 New Deal Blast Submission — ${address}`,
        content: [{
          type: 'text/plain',
          value: `New Deal Blast submission:\n\nAddress: ${address}\nAsking Price: $${askingPrice}\nARV: $${arv}\nRehab: $${rehabEstimate}\nEMD: $${emd}\nClose By: ${closeBy}\nCondition: ${condition}\n\nDescription:\n${description}\n\nExtra Notes:\n${extras}\n\nSubmitted by:\n${userName}\n${userPhone}\n${userCompany}\n${userEmail}`
        }]
      })
    });

    return Response.json({ success: true });
  } catch(e) {
    return Response.json({ error: 'Failed to submit' }, { status: 500 });
  }
}