/* ============================================================
   BURNT THUMB WORKS — site.js
   Dependency-free. Mobile nav, footer year, and email link assembly.
   ============================================================ */
(function () {
  "use strict";

  // ---- Mobile nav ----
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    function closeNav() {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("nav--open")) {
        closeNav();
      }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("nav--open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
        closeNav();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("nav--open")) {
        closeNav();
        toggle.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && nav.classList.contains("nav--open")) {
        closeNav();
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
    var subj = el.getAttribute("data-subject") || "Studio note — Burnt Thumb Works";
    el.setAttribute("href", "mailto:" + addr + "?subject=" + encodeURIComponent(subj));
    if (el.hasAttribute("data-email-label")) { el.textContent = addr; }
  }
})();
