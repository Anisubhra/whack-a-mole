// sound.js
function playSound(file) {
    const sound = new Audio(file);
    sound.play();
}

function hammerSound() {
    playSound('assets/smash.mp3');
}

function moleSound() {
    playSound('assets/mole.mp3');
}

function endSound() {
    playSound('assets/tada.mp3');
}