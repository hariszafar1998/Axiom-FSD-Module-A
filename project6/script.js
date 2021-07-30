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
    nav.classList.toggle('show-nav');
});

window.addEventListener('click', e => {
    e.target === modalContainer ? modalContainer.classList.remove('showModal') : false;
});