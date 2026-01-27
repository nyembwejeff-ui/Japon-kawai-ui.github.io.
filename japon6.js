document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.neo-card');

    // Effet de suivi de la souris pour le dégradé des cartes
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });

        // Feedback au clic
        card.addEventListener('click', () => {
            card.style.transform = "scale(0.9) rotateY(20deg)";
            setTimeout(() => {
                card.style.transform = "";
            }, 200);
            
            // Son ou vibration optionnelle ici
            if (window.navigator.vibrate) window.navigator.vibrate(50);
        });
    });

    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        observer.observe(card);
    });
});


