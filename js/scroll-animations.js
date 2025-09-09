// Scroll animation functionality
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Also observe individual elements that should animate
  const animateElements = document.querySelectorAll(
    ".row, .column, .item-service, .masonry__brick"
  );
  animateElements.forEach((element) => {
    observer.observe(element);
  });
});
