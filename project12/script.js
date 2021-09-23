const score = document.getElementById('score');
const time = document.getElementById('time');
const generatedWord = document.getElementById('word');
const userInput = document.getElementById('userentry');
const settingsBtn = document.getElementById('settingsbtn');
const settingsForm = document.getElementById('settings-form');
const difficultySelector = document.getElementById('difficulty');

function fetchWord() {
    fetch('https://random-words-api.vercel.app/word')
        .then( res => res.json() )
        .then( data => {
            console.log(data);
        })
}

fetchWord()

settingsBtn.addEventListener('click', e => {
    settingsForm.classList.toggle('show');
});