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
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }   else {
        showError(input, `Invalid email address`);
    }
}

// function to check if the fields are filled or not

function checkRequired(inputArray) {
    inputArray.forEach(function(input){
        if ( input.value === '' ) {
            showError(input, `${input.id} is required`)
        } else {
            showSuccess(input);
        }
    })
}

// function to check the input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input,`${getFieldId(input)} shoud be greater than ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} shoud be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// function to check if the passwords match

function checkPasswordsMatch(inputA, inputB) {
    if ( inputA.value !== inputB.value ) {
        showError(inputB,"Passwords don't match")
    }
}

// proper text case

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listner for button

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

})