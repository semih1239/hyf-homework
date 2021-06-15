// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(afterSeconds, 2500)

function afterSeconds() {
    console.log('Called after 2.5 seconds')
}

// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function logOutWithDelay(delay, stringToLog) {
    function stringToLogFunction() {
        console.log(stringToLog)
    }
    delayWithSeconds = delay * 1000
    setTimeout(stringToLogFunction, delayWithSeconds)
}

logOutWithDelay(3, 'This string logged after 3 seconds')
logOutWithDelay(5, 'This string logged after 5 seconds')

// 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const button = document.getElementById('clickButton')
const buttonFunction = logOutWithDelay(5, 'This string logged after 5 seconds')

button.addEventListener('click', buttonFunction)
