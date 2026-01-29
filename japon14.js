const finalQuestions = [
    {
        q: "Comment dit-on 'Merci' de façon formelle ?",
        options: ["Arigatou", "Arigatou Gozaimasu", "Domo"],
        correct: 1
    },
    {
        q: "Si tu arrives le soir, tu dis :",
        options: ["Ohayou", "Konnichiwa", "Konbanwa"],
        correct: 2
    },
    {
        q: "Que signifie 'Dōzo' ?",
        options: ["S'il vous plaît (demande)", "Je vous en prie / Voici", "Excusez-moi"],
        correct: 1
    }
];

let currentStep = 0;

function nextQuestion() {
    if (currentStep < finalQuestions.length) {
        const q = finalQuestions[currentStep];
        document.getElementById('q-text').innerText = q.q;
        const btnContainer = document.getElementById('options');
        btnContainer.innerHTML = '';

        q.options.forEach((opt, i) => {
            const b = document.createElement('button');
            b.className = 'opt-btn';
            b.innerText = opt;
            b.onclick = () => {
                if(i === q.correct) {
                    currentStep++;
                    nextQuestion();
                } else {
                    b.style.borderColor = "#ff6b6b";
                    b.innerText = "❌ Réessaie !";
                }
            };
            btnContainer.appendChild(b);
        });
    } else {
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('victory-area').classList.remove('hidden');
    }
}

nextQuestion();


