document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formMessage = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.classList.add('loading');
    submitBtn.textContent = 'Enviando...';
    
    setTimeout(() => {
            form.classList.remove('loading');
            submitBtn.textContent = 'Enviar mensaje';
            
            formMessage.className = 'form-message success';
            formMessage.textContent = '¡Mensaje enviado correctamente! Te responderemos pronto.';
            formMessage.style.display = 'block';
            
            form.reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 2000);
    });

document.querySelectorAll('.field-form input, .field-form textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentNode.classList.remove('focused');
        }
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bg = document.body;
    bg.style.transform = `translateY(${scrolled * 0.1}px)`;
});

document.querySelectorAll('.submit-btn, .contact-item').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
        document.head.appendChild(style);