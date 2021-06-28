const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const price = document.getElementById('price');
const selectedMovie = document.getElementById('movie');

let ticketPrice = +selectedMovie.value;

updateUI();

function updateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const movieIndex = localStorage.getItem('movieIndex');
    const moviePrice = localStorage.getItem('moviePrice');
    
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
                count.innerText = selectedSeats.length;
                price.innerText = moviePrice * selectedSeats.length;
                selectedMovie.selectedIndex = movieIndex;
            }
        })
    }
};

function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount =selectedSeats.length;
    count.innerText = selectedSeatsCount;
    price.innerText = selectedSeatsCount * selectedMovie.value;

    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

};

function saveMovieData(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
};

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateCount();      
    }
});

selectedMovie.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateCount();
    saveMovieData(e.target.selectedIndex, e.target.value);  
})