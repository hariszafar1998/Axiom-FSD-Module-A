// Get DOM elements

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const price = document.getElementById('price');
const selectMovie = document.getElementById('movie');

// Get the ticket price 
let ticketPrice = +selectMovie.value;

// get data from local storage and uupdate the UI
updateUI();

function saveMovieData(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
};

function updateCount() {
    // get all seats with the class seat and selected within the row
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // assign unique value to identify each seat
    const seatIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat) );
    // count the selected seats
    const selectedSeatsCount = selectedSeats.length;
    // replace inner text with new count
    count.innerText = selectedSeatsCount;
    // replace inner text with new price
    price.innerText = selectedSeatsCount * ticketPrice;
    // save seat index in local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
};

function updateUI() {
    // get data from local storage
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const movieIndex = localStorage.getItem('movieIndex');
    const moviePrice = localStorage.getItem('moviePrice');

    if (selectedSeats !== null && selectedSeats.length > 0) {
        // loop over all seats
        seats.forEach( (seat, index) => {
            // if index to seat is contained ni selectedSeats array
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
                count.innerText = selectedSeats.length;
            }
        })
    }

    if (movieIndex !== null) {
        selectMovie.selectedIndex = movieIndex;
    }

    if (moviePrice !== null) {
        price.innerText = selectedSeats.length * moviePrice;
    }
}

// event listner to listen to container clicks
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    //update count of selected seats
    updateCount();
    }
});

// event listner to listen to change in dropdown

selectMovie.addEventListener('change', e => {
    // update ticket price
    ticketPrice = +e.target.value;
    // update count if event happens in dropdown
    updateCount();
    // save movie data to local storage
    saveMovieData(e.target.selectedIndex, e.target.value);
})