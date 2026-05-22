// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Fecha outras respostas abertas
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer && item.classList.contains('active')) {
                item.classList.remove('active');
                const otherIcon = item.previousElementSibling.querySelector('i');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            }
        });

        // Alterna resposta atual
        answer.classList.toggle('active');
        const icon = button.querySelector('i');
        if (icon) {
            icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });
});

// Smooth Scrolling para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();

            const offset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Meta Pixel - rastreia clique em WhatsApp como conversão (Contact)
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.addEventListener('click', () => {
        if (typeof fbq === 'function') {
            fbq('track', 'Contact');
        }
    });
});

// Meta Pixel - rastreia visualização da seção de procedimentos (ViewContent)
const proceduresSection = document.querySelector('#procedures');
if (proceduresSection && 'IntersectionObserver' in window) {
    const proceduresObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof fbq === 'function') {
                    fbq('track', 'ViewContent', { content_name: 'Procedimentos' });
                }
                observer.disconnect(); // dispara apenas uma vez
            }
        });
    }, { threshold: 0.5 });
    proceduresObserver.observe(proceduresSection);
}
