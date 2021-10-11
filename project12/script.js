const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const wordElement = document.getElementById('word');
const userInput = document.getElementById('userentry');
const settingsBtn = document.getElementById('settingsbtn');
const settingsForm = document.getElementById('settings-form');
const difficultySelector = document.getElementById('difficulty');

let score = 0;
let time = 100;
userInput.focus();

function fetchWord() {
    fetch('https://random-words-api.vercel.app/word')
        .then( res => res.json() )
        .then ( data => {
            const ranW = data[0].word;
            displayWord(ranW.toLowerCase())
        } )
};

fetchWord();

function displayWord(randomWord) {
    wordElement.innerText = randomWord;
    gameProcess(randomWord);
};

function gameProcess(word) {
    userInput.addEventListener('input', e => {
        if ( e.target.value == word ) {
            score++;
            scoreElement.innerText = score;
            userInput.value = '';
            fetchWord();
        }
    });
};

const timeInterval = setInterval(() => {
    time--;
    timeElement.innerText = time;
}, 1000);


settingsBtn.addEventListener('click', e => {
    settingsForm.classList.toggle('show');
});