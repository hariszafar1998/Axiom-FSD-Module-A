const currencyOne = document.getElementById('currencyOneSelect');
const currencyTwo = document.getElementById('currencyTwoSelect');
const currencyOneAmount = document.getElementById('amountOne');
const currencyTwoAmount = document.getElementById('amountTwo');
const rateUpdate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Functions

function calculate() {
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // fetch data from API

    fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/latest/${currencyOneCode}`)
    .then((response) => response.json())
    .then((data) => {
        const conversionRateOne = data.conversion_rates[currencyTwoCode];
        rateUpdate.innerText = `1 ${currencyOneCode} = ${conversionRateOne} ${currencyTwoCode}`;
        currencyTwoAmount.value = currencyOneAmount.value * conversionRateOne;
    })
};

// Functions

function calculateAgain() {
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // fetch data from API

    fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/latest/${currencyTwoCode}`)
    .then((response) => response.json())
    .then((data) => {
        const conversionRateTwo = data.conversion_rates[currencyOneCode];
        currencyOneAmount.value = currencyTwoAmount.value * conversionRateTwo;
    })
};

function swapCurrencies() {
    const saveCurrenyOneValue = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = saveCurrenyOneValue;

    const saveOneRate = currencyOneAmount.value;
    currencyOneAmount.value = currencyTwoAmount.value;
    currencyTwoAmount.value = saveOneRate;
};

// Event Listeners

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change',calculate);
currencyOneAmount.addEventListener('input',calculate);
currencyTwoAmount.addEventListener('input',calculateAgain);
swap.addEventListener('click', swapCurrencies);

calculate();