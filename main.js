document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.banner');
  ScrollReveal().reveal('.cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });