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

console.log(transactions);