document.addEventListener('DOMContentLoaded', () => {
    const japaneseWordElement = document.getElementById('japaneseWord');
    const frenchMeaningElement = document.getElementById('frenchMeaning');
    const newWordButton = document.getElementById('newWordButton');

    const words = [
        { japanese: 'かわいい (Kawaii)', french: '- Mignon' },
        { japanese: 'ありがとう (Arigatou)', french: '- Merci' },
        { japanese: 'こんにちは (Kon\'nichiwa)', french: '- Bonjour (journée)' },
        { japanese: 'おはよう (Ohayou)', french: '- Bonjour (matin)' },
        { japanese: 'さようなら (Sayounara)', french: '- Au revoir' },
        { japanese: 'はい (Hai)', french: '- Oui' },
        { japanese: 'いいえ (Iie)', french: '- Non' },
        { japanese: 'みず (Mizu)', french: '- Eau' },
        { japanese: 'おちゃ (Ocha)', french: '- Thé' },
        { japanese: 'すし (Sushi)', french: '- Sushi' },
        { japanese: 'ねこ (Neko)', french: '- Chat' },
        { japanese: 'いぬ (Inu)', french: '- Chien' },
        { japanese: 'あか (Aka)', french: '- Rouge' },
        { japanese: 'あお (Ao)', french: '- Bleu' },
        { japanese: 'おかあさん (Okaasan)', french: '- Maman' },
        { japanese: 'おとうさん (Otousan)', french: '- Papa' },
        { japanese: 'すきです (Suki desu)', french: '- J\'aime' },
        { japanese: 'ごはん (Gohan)', french: '- Riz / Repas' },
        { japanese: 'どこですか (Doko desu ka?)', french: '- Où est...?' },
        { japanese: 'わかります (Wakarimasu)', french: '- Je comprends' }
    ];

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    function displayNewWord() {
        const word = getRandomWord();
        japaneseWordElement.textContent = word.japanese;
        frenchMeaningElement.textContent = word.french;
    }

    // Affiche un mot au chargement de la page
    displayNewWord();

    // Change le mot quand le bouton est cliqué
    newWordButton.addEventListener('click', displayNewWord);
});


