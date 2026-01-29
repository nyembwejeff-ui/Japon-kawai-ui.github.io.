// Petit effet sonore ou animation lors du clic sur une leçon
document.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.backgroundColor = '#fff9fb';
        setTimeout(() => {
            card.style.backgroundColor = 'white';
        }, 300);
    });
});
