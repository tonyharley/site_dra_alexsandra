// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Fecha outras respostas abertas
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer && item.classList.contains('active')) {
                item.classList.remove('active');
                item.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
        
        // Alterna resposta atual
        answer.classList.toggle('active');
        const icon = button.querySelector('i');
        icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

// Smooth Scrolling para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulário de contato (simulação)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui normalmente enviaria para um backend
    // Por enquanto, apenas exibe mensagem
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Solicitação enviada! Entraremos em contato em até 24h.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Menu responsivo (opcional - pode ser adicionado)
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        // Adicionar botão hamburger se necessário
        if (!document.querySelector('.hamburger')) {
            const hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            navbar.insertBefore(hamburger, navMenu);
            
            hamburger.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });
            
            navMenu.style.display = 'none';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '1rem';
        }
    }
}

window.addEventListener('resize', initMobileMenu);
window.addEventListener('load', initMobileMenu);