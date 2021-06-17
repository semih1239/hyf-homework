let keyS = 0
let keyL = 0

const countS = document.getElementById('countS')
const countL = document.getElementById('countL')

const startButton = document.getElementById('startButton')
const restartButton = document.getElementById('restartButton')

const time = document.getElementById('seconds')


function allSolition(){
        keyS = 0
        keyL = 0
        countS.textContent = 0
        countL.textContent = 0
        function Count(event) {
            if (event.key === 's') {
                keyS++
                countS.textContent = keyS
            }
            if (event.key === 'l') {
                keyL++
                countL.textContent = keyL
            }
        }
        window.addEventListener('keydown', Count)
        function removeFunction() {
            if (keyS > keyL) {
                countS.textContent = 'Winner winner chicken dinner !!!'
            }
            else if (keyL > keyS) {
                countL.textContent = 'Winner winner chicken dinner !!!'
            }
            else {
                countS.textContent = 'Winner winner half chicken dinner !!!'
                countL.textContent = 'Winner winner half chicken dinner !!!'
            }
            window.removeEventListener('keydown', Count)
        }
        const timeWithSeconds = time.value * 1000
    
        setTimeout(removeFunction, timeWithSeconds)
}

startButton.addEventListener('click', allSolition)
restartButton.addEventListener('click', allSolition)
