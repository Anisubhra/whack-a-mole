// hammer.js
const hammer = document.querySelector('.hammer');

function moveHammer(e) {
    hammer.style.top = e.pageY + 'px';
    hammer.style.left = e.pageX + 'px';
}

function hammerStrike() {
    hammer.classList.add('active');
    hammerSound();

    setTimeout(() => {
        hammer.classList.remove('active');
    }, 100);
}