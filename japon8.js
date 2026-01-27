document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.neo-card');

    // Effet d'illumination au passage de la souris
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });

        // Animation au clic pour simuler une "connexion" grammaticale
        card.addEventListener('click', () => {
            card.style.boxShadow = "0 0 40px #00FFAB";
            setTimeout(() => {
                card.style.boxShadow = "0 0 20px rgba(0, 255, 171, 0.4)";
            }, 400);
        });
    });

    // Révélation progressive
    const reveal = () => {
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, i * 150);
        });
    };

    // Initialisation
    cards.forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(30px)";
        c.style.transition = "all 0.5s ease";
    });
    reveal();
});


