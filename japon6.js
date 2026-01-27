document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.neo-card');

    cards.forEach((card, index) => {
        // Animation d'entrée
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            card.style.transition = "all 0.5s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 50);

        // Effet au clic
        card.addEventListener('click', () => {
            card.style.transform = "scale(0.9)";
            setTimeout(() => card.style.transform = "translateY(-10px)", 150);
        });
    });
});
