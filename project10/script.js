const mainContainer = document.getElementById('container');
const audio = document.getElementById('audio');
const albumArt = document.getElementById('albumart');
const trackTitle = document.getElementById('tracktitle');
const progressBar = document.getElementById('progressbar');
const backwardBtn = document.getElementById('backwardbtn');
const playBtn = document.getElementById('playbtn');
const forwardBtn = document.getElementById('forwardbtn');

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

playBtn.addEventListener('click', () => {
    const isTrackPlaying = mainContainer.classList.contains('play')
    if ( isTrackPlaying ) {
        pauseTrack();
    } else {
        playTrack();
    }
});

forwardBtn.addEventListener('click', nextTrack)

loadTrack(tracksArray[trackIndex]);