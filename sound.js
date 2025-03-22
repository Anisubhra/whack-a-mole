// sound.js
const soundFiles = {
    smash: new Audio('assets/smash.mp3'),
    mole: new Audio('assets/mole.mp3'),
    tada: new Audio('assets/tada.mp3'),
};

function preloadSounds() {
    for (const sound in soundFiles) {
        soundFiles[sound].load(); // Trigger loading
    }
}

// Call preloadSounds() when the page loads
window.addEventListener('load', preloadSounds);

function playSound(file) {
    soundFiles[file].play();
}

function hammerSound() {
    playSound('smash');
}

function moleSound() {
    playSound('mole');
}

function endSound() {
    playSound('tada');
}