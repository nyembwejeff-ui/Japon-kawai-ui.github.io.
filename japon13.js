const questions = [
    {
        q: "Si quelqu'un dit 'Arigatou', tu réponds quoi ?",
        options: ["Gomen nasai", "Dou itashimashite", "Ohayou"],
        correct: 1
    },
    {
        q: "Comment s'écrit 'E' en Hiragana ?",
        options: ["い", "う", "え"],
        correct: 2
    },
    {
        q: "Que signifie 'Mata ne' ?",
        options: ["Bonjour", "A plus tard", "Enchanté"],
        correct: 1
    }
];

let current = 0;

function loadQ() {
    const q = questions[current];
    document.getElementById('question-text').innerText = q.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'opt-btn';
        b.innerText = opt;
        b.onclick = () => {
            if(i === q.correct) {
                current++;
                if(current < questions.length) loadQ();
                else {
                    document.getElementById('quiz-box').classList.add('hidden');
                    document.getElementById('result-box').classList.remove('hidden');
                }
            } else {
                alert("Oups, réfléchis encore ! ✨");
            }
        };
        container.appendChild(b);
    });
}

loadQ();


