function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}

// Dropdown toggle for mobile
const dropdownLinks = document.querySelectorAll('.navbar-menu li > a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const dropdown = link.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            e.preventDefault();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});

