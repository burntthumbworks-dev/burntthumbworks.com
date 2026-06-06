// config.sample.js — copy to config.js (GIT-IGNORED) and fill in to activate public intake.
// These two values are CLIENT-SAFE (the anon/publishable key is meant for browsers and is
// only safe because RLS is enabled on btw-core-dev). NEVER put the service-role key here.
// Do NOT commit config.js. Activation is an owner action; see OWNER_ACTION_PLACEHOLDERS_SAFE.md.
window.__BTW_PUBLIC_CONFIG = {
  SUPABASE_URL: "",        // e.g. https://ldckdkvibsorqamsudry.supabase.co
  SUPABASE_ANON_KEY: "",   // publishable anon key from btw-core-dev (RLS-protected)
};
