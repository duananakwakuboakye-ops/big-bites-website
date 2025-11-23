// Section Reveal Effect
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.90;
    reveals.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Futuristic Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 19}px, ${e.clientY - 19}px)`;
});

// Cursor expands on hover
document.querySelectorAll('button, a, input, .menu-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Fake form submit
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for reaching out to Big Bites Ghana! We'll get back to you soon.");
        contactForm.reset();
    });
}
