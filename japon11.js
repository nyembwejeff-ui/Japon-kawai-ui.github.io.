const cardsData = [
    // PAIRE 1
    { id: 1, type: "jp", text: "こんにちは", rom: "Konnichiwa" },
    { id: 1, type: "fr", text: "Bonjour" },
    
    // PAIRE 2
    { id: 2, type: "jp", text: "おなまえは ?", rom: "O-namae wa?" },
    { id: 2, type: "fr", text: "Ton nom ?" },
    
    // PAIRE 3
    { id: 3, type: "jp", text: "おげんき ですか ?", rom: "O-genki desu ka?" },
    { id: 3, type: "fr", text: "Comment vas-tu ?" },
    
    // PAIRE 4
    { id: 4, type: "jp", text: "またね", rom: "Mata ne" },
    { id: 4, type: "fr", text: "À plus tard" }
];

let firstCard = null;
let secondCard = null;
let score = 0;

const gameGrid = document.getElementById('gameGrid');
const shuffledCards = cardsData.sort(() => Math.random() - 0.5);

shuffledCards.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = data.id;

    if (data.type === "jp") {
        card.innerHTML = `<span class="jap">${data.text}</span><span class="rom">${data.rom}</span>`;
    } else {
        card.innerHTML = `<span class="fr">${data.text}</span>`;
    }

    card.addEventListener('click', () => {
        if (card.classList.contains('matched') || card === firstCard) return;
        card.classList.add('selected');
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            if (firstCard.dataset.id === secondCard.dataset.id) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                score++;
                document.getElementById('score').innerText = score;
                firstCard = null; secondCard = null;
                if (score === 4) document.getElementById('winMessage').classList.remove('hidden');
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('selected');
                    secondCard.classList.remove('selected');
                    firstCard = null; secondCard = null;
                }, 500);
            }
        }
    });
    gameGrid.appendChild(card);
});
