document.addEventListener('DOMContentLoaded', () => {
    console.log("Page 3 chargée ! Prêt pour l'alphabet ? 🌸");

    const cards = document.querySelectorAll('.kawaii-card');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Animation de clic : petit rebond
            card.style.transform = "scale(0.95)";
            
            setTimeout(() => {
                card.style.transform = "scale(1.05)";
            }, 100);

            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 200);

            // Message spécial pour le cours 60 (le dernier)
            if (index === cards.length - 1) {
                alert("✨ MAGNIFIQUE ! ✨\nTu as appris 60 notions de Japonais !\nTu es officiellement un élève brillant ! 🏆");
            }
        });
    });
});


