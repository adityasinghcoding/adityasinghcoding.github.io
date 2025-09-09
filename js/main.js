// Main.js for the website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Menu toggle for mobile
const menuToggle = document.querySelector(".header-menu-toggle");
const navWrap = document.querySelector(".header-nav-wrap");

if (menuToggle && navWrap) {
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    navWrap.classList.toggle("is-visible");
    menuToggle.classList.toggle("is-active");
  });
}

console.log("Main script loaded");
