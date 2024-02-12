const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();

    const targetHref = this.getAttribute('href');

    if (targetHref === '#home-page' || targetHref === '#contact' || targetHref === '#works') {
        const targetSection = document.querySelector(targetHref);
        targetSection.scrollIntoView({ behavior: 'smooth' });

    } else if (targetHref === './Name Avinash Kumar Sinha.pdf') {
        window.open(targetHref);
    }
    else {
        window.open(targetHref);
    }
}
