function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const dropdown = document.querySelector('.dropdown');
const dropcontent = document.querySelector('.dropcontent');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
})

