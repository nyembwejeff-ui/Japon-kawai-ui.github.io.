document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');

    // Effet d'entrée séquentiel
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Interaction au clic
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Petit flash de couleur
            card.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            
            // Création d'une petite particule (optionnel mais stylé)
            console.log("Verb sélectionné: " + card.querySelector('h2').innerText);
            
            setTimeout(() => {
                card.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }, 200);
        });
    });
});


