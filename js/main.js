const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const langToggle = document.querySelector(".open-lang-menu");
const langNav = document.querySelector(".lang-menu-show");

// document.getElementById("hero__container").style.marginTop = "135px";

navToggle.addEventListener("click", () => {
   nav.classList.toggle("nav--visible");
   var h = document.getElementById("header").clientHeight;
   document.getElementById("hero__container").style.marginTop = "calc(" + h + "px" + " - 30px)";
});

langToggle.addEventListener("mouseenter", () => {
   langNav.classList.add("nav--visible");
});

langToggle.addEventListener("mouseleave", () => {
   langNav.classList.remove("nav--visible");
});

langNav.addEventListener("mouseenter", () => {
   langNav.classList.add("nav--visible");
});

langNav.addEventListener("mouseleave", () => {
   langNav.classList.remove("nav--visible");
});

langToggle.addEventListener("click", () => {
   langNav.classList.toggle("nav--visible");
});
