/*** Locomotive scroll importeret fra github https://github.com/locomotivemtl/locomotive-scroll */

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

/*** Første blok: Element med ID 'Menu-toggle' tilføjer class 'menu-open' til <body> på klik.
 * Hvilket åbner menuen */

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.body.classList.add("menu-open");
});

/*** Anden blok: Element med ID 'close-menu' fjerner class 'menu-open' fra <body> på klik.
 */

document.getElementById("close-menu").addEventListener("click", function () {
  document.body.classList.remove("menu-open");
});
