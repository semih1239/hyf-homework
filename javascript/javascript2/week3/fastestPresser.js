let countS = 0
let countL = 0

const countSParagraph = document.getElementById('countS')
const countLParagraph = document.getElementById('countL')

const startButton = document.getElementById('startButton')
const restartButton = document.getElementById('restartButton')

const time = document.getElementById('seconds')


let confetti;

function allSolition() {

    let confettiSettings;
    countS = 0
    countL = 0
    countSParagraph.textContent = 0
    countLParagraph.textContent = 0

    function Count(event) {
        if (event.key === 's') {
            countS++
            countSParagraph.textContent = countS
        }
        if (event.key === 'l') {
            countL++
            countLParagraph.textContent = countL
        }
    }
    window.addEventListener('keydown', Count)
    function decideWinner() {
        if (countS > countL) {
            countSParagraph.textContent = 'Winner winner chicken dinner !!!'

            confettiSettings = { target: "canvasS", size: 2 };
            confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }
        else if (countL > countS) {
            countLParagraph.textContent = 'Winner winner chicken dinner !!!'

            confettiSettings = { target: "canvasL", size: 2 };
            confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }
        else {
            countSParagraph.textContent = 'Winner winner half chicken dinner !!!'
            countLParagraph.textContent = 'Winner winner half chicken dinner !!!'
        }
        window.removeEventListener('keydown', Count)
    }
    const timeWithSeconds = time.value * 1000

    setTimeout(decideWinner, timeWithSeconds)
    startButton.remove()
}

function clearConfetti() {
    confetti.clear()
}


startButton.addEventListener('click', allSolition)
restartButton.addEventListener('click', () => {
    allSolition()
    clearConfetti()
})

