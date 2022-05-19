const btn = document.getElementById("menu-btn");
const nav = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  nav.classList.toggle("invisible");
});
