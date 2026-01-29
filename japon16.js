const destinations = {
    fuji: {
        title: "Le Mont Fuji (富士山)",
        desc: "C'est le point culminant du Japon. Pour les Japonais, c'est une montagne sacrée. On peut l'admirer depuis la région des Cinq Lacs ou même depuis Tokyo par temps clair."
    },
    kyoto: {
        title: "Kyoto (京都)",
        desc: "Ancienne capitale impériale, Kyoto est le cœur culturel du pays. C'est ici que vous verrez le Pavillon d'Or (Kinkaku-ji) et les magnifiques sanctuaires aux mille portails rouges."
    },
    shibuya: {
        title: "Shibuya (渋谷)",
        desc: "L'image même du Japon moderne. Outre son passage piéton géant, c'est le quartier de la mode, de la jeunesse et de la statue du chien fidèle Hachiko."
    }
};

function showInfo(id) {
    const data = destinations[id];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('infoOverlay').classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('infoOverlay').classList.add('hidden');
}

// Fermer en cliquant à côté de la modal
window.onclick = function(event) {
    const overlay = document.getElementById('infoOverlay');
    if (event.target == overlay) closeInfo();
}


