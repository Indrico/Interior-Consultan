const burger = document.getElementById("burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
})