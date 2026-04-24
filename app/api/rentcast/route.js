import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Normalize address for consistent cache keys
function normalizeAddress(address) {
  return address
    .toLowerCase()
    .trim()
    .replace(/[.,]/g, '')
    .replace(/\s+/g, ' ');
}

// Cache TTL: 30 days
const CACHE_TTL_DAYS = 30;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return Response.json({ error: 'Address required' }, { status: 400 });
  }

  const addressKey = normalizeAddress(address);

  // Step 1: Check cache first
  try {
    const { data: cached, error: cacheError } = await supabase
      .from('rentcast_cache')
      .select('response_data, expires_at')
      .eq('address_key', addressKey)
      .gt('expires_at', new Date().toISOString())
      .maybeSingle();

    if (!cacheError && cached) {
      console.log(`[Rentcast] Cache HIT for ${addressKey}`);
      return Response.json(cached.response_data);
    }
  } catch (e) {
    console.error('[Rentcast] Cache read error (continuing to API):', e);
    // Fall through to API call — don't let cache errors break the feature
  }

  // Step 2: Cache miss — call Rentcast API
  console.log(`[Rentcast] Cache MISS for ${addressKey} — calling API`);

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

    const responsePayload = {
      estimate: data.price,
      low: data.priceRangeLow,
      high: data.priceRangeHigh,
    };

    // Step 3: Store in cache (non-blocking — don't let cache write errors affect response)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + CACHE_TTL_DAYS);

    supabase
      .from('rentcast_cache')
      .upsert(
        {
          address_key: addressKey,
          response_data: responsePayload,
          expires_at: expiresAt.toISOString(),
        },
        { onConflict: 'address_key' }
      )
      .then(({ error }) => {
        if (error) console.error('[Rentcast] Cache write error:', error);
      });

    return Response.json(responsePayload);
  } catch (e) {
    console.error('[Rentcast] API error:', e);
    return Response.json({ error: 'Rentcast error' }, { status: 500 });
  }
}