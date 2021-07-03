const playbtn = document.getElementById('play');
const stopbtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');
const video = document.getElementById('video');

function playPauseVideo () {
    if (video.paused) {
        video.play();
    } else if (video.play) {
        video.pause();
    }
};

function updateIcons () {
    if (video.paused) {
        playbtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else if (video.play) {
        playbtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
};

function stopVideo () {
    video.currentTime = 0;
    video.pause();
};

function updateProgress () {
    time.innerText = video.currentTime;
};

// Event Listeners
// 1. Listen for click on video element
video.addEventListener('click', playPauseVideo);
// 2. Listen for pause event on video element
video.addEventListener('pause', updateIcons);
// 3. Listen for play event on video element
video.addEventListener('play', updateIcons);
// 4. Listen for timeupdate event on video element
video.addEventListener('timeupdate', updateProgress);
// 5. Listen for click event on play button
playbtn.addEventListener('click', playPauseVideo);
// 6. Listen for click event on stop button
stopbtn.addEventListener('click', stopVideo);
// 7. Listen for change event on progress bar
progress.addEventListener('change', updateVideoProgress);