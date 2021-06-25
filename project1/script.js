const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// function to show error

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// function to show success

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function to check if the fields have filled or not

function checkRequired(inputArray) {
    inputArray.forEach(function(input){
        if (input.value === '') {
            showError(input,`${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// Event listner for button

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    confirmPassword(password,password2);

})