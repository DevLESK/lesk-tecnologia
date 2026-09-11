"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const mobile = window.matchMedia("(max-width: 760px)");

function closeMenu(returnFocus = false) {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  if (returnFocus) menuButton.focus();
}

document.documentElement.classList.add("js");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner")) closeMenu();
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".header-inner")) closeMenu();
});
mobile.addEventListener("change", () => closeMenu());

const config = window.LESK_CONFIG || {};
const number = config.whatsappNumber || "";
const whatsappReady = /^\d{10,15}$/.test(number);
let instagramReady = false;
try {
  const url = new URL(config.instagramUrl);
  instagramReady = url.protocol === "https:" && ["instagram.com", "www.instagram.com"].includes(url.hostname) && url.pathname !== "/";
} catch { /* Configuração vazia: manter âncora local e aviso visível. */ }

document.querySelectorAll("[data-contact]").forEach((link) => {
  const whatsapp = link.dataset.contact === "whatsapp";
  if (whatsapp ? whatsappReady : instagramReady) {
    link.href = whatsapp
      ? `https://wa.me/${number}?text=${encodeURIComponent(config.whatsappMessage || "Olá!")}`
      : config.instagramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${link.textContent.trim()} (abre em nova aba)`);
  } else {
    link.setAttribute("aria-describedby", "contact-notice");
  }
});
const missing = [];
if (!whatsappReady) missing.push("WhatsApp");
if (!instagramReady) missing.push("Instagram");
const notice = document.querySelector("#contact-notice");
notice.hidden = missing.length === 0;
notice.textContent = missing.length ? `${missing.join(" e ")}: contato oficial ainda não informado. Os links serão disponibilizados em breve.` : "";
document.querySelector("#year").textContent = new Date().getFullYear();
