const startGameButton = document.getElementById('startGameButton');
const ninjas = document.querySelectorAll('.game__ninja');

const GAME_MIN_TIME_MILLISECONDS = 500;
const GAME_MAX_TIME_MILLISECONDS = 700;
const GAME_DURATION_MILLISECONDS = 5000;

startGameButton.addEventListener('click', startGame);
let timeUp = false;

function startGame() {
    showRandomNinja();
    setTimeout(() => {
        endGame();
    }, GAME_DURATION_MILLISECONDS);
}

function endGame() {
    timeUp = true;
}

function showRandomNinja() {
    const ninja = getRandomNinja();
    ninja.classList.add('up');
    const randomTime = getRandomNumber(GAME_MIN_TIME_MILLISECONDS, GAME_MAX_TIME_MILLISECONDS);
    setTimeout(() => {
        ninja.classList.remove('up');
        if (!timeUp) {
            showRandomNinja();
        }
    }, randomTime);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNinja() {
    const randomIndex = getRandomNumber(0, ninjas.length - 1);
    const ninja = ninjas[randomIndex];
    return ninja;
}