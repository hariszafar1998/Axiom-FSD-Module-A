const addUser = document.getElementById('addUser');
const doubleWealth = document.getElementById('doubleWealth');
const showMillionairs = document.getElementById('showMillionairs');
const sortUsers = document.getElementById('sortUsers');
const calculateNetWealth = document.getElementById('calculateNetWealth');
const main = document.getElementById('main');

let userArray = [];


// function to fetch the name from API

function getData() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {

            const userWealth = Math.floor(Math.random() * 1000000);

            userWealthNew = userWealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            const nameData = data.results[0];
            const newUser = {
                name: `${nameData.name.title} ${nameData.name.first} ${nameData.name.last}`, 
                Wealth: userWealthNew
            }

            addUserData(newUser);

            // console.log(User);

            // updateDOM();
        })
};

function addUserData(user) {
    userArray.push(user);
    // console.log(userArray);
    updateDOM();
};

function updateDOM(newArray = userArray) {
    console.log(newArray);
    const userNameAndWealthDiv = document.createElement('div');
    userNameAndWealthDiv.classList.add('user');
    userNameAndWealthDiv.innerHTML = `<strong>${newArray[0].name}</strong>$${newArray[0].Wealth}`;

    main.appendChild(userNameAndWealthDiv);

    // console.log(userName);
    // console.log(userWealth);
};

addUser.addEventListener('click', getData)

