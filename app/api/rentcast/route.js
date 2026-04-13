export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return Response.json({ error: 'Address required' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.rentcast.io/v1/avm/value?address=${encodeURIComponent(address)}&compCount=5`,
      {
        headers: {
          'X-Api-Key': process.env.RENTCAST_API_KEY,
          'Accept': 'application/json',
        },
      }
    );

    if (!res.ok) {
      return Response.json({ error: 'Rentcast lookup failed' }, { status: 500 });
    }

    const data = await res.json();

    return Response.json({
      estimate: data.price,
      low: data.priceRangeLow,
      high: data.priceRangeHigh,
    });
  } catch (e) {
    return Response.json({ error: 'Rentcast error' }, { status: 500 });
  }
}