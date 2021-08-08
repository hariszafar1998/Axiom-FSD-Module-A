// Hangman Parts
const hangmanParts = document.querySelectorAll('.hangman-part');

// Other HTML DOM Elements
const incorrectLettersElement = document.getElementById('incorrectLetters');
const correctLettersElement = document.getElementById('correctLetters');
const notification = document.getElementById('notification');
const modal = document.getElementById('modalcontainer');
const modalMessage = document.getElementById('modal-Message');
const playAgainBtn = document.getElementById('playBtn');

function mainFunction() {

fetch('https://random-word-form.herokuapp.com/random/noun/')
    .then( response => response.json() )
    .then( data => {
        // console.log('data', data);
        const randomWord = data[0];
        // console.log(randomWord);

        // let correctLettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let correctLettersArray = [];
        let incorrectLettersArray = [];

        const randomWordArray = randomWord.split('');
        // console.log(randomWordArray);
        
        function renderWord() {
            correctLettersElement.innerHTML = `
                ${randomWordArray.map( letter => `
                    <div class="letter">
                        ${correctLettersArray.includes(letter) ? letter : ''}
                    </div>
                ` ).join('')}
            `
            const word = correctLettersElement.innerText.replace(/\n/g, '');
            if ( word == randomWord ) {
                modal.style.display = "flex";
                modalMessage.innerText = "Congrats, You Won!";
            }
        };

        function renderIncorrectLettersSection() {
            incorrectLettersElement.innerHTML = `<p>Incorrect Letters</p>${incorrectLettersArray}`;
            const hangmanPartsCount = hangmanParts.length;
            hangmanParts.forEach( (part, index) => {
                const numIncorrect = incorrectLettersArray.length;
                if ( index < numIncorrect ) {
                    part.style.display = "block";
                    if ( numIncorrect == 6 ) {
                        modal.style.display = "flex";
                        modalMessage.innerText = "Aww, You Lost!";
                    }
                }
            } );
        };

        function showNotification() {
            notification.style.display = "flex";
            setTimeout( () => {
                notification.style.display = "none";
            }, 1000 );
        };

        window.addEventListener('keydown', e => {
            if ( e.keyCode >= 65 && e.keyCode <= 90 ) {
            const pressedKey = e.key;
                if ( randomWordArray.includes(pressedKey) ) {
                    if ( !correctLettersArray.includes(pressedKey) ) {
                        correctLettersArray.push(pressedKey);
                        renderWord();
                    } else if ( correctLettersArray.includes(pressedKey) ) {
                        showNotification();
                    }
                } else if ( !randomWordArray.includes(pressedKey) ) {
                    if ( !incorrectLettersArray.includes(pressedKey) ) {
                        incorrectLettersArray.push(pressedKey);
                        renderIncorrectLettersSection();
                    } else if ( incorrectLettersArray.includes(pressedKey) ) {
                        showNotification();
                    }
                }
            }
        });

        playAgainBtn.addEventListener('click', e => {
            window.location.reload(true);
        });

        renderWord();

    } )

};

mainFunction();