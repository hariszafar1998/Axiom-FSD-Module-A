const currencyOne = document.getElementById('currencyOne');
const currencyTwo = document.getElementById('currencyTwo');


// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get the Currency Code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // Send Request to ExchangeRate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
            // Get the Conversion Rate from Currency One to Currency Two
            const conversionRate = data.conversion_rate;
            console.log(conversionRate);
        });
};

function changeInCurrencyOne() {
};

// Event listners

currencyOne.addEventListener('change', calculate);