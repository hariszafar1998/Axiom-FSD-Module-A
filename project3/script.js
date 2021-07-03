const video = document.addEventListener('video');
const play = document.addEventListener('play');
const stop = document.addEventListener('stop');
const progress = document.addEventListener('progress');
const time = document.addEventListener('time');

// Functions

function playPauseVideo() {
    if ( video.paused ) {
        video.play();
    } else {
        video.pause();
    }
};

// Event listners

// 1. Event listner to listen click on video
video.addEventListener('click', playPauseVideo);
// 2. Event listner to listen click on play button

// 3. Event listner to listen click on stop button

// 4. Event listner to listen change in progress bar