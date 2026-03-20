
// ELEMENT SELECTORS

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const progressBar = document.getElementById('progress-bar');
const backToTopBtn = document.getElementById('backToTop');
const revealElements = document.querySelectorAll('.reveal');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');


// MENU TOGGLE
function toggleMenu() {
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('toggle');
}

// Open/Close menu
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Close menu when clicking overlay
if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Close menu when clicking any sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});



// REVEAL ON SCROLL

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}


// SCROLL PROGRESS BAR
function updateProgressBar() {
    if (!progressBar) return;

    const winScroll = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
}


// BACK TO TOP BUTTON
function handleBackToTop() {
    if (!backToTopBtn) return;

    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// Scroll to top
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}



// SCROLL EVENT (COMBINED)
window.addEventListener('scroll', () => {
    updateProgressBar();
    revealOnScroll();
    handleBackToTop();
});



// INITIAL LOAD
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});