document.addEventListener("DOMContentLoaded", () => {

    const menuOpen = document.getElementById("menu-open-button");
    const menuClose = document.getElementById("menu-close-button");
    const navMenu = document.querySelector(".nav-menu");

    menuOpen.addEventListener("click", () => {
        navMenu.style.display = "flex";
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    });

    menuClose.addEventListener("click", () => {
        navMenu.style.display = "none";
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
    });

    // Swiper
    new Swiper(".slider-wrapper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

});
