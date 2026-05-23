import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const { email, username, platform, post_url } = await request.json();

    if (!email || !post_url) {
      return Response.json({ error: 'Email and post link are required.' }, { status: 400 });
    }

    // Check how many entries this email already has
    const { count } = await supabase
      .from('contest_entries')
      .select('*', { count: 'exact', head: true })
      .eq('email', email.toLowerCase().trim());

    if (count >= 6) {
      return Response.json({ error: 'Maximum 6 entries per person reached.' }, { status: 400 });
    }

    // Check if this email already entered on this platform
    const { data: existing } = await supabase
      .from('contest_entries')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .eq('platform', platform)
      .single();

    if (existing) {
      return Response.json({ error: `You already submitted a ${platform} entry.` }, { status: 400 });
    }

    const { error } = await supabase.from('contest_entries').insert({
      email: email.toLowerCase().trim(),
      freedealcalc_username: username?.trim() || null,
      platform: platform.toLowerCase(),
      post_url: post_url.trim(),
      status: 'pending',
    });

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contest entry error:', error);
    return Response.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  }
}