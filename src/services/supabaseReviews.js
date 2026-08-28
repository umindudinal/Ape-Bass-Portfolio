const SUPABASE_URL = "https://jkpaufgndiurapvkwlml.supabase.co";
const SUPABASE_KEY = "sb_publishable_pivcvfrJnuCP5SGPm1SRCA_h-TJXzT4";

/**
 * Fetch all comments from Supabase table 'comments'
 */
export async function fetchReviewsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/comments?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!res.ok) {
      console.warn("Supabase comments table fetch status:", res.status);
      return null;
    }

    const data = await res.json();
    if (!Array.isArray(data)) return null;

    // Map DB fields to Component format
    return data.map(item => ({
      id: item.id || Date.now(),
      name: item.name || "Anonymous",
      city: item.city || "Sri Lanka",
      service: item.service || "General Service",
      quote: item.quote || "",
      stars: item.stars || 5,
      avatarBg: item.avatar_bg || "from-emerald-500 to-teal-600",
      date: item.created_at ? new Date(item.created_at).toLocaleDateString('en-GB') : new Date().toLocaleDateString('en-GB')
    }));
  } catch (e) {
    console.error("Supabase fetch error:", e);
    return null;
  }
}

/**
 * Insert a new comment into Supabase table 'comments'
 */
export async function saveReviewToSupabase(reviewObj) {
  try {
    const payload = {
      name: reviewObj.name,
      city: reviewObj.city,
      service: reviewObj.service,
      quote: reviewObj.quote,
      stars: reviewObj.stars,
      avatar_bg: reviewObj.avatarBg,
      created_at: new Date().toISOString()
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/comments`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn("Supabase save error response:", res.status, errText);
      return false;
    }

    const insertedData = await res.json();
    return insertedData;
  } catch (e) {
    console.error("Supabase save exception:", e);
    return false;
  }
}
