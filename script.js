// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu when clicking a navigation link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
// ================================
// BACK TO TOP BUTTON
// ================================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});