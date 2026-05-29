/* ============================================================
   BURNT THUMB WORKS — site.js
   Minimal, dependency-free. Three jobs:
   1. Mobile nav toggle (accessible).
   2. Current year in the footer.
   3. Contact button -> opens the visitor's email app (no backend,
      no data collection). The address is assembled here so it is
      never present as plain text in the page HTML.
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

  // ---- Contact (static mailto, no backend, no data collection) ----
  // The address is assembled from parts so it is not plain text in the HTML.
  var contactBtns = document.querySelectorAll("[data-contact]");
  if (contactBtns.length) {
    var address = ["burntthumbworks", "gmail.com"].join("@");
    Array.prototype.forEach.call(contactBtns, function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        var subject = b.getAttribute("data-subject") || "Studio inquiry";
        window.location.href =
          "mailto:" + address + "?subject=" + encodeURIComponent(subject);
      });
    });
  }
})();
