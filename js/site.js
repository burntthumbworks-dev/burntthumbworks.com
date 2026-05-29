/* ============================================================
   BURNT THUMB WORKS — site.js
   Minimal, dependency-free. Four jobs:
   1. Mobile nav toggle (accessible).
   2. Current year in the footer.
   3. "Start a Project" -> opens the BTW Client Intake form
      (Google Form) in a new tab. The static site never submits
      or stores anything; the form is the receiver. Until the
      form URL is configured below, this falls back to email so
      there is never a dead link.
   4. Email fallback -> opens the visitor's email app (no backend,
      no data collection). The address is assembled here so it is
      never present as plain text in the page HTML.
   ============================================================ */
(function () {
  "use strict";

  /* ---- CONFIG ----------------------------------------------------------
     Paste the live BTW Client Intake Google Form URL between the quotes to
     activate the "Start a Project" button. While it is empty, the button
     safely falls back to email. No other change is needed to go live.      */
  var PROJECT_FORM_URL = "";  // e.g. "https://forms.gle/XXXXXXXX"
  /* --------------------------------------------------------------------- */

  // ---- Mobile navigation toggle ----
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("nav--open")) {
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720 && nav.classList.contains("nav--open")) {
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Footer year ----
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  // ---- Email fallback (static mailto, no backend, no data collection) ----
  // The address is assembled from parts so it is not plain text in the HTML.
  var address = ["burntthumbworks", "gmail.com"].join("@");
  function openEmail(subject) {
    window.location.href =
      "mailto:" + address + "?subject=" + encodeURIComponent(subject || "Studio inquiry");
  }

  var contactBtns = document.querySelectorAll("[data-contact]");
  if (contactBtns.length) {
    Array.prototype.forEach.call(contactBtns, function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        openEmail(b.getAttribute("data-subject"));
      });
    });
  }

  // ---- "Start a Project" -> Google Form intake (new tab), or email fallback ----
  // The static site does not submit or store anything. When PROJECT_FORM_URL
  // is set, the button opens that form; until then it falls back to email so
  // the button is never a dead link.
  var startBtns = document.querySelectorAll("[data-start-project]");
  if (startBtns.length) {
    Array.prototype.forEach.call(startBtns, function (b) {
      if (PROJECT_FORM_URL) {
        b.setAttribute("href", PROJECT_FORM_URL);
        b.setAttribute("target", "_blank");
        b.setAttribute("rel", "noopener noreferrer");
      } else {
        b.addEventListener("click", function (e) {
          e.preventDefault();
          openEmail("Project inquiry — Burnt Thumb Works");
        });
      }
    });
  }
})();
