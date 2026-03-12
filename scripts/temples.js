document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = hamburger.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });

    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    lastModifiedSpan.textContent = formattedDate;
});
