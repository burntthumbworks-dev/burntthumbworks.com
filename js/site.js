/* ============================================================
   BURNT THUMB WORKS — site.js
   Minimal, dependency-free. Two jobs:
   1. Mobile nav toggle (accessible).
   2. Current year in the footer.
   ============================================================ */
(function () {
  "use strict";

  // ---- Mobile navigation toggle ----
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link inside it is clicked (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("nav--open")) {
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Reset state when resizing back up to desktop
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

  // ---- Contact form (static, no backend) ----
  // Validates a human-check + honeypot, then opens the visitor's email app with
  // the message pre-filled. The studio address is assembled here from parts so it
  // is never present as plain text in the page HTML.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("cf-status");
    var setStatus = function (msg, kind) {
      status.textContent = msg;
      status.className = "cf-status" + (kind ? " " + kind : "");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // honeypot: real people never see/fill this
      var hp = form.querySelector('[name="company"]');
      if (hp && hp.value.trim() !== "") { return; }

      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var message = form.querySelector('[name="message"]').value.trim();
      var human = form.querySelector('[name="human"]').value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

      if (!name || !email || !message) {
        setStatus("Add your name, email, and a message first.", "err");
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        setStatus("That email doesn't look right — check it so we can reply.", "err");
        return;
      }
      if (human !== "7" && human !== "seven") {
        setStatus("Almost — answer the quick check: three + four.", "err");
        return;
      }

      // assemble address from parts (kept out of the HTML source)
      var to = ["burntthumbworks", "gmail.com"].join("@");
      var subject = "Studio inquiry \u2014 " + name;
      var body = message + "\n\n\u2014 " + name + "\nReply to: " + email;
      var href = "mailto:" + to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = href;
      setStatus("Opening your email app with the message ready to send.", "ok");
    });
  }
})();
