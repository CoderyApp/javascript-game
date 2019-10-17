const startGameButton = document.getElementById('startGameButton');
const ninjas = document.querySelectorAll('.game__ninja');

startGameButton.addEventListener('click', startGame);

function startGame() {
    showRandomNinja();
}

function showRandomNinja() {
    const ninja = ninjas[0]
    ninja.classList.add('up');
    const randomTime = 1000
    setTimeout(() => {
        ninja.classList.remove('up');
    }, randomTime);
}