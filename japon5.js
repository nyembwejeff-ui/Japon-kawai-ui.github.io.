document.addEventListener('DOMContentLoaded', () => {
    console.log("Félicitations pour le cours 100 ! ✨");
    
    // Un petit effet de brillance sur le badge du cours 100
    const lastCard = document.querySelector('.kawaii-card:last-child');
    lastCard.style.border = "3px solid #F1C40F";
    
    lastCard.addEventListener('click', () => {
        alert("🎉 INCROYABLE ! 🎉\nTu viens d'atteindre le 100ème mini-cours !\nTon aventure japonaise ne fait que commencer ! 🇯🇵");
    });
});
