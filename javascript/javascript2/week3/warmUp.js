// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(afterSeconds, 2500)

function afterSeconds() {
    console.log('Called after 2.5 seconds')
}

// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the
//    stringToLog after delay seconds. Call the function you have created with some different arguments.

function logOutWithDelay(delay, stringToLog) {
    function stringToLogFunction() {
        console.log(stringToLog)
    }
    delayWithSeconds = delay * 1000
    setTimeout(stringToLogFunction, delayWithSeconds)
}

logOutWithDelay(3, 'This string logged after 3 seconds')
logOutWithDelay(5, 'This string logged after 5 seconds')

// 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
//    Called after 5 seconds 5 seconds after the button is clicked.

const button = document.getElementById('clickButton')

button.addEventListener('click', () => {
    logOutWithDelay(5, 'This string logged after 5 seconds')
})


// 4. Create two functions and assign them to two different variables. One function logs out Earth,
//    the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction.
//    The only thing the third function should do is call the provided parameter function. Try call the third function
//    once with the Earth function and once with the Saturn function.

function earthLogger() {
    console.log('Earth')
}

function saturnLogger() {
    console.log('Saturn')
}

function planetLogFunction(functionForRun) {
    const result = functionForRun()
    return result
}

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

// 5. Create a button with the text called "Log location". When this button is clicked the location
//    (latitude, longitude) of the user should be logged out using this browser api
// 6. Optional Now show that location on a map using fx the Google maps api

const locationButton = document.getElementById('locationButton')
const status = document.querySelector('#status')
const logs = document.querySelector('#linkAndLogs')

function getLatitudeLongitude() {
    logs.href = '';
    logs.textContent = '';

    function confirmed(location) {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude

        status.textContent = '';
        logs.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        logs.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location'
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    }
    else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(confirmed, error);
    }
}

locationButton.addEventListener('click', getLatitudeLongitude)

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function
//    should wait delay seconds and then call the provided callback function. Try and call this function with different
//    delays and different callback functions

function runAfterDelay(delay, callbacks) {
    setTimeout(callbacks, delay * 1000)
}

runAfterDelay(3, () => {
    console.log('This string logged after 3 seconds')
})

function runAfterDelay2(delay, callbacks) {
    const logOut = () => console.log(callbacks)
    setTimeout(logOut, delay * 1000)
}

runAfterDelay2(5, 'This string logged after 5 seconds')


// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double
//    click has been detected, log out the text: "double click!"

const html = document.querySelector('html')

function dblclick() {
    console.log('Double clicked')
}

html.addEventListener('dblclick', dblclick)

// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke 
//    - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function
//    that should log out a funny joke. And vice versa.

const funnyJokes = ['Q: What do you call sad coffee? A: Despresso.', "Q: What's the best Beatles song? A: Latte Be!", "Q: Why do they call coffee mud? A: Because it was ground a couple of minutes ago.", "Q: How are coffee beans like kids? A: They're always getting grounded!", "Q: What's it called when you steal someone's coffee? A: Mugging!", "Q: How does a tech guy drink coffee? A: He installs Java!", "Q: How did the hipster burn his tongue? A: He drank his coffee before it was cool.", "Q: Why are Italians so good at making coffee? A: Because they know how to espresso themselves.", "Q: How are coffee beans like kids? A: They're always getting grounded!", "If the local coffee shop has awarded you 'Employee of the Month' and you don't even work there, you may be drinking too much coffee."]
const badJokes = ["I saw this advert in a window that said: “Television for sale, £1, volume stuck on full.” I thought, “I can’t turn that down.”", "What's Forrest Gump's password? 1forrest1", "What's Harry Potter's favourite method of getting down a hill? Walking... JK, Rolling.", "What did the clock do when it was hungry? It went back four seconds.", "What has two legs and bleeds? Half a cat.", "What did Batman say to Robin before they got in the car? Robin, get in the car.", "Why do scuba divers fall backwards off of the boat? Because if they fell forward, they'd still be on the boat.", "Did you hear about the two thieves who stole a calendar? They each got six months.", 'And so the Lord said unto John, "Come forth; and receive eternal life." But John came fifth and won a toaster.', 'I still remember the last thing my grandfather said before kicking the bucket: "Hey, wanna see how far I can kick this bucket?"']

const random = Math.floor(Math.random() * 10)

function logFunnyJoke(){
    console.log(funnyJokes[random])
}

function logBadJoke(){
    console.log(badJokes[random])
}

function jokeCreator(shouldTellFunnyJoke) {
    if(shouldTellFunnyJoke){
        logFunnyJoke()
    }
    else{
        logBadJoke()
    }
}

jokeCreator(true)
jokeCreator(false)

// 9. Additional (I want to do for try)

const jokesButton = document.getElementById('jokesButton')
const jokeParagraph = document.getElementById('jokes')

function jokeCreator2() {
    const shouldTellFunnyJoke2 = confirm('Do you want funny joke ?')
    const random2 = Math.floor(Math.random() * 10)
    if (shouldTellFunnyJoke2) {
        jokeParagraph.textContent = funnyJokes[random2]
    }
    else {
        jokeParagraph.textContent = badJokes[random2]
    }
}

jokesButton.addEventListener('click', jokeCreator2)


// Function as a variable

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const functionArray = [function(){console.log('Function One')},function(){console.log('Function Two')},function (){console.log('Function Three')}]

functionArray.forEach(item => item())

// Create a function as a const and try creating a function normally. Call both functions.

function logOutConst(wordToWrite){console.log(`${wordToWrite} Functions !`)}

const logOutConstFunction = () => logOutConst('GoodBye')

logOutConst('Hello')
logOutConstFunction()

// Create an object that has a key whose value is a function. Try calling this function.
const functionObject = {
    key:() => {console.log('Hello Objects !')}
}

functionObject.key()

