document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.gold-card');

    // Effet d'apparition douce
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
        observer.observe(card);
    });

    // Interaction brillante au clic
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = "scale(0.96) translateY(-10px)";
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = "translateY(-15px)";
        });
    });
});
