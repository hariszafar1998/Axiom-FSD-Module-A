const totalBalance = document.getElementById('totalbalance');
const creditBalance = document.getElementById('credit');
const debitBalance = document.getElementById('debit');
const historyList = document.getElementById('historylist');
const transactionForm = document.getElementById('transactionform');
const amountAdd = document.getElementById('amount');
const reasonAdd = document.getElementById('reason');

const transactions = [];

let transactionArray = transactions;

function init() {
    const transactionAmounts = transactionArray.map( transaction => transaction.amount )
    // console.log(transactionAmounts);
    
    totalBalance.innerText = `$${formatWealth(transactionAmounts.reduce( (acc, amount) => (acc += amount) , 0))}`;
    creditBalance.innerText = `$${formatWealth(transactionAmounts.filter( amount => amount > 0 ).reduce( (acc, amount) => ( acc += amount ), 0 ))}`;
    debitBalance.innerText = `$${formatWealth(transactionAmounts.filter( amount => amount < 0 ).reduce( (acc, amount) => ( acc += amount ), 0 ))}`;
    
    transactionArray.map ( transaction => {
        const transactionType = JSON.stringify(transaction.amount).split('');
        // console.log(transactionType);
        if ( transactionType.includes('-') ) {
            const newListItem = document.createElement('li');
            newListItem.classList.add('list-item-debit');
            newListItem.innerHTML = `<span id="reason">${transaction.reason}</span> <span id="amount-debit">$${formatWealth(transaction.amount)}</span> <button class="deletebtn" id="deletebtn">X</button>`;
            historyList.appendChild(newListItem);
        } else {
            const newListItem = document.createElement('li');
            newListItem.classList.add('list-item-credit');
            newListItem.innerHTML = `<span id="reason">${transaction.reason}</span> <span id="amount-debit">$${formatWealth(transaction.amount)}</span> <button class="deletebtn" id="deletebtn">X</button>`;
            historyList.appendChild(newListItem);
        }
    });
};

function formatWealth(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

function formHandler(e) {
    e.preventDefault();
    
    if ( amountAdd.value && reasonAdd.value ) {
        const newObject = {
            id: 1,
            reason: reasonAdd.value,
            amount: +amountAdd.value
        }
        // console.log(+amount.value);
        transactionArray.push(newObject);
    } else {
        alert('Please enter the transaction amount or reason.');
    }
    init();
    amountAdd.value = '';
    reasonAdd.value = '';
    console.log(transactionArray);
    
};

transactionForm.addEventListener('submit', formHandler)

init();