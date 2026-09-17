//transition
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.35 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// toggle theme
const root = document.documentElement;
const toggle = document.getElementById('mode-toggle');

const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('theme-mode', saved);

toggle.addEventListener('click', () => {
    const next = root.getAttribute('theme-mode') === 'light' ? 'dark' : 'light';
    root.setAttribute('theme-mode', next);
    localStorage.setItem('theme', next);
});