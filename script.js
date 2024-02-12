const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();

    const targetHref = this.getAttribute('href');

    if (targetHref === '#home-page' || '#contact' || '#works') {
        const targetSection = document.querySelector(targetHref);
        targetSection.scrollIntoView({ behavior: 'smooth' });

    } else {
        window.open(targetHref);
    }
}

