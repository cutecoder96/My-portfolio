if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
const swiper = new Swiper(".project-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
}