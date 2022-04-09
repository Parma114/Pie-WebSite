const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-home', {
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-menu', {
    scrollTrigger: '.animate-menu',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1
});

gsap.from('.animate-card-2', {
    scrollTrigger: '.animate-card-2',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1
});

gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.1
});
