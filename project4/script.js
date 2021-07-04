const currencyOne = document.getElementById('currencyOne');

const rate = fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/latest/${currencyOne}`);

// Functions

function changeInCurrencyOne() {
    console.log(rate);
};

// Event listners

currencyOne.addEventListener('change', changeInCurrencyOne);