const navToggleEl = document.querySelector(".header__nav-toggle");
const navEl = document.querySelector(".nav");

navToggleEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--is-hidden");
});
