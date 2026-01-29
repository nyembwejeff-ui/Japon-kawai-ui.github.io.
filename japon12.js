const questions = [
    {
        q: "Quelle est la voyelle pour 'U' ?",
        options: ["あ (a)", "う (u)", "え (e)"],
        correct: 1
    },
    {
        q: "Comment dit-on 'Bonjour' (matin) ?",
        options: ["Konnichiwa", "Ohayou", "Sayounara"],
        correct: 1
    },
    {
        q: "Que signifie 'O-genki desu ka' ?",
        options: ["Comment vas-tu ?", "Enchanté", "Je m'appelle..."],
        correct: 0
    },
    {
        q: "Traduis : 'Watashi wa Sakura desu'",
        options: ["C'est une fleur", "Je suis Sakura", "Sakura arrive"],
        correct: 1
    },
    {
        q: "Comment dit-on 'À plus tard' ?",
        options: ["Mata ne", "Arigatou", "Hajimemashite"],
        correct: 0
    }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQ];
    document.getElementById('question-number').innerText = `Question ${currentQ + 1}/${questions.length}`;
    document.getElementById('question-text').innerText = q.q;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('progress-bar').style.width = `${(currentQ / questions.length) * 100}%`;
}

function checkAnswer(index) {
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    
    if (index === questions[currentQ].correct) {
        score++;
        feedback.innerText = "✨ Correct !";
        feedback.className = "feedback correct";
    } else {
        feedback.innerText = "❌ Oups !";
        feedback.className = "feedback wrong";
    }

    setTimeout(() => {
        currentQ++;
        feedback.classList.add('hidden');
        if (currentQ < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    document.getElementById('quiz-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    document.getElementById('progress-bar').style.width = "100%";
    
    const msg = document.getElementById('result-message');
    if (score === questions.length) msg.innerText = "Parfait ! Tu es un vrai pro du japonais ! 🌸";
    else if (score >= 3) msg.innerText = "Pas mal ! Tu as de bonnes bases. ✨";
    else msg.innerText = "Continue de réviser, tu vas y arriver ! 💪";
}

loadQuestion();
