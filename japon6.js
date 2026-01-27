document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.neo-card');

    // Animation d'apparition en cascade
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        
        setTimeout(() => {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });

    // Effet tactile/clic
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = "scale(0.95)";
            setTimeout(() => {
                card.style.transform = "translateY(-10px)";
            }, 150);
        });
    });
});
