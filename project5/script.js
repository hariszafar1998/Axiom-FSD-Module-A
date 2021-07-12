const addUser = document.getElementById('addUser');
const doubleWealth = document.getElementById('doubleWealth');
const showMillionairs = document.getElementById('showMillionairs');
const sortUsers = document.getElementById('sortUsers');
const calculateNetWealth = document.getElementById('calculateNetWealth');
const main = document.getElementById('main');

let userArray = [];

function generateRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const fetchedName = data.results[0].name; 
            const wealth = Math.floor(Math.random() * 1000000);
            
            const newUser = {name:`${fetchedName.title} ${fetchedName.first} ${fetchedName.last}`, 
                            wealth: wealth}

            // console.log(newUser);

            insertUserInTheArray(newUser);
        })
};

function insertUserInTheArray(user) {
    userArray.push(user);
    // console.log(userArray);
    updateDOM();
};

function updateDOM(userData = userArray) {
    main.innerHTML = '<h2><strong>User</strong>Wealth</h2>';

    userData.forEach( user  => {
        const newUserDiv = document.createElement('div');
        newUserDiv.classList.add('user');
        newUserDiv.innerHTML = `<strong>${user.name}</strong>$${formatWealth(user.wealth)}`;
        main.appendChild(newUserDiv);
    });
};

function formatWealth(wealth) {
    return wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

function doubleUsersWealth() {
    userArray = userArray.map( user => {
        return {...user, wealth: user.wealth *2}
    });
    updateDOM();
};

function filterMillionairs() {
    userArray = userArray.filter( user => user.wealth > 1000000 );
    updateDOM();
};

function sortMillionairs() {
    userArray = userArray.sort((a, b) => b.wealth - a.wealth);
    updateDOM();
};

function doTotal() {
    const netWealth = userArray.reduce(( acc , user ) => 
        (acc += user.wealth), 0
    );
    const newTotalDiv = document.createElement('div');
    newTotalDiv.classList.add('totalDiv');
    newTotalDiv.innerHTML = `<strong>Net Wealth: $${formatWealth(netWealth)}</strong>`;
    main.appendChild(newTotalDiv);
};

addUser.addEventListener('click', generateRandomUser);
doubleWealth.addEventListener('click', doubleUsersWealth);
showMillionairs.addEventListener('click', filterMillionairs);
sortUsers.addEventListener('click', sortMillionairs);
calculateNetWealth.addEventListener('click', doTotal);

generateRandomUser();
generateRandomUser();
generateRandomUser();