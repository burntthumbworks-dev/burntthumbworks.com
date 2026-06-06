// intakeClient.js — Burnt Thumb Works PUBLIC intake client (INERT until configured).
// Static + public-safe. Submits public intake to the control backend (btw-core-dev,
// btw_core schema) using the ANON (publishable) key ONLY. RLS allows anon INSERT on
// the 4 intake tables and DENIES anon SELECT, so no private data is ever readable here.
//
// Activation is an OWNER ACTION: provide window.__BTW_PUBLIC_CONFIG (url + anon key)
// via a git-ignored config.js (see config.sample.js). Until then every submit() returns
// { ok:false, staged:true } and the page should fall back to a mailto/contact link.
//
// NEVER put the service-role key here. NEVER read private tables from the public site.

let _client = null;
let _status = "inert";

function publicConfig() {
  const c = (typeof window !== "undefined" && window.__BTW_PUBLIC_CONFIG) || {};
  if (!c.SUPABASE_URL || !c.SUPABASE_ANON_KEY) return null;
  return { url: c.SUPABASE_URL, anonKey: c.SUPABASE_ANON_KEY };
}

export function intakeStatus() {
  return _status;
}

async function client() {
  const conf = publicConfig();
  if (!conf) {
    _status = "inert";
    return null;
  }
  if (_client) return _client;
  try {
    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
    _client = createClient(conf.url, conf.anonKey);
    _status = "connected";
    return _client;
  } catch (e) {
    _status = "failed";
    return null;
  }
}

async function insert(table, row) {
  const sb = await client();
  if (!sb) return { ok: false, staged: true, reason: _status };
  const { error } = await sb.schema("btw_core").from(table).insert(row);
  if (error) return { ok: false, staged: false, reason: error.message };
  return { ok: true };
}

export const submitContact = (row) => insert("contact_messages", row);
export const submitServiceRequest = (row) => insert("service_requests", row);
export const submitNewsletter = (row) => insert("newsletter_signups", row);
export const submitIntake = (form_key, payload, source) =>
  insert("public_intake_submissions", { form_key, payload, source });
