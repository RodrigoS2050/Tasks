const btnMobile = document.querySelector(".btn-mobile");
function toggleMenu() {
  const nav = document.querySelector(".navegacao");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
