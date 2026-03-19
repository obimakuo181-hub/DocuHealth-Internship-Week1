const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// TOGGLE FUNCTION
function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('toggle');
}

// Event Listeners
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Close when link is clicked
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// --- REVEAL ON SCROLL ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}

// --- SCROLL PROGRESS ---
window.onscroll = () => {
    const progressBar = document.getElementById("progress-bar");
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";
    
    reveal();
};

window.addEventListener("DOMContentLoaded", reveal);