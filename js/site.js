/* ============================================================
   BURNT THUMB WORKS — site.js
   Dependency-free. Mobile nav, footer year, project-intake wiring.
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     PROJECT INTAKE (Google Form)
     When the studio's Google Form is live, paste its share URL below.
     Until then, "Start a project" buttons show a calm "opening soon"
     note instead of faking a submission.
     e.g.  var PROJECT_FORM_URL = "https://docs.google.com/forms/d/e/XXXX/viewform";
  ------------------------------------------------------------------ */
  var PROJECT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfpJNWK3I8aqLpjYhaUz7ZMJAOS8UZqVlP26-odAp9HO5_hEQ/viewform";

  // ---- Mobile nav ----
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
  var yearEls = document.querySelectorAll("[data-year]");
  for (var i = 0; i < yearEls.length; i++) { yearEls[i].textContent = String(new Date().getFullYear()); }

  // ---- Email assembled from parts (kept out of page source) ----
  var addr = ["burntthumbworks", "gmail.com"].join("@");
  var mailEls = document.querySelectorAll("[data-email]");
  for (var m = 0; m < mailEls.length; m++) {
    var el = mailEls[m];
    var subj = el.getAttribute("data-subject") || "Studio inquiry — Burnt Thumb Works";
    el.setAttribute("href", "mailto:" + addr + "?subject=" + encodeURIComponent(subj));
    if (el.hasAttribute("data-email-label")) { el.textContent = addr; }
  }

  // ---- Start-a-project buttons ----
  var noteEl = document.getElementById("intake-note");
  var hasIntake = !!document.getElementById("intake");
  var startEls = document.querySelectorAll("[data-start-project]");
  for (var s = 0; s < startEls.length; s++) {
    (function (btn) {
      if (PROJECT_FORM_URL) {
        btn.setAttribute("href", PROJECT_FORM_URL);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("rel", "noopener");
      } else if (hasIntake) {
        // On the page that hosts the intake: scroll to it and reveal the note.
        btn.setAttribute("href", "#intake");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          var form = document.getElementById("intake");
          if (form) { form.scrollIntoView({ behavior: "smooth", block: "start" }); }
          if (noteEl) { noteEl.hidden = false; if (noteEl.focus) { noteEl.focus(); } }
        });
      }
      // Otherwise leave the authored href (contact.html#intake) so the button
      // navigates to the contact page's intake section.
    })(startEls[s]);
  }
  // If the form URL is set, the standing note is unnecessary.
  if (PROJECT_FORM_URL && noteEl) { noteEl.remove(); }
})();
