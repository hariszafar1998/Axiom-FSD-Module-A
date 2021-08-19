const totalBalance = document.getElementById('totalbalance');
const creditBalance = document.getElementById('credit');
const debitBalance = document.getElementById('debit');
const historyList = document.getElementById('historylist');
const transactionForm = document.getElementById('transactionform');
const amountAdd = document.getElementById('amount');
const reasonAdd = document.getElementById('reason');

const transactions = [
    { id: 1, reason: 'Salary', amount: 1000 },
    { id: 1, reason: 'Lunch', amount: -20 },
    { id: 1, reason: 'Bonus', amount: 80 },
    { id: 1, reason: 'Party', amount: -90 }
];

let transactionArray = transactions;

function init() {
    const transactionAmounts = transactions.map( transaction => transaction.amount )
    console.log(transactionAmounts);
    transactionArray.map ( transaction => {
        const transactionType = transaction.amount.split('');
        console.log(transactionType);
        if ( transactionType.includes('+') ) {
            console.log('yes', '0');
            const newListItem = document.createElement('li');
            newListItem.classList.add('list-item-credit');
            newListItem.innerHTML = `<span id="reason">${transaction.reason}</span> <span id="amount-debit">$${transaction.amount}</span> <button class="deletebtn" id="deletebtn">X</button>`;
            historyList.appendChild(newListItem)
        }
    });
}

init();