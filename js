document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'all 1.5s ease-out';
        observer.observe(el);
    });
});
