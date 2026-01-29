const japanData = [
    { region: "Hokkaido", prefs: ["Hokkaido"] },
    { region: "Tohoku", prefs: ["Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima"] },
    { region: "Kanto", prefs: ["Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa"] },
    { region: "Chubu", prefs: ["Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano", "Gifu", "Shizuoka", "Aichi"] },
    { region: "Kansai", prefs: ["Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama"] },
    { region: "Chugoku", prefs: ["Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi"] },
    { region: "Shikoku", prefs: ["Tokushima", "Kagawa", "Ehime", "Kochi"] },
    { region: "Kyushu & Okinawa", prefs: ["Fukuoka", "Saga", "Nagasaki", "Kumamoto", "Oita", "Miyazaki", "Kagoshima", "Okinawa"] }
];

const container = document.getElementById('regions-container');

japanData.forEach(item => {
    const section = document.createElement('div');
    section.className = 'region-block';

    section.innerHTML = `
        <div class="region-header" onclick="toggleRegion(this)">
            <span>${item.region}</span>
            <span>+</span>
        </div>
        <div class="pref-list">
            ${item.prefs.map(p => `<div class="pref-item">${p}</div>`).join('')}
        </div>
    `;
    container.appendChild(section);
});

function toggleRegion(header) {
    const list = header.nextElementSibling;
    const isVisible = list.style.display === 'grid';
    
    // Fermer tous les autres (optionnel)
    document.querySelectorAll('.pref-list').forEach(el => el.style.display = 'none');
    
    // Basculer l'actuel
    list.style.display = isVisible ? 'none' : 'grid';
    header.querySelector('span:last-child').innerText = isVisible ? '+' : '-';
}


