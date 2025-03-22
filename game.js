// game.js
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelectorAll('.score');
const gameOver = document.querySelector('.game-over');
const startBtn = document.querySelector('.start');
let lastHole;
let timeUp;
let timer = 20 * 1000;
let scoreCount = 0;

function randomNumber(max, min = 0) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole() {
    const idx = randomNumber(holes.length - 1);
    const hole = holes[idx];

    if (lastHole === idx) {
        return randomHole();
    }

    lastHole = idx;
    return hole;
}

function peep() {
    const time = randomNumber(1200, 500);
    const hole = randomHole();
    const mole = hole.querySelector('.mole');

    mole.classList.remove('shake');
    hole.classList.toggle('up');

    setTimeout(() => {
        hole.classList.toggle('up');
        if (!timeUp) {
            peep();
        }
    }, time);
}

function bonk() {
    if (!this.classList.contains('shake')) {
        moleSound();
        this.classList.add('shake');
        score();
    }
}

function score() {
    scoreCount++;
    updateScoreBoard();
}

function updateScoreBoard() {
    scoreBoard.forEach(board => board.textContent = scoreCount);
}

function startTimer() {
    setTimeout(() => {
        stopGame();
    }, timer);
}

function stopGame() {
    timeUp = true;
    gameOver.classList.add('active');
    endSound();
}

function resetGame() {
    timeUp = false;
    gameOver.classList.remove('active');
    scoreCount = 0;
    updateScoreBoard();
}

function restart() {
    resetGame();
    startTimer();
    peep();
}

function startGame() {
    startBtn.style.display = 'none';
    addHandlers();
    restart();
  }

  function addHandlers() {
    moles.forEach((mole) => mole.addEventListener('click', bonk));
    window.addEventListener('mousemove', moveHammer);
    window.addEventListener('mousedown', hammerStrike);
  }