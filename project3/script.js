const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');
const videoVolume = document.getElementById('volumeBar');

// Functions

function playPauseVideo() {
    if ( video.paused ) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
};

function stopVideo() {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
};

function playButton() {
    if ( video.paused ) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
};

function progressBar() {
    progress.value = ( video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if ( minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.currentTime % 60);
    if ( seconds < 10) {
        seconds = '0' + String(seconds);
    }
    
    time.innerText = `${minutes}:${seconds}`;
};

function updateVideoCurrentTime() {
    video.currentTime = (progress.value * video.duration) / 100;
};

// Event listners

// 1. Event listner to listen click on video
video.addEventListener('click', playPauseVideo);
// 2. Event listner to listen click on stop button
stop.addEventListener('click', stopVideo);
// 3. Event listner to listen click on play button
play.addEventListener('click', playButton);
// 4. Event listner to listen click on video and update progress
video.addEventListener('timeupdate', progressBar);
// 5. Event listner to listen to change in progress bar and update video curent time
progress.addEventListener('change', updateVideoCurrentTime);