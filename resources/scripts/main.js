const startGameButton = document.getElementById('startGameButton');
const ninjas = document.querySelectorAll('.game__ninja');
const resultLabel = document.getElementById('resultLabel');
const scoreLabel = document.getElementById('scoreLabel');
const gameContainer = document.getElementById('game');

const GAME_MIN_TIME_MILLISECONDS = 500;
const GAME_MAX_TIME_MILLISECONDS = 700;
const GAME_DURATION_MILLISECONDS = 5000;

startGameButton.addEventListener('click', startGame);
ninjas.forEach(ninja => {
    ninja.addEventListener('click', userDidTapNinja)
});


let timeUp = false;
let score = 0;
let lastNinja;

function startGame() {
    resetGame();
    disableElement(startGameButton);
    showRandomNinja();
    showElement(gameContainer);
    setTimeout(() => {
        endGame();
    }, GAME_DURATION_MILLISECONDS);
}

function endGame() {
    timeUp = true;
    resultLabel.textContent = `Twój wynik  ${score}`;
    scoreLabel.textContent = 'Start';
    enableElement(startGameButton);
    hideElement(gameContainer);
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
    if (ninja === lastNinja) {
        return getRandomNinja();
    }
    lastNinja = ninja;
    return ninja;
}

function userDidTapNinja() {
    score += 1;
    this.classList.remove('up');
    scoreLabel.textContent = score;
}

function disableElement(element) {
    element.classList.add('disable-element');
}

function enableElement(element) {
    element.classList.remove('disable-element');
}

function resetGame() {
    scoreLabel.textContent = 0;
    resultLabel.textContent = "";
    timeUp = false;
    score = 0;
}

function showElement(element) {
    element.classList.add('show-element');
}

function hideElement(element) {
    element.classList.remove('show-element');
}