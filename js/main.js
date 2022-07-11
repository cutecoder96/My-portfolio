
const toggleButton = document.querySelector('.toggle-btn'); 

toggleButton.addEventListener("click", () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
});

let targetElement = document.querySelector('.target-element');

targetElement.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
});


// const swiperone = new Swiper(".project-container", {
//     cssMode: true,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
//   });

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
         e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);

    let position = element.offsetTop;

    window.scrollTo({
        left: 0,
        top: position,
    });
    });
});