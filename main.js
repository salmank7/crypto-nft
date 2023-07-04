const toggleBtn = document.querySelector(".toggleMenu");
const links = document.getElementById("links");

toggleBtn.addEventListener("click", (event) => {
  links.classList.toggle("top-[-10rem]");
  links.classList.toggle("top-12");
});
