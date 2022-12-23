let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('ul');

hamburger.addEventListener('click', () =>
{
    navbar.classList.toggle('slide');
});