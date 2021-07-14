const addUser = document.getElementById('addUser');
const doubleWealth = document.getElementById('doubleWealth');
const showMillionairs = document.getElementById('showMillionairs');
const sortUsers = document.getElementById('sortUsers');
const calculateNetWealth = document.getElementById('calculateNetWealth');
const main = document.getElementById('main');

let userArray = [];

function addUserFunction() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const name = data.results[0].name;
            const wealth = Math.floor(Math.random()* 1000000);
            
            const newUser = {name: `${name.title} ${name.first} ${name.last}`, wealth: wealth};
            // console.log(newUser);

            addUserInArray(newUser);
        })
};

function addUserInArray(user) {
    userArray.push(user);
    // console.log(userArray);
    updateDOM();
};

function updateDOM(userData = userArray) {
    main.innerHTML = '<h2><strong>User</strong>Wealth</h2>';

    userData.forEach(user => {
    const newUserDiv = document.createElement('div');
    newUserDiv.classList.add('user');
    newUserDiv.innerHTML = `<strong>${user.name}</strong>$${formatWealth(user.wealth)}`;
    main.appendChild(newUserDiv);
    })
};

function formatWealth(wealth) {
    return wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

function doubleWealthFunction() {
    userArray = userArray.map( user => {
        return {...user, wealth: user.wealth * 2}
    })
    updateDOM();
};

function showMillionairsFunction() {
    userArray = userArray.filter( user => user.wealth > 1000000);
    updateDOM();
};

function sortUsersFunction() {
    userArray = userArray.sort( (a, b) => b.wealth - a.wealth);
    updateDOM();
};

function calculateNetWealthFunction() {
    const netWealth = userArray.reduce((acc, user) => 
        (acc += user.wealth), 0
    );
    const newNetWealth = document.createElement('div');
    newNetWealth.classList.add('totalDiv');
    newNetWealth.innerHTML = `<strong>Net Wealth: $${formatWealth(netWealth)}</strong>`;
    main.appendChild(newNetWealth)
};

addUser.addEventListener('click', addUserFunction);
doubleWealth.addEventListener('click', doubleWealthFunction);
showMillionairs.addEventListener('click', showMillionairsFunction);
sortUsers.addEventListener('click', sortUsersFunction);
calculateNetWealth.addEventListener('click', calculateNetWealthFunction);

addUserFunction();
addUserFunction();
addUserFunction();