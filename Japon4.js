document.addEventListener('DOMContentLoaded', () => {
    console.log("Bon appétit ! 🍱");
    const cards = document.querySelectorAll('.kawaii-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.borderColor = "#FF4500";
        });
        card.addEventListener('mouseout', () => {
            card.style.borderColor = "transparent";
        });
    });
});


