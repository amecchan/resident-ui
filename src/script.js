// For hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

