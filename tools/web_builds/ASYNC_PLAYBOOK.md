# Burnt Thumb Works — Async Local Web Builds Playbook (SOP)

**Model:** Build free live preview first -> Async intake via email/text -> 100% upfront Stripe payment -> Register/transfer `.com` & launch. Zero phone calls required.

---

## 1. Pricing & Payment Rules

| Offer | Price | Billing / Refund Rule |
|---|---|---|
| **New Local Business Website** | **$650 flat** | **100% upfront via Stripe Payment Link** *before* domain registration, hosting setup, or file handoff begins. Non-refundable once `.com` registration starts. Includes 1st-year `.com` registration (transferred to client's name/ownership after launch; ~$12–$15/yr renewal after Year 1), 1–3 page mobile-first static site (EN, ES, or bilingual toggle), `LocalBusiness` JSON-LD schema, HTTPS/SSL, and 1 round of pre-launch text/photo revisions. |
| **Existing Site Maintenance Takeover** | **$150 one-time setup + $25/mo** | Audit, static migration/SSL setup, and ongoing Care Plan for businesses with an existing simple site. |
| **Optional Care Plan** | **$25/month** | Cancel anytime — **Zero Hostage Policy** (full domain + ZIP transfer on cancellation). |

### Care Plan Scope
- **Included:** Hosting & SSL uptime, annual `.com` renewal, routine text/hours/phone/service updates, up to **5 new job photos/month**, and **48-hour business-day turnaround (Mon–Fri)**.
- **Excluded (Quoted Separately):** New pages or full redesigns, custom booking/e-commerce/database systems, logo design/copywriting/photography, Google/Facebook ads or social media, weekend/after-hours rush fixes, and third-party account password recovery.

---

## 2. Python Tooling Workflow (Stdlib Only)

1. **Prep Leads & Check `.com` Availability (Read-Only):**
   ```powershell
   python tools/web_builds/lead_prep.py --csv tools/web_builds/prospects/my_leads.csv --check-dns --write-json
   ```
2. **Build Preview Site (`noindex, nofollow`):**
   ```powershell
   python tools/web_builds/build_preview.py --slug <slug> --mode preview
   ```
3. **Send Rate-Limited Outreach (`--dry-run` first, then `--send`):**
   ```powershell
   python tools/web_builds/send_outreach.py --csv tools/web_builds/prospects/my_leads.csv --dry-run
   python tools/web_builds/send_outreach.py --csv tools/web_builds/prospects/my_leads.csv --send --delay 45
   ```
4. **Collect Payment & Async Intake (After Client Replies "I Want It"):**
   - Send the **$650 Stripe Payment Link** (or **$150 setup + $25/mo** link for takeover).
   - **Wait for Stripe payment to clear** before purchasing any domain or configuring production DNS.
   - Collect via email/text: business license #, final service list & towns, 4–6 job photos, and preferred lead email/phone.
5. **Register `.com` on Porkbun & Launch (`--mode prod`):**
   - Register the `.com` domain on Porkbun *after* payment clears.
   - Rebuild in production mode (`index, follow`):
     ```powershell
     python tools/web_builds/build_preview.py --slug <slug> --mode prod --out <deploy-dir>
     ```
   - Deploy static files (`index.html`, `styles.css`, `_headers`) to Cloudflare Pages / GitHub Pages, point Porkbun DNS (`A` or `CNAME`), verify SSL, and transfer domain ownership to the client's Porkbun account (or retain only while on Care Plan).
6. **Process Monthly Care Plan Updates:**
   ```powershell
   python tools/web_builds/process_care_updates.py --request tools/web_builds/clients/<update>.json
   ```
7. **Purge Stale Unpurchased Previews (>30 days):**
   ```powershell
   python tools/web_builds/cleanup_previews.py --days 30
   ```
