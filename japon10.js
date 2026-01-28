const chatWindow = document.getElementById('chatWindow');
const nextBtn = document.getElementById('nextBtn');

let step = 0;

const script = [
    { side: "right", jp: "げんき です ! あなたは ?", ro: "Genki desu! Anata wa?", fr: "Je vais bien ! Et toi ?" },
    { side: "left", jp: "わたし も げんき です.", ro: "Watashi mo genki desu.", fr: "Je vais bien aussi." },
    { side: "right", jp: "よかった ! じゃあ、またね !", ro: "Yokatta! Jaa, mata ne!", fr: "Super ! Bon, à plus tard !" },
    { side: "left", jp: "またね ! さようなら.", ro: "Mata ne! Sayounara.", fr: "À plus ! Au revoir." }
];

nextBtn.addEventListener('click', () => {
    if (step < script.length) {
        const item = script[step];
        const wrap = document.createElement('div');
        wrap.className = "bubble-wrap";
        
        wrap.innerHTML = `
            <div class="bubble ${item.side}">
                <span class="jap">${item.jp}</span>
                <p class="romaji">${item.ro}</p>
                <p class="fr">${item.fr}</p>
            </div>
        `;
        
        chatWindow.appendChild(wrap);
        // Scroll automatique vers le bas pour voir le nouveau message
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        step++;
    } else {
        nextBtn.innerText = "Dialogue terminé ! 🌸";
        nextBtn.style.backgroundColor = "#ccc";
        nextBtn.style.boxShadow = "none";
        nextBtn.disabled = true;
    }
});


