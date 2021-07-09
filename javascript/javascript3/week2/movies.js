// Movies exercise

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then((data) => {
        const badMovies = data.filter(element => element.rating < 6)

        const oldestMovies = badMovies.filter(element => element.year < 2000)
        console.log(badMovies)
        console.log(oldestMovies)

    })

// Promise that resolves after set time

function getDelayPromiseFunction(resolveAfter) {
    return new Promise((resolve, reject) => {
        boolValue = true
        setTimeout(() => {
            if (boolValue) {
                resolve()
            }
            else {
                reject('BoolValue is False')
            }
        }, resolveAfter * 1000);
    })
}

getDelayPromiseFunction(8).then(() => {console.log('This text delayed 8 seconds')})

async function getDelayWithAsync(resolveAfter) {
    await getDelayPromiseFunction(resolveAfter)
}

getDelayWithAsync(3).then(() => {
    console.log('I am called asynchronously')
})
    .catch((error) => console.log(error))

// Rewrite time

function setTimeoutPromise(delayTimeWithSeconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delayTimeWithSeconds)
        }, delayTimeWithSeconds * 1000);
    })
}
setTimeoutPromise(3).then((delayTimeWithSeconds) => {
    console.log(`Called after ${delayTimeWithSeconds} seconds`)
})

function getMyLocation() {
    return new Promise((resolve, reject) => {
        function success(position) {
            const latitude = position.coords.latitude
            resolve(latitude)
        }
        function error(error) {
            reject(error)
        }
        navigator.geolocation.getCurrentPosition(success, error)
    })

}

getMyLocation()
    .then((latitude) => {
        console.log("Position: " , latitude)
    })
    .catch((error) => console.log('ERROR: ', error.message))

// Fetching and waiting

function getYesNoFetch() {
    return fetch("https://yesno.wtf/api")
        .then(res => res.json())
}

function fetchAndWaitPromiseFunction() {
    return new Promise(() => {
        setTimeout(() => {
            getYesNoFetch()
                .then((data) => console.log(data))
        }, 3000)
    })
}
fetchAndWaitPromiseFunction()

// With Async & await

async function asyncFetchAndWaitFunction(){
    const getFetch = await setTimeout(() => {
        getYesNoFetch().then((data) => console.log(data))
    }, 3000)
    return getFetch
}

asyncFetchAndWaitFunction()

