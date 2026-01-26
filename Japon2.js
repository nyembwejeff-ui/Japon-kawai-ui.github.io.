// Japon1.js - Interactivité Kawaii
document.addEventListener('DOMContentLoaded', () => {
    console.log("Prêt pour la leçon 2 ! ✨");

    const cards = document.querySelectorAll('.kawaii-card');

    // Petit effet au clic sur les cartes de cours
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.backgroundColor = "#fff9ae"; // Change en jaune au clic
            setTimeout(() => {
                card.style.backgroundColor = "white";
            }, 500);
        });
    });

    // Message spécial pour le bouton félicitations (Cours 40)
    const lastCard = cards[cards.length - 1];
    lastCard.addEventListener('click', () => {
        alert("🎉 Bravo ! Tu as terminé les 40 mini-cours ! Tu es un champion du Japonais ! 🌸");
    });
});


