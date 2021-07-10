const currencyOne = document.getElementById('currencyOneSelect');
const currencyTwo = document.getElementById('currencyTwoSelect');
const amountOne = document.getElementById('amountOne');
const amountTwo = document.getElementById('amountTwo');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');



// Functions

function calculate() {
    currencyOneCode = currencyOne.value;
    currencyTwoCode = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/latest/${currencyOneCode}`)
    .then((response) => response.json())
    .then((data) => {
        const conversionRate = data.conversion_rates[currencyTwoCode];
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
// swap.addEventListener('click', swapCurrencies);
