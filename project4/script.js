const currencyOne = document.getElementById('currencyOneSelect');
const currencyTwo = document.getElementById('currencyTwoSelect');
const amountOne = document.getElementById('amountOne');
const amountTwo = document.getElementById('amountTwo');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');
const start = document.getElementById('start');


// Functions

function calculate() {
    currencyOneCode = currencyOne.value;
    currencyTwoCode = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const conversionRate = (data.conversion_rate).toFixed(2);
        // console.log(conversionRate);
        rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
        amountTwo.value = amountOne.value * conversionRate;
    })
};

function swapCurrencies() {
    const saveCurrencyTwoValue = currencyTwo.value;
    currencyTwo.value = currencyOne.value;
    currencyOne.value = saveCurrencyTwoValue;

    const saveCurrencyTwoAmount = amountTwo.value;
    amountTwo.value = amountOne.value;
    amountOne.value = saveCurrencyTwoAmount;
};

// Event listners
// currencyOne.addEventListener('change', calculate);
// currencyTwo.addEventListener('change', calculate);
// amountOne.addEventListener('input', calculate);
swap.addEventListener('click', swapCurrencies);
start.addEventListener('click', calculate);