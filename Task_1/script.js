const navBarToggle = document.querySelector('.navbar-toggle');
const navBarMenu = document.querySelector('.navbar-menu');

navBarToggle.addEventListener('click', () => {
    navBarMenu.classList.toggle('nav-menu_visible');
});