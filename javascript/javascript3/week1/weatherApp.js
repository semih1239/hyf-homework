// All Buttons from html

const input = document.querySelector('input')
const buttonWithCity = document.querySelector('#cityButton')
const locationButton = document.getElementById('locationButton')
const saveLocationButton = document.getElementById('saveButton')
const deleteLocationButton = document.getElementById('deleteLocationButton')

// All class or id's from html

const city = document.querySelector('#cityText')
const temprature = document.getElementById('tempratureText')
const feelsLike = document.getElementById('feelsLike')
const minMaxTemp = document.getElementById('tempMinMax')
const pressure = document.getElementById('pressure')
const img = document.querySelector('img')
const wind = document.getElementById('windSpeed')
const cloud = document.getElementById('clouds')
const sunTimes = document.getElementById('sunRiseSet')
const mapDiv = document.getElementById('mapLocation')
const mapLocation = document.querySelector('iframe')

// Save Location and Delete Location Events

saveLocationButton.addEventListener('click', () => {
    localStorage.setItem('city', `${input.value}`)
    location.reload()
})

deleteLocationButton.addEventListener('click', () => {
    localStorage.removeItem('city')
    location.reload()
})

// when you save your location, page is automatically opening with your location

if (localStorage.getItem('city') != undefined) {
    function displayTheDatawithCityWithAutomatic() {
        const cityName = localStorage.getItem('city')

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=755f8fac4695a2c84fd8f2e3f6e3e671`)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod == 200) {
                    informationwithCity(data)
                }
                else {
                    errorText()
                }
            })
    }
    displayTheDatawithCityWithAutomatic()
}


// For errors
function errorText() {
    city.innerHTML = 'Please write a correct city!!!'
}

// With city and with location button events

buttonWithCity.addEventListener('click', displayTheDatawithCity)

locationButton.addEventListener('click', getLatitudeLongitude)

// Get result with city name function

function displayTheDatawithCity() {
    const cityName = input.value.toLowerCase()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=755f8fac4695a2c84fd8f2e3f6e3e671`)
        .then((res) => res.json())
        .then((data) => {
            if (data.cod == 200) {
                informationwithCity(data)
            }
            else {
                errorText()
            }
        })
}

// Html informations part with city name event

function informationwithCity(data) {
    city.innerHTML = `City : ${data.name}`

    temprature.innerHTML = `${Math.floor(data.main.temp - 273.15)} °C`

    feelsLike.innerHTML = `<b>Feels : ${Math.floor(data.main.feels_like - 273.15)} °C </b>`

    minMaxTemp.innerHTML = `<b>Max Temp : ${Math.floor(data.main.temp_max - 273.15)} °C - Min Temp: ${Math.floor(data.main.temp_min - 273.15)} °C </b>`

    pressure.innerHTML = `<b>Pressure : ${data.main.pressure} hPa - Humidity: ${data.main.humidity}% </b>`

    img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    wind.innerHTML = `Wind Speed : ${data.wind.speed} m/s - Wind Degree : ${data.wind.deg}`

    cloud.innerHTML = `Clouds : ${data.clouds.all} %`

    sunTimes.innerHTML = `Sunrise Time: ${sun(data.sys.sunrise)} - Sunset Time : ${sun(data.sys.sunset)}`

    mapLocation.style.visibility = 'visible'
    const srcLoc = `https://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&z=15&output=embed`
    mapLocation.src = srcLoc
}

// Get results with automatically latitude and longitude

function getLatitudeLongitude() {
    function confirmed(location) {
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=755f8fac4695a2c84fd8f2e3f6e3e671`)
            .then(res => res.json())
            .then((data) => {
                if (data.cod != 400) {
                    informationwithLocation(data)
                }
                else {
                    error()
                    console.log(data)
                }
            })
    }

    function error() {
        city.textContent = 'Unable to retrieve your location'
    }

    if (!navigator.geolocation) {
        city.textContent = 'Geolocation is not supported by your browser';
    }
    else {
        city.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(confirmed, error);
    }
}

// Html information part with Latitude and Longitude automatically

function informationwithLocation(data) {
    city.innerHTML = `Timezone : ${data.timezone}`

    temprature.innerHTML = `${Math.floor(data.current.temp - 273.15)} °C </b>`

    feelsLike.innerHTML = `<b>Feels : ${Math.floor(data.current.feels_like - 273.15)} °C </b>`

    pressure.innerHTML = `<b>Pressure : ${data.current.pressure} hPa - Humidity: ${data.current.humidity}% </b>`

    img.src = `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`

    wind.innerHTML = `Wind Speed : ${data.current.wind_speed} m/s - Wind Degree : ${data.current.wind_deg}`

    cloud.innerHTML = `Clouds : ${data.current.clouds} %`

    sunTimes.innerHTML = `Sunrise Time: ${sun(data.current.sunrise)} - Sunset Time : ${sun(data.current.sunset)}`

    mapLocation.style.visibility = 'visible'
    const srcLoc = `https://maps.google.com/maps?q=${data.lat},${data.lon}&z=15&output=embed`
    mapLocation.src = srcLoc
}

// calculate sunrise and sunset times function

const sun = (time) => {
    const date = new Date(time * 1000);
    return `${date.getHours()}:${date.getMinutes()}`
}