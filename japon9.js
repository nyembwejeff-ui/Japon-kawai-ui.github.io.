const chatWindow = document.getElementById('chatWindow');
const nextBtn = document.getElementById('nextBtn');

let step = 0;

const script = [
    { side: "right", jp: "おなまえは ?", ro: "O-namae wa?", fr: "Comment t'appelles-tu ?" },
    { side: "left", jp: "わたしは さくら です.", ro: "Watashi wa Sakura desu.", fr: "Je suis Sakura." },
    { side: "right", jp: "よろしく おねがいします !", ro: "Yoroshiku onegaishimasu!", fr: "Ravi de te rencontrer !" },
    { side: "left", jp: "よろしく !", ro: "Yoroshiku!", fr: "Ravi aussi !" }
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
        window.scrollTo(0, document.body.scrollHeight);
        step++;
    } else {
        nextBtn.innerText = "Bravo ! ✨";
        nextBtn.style.opacity = "0.5";
    }
});
