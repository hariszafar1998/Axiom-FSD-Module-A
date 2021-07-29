const navButton = document.getElementById('nav-btn');
const nav = document.getElementById('nav');
const signUpButton = document.getElementById('cta-btn');
const modalContainer = document.getElementById('modal-container');
const closeButton = document.getElementById('close-button');

signUpButton.addEventListener('click', () => {
    modalContainer.classList.add('showModal');
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('showModal');
});

navButton.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

modalContainer.addEventListener('click', () => {
    modalContainer.classList.remove('showModal');
});