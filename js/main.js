//menu

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

//faq
document.querySelectorAll('.faq-title').forEach(title => {
    title.addEventListener('click', () => {
        const faqItem = title.parentElement;
        faqItem.classList.toggle('open');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('open');
            }
        });
    });
});

//video

const lightbox = GLightbox({
    selector: '.glightbox',
});


