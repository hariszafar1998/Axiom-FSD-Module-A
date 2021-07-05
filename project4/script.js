const currencyOne = document.getElementById('currencyOne');
const currencyTwo = document.getElementById('currencyTwo');


const rate = fetch(`https://v6.exchangerate-api.com/v6/2c776b4e99e3b430fdf66795/pair/${currencyOne}/${currencyTwo}`)
.then(res => res.json())
.then(data => {
    console.log(data.conversion_rate);
    // Get the Conversion Rate from Currency One to Currency Two
    const conversionRate = data.conversion_rate;
    // Update the DOM to display the conversion rate
    rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
    // Formatting Currency Two Amount
    const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
    // Updating DOM
    amountCurrencyTwo.value = amount2;
});

// Functions

function changeInCurrencyOne() {
    console.log(rate);
};

// Event listners

currencyOne.addEventListener('change', changeInCurrencyOne);