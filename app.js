// ================================
// VARIABLES
// ================================

const sections = document.querySelectorAll('section');
const linksNav = document.querySelectorAll('.navigation a');
const menuicon = document.querySelector('#menu-burger');
const nav = document.querySelector('.navigation');


// ================================
// MENU BURGER
// ================================

const burgerActive = () => {
    menuicon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};


// ================================
// NAVIGATION ACTIVE AU SCROLL
// ================================

const scrollActive = () => {

    const top = window.scrollY;

    sections.forEach(section => {

        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {

            linksNav.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                '.navigation a[href="#' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};


// ================================
// SCROLL REVEAL
// ================================

// ========================================
// SCROLL REVEAL - ANIMATIONS
// ========================================

if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: false,
        distance: '80px',
        duration: 1000,
        delay: 150,
        easing: 'ease-in-out'
    });
}

const reveal = typeof ScrollReveal !== 'undefined' ? ScrollReveal() : { reveal: () => {} };


// ========================================
// SECTION ACCUEIL
// ========================================

reveal.reveal('.home-content h3', {
    origin: 'top',
    delay: 200
});

reveal.reveal('.home-content h1', {
    origin: 'left',
    delay: 400
});

reveal.reveal('.home-content p', {
    origin: 'left',
    delay: 600
});

reveal.reveal('.home-content .social-media', {
    origin: 'bottom',
    delay: 800
});

reveal.reveal('.home-img', {
    origin: 'right',
    delay: 500,
    distance: '100px'
});


// ========================================
// TITRES DES SECTIONS
// ========================================

reveal.reveal('.section-title', {
    origin: 'top',
    delay: 200,
    distance: '50px'
});


// ========================================
// SECTION À PROPOS
// ========================================

reveal.reveal('.about-img', {
    origin: 'left',
    delay: 300,
    distance: '100px'
});

reveal.reveal('.about-content h3', {
    origin: 'right',
    delay: 400
});

reveal.reveal('.about-content p', {
    origin: 'right',
    delay: 600
});

reveal.reveal('.about-content .btn', {
    origin: 'bottom',
    delay: 800
});


// ========================================
// SERVICES
// ========================================

reveal.reveal('.services-box', {
    origin: 'bottom',
    delay: 200,
    interval: 200,
    distance: '70px'
});


// ========================================
// PORTFOLIO
// ========================================

reveal.reveal('.portfolio-box', {
    origin: 'bottom',
    delay: 200,
    interval: 250,
    distance: '80px'
});


// ========================================
// CONTACT
// ========================================

reveal.reveal('.contact form', {
    origin: 'bottom',
    delay: 300,
    distance: '100px'
});


// ========================================
// COMPÉTENCES
// ========================================

reveal.reveal('.skills-grid', {
    origin: 'bottom',
    delay: 200,
    interval: 200,
    distance: '80px'
});

reveal.reveal('.skill-category', {
    origin: 'bottom',
    delay: 400,
    interval: 150,
    distance: '60px'
});

// ========================================
// EXPÉRIENCES
// ========================================

reveal.reveal('.experience-timeline', {
    origin: 'bottom',
    delay: 200,
    interval: 200,
    distance: '80px'
});

reveal.reveal('.experience-item', {
    origin: 'bottom',
    delay: 400,
    interval: 150,
    distance: '60px'
});

// ========================================
// FORMATION
// ========================================

reveal.reveal('.education-grid', {
    origin: 'bottom',
    delay: 200,
    interval: 200,
    distance: '80px'
});

reveal.reveal('.education-item', {
    origin: 'bottom',
    delay: 400,
    interval: 150,
    distance: '60px'
});

// ========================================
// FOOTER
// ========================================

reveal.reveal('.footer-box', {
    origin: 'bottom',
    delay: 200,
    interval: 150,
    distance: '60px'
});

reveal.reveal('.footer-bottom', {
    origin: 'bottom',
    delay: 500
});


// ================================
// TEXTE ANIMÉ - TYPED.JS
// ================================

if (typeof Typed !== 'undefined') {
new Typed('.multiple', {
    strings: [
        'Technicien Informatique',
        'Support IT & Assistance Utilisateurs',
        'Développeur Web Full-Stack',
        'Administrateur Systèmes & Réseaux'
    ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true
});
}


// ================================
// ÉVÉNEMENTS
// ================================

menuicon.addEventListener('click', burgerActive);

window.addEventListener('scroll', scrollActive);