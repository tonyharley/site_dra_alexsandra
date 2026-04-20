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
            
            // Fecha o menu mobile se estiver aberto
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            
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

// Menu Mobile - Hamburguer
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Verifica se já existe o botão hamburger
    let hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth <= 768) {
        // Adiciona botão hamburger se não existir
        if (!hamburger && navbar && navMenu) {
            hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            hamburger.setAttribute('aria-label', 'Menu');
            
            // Insere o botão antes do menu
            navbar.insertBefore(hamburger, navMenu);
            
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                const icon = hamburger.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
        
        // Garante que o menu comece fechado
        if (navMenu && !navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    } else {
        // Remove o botão hamburger em telas grandes
        if (hamburger) {
            hamburger.remove();
        }
        // Garante que o menu fique visível
        if (navMenu) {
            navMenu.classList.remove('active');
            navMenu.style.display = '';
        }
    }
}

// Formulário de contato
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Validação simples
    const nome = this.querySelector('input[placeholder="Seu nome"]')?.value;
    const whatsapp = this.querySelector('input[placeholder="WhatsApp"]')?.value;
    
    if (!nome || !whatsapp) {
        alert('Por favor, preencha seu nome e WhatsApp.');
        return;
    }
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simula envio
    setTimeout(() => {
        alert('✓ Solicitação enviada! Entraremos em contato em até 24h pelo WhatsApp.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Fecha o menu ao clicar fora (mobile)
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
        // Se clicou fora do menu e fora do botão hamburger
        if (!navMenu.contains(e.target) && !hamburger?.contains(e.target)) {
            navMenu.classList.remove('active');
            if (hamburger) {
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});

// Inicializa o menu mobile
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);