const mainContainer = document.getElementById('container');
const audio = document.getElementById('audio');
const albumArt = document.getElementById('albumart');
const trackTitle = document.getElementById('tracktitle');
const progressBar = document.getElementById('progressbar');
const backwardBtn = document.getElementById('backwardbtn');
const playBtn = document.getElementById('playbtn');
const forwardBtn = document.getElementById('forwardbtn');
const progressConatiner = document.getElementById('progresscontainer');

let tracksArray = ['Ertugrul','National Anthem'];

let trackIndex = 1;

function loadTrack(track) {
    trackTitle.innerText = track;
    audio.src = `music/${track}.mp3`;
    albumArt.src = `images/${track}.jpeg`;
};

function playTrack() {
    mainContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
};

function pauseTrack() {
    mainContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
};

function nextTrack() {
    trackIndex++;
    if ( trackIndex > tracksArray.length - 1 ) {
        trackIndex = 0;
    };
    loadTrack(tracksArray[trackIndex]);
    playTrack();
};

function prevTrack() {
    trackIndex--;
    if ( trackIndex < 0 ) {
        trackIndex = tracksArray.length - 1 ;
    };
    loadTrack(tracksArray[trackIndex]);
    playTrack();
};

function updateProgress(e) {
    const { duration , currentTime } = e.srcElement;
    // console.log( duration , currentTime );
    progressBarWidth = ( currentTime / duration ) * 100 ;
    console.log(progressBarWidth);
    progressBar.style.width = `${progressBarWidth}%`;
};

function updateTrackProgress(e) {
    const totalWidth = this.clientWidth;
    const distanceX = e.offsetX;
    const audioDuration = audio.duration;
    audio.currentTime = ( distanceX / totalWidth ) * audioDuration;
};

playBtn.addEventListener('click', () => {
    const isTrackPlaying = mainContainer.classList.contains('play')
    if ( isTrackPlaying ) {
        pauseTrack();
    } else {
        playTrack();
    }
});

forwardBtn.addEventListener('click', nextTrack);

backwardBtn.addEventListener('click', prevTrack);

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', nextTrack);

progressConatiner.addEventListener('click', updateTrackProgress);

loadTrack(tracksArray[trackIndex]);